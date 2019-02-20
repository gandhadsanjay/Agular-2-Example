import { Component } from '@angular/core';
import { transition } from '@angular/core/src/animation/dsl';
import { fail } from 'assert';
import { normalize } from 'path';

@Component({
    selector: 'my-app',
    template: `<my-employee></my-employee>`
})

export class AppComponent  {
    onClick(): void {
        console.log("Button Clicked");
    }
}
