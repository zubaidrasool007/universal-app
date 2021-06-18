import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class UserService {

    API_URL: string;

    constructor(
        private http: HttpClient,
    ) {
        this.API_URL = environment.apiUrl;
    }

    getUserMetaData(): Observable<any> {
        return this.http.get(`${this.API_URL}/users`, { headers: { 'Access-Control-Allow-Origin': '*' } });
    }
}