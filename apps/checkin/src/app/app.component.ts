import { ManageComponent } from '@angular-architects/checkin/feature-manage';
import { UpgradeComponent } from '@angular-architects/checkin/feature-upgrade';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ManageComponent,
    UpgradeComponent,
  ],
  selector: 'angular-architects-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'checkin';
}
