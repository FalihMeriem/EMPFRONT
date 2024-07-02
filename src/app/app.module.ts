import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component'; 
import { HomeComponent } from './Pages/home/home.component';
import { EmployeesComponent } from './Pages/employees/employees.component';
import { AddEmployeeComponent } from './Pages/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './Pages/update-employee/update-employee.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { ContactComponent } from './Pages/contact/contact.component';

export function HttpLoaderFactory(http: HttpClient) {
  // Your loader factory implementation here
}

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent, pathMatch: 'full' },
  { path: 'Employees', component: EmployeesComponent },
  { path: 'AddEmployee', component: AddEmployeeComponent },
  { path: 'UpdateEmployee/:id', component: UpdateEmployeeComponent },
  { path: 'Contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent, // Add AppComponent here
    HomeComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
         NavBarComponent ,
         FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
