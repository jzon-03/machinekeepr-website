import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_ROBOTS,
  DEFAULT_SEO,
  buildAbsoluteUrl,
  type SeoConfig,
  type SeoStructuredData
} from '../config/seo';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  updateSeo(config: SeoConfig): void {
    const resolvedConfig = { ...DEFAULT_SEO, ...config };
    const canonicalUrl = buildAbsoluteUrl(resolvedConfig.path);
    const imageUrl = buildAbsoluteUrl(resolvedConfig.image ?? DEFAULT_OG_IMAGE);
    const robots = resolvedConfig.robots ?? DEFAULT_ROBOTS;
    const type = resolvedConfig.type ?? 'website';
    const keywords = resolvedConfig.keywords?.join(', ');

    this.title.setTitle(resolvedConfig.title);
    this.updateCanonical(canonicalUrl);

    this.updateNameTag('description', resolvedConfig.description);
    this.updateNameTag('robots', robots);
    this.updateNameTag('author', 'MachineKeepr');

    if (keywords) {
      this.updateNameTag('keywords', keywords);
    }

    this.updatePropertyTag('og:site_name', 'MachineKeepr');
    this.updatePropertyTag('og:locale', 'en_US');
    this.updatePropertyTag('og:title', resolvedConfig.title);
    this.updatePropertyTag('og:description', resolvedConfig.description);
    this.updatePropertyTag('og:type', type);
    this.updatePropertyTag('og:url', canonicalUrl);
    this.updatePropertyTag('og:image', imageUrl);

    if (resolvedConfig.imageAlt) {
      this.updatePropertyTag('og:image:alt', resolvedConfig.imageAlt);
    }

    this.updateNameTag('twitter:card', 'summary_large_image');
    this.updateNameTag('twitter:title', resolvedConfig.title);
    this.updateNameTag('twitter:description', resolvedConfig.description);
    this.updateNameTag('twitter:image', imageUrl);

    this.updateStructuredData(resolvedConfig.structuredData ?? DEFAULT_SEO.structuredData ?? []);
  }

  private updateCanonical(href: string): void {
    let canonicalLink = this.document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

    if (!canonicalLink) {
      canonicalLink = this.document.createElement('link');
      canonicalLink.rel = 'canonical';
      this.document.head.appendChild(canonicalLink);
    }

    canonicalLink.href = href;
  }

  private updateNameTag(name: string, content: string): void {
    this.meta.updateTag({ name, content }, `name='${name}'`);
  }

  private updatePropertyTag(property: string, content: string): void {
    this.meta.updateTag({ property, content }, `property='${property}'`);
  }

  private updateStructuredData(entries: readonly SeoStructuredData[]): void {
    const existingScripts = this.document.head.querySelectorAll('script[data-seo-managed="true"]');

    existingScripts.forEach((script) => script.remove());

    for (const entry of entries) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset['seoManaged'] = 'true';
      script.text = JSON.stringify(entry);
      this.document.head.appendChild(script);
    }
  }
}