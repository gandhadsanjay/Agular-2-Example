import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './employee/employee.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
