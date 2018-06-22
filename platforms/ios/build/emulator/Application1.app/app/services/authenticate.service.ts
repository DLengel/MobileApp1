import { Injectable } from "@angular/core";
import { User } from "../user/user";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { UserService } from "./user.service";

import * as base64 from "base-64";

@Injectable()
export class AuthService {
    baseUrl: string = "";
    sessionKey: string = "";

    constructor(private router: Router, 
                private http: HttpClient, 
                private userService: UserService) {
        this.baseUrl = "MobileServices/AuthenticationService/mAuthenticate/";
    }

    //POST to web API
    getUserData(user: User): Promise<User>{
        let url: string = this.baseUrl + base64.encode(user.username) + "/" +base64.encode(user.password);
        let promise: any = new Promise((resolve, reject) => {
            this.http.post(url, {}).subscribe(
                (resp: any) => {
                    if(resp.UserData.sessionKey) {
                        this.sessionKey = resp.UserData.sessionKey;
                        //resp.UserData.challengeResponse
                        this.userService.addUser(user); 
                        this.router.navigate(['/questions']);
                        resolve(resp.UserData)
                    }
                    else {
                        alert('Incorrect username or password. Please try again.');
                    }
                }, 
                (err: any) => {
                    reject(err)
                }
            )
        })
        return promise;
    }
    getAuthorizationInfo() {
        return this.sessionKey;
    }
    //getSecurityQuestions(challengeResponse: any) {
    //    console.log('QUESTION ONE: ' + challengeResponse[0].Key)
    //    return challengeResponse[0].Key;
    //}
}