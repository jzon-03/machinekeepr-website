import { Routes } from '@angular/router';
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_ROBOTS,
  ORGANIZATION_SCHEMA,
  SEO_BASE_URL,
  WEBSITE_SCHEMA,
  buildAbsoluteUrl,
  buildBreadcrumbSchema,
  type SeoConfig,
  type SeoStructuredData
} from './config/seo';

const homeSeo: SeoConfig = {
  title: 'On-Prem Machine Monitoring Software for SMB Manufacturers | MachineKeepr',
  description:
    'MachineKeepr combines a ready-to-deploy Raspberry Pi edge device with on-prem software for real-time machine status visibility, shop-floor dashboards, and secure local data control.',
  path: '/',
  keywords: [
    'on-prem machine monitoring',
    'manufacturing dashboard',
    'shop floor visibility',
    'edge monitoring device',
    'machine status software'
  ],
  image: DEFAULT_OG_IMAGE,
  imageAlt: 'MachineKeepr dashboard displayed on an edge device screenshot',
  robots: DEFAULT_ROBOTS,
  structuredData: [
    ORGANIZATION_SCHEMA,
    WEBSITE_SCHEMA,
    buildBreadcrumbSchema([{ name: 'Home', path: '/' }]),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'MachineKeepr home',
      url: SEO_BASE_URL,
      description:
        'MachineKeepr provides on-prem machine monitoring, dashboards, and edge visibility for SMB manufacturers.',
      isPartOf: {
        '@type': 'WebSite',
        name: 'MachineKeepr',
        url: SEO_BASE_URL
      }
    } satisfies SeoStructuredData
  ]
};

const productSeo: SeoConfig = {
  title: 'MachineKeepr-D01-32 Edge Terminal for Shop Floor Visibility | MachineKeepr',
  description:
    'Explore the MachineKeepr-D01-32, a 7-inch Raspberry Pi 5 edge terminal with MachineKeepr preloaded for on-prem machine monitoring and local operations dashboards.',
  path: '/product',
  keywords: [
    'MachineKeepr-D01-32',
    'Raspberry Pi 5 industrial display',
    'edge terminal',
    'shop floor dashboard hardware',
    'machine monitoring terminal'
  ],
  image: DEFAULT_OG_IMAGE,
  imageAlt: 'MachineKeepr product dashboard view',
  robots: DEFAULT_ROBOTS,
  type: 'product',
  structuredData: [
    ORGANIZATION_SCHEMA,
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Product', path: '/product' }
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'MachineKeepr-D01-32',
      description:
        'A 7-inch edge terminal built on Raspberry Pi 5 hardware with MachineKeepr preloaded for on-prem machine monitoring.',
      brand: {
        '@type': 'Brand',
        name: 'MachineKeepr'
      },
      manufacturer: {
        '@type': 'Organization',
        name: 'MachineKeepr',
        url: SEO_BASE_URL
      },
      category: 'Industrial edge monitoring terminal',
      image: [buildAbsoluteUrl('/machinekeepr_screenshot.png')],
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Display',
          value: '7-inch Waveshare all-in-one display'
        },
        {
          '@type': 'PropertyValue',
          name: 'Compute base',
          value: 'Raspberry Pi 5'
        },
        {
          '@type': 'PropertyValue',
          name: 'Deployment model',
          value: 'Edge device with on-prem server service'
        }
      ]
    } satisfies SeoStructuredData
  ]
};

const useCasesSeo: SeoConfig = {
  title: 'Machine Monitoring Use Cases for Manufacturing and Maintenance | MachineKeepr',
  description:
    'See how MachineKeepr supports manufacturing cell monitoring, maintenance response boards, and local operations control rooms with on-prem visibility tools.',
  path: '/use-cases',
  keywords: [
    'machine monitoring use cases',
    'manufacturing cell monitoring',
    'maintenance response board',
    'operations control room dashboard',
    'factory visibility software'
  ],
  image: DEFAULT_OG_IMAGE,
  imageAlt: 'MachineKeepr manufacturing monitoring interface',
  robots: DEFAULT_ROBOTS,
  structuredData: [
    ORGANIZATION_SCHEMA,
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Use Cases', path: '/use-cases' }
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'MachineKeepr use cases',
      url: buildAbsoluteUrl('/use-cases'),
      description:
        'Practical use cases for deploying MachineKeepr across manufacturing, maintenance, and local operations teams.'
    } satisfies SeoStructuredData
  ]
};

