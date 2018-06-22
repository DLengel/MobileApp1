import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { catchError } from "rxjs/operators";


import { User } from "../user/user";

@Injectable()
export class UserService {
    private _user: User;
    userData: BehaviorSubject<User> = new BehaviorSubject(null);

    constructor(private http: HttpClient) {
    }

    //POST to web API
    addUser(user: User) {
        this._user = user;
        this.userData.next(this._user)
    }

    getUserData() {
        return this.userData;
    }
}