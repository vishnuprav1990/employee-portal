import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  { path: '', redirectTo: 'employee-details', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'employee-details', component: EmployeeListComponent, pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
