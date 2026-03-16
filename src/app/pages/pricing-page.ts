import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing-page',
  imports: [RouterLink],
  templateUrl: './pricing-page.html',
  styleUrl: './pricing-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingPage {}
