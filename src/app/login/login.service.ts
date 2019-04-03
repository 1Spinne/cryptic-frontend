import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CLIENT } from "../websocket.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'https://user.api.cryptic-game.net/auth';

  constructor(private http: HttpClient) {}

  login(username, password): Observable<LoginResponse> {
    const data = {
      "action": "login",
      "name": username,
      "password": password
    };

    return CLIENT.request(data);
  }
}

class LoginResponse {
  error?: string;
  result?: boolean;
}
