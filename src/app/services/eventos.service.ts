import { Injectable } from '@angular/core';

import { Eventos } from '../Eventos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private apiUrl = '/eventos'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(this.apiUrl);
  }
}
