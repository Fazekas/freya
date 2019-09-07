import { Component, OnInit } from '@angular/core';
import {LoginConstants} from './login.constants';
import {DataRestService} from '../data-rest-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model: {email?: string, password?: string } = {};

  public loginConstant = LoginConstants;

  constructor(private dataRestService: DataRestService) { }

  ngOnInit() {
  }

  public login(formValue) {
    console.log(formValue.value);
      console.log(this.model);
      const message = this.dataRestService.login(formValue.value);
  }

}
