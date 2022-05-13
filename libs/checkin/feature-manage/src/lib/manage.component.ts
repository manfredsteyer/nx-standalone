import { Component, OnInit } from '@angular/core';
import { ManageFacade } from '@angular-architects/checkin/domain';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CommonModule
  ],
  selector: 'checkin-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  ticketList$ = this.manageFacade.ticketList$;

  constructor(private manageFacade: ManageFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.manageFacade.load();
  }
}
