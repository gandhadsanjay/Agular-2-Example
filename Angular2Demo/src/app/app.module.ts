import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './employee/employee.component';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, EmployeeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
