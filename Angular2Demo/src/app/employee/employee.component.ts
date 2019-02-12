import {Component } from '@angular/core'

@Component({
    selector:"my-employee",
    templateUrl:"app/employee/employee.component.html"
})
export class EmployeeComponent {
    firstName: string = "Sanjay";
    lastName: string = "Gandhad";
    gender: string = "Male";
    age: number = 20;
}