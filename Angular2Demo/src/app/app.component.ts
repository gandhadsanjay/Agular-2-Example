import { Component } from '@angular/core';
import { transition } from '@angular/core/src/animation/dsl';
import { fail } from 'assert';
import { normalize } from 'path';

@Component({
    selector: 'my-app',
    template: `<div> 
                <button style='font-weight:bold' text='My Button'>My Button</button>  
                <br/><br/>
                <button [style.color]='applyColor' text='My Button'>My Button</button> 
                <br/><br/>
                <button [style.font-size.px]='pixels' text='My Button'>My Button</button> 
                <br/><br/>
                <button [ngStyle]='applyStyle()' text='My Button'>My Button</button>
                </div>`
})

export class AppComponent  {
    pageHeader = 'Angular component nesting';
    pixels: number = 50;
    applyColor: string = "red";
    isboldclass: boolean = true; 
    isItalics: boolean = false;
    isColorApplyied: boolean = true;
    applyiedClass: string = " boldClass italicsClass colorClass";

    applyStyle()
    {
        let styles = {
            'font-weight': this.isboldclass ?'bold':'normal',
           // 'font-style:italcs': this.isItalics,
            'color': this.isColorApplyied ? 'blue': ''
        }
        return styles;
    }


}
