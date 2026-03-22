export type SeoStructuredData = Record<string, unknown>;

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  image?: string;
  imageAlt?: string;
  robots?: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: readonly SeoStructuredData[];
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export const SEO_BASE_URL = 'https://www.machinekeepr.com';
export const DEFAULT_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
export const DEFAULT_OG_IMAGE = buildAbsoluteUrl('/machinekeepr_screenshot.png');

export const ORGANIZATION_SCHEMA: SeoStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MachineKeepr',
  url: SEO_BASE_URL,
  logo: buildAbsoluteUrl('/machinekeepr-device.svg'),
  parentOrganization: {
    '@type': 'Organization',
    name: 'Sharp Floor NC LLC',
    url: 'https://sharpfloornc.com'
  }
};

export const WEBSITE_SCHEMA: SeoStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MachineKeepr',
  url: SEO_BASE_URL
};

export const DEFAULT_SEO: SeoConfig = {
  title: 'On-Prem Machine Monitoring Software for SMB Manufacturers | MachineKeepr',
  description:
    'MachineKeepr delivers on-prem machine monitoring with a ready-to-deploy Raspberry Pi edge device, local dashboards, and secure shop-floor visibility for SMB manufacturers.',
  path: '/',
  keywords: [
    'on-prem machine monitoring',
    'edge monitoring device',
    'manufacturing dashboard',
    'shop floor visibility',
    'MachineKeepr'
  ],
  image: DEFAULT_OG_IMAGE,
  imageAlt: 'MachineKeepr machine monitoring dashboard screenshot',
  robots: DEFAULT_ROBOTS,
  type: 'website',
  structuredData: [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, buildBreadcrumbSchema([{ name: 'Home', path: '/' }])]
};

export function buildAbsoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${SEO_BASE_URL}${normalizedPath}`;
}

export function buildBreadcrumbSchema(items: readonly BreadcrumbItem[]): SeoStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: buildAbsoluteUrl(item.path)
    }))
  };
}