import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Product} from '../model/product';
import {Position} from '../model/position';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  role: string;
  constructor(private http: HttpClient) {
  }

// Verify login
  login(name: string, password: string): Observable<Position> {
    console.log(name);
    return this.http.get<Position>('http://localhost:8181/login', {params: {
        name,
        password,
      }});
  }

  setRole(r: string): void {
    this.role = r;
  }

  isEmployee(): boolean {
    return this.role === 'employee';
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8181/products', {responseType: 'json'});
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8181/product/${id}`, {responseType: 'json'});
  }

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>('http://localhost:8181/positions', {responseType: 'json'});
  }

  getPosition(id: number): Observable<Position> {
    return this.http.get<Position>(`http://localhost:8181/position/${id}`, {responseType: 'json'});
  }

  updatePosition(position: Position): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.http.put('http://localhost:8181/updPosition', position, httpOptions);
  }

  deletePosition(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8181/delPosition/${id}`);
  }

  addProduct(product: Product): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.http.post('http://localhost:8181/addProduct', product, httpOptions);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8181/delProduct/${id}`);
  }

  updateProduct(product: Product): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.http.post('http://localhost:8181/addProduct', product, httpOptions);
  }

}
