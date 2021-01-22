import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { count, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { Storage } from '@ionic/storage';
import { AuthResponse } from './auth-response';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  AUTH_SERVER_ADDRESS: string = 'http://127.0.0.1:8000/api';
  apiKey = "dezekeygajenooitraden";

  constructor(private http: HttpClient, private storage: Storage) { }

  createAccount() : Observable<any>{
    return this.http.post(this.AUTH_SERVER_ADDRESS + "/user", this.apiKey)
  }

  deleteAccount(id) : Observable <any>{
    return this.http.delete(this.AUTH_SERVER_ADDRESS + "/user/" + id);
  }

  getKleuren(id) : Observable<any>{
    return this.http.get(this.AUTH_SERVER_ADDRESS + "/user/" + id + "/kleuren").pipe(map(results => results));
  }

  getAllUsers() : Observable<any>{
    return this.http.get(this.AUTH_SERVER_ADDRESS + "/user");
  }
}
