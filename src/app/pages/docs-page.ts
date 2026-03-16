import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-docs-page',
  templateUrl: './docs-page.html',
  styleUrl: './docs-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocsPage {}
