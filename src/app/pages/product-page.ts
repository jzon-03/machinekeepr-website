import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  imports: [NgOptimizedImage],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPage {}
