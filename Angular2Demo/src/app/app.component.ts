import { Component } from '@angular/core';
import { transition } from '@angular/core/src/animation/dsl';
import { fail } from 'assert';

@Component({
    selector: 'my-app',
    template: `<div> 
                <button class='boldClass' text='My Button'>My Button</button>  
                <br/><br/>
                <button [class.boldClass]='isboldclass' text='My Button'>My Button</button> 
                <br/><br/>
                <button [class]='applyiedClass' text='My Button'>My Button</button> 
                <br/><br/>
                <button [ngClass]='applyClass()' text='My Button'>My Button</button>
                </div>`
})

export class AppComponent  {
    pageHeader = 'Angular component nesting';
    isboldclass: boolean = true; 
    isItalics: boolean = false;
    isColorApplyied: boolean = true;
    applyiedClass: string = " boldClass italicsClass colorClass";

    applyClass()
    {
        let classes = {
            boldClass: this.isboldclass,
            italicsClass: this.isItalics,
            colorClass: this.isColorApplyied
        }
        return classes;
    }


}
