import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginConstants} from '../login/login.constants';
import {RegisterConstants} from './register.constants';
import {DataRestService} from '../data-rest-service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public model: {userName?: string, email?: string, password?: string, confirmPassword?: string} = {};
    public registerConstant = RegisterConstants;

    ngOnInit(): void {}

    constructor(private dataRestService: DataRestService ) { }

    public register(formValue): boolean {
        return !!this.dataRestService.register(formValue.value);
    }

    public isFormValid(form): boolean {
       return form.form.valid &&
           (form.form.value.password === form.form.value.confirmPassword) &&
           this.register(form);
    }



    /*
    *
    * 1) add in the rest of the form things n stuff
    * 1a) add a model in the component for the fields to read.
    * 2) making sure before we try to register, both of the passwords are the same
    * 3) interceptor should redirect to login page.
     */
}
