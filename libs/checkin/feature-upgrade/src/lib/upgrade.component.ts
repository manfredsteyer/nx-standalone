import { Component, OnInit } from '@angular/core';
import { UpgradeFacade } from '@angular-architects/checkin/domain';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CommonModule
  ],
  selector: 'checkin-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss'],
})
export class UpgradeComponent implements OnInit {
  flightClassList$ = this.upgradeFacade.flightClassList$;

  constructor(private upgradeFacade: UpgradeFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.upgradeFacade.load();
  }
}
