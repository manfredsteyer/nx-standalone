import { CheckinComponent } from '@angular-architects/luggage/feature-checkin';
import { ReportLossComponent } from '@angular-architects/luggage/feature-report-loss';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'angular-architects-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    CheckinComponent,
    ReportLossComponent
  ]
})
export class AppComponent {
  title = 'luggage';
}
