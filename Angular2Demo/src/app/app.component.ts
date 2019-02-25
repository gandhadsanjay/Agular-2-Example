import { Component } from '@angular/core';
import { transition } from '@angular/core/src/animation/dsl';
import { fail } from 'assert';
import { normalize } from 'path';

@Component({
    selector: 'my-app',
    template: `name : <input [value]='name' (input)='name =$event.target.value'/>
                <br/>
                name  : <input [(ngModel)] = 'name'/>
                <br/>
                Entered Value : {{name}}`               
})

export class AppComponent {

    name: string = "Sanjay";

}
