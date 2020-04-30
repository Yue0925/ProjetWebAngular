import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ApiService} from '../service/api.service';
import {position} from '../login/login.component';

export let products;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  isEmployee: boolean;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(
      res => {
        this.products = res;
      }
    );
    this.isEmployee = this.apiService.isEmployee();
  }

}
