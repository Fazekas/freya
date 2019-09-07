import {Component, OnInit} from '@angular/core';
import {LoginConstants} from '../login/login.constants';
import {RegisterConstants} from './register.constants';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    public registerConstants = RegisterConstants;

    ngOnInit(): void {
    }

}
