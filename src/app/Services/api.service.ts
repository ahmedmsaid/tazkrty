import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITicket } from '../Models/ITicket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllTickets(): Observable<ITicket[]> {
    return this.http.get<ITicket[]>('http://localhost:3000/tickets');
  }
}