const pricingSeo: SeoConfig = {
  title: 'Machine Monitoring Pricing for Edge Devices and On-Prem Software | MachineKeepr',
  description:
    'Review starter pricing for MachineKeepr hardware and annual on-prem software service, including single-site packs, operations bundles, and custom deployments.',
  path: '/pricing',
  keywords: [
    'machine monitoring pricing',
    'on-prem software pricing',
    'manufacturing dashboard cost',
    'edge monitoring device pricing',
    'MachineKeepr quote'
  ],
  image: DEFAULT_OG_IMAGE,
  imageAlt: 'MachineKeepr pricing options for deployments',
  robots: DEFAULT_ROBOTS,
  structuredData: [
    ORGANIZATION_SCHEMA,
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Pricing', path: '/pricing' }
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'MachineKeepr pricing',
      url: buildAbsoluteUrl('/pricing'),
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Starter Site',
          price: '1490',
          priceCurrency: 'USD',
          description: 'One MachineKeepr-D01-32 device with a 1-year on-prem service license.'
        },
        {
          '@type': 'Offer',
          name: 'Operations Pack',
          price: '4290',
          priceCurrency: 'USD',
          description: 'Three devices with a 1-year on-prem service license and priority onboarding.'
        },
        {
          '@type': 'Offer',
          name: 'Custom Deployment',
          description: 'Custom pricing for larger deployments, integrations, and rollout planning.'
        }
      ]
    } satisfies SeoStructuredData
  ]
};

const docsSeo: SeoConfig = {
  title: 'Deployment and Integration Documentation | MachineKeepr',
  description:
    'Read MachineKeepr deployment docs for quick start, on-prem server setup, machine data integration, and troubleshooting guidance.',
  path: '/docs',
  keywords: [
    'MachineKeepr documentation',
    'on-prem server setup guide',
    'machine monitoring integration docs',
    'deployment checklist',
    'industrial dashboard troubleshooting'
  ],
  image: DEFAULT_OG_IMAGE,
  imageAlt: 'MachineKeepr documentation and deployment resources',
  robots: DEFAULT_ROBOTS,
  structuredData: [
    ORGANIZATION_SCHEMA,
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Docs', path: '/docs' }
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'MachineKeepr documentation',
      url: buildAbsoluteUrl('/docs'),
      description:
        'Documentation covering MachineKeepr quick start, on-prem server setup, integrations, and troubleshooting.'
    } satisfies SeoStructuredData
  ]
};

const contactSeo: SeoConfig = {
  title: 'Request a Demo for On-Prem Machine Monitoring | MachineKeepr',
  description:
    'Contact MachineKeepr to request a demo, discuss site rollout plans, and get pricing for on-prem machine monitoring hardware and software.',
  path: '/contact',
  keywords: [
    'request machine monitoring demo',
    'contact industrial software sales',
    'on-prem dashboard consultation',
    'MachineKeepr quote',
    'manufacturing visibility demo'
  ],
  image: DEFAULT_OG_IMAGE,
  imageAlt: 'Request a MachineKeepr demo and pricing consultation',
  robots: DEFAULT_ROBOTS,
  structuredData: [
    ORGANIZATION_SCHEMA,
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' }
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact MachineKeepr',
      url: buildAbsoluteUrl('/contact'),
      description:
        'Request a demo, get deployment guidance, and contact MachineKeepr for on-prem machine monitoring solutions.',
      mainEntity: {
        '@type': 'Organization',
        name: 'MachineKeepr',
        email: 'info@sharpfloornc.com',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'info@sharpfloornc.com',
          availableLanguage: ['English']
        }
      }
    } satisfies SeoStructuredData
  ]
};

export const routes: Routes = [
  {
    path: '',
    title: homeSeo.title,
    data: { seo: homeSeo },
    loadComponent: () => import('./pages/home-page').then((m) => m.HomePage)
  },
  {
    path: 'product',
    title: productSeo.title,
    data: { seo: productSeo },
    loadComponent: () => import('./pages/product-page').then((m) => m.ProductPage)
  },
  {
    path: 'use-cases',
    title: useCasesSeo.title,
    data: { seo: useCasesSeo },
    loadComponent: () => import('./pages/use-cases-page').then((m) => m.UseCasesPage)
  },
  {
    path: 'pricing',
    title: pricingSeo.title,
    data: { seo: pricingSeo },
    loadComponent: () => import('./pages/pricing-page').then((m) => m.PricingPage)
  },
  {
    path: 'docs',
    title: docsSeo.title,
    data: { seo: docsSeo },
    loadComponent: () => import('./pages/docs-page').then((m) => m.DocsPage)
  },
  {
    path: 'contact',
    title: contactSeo.title,
    data: { seo: contactSeo },
    loadComponent: () => import('./pages/contact-page').then((m) => m.ContactPage)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
