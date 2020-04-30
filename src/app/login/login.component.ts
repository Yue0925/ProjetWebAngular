import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../service/api.service';
import {Observable} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {Position} from '../model/position';

export let position;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  position: Position;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService,
              private router: Router) {
    this.loginForm = this.formBuilder.group({
      name: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.apiService.login(this.loginForm.get('name').value, this.loginForm.get('password').value).subscribe(
      res => {this.position = res; }
    );
    if (this.position.role == 'customer') {
      this.router.navigate(['/home']);
    } else if (this.position.role == 'admin') {
      this.router.navigate(['/admin']);
    } else if (this.position.role == 'employee') {
      this.router.navigate(['/employee']);
    }
    this.apiService.setRole(this.position.role);
  }

}
