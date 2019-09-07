import {Injectable} from '@angular/core';
import {HttpInterceptorService} from './http-interceptor.service';
import {Observable} from 'rxjs';
import {LoginObj} from '../type.def';

@Injectable({
    providedIn: 'root'
})
export class DataRestService {

    private root = 'http://localhost:8080';

    constructor(private http: HttpInterceptorService) {

    }

    public login(loginParams: LoginObj) {
        return this.http.login(`${this.root}/user`, loginParams);
    }

}
