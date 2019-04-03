import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CLIENT } from "../websocket.service";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  url = 'https://user.api.cryptic-game.net/auth';

  constructor(private http: HttpClient) {
  }

  signUp(username: string, email: string, password: string): Observable<SignUpResponse> {
    const data = {
      "action": "register",
      "name": username,
      "password": password
    };

    return CLIENT.request(data);
  }
}

class SignUpResponse {
  error?: string;
  result?: boolean;
}
