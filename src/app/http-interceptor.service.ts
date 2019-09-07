import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {Observable, of, Subscription} from 'rxjs';
import {LoginObj} from '../type.def';
import {UrlService} from './url.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private http: HttpClient,
              private urlService: UrlService,
              private cookieService: CookieService,
     private router: Router,
    ) { }


    public login(urlString: string, loginParams: LoginObj) {
        // encode login details
        const auth = btoa(`${loginParams.email}:${loginParams.password}`);

        // add login details to authorization header
        const headers = new HttpHeaders({
            Authorization: `Basic ${auth}`,
        });

        // attempt to login
        return this.http.get(urlString, {headers}).subscribe(() => {
            // handle response
            this.cookieService.set('sid', auth);

            const previousUrl = this.urlService.getPreviousUrl();
            if (previousUrl === '/login' || previousUrl === '/register') {
                this.router.navigateByUrl('home');
            } else {
                this.router.navigateByUrl(previousUrl);
            }
        }, err => {
            // login failed stay on login page or redirect back to login
        });
    }
}
