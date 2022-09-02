import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay, Observable } from 'rxjs';
import * as moment from "moment";
import { HttpService } from 'src/app/services/shared/http.service';
import { AuthPostDto } from './dto/auth.post.dto';

@Injectable()
export class AuthLayoutService extends HttpService {

    private readonly ID_ACCESS_TOKEN = 'access_token';
    private readonly ID_EXPIRES_AT = 'expires_at';
    private readonly URL_SERVICE = 'auth/';

    constructor(protected http: HttpClient) {
        super(http);
    }

    doLogin(login: string, senha: string) : Observable<AuthPostDto> {
        return this.http.post<AuthPostDto>(this.URL + this.URL_SERVICE + 'login/', { login, senha }).pipe(
            tap(res => this.setSession(res)),
            shareReplay()
        );
    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn, 'hour');

        localStorage.setItem(this.ID_ACCESS_TOKEN, authResult.access_token);
        localStorage.setItem(this.ID_EXPIRES_AT, JSON.stringify(expiresAt.valueOf()));

        console.log('LocalStorage ', this.ID_ACCESS_TOKEN, authResult.access_token);
        console.log('LocalStorage ', this.ID_EXPIRES_AT, JSON.stringify(expiresAt.valueOf()));
    }

    logout() {
        localStorage.removeItem(this.ID_ACCESS_TOKEN);
        localStorage.removeItem(this.ID_EXPIRES_AT);
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem(this.ID_EXPIRES_AT);
        const expiresAt = JSON.parse(expiration);

        return moment(expiresAt);
    }

}