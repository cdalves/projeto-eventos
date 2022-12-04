import { Injectable } from '@angular/core';

import { Eventos } from '../Eventos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private apiUrl = 'http://localhost:8080/eventos'
  public nomeFind?: string;
  atualizarbusca: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) { 
  }

  getAll(): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Eventos>{
    return this.http.get<Eventos>(`${this.apiUrl}/${id}`)

  }

  setBusca(busca: string):void{
    this.nomeFind = busca;
    this.atualizarbusca.emit();    
  }

  findByName(): Observable<Eventos[]>{
    return this.http.get<Eventos[]>(`${this.apiUrl}/find/?name=${this.nomeFind}`).pipe();
    
  }

  remove(id: number) {
    return this.http.delete<Eventos>(`${this.apiUrl}/${id}`);
  }

  creat(evento: Eventos) {
    return this.http.post(this.apiUrl, evento).pipe(take(1));
  }

  edit(evento: Eventos){
    return this.http.put(this.apiUrl, evento).pipe(take(1));
  }

}
