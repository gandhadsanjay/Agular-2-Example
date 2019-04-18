import { Component } from '@angular/core';
import { transition } from '@angular/core/src/animation/dsl';
import { fail } from 'assert';
import { normalize } from 'path';

@Component({
    selector: 'my-app',
    templateUrl: `app/app.component.html`               
})

export class AppComponent {

    name: string = "Sanjay";

}
