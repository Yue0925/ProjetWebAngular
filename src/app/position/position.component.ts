import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../service/api.service';
import {Position} from '../model/position';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  position: Position;
  roles = ['customer', 'admin', 'employee'];
  id: number;
  constructor(private route: ActivatedRoute,
              private apiService: ApiService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getPosition(this.id).subscribe(
      res => {
        this.position = res;
      }
    );
  }

  update() {
    this.apiService.updatePosition(this.position);
  }

  delete() {
    this.apiService.deletePosition(this.id);
  }
}
