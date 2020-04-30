import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ApiService} from '../service/api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {products} from '../home/home.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  product: Product;
  productForm: FormGroup;
  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.productForm = this.formBuilder.group({
      name: [''],
      price: [''],
      brand: [''],
      feedBack: [''],
      stock: ['']
    });
  }

  ngOnInit(): void {
  }

  add() {
    this.product = new Product();
    this.product.id = products.length + 1;
    this.product.name = this.productForm.get('name').value;
    this.product.price = this.productForm.get('price').value;
    this.product.brand = this.productForm.get('brand').value;
    this.product.feedBack = this.productForm.get('feedBack').value;
    this.product.stock = this.productForm.get('stock').value;
    this.apiService.addProduct(this.product);
    this.router.navigate(['/home']);
  }
}
