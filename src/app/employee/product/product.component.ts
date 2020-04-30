import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../service/api.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  id: number;
  constructor(private route: ActivatedRoute,
              private apiService: ApiService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getProduct(this.id).subscribe(
      res => {
        this.product = res;
      }
    );
  }

  update() {
    this.apiService.updateProduct(this.product);
  }

  delete() {
    this.apiService.deleteProduct(this.id);
  }
}
