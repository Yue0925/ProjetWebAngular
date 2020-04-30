import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {AdminComponent} from './admin/admin.component';
import {PositionComponent} from './position/position.component';
import {EmployeeComponent} from './employee/employee.component';
import {ProductComponent} from './employee/product/product.component';


const routes: Routes = [
  { path: 'login',
    component: LoginComponent
  }, {
  path: 'home',
    component: HomeComponent
  }, {
  path: 'product/:id',
    component: ProductDetailComponent
  }, {
    path: 'admin',
    component: AdminComponent
  }, {
    path: 'position/:id',
    component: PositionComponent
  }, {
  path: 'employee',
    component: EmployeeComponent
  }, {
  path: 'employee/product/:id',
    component: ProductComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
