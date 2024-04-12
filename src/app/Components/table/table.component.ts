import { Component, OnDestroy, OnInit } from '@angular/core';
import { faArrowDownUpAcrossLine, faArrowLeft, faArrowRight, faArrows, faArrowsAlt, faArrowsAltH, faArrowsH, faArrowsUpDown, faArrowsV, faCoffee, faExpandArrowsAlt, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import { SortEvent } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ITicket } from 'src/app/Models/ITicket';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnDestroy {
  tickets!: ITicket[];
  subs: Subscription[];
  //icons
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight
  faArrowsUpDown = faArrowDownUpAcrossLine;

  constructor(private api: ApiService) {
    this.subs = [];
  }

  ngOnInit() {
    this.getTickets();
  }

  getTickets() {
    let sub: Subscription = this.api.getAllTickets().subscribe({
      next: (res: ITicket[]) => {
        this.tickets = res;
      },
      error: (err) => {
        console.error('Error Occured');
      },
    });
    this.subs.push(sub);

    return sub;
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
