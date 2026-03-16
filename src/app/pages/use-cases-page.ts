import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-use-cases-page',
  templateUrl: './use-cases-page.html',
  styleUrl: './use-cases-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UseCasesPage {}
