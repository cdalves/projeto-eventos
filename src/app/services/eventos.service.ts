import { Injectable } from '@angular/core';

import { Eventos } from '../Eventos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private apiUrl = 'http://localhost:8080/eventos'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Eventos>{
    return this.http.get<Eventos>(`${this.apiUrl}/${id}`)

  }

  remove(id: number) {
    return this.http.delete<Eventos>(`${this.apiUrl}/${id}`);
  }

  creat(evento: Eventos) {
    return this.http.post(this.apiUrl, evento).pipe(take(1));
  }

}
