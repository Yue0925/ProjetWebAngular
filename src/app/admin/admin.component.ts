import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';
import {Position} from '../model/position';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  positions: Position[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPositions().subscribe(
      res => {
        this.positions = res;
      }
    );
  }

}
