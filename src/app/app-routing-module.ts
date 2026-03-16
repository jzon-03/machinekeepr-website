import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page').then((m) => m.HomePage)
  },
  {
    path: 'product',
    loadComponent: () => import('./pages/product-page').then((m) => m.ProductPage)
  },
  {
    path: 'use-cases',
    loadComponent: () => import('./pages/use-cases-page').then((m) => m.UseCasesPage)
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing-page').then((m) => m.PricingPage)
  },
  {
    path: 'docs',
    loadComponent: () => import('./pages/docs-page').then((m) => m.DocsPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-page').then((m) => m.ContactPage)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
