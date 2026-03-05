import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atelier } from '../atelier.model';

@Injectable({
  providedIn: 'root'
})
export class AtelierService {

  apiUrl = "http://localhost:3000/ateliers";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Atelier[]> {
    return this.http.get<Atelier[]>(this.apiUrl);
  }

  getById(id: string): Observable<Atelier> {
    return this.http.get<Atelier>(`${this.apiUrl}/${id}`);
  }

  add(data: Atelier): Observable<Atelier> {
    return this.http.post<Atelier>(this.apiUrl, data);
  }

  update(id: string, data: Atelier): Observable<Atelier> {
    return this.http.put<Atelier>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}