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
  title: 'Cloud-Based SaaS Machine Monitoring Software for SMB Manufacturers | MachineKeepr',
  description:
    'MachineKeepr provides a cloud-based SaaS platform for real-time machine status visibility, shop-floor dashboards, and secure operational data access.',
  path: '/',
  keywords: [
    'cloud-based SaaS machine monitoring',
    'manufacturing dashboard',
    'shop floor visibility',
    'machine status software',
    'production visibility platform'
  ],
  image: DEFAULT_OG_IMAGE,
  imageAlt: 'MachineKeepr dashboard screenshot',
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
        'MachineKeepr provides cloud-based SaaS machine monitoring, dashboards, and edge visibility for SMB manufacturers.',
      isPartOf: {
        '@type': 'WebSite',
        name: 'MachineKeepr',
        url: SEO_BASE_URL
      }
    } satisfies SeoStructuredData
  ]
};

const productSeo: SeoConfig = {
  title: 'MachineKeepr SaaS Monitoring Platform for Shop Floor Visibility | MachineKeepr',
  description:
    'Explore MachineKeepr, a cloud-based SaaS monitoring platform for live machine status, production visibility, and operations dashboards.',
  path: '/product',
  keywords: [
    'MachineKeepr SaaS platform',
    'shop floor dashboard software',
    'production visibility platform',
    'machine monitoring dashboard',
    'factory operations software'
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
      name: 'MachineKeepr SaaS Monitoring Platform',
      description:
        'A cloud-based SaaS platform for plant visibility, real-time machine monitoring, and operations dashboards.',
      brand: {
        '@type': 'Brand',
        name: 'MachineKeepr'
      },
      manufacturer: {
        '@type': 'Organization',
        name: 'MachineKeepr',
        url: SEO_BASE_URL
      },
      category: 'Industrial monitoring software',
      image: [buildAbsoluteUrl('/machinekeepr_screenshot.png')],
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Deployment model',
          value: 'Cloud-based SaaS service'
        },
        {
          '@type': 'PropertyValue',
          name: 'Access model',
          value: 'Browser-based dashboards and live shop-floor visibility'
        }
      ]
    } satisfies SeoStructuredData
  ]
};

const useCasesSeo: SeoConfig = {
  title: 'Machine Monitoring Use Cases for Manufacturing and Maintenance | MachineKeepr',
  description:
    'See how MachineKeepr supports manufacturing cell monitoring, maintenance response boards, and local operations control rooms with cloud-based SaaS visibility tools.',
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
  title: 'Machine Monitoring Pricing for Cloud-Based SaaS | MachineKeepr',
  description:
    'Review pricing for MachineKeepr cloud-based SaaS plans, including single-site subscriptions, operations bundles, and custom deployments.',
  path: '/pricing',
  keywords: [
    'machine monitoring pricing',
    'cloud-based SaaS pricing',
    'manufacturing dashboard cost',
    'production visibility software pricing',
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
          description: 'A 1-year MachineKeepr cloud-based SaaS subscription for a single site.'
        },
        {
          '@type': 'Offer',
          name: 'Operations Pack',
          price: '4290',
          priceCurrency: 'USD',
          description: 'A multi-site MachineKeepr SaaS subscription with priority onboarding.'
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
    'Read MachineKeepr deployment docs for quick start, cloud deployment setup, machine data integration, and troubleshooting guidance.',
  path: '/docs',
  keywords: [
    'MachineKeepr documentation',
    'cloud deployment setup guide',
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
        'Documentation covering MachineKeepr quick start, cloud deployment setup, integrations, and troubleshooting.'
    } satisfies SeoStructuredData
  ]
};

const contactSeo: SeoConfig = {
  title: 'Request a Demo for Cloud-Based SaaS Machine Monitoring | MachineKeepr',
  description:
    'Contact MachineKeepr to request a demo, discuss site rollout plans, and get pricing for cloud-based SaaS machine monitoring hardware and software.',
  path: '/contact',
  keywords: [
    'request machine monitoring demo',
    'contact industrial software sales',
    'cloud-based SaaS dashboard consultation',
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
        'Request a demo, get deployment guidance, and contact MachineKeepr for cloud-based SaaS machine monitoring solutions.',
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

const privacyPolicySeo: SeoConfig = {
  title: 'Privacy Policy | MachineKeepr',
  description:
    'Read the privacy policy for MachineKeepr, detailing how we handle data for cloud-based SaaS machine monitoring solutions.',
  path: '/privacy-policy',
  keywords: [
    'privacy policy',
    'data protection',
    'cloud-based SaaS machine monitoring privacy',
    'MachineKeepr privacy'
  ],
  image: DEFAULT_OG_IMAGE,
  imageAlt: 'MachineKeepr privacy policy',
  robots: DEFAULT_ROBOTS,
  structuredData: [
    ORGANIZATION_SCHEMA,
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy-policy' }
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'MachineKeepr Privacy Policy',
      url: buildAbsoluteUrl('/privacy-policy'),
      description:
        'Read the privacy policy for MachineKeepr, detailing how we handle data for cloud-based SaaS machine monitoring solutions.'
    } satisfies SeoStructuredData
  ]
};

const termsOfServiceSeo: SeoConfig = {
  title: 'Terms of Service | MachineKeepr',
  description:
    'Read the terms of service for MachineKeepr, outlining the rules and regulations for using our cloud-based SaaS machine monitoring solutions.',
  path: '/terms-of-service',
  keywords: [
    'terms of service',
    'user agreement',
    'cloud-based SaaS machine monitoring terms',
    'MachineKeepr terms'
  ],
  image: DEFAULT_OG_IMAGE,
  imageAlt: 'MachineKeepr terms of service',
  robots: DEFAULT_ROBOTS,
  structuredData: [
    ORGANIZATION_SCHEMA,
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Terms of Service', path: '/terms-of-service' }
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'MachineKeepr Terms of Service',
      url: buildAbsoluteUrl('/terms-of-service'),
      description:
        'Read the terms of service for MachineKeepr, outlining the rules and regulations for using our cloud-based SaaS machine monitoring solutions.'
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
  // {
  //   path: 'product',
  //   title: productSeo.title,
  //   data: { seo: productSeo },
  //   loadComponent: () => import('./pages/product-page').then((m) => m.ProductPage)
  // },
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
    path: 'privacy-policy',
    title: privacyPolicySeo.title,
    data: { seo: privacyPolicySeo },
    loadComponent: () => import('./pages/privacy-policy/privacy-policy').then((m) => m.PrivacyPolicy)
  },
  {
    path: 'terms-of-service',
    title: termsOfServiceSeo.title,
    data: { seo: termsOfServiceSeo },
    loadComponent: () => import('./pages/terms-of-service/terms-of-service').then((m) => m.TermsOfService)
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
