import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { TermsOfService } from './pages/terms-of-service/terms-of-service';

@NgModule({
  imports: [
    BrowserModule,
    App
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
})
export class AppModule { }
