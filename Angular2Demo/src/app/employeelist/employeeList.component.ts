import { Component } from '@angular/core'
@Component({
    selector: 'list-employee',
    templateUrl: '/app/employeelist/employeeList.component.html',
    styleUrls: ['/app/employeelist/employeeList.component.css']
})
export class EmployeeListComponent {
    employee: any[] = [
        { code: 'emp101', name: 'Tom', gender: 'Male' },
        { code: 'emp102', name: 'Sam', gender: 'Male' },
        { code: 'emp103', name: 'Com', gender: 'Female' }
    ];
}