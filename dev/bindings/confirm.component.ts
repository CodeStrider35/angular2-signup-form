import {Component, EventEmitter} from "@angular/core";

@Component({
    selector: 'my-confirm',
    template: `
        <h1>You submitted the following details. Is this correct?</h1>
        <p>
        your name is 
        <span class="highlight">{{myself.name}}</span>
        and you're
        <span class="highlight">{{myself.age}}</span>
        years old. Please click on 'Confirm' if you have made any changes to this information.
        </p>
        <form class="form-inline">
            <div>
                <h3>
                <label 
                class="label label-primary" 
                for="name">Your Name
                </label>
                <input 
                class="form-control" 
                type="text" 
                id="name" 
                [(ngModel)]="myself.name"
                (keyup)="onKeyup()">
                </h3>
            </div>
            <div class="div-style">
                <h3>
                <label 
                for="age" 
                class="label label-primary">Your Age
                </label>
                <input 
                class="form-control" 
                type="text" 
                id="age" 
                [(ngModel)]="myself.age"
                (keyup)="onKeyup()">
                </h3>
            </div>
            </form>
        <br>
        <div>
            Filled out: {{isFilled ? 'Yes' : 'No'}}
        </div>
        <div>
            Valid: {{isValid ? 'Yes' : 'No'}}
        </div>
        <br>
        <button 
        class="btn btn-primary" 
        [disabled]="!isValid"
        (click)="onConfirm()">Confirm
        </button>
    `,
    inputs: ['myself'],
    outputs: ['confirmed']
})
export class ConfirmComponent {
    myself = {name: '', age: ''};
    isFilled = false;
    isValid = false;
    confirmed = new EventEmitter<{name: string, age: string}>();

    onKeyup() {
        if (this.myself.name != '' && this.myself.age != '') {
            this.isFilled = true;
        } else {
            this.isFilled = false;
        }

        if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    onConfirm() {
        this.confirmed.emit(this.myself);
    }
}