import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";

import { AuthService } from "../services/authenticate.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let customHeaders = req.headers;
        let sessionKey = this.auth.getAuthorizationInfo();

        customHeaders = customHeaders.set('AppVersion', '18.2');
        customHeaders = customHeaders.set('Authorization2', 'Basic PrivateKey:SjrTgyLSax91Wg38QLjj1OkjfNwLkgPcAh7QPSIZpR1m93tZOMiPBD9QqFBLVrXvI5mxX6xmWxJ5Ac4pZmeAZnrp33aYt9ubdQJaVgxSOhXpt2Ptn44mquMtxXr27VSessionKey:' + sessionKey);

        //get the auth info
        
        //clone the request and set the new header
        const authReq = req.clone({ 
            headers: customHeaders,
            url: "https://mtst.upmchp.com/" + req.url // this will be first part of each http.get or http.post('... url', {} ) 
        });
        //send cloned request with header to the next handler
        console.log("call ", req.url );
        return next.handle(authReq);
    }
}