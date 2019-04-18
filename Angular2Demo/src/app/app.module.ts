import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employeelist/employeelist.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [AppComponent, EmployeeComponent, EmployeeListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
