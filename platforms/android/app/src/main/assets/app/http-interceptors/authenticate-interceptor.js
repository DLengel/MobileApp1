"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var authenticate_service_1 = require("../services/authenticate.service");
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(auth) {
        this.auth = auth;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var customHeaders = req.headers;
        var sessionKey = this.auth.getAuthorizationInfo();
        customHeaders = customHeaders.set('AppVersion', '18.2');
        customHeaders = customHeaders.set('Authorization2', 'Basic PrivateKey:SjrTgyLSax91Wg38QLjj1OkjfNwLkgPcAh7QPSIZpR1m93tZOMiPBD9QqFBLVrXvI5mxX6xmWxJ5Ac4pZmeAZnrp33aYt9ubdQJaVgxSOhXpt2Ptn44mquMtxXr27VSessionKey:' + sessionKey);
        //get the auth info
        //clone the request and set the new header
        var authReq = req.clone({
            headers: customHeaders,
            url: "https://mtst.upmchp.com/" + req.url // this will be first part of each http.get or http.post('... url', {} ) 
        });
        //send cloned request with header to the next handler
        console.log("call ", req.url);
        return next.handle(authReq);
    };
    AuthInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [authenticate_service_1.AuthService])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRlLWludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aGVudGljYXRlLWludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLHlFQUErRDtBQUcvRDtJQUVJLHlCQUFvQixJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO0lBQUcsQ0FBQztJQUV6QyxtQ0FBUyxHQUFULFVBQVUsR0FBcUIsRUFBRSxJQUFpQjtRQUM5QyxJQUFJLGFBQWEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUVsRCxhQUFhLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEQsYUFBYSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsNEpBQTRKLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFFL04sbUJBQW1CO1FBRW5CLDBDQUEwQztRQUMxQyxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3RCLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLEdBQUcsRUFBRSwwQkFBMEIsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLHlFQUF5RTtTQUN0SCxDQUFDLENBQUM7UUFDSCxxREFBcUQ7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBRSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFyQlEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUdpQixrQ0FBVztPQUY1QixlQUFlLENBc0IzQjtJQUFELHNCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yLCBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aGVudGljYXRlLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gICAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpIHtcbiAgICAgICAgbGV0IGN1c3RvbUhlYWRlcnMgPSByZXEuaGVhZGVycztcbiAgICAgICAgbGV0IHNlc3Npb25LZXkgPSB0aGlzLmF1dGguZ2V0QXV0aG9yaXphdGlvbkluZm8oKTtcblxuICAgICAgICBjdXN0b21IZWFkZXJzID0gY3VzdG9tSGVhZGVycy5zZXQoJ0FwcFZlcnNpb24nLCAnMTguMicpO1xuICAgICAgICBjdXN0b21IZWFkZXJzID0gY3VzdG9tSGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24yJywgJ0Jhc2ljIFByaXZhdGVLZXk6U2pyVGd5TFNheDkxV2czOFFMamoxT2tqZk53TGtnUGNBaDdRUFNJWnBSMW05M3RaT01pUEJEOVFxRkJMVnJYdkk1bXhYNnhtV3hKNUFjNHBabWVBWm5ycDMzYVl0OXViZFFKYVZneFNPaFhwdDJQdG40NG1xdU10eFhyMjdWU2Vzc2lvbktleTonICsgc2Vzc2lvbktleSk7XG5cbiAgICAgICAgLy9nZXQgdGhlIGF1dGggaW5mb1xuICAgICAgICBcbiAgICAgICAgLy9jbG9uZSB0aGUgcmVxdWVzdCBhbmQgc2V0IHRoZSBuZXcgaGVhZGVyXG4gICAgICAgIGNvbnN0IGF1dGhSZXEgPSByZXEuY2xvbmUoeyBcbiAgICAgICAgICAgIGhlYWRlcnM6IGN1c3RvbUhlYWRlcnMsXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9tdHN0LnVwbWNocC5jb20vXCIgKyByZXEudXJsIC8vIHRoaXMgd2lsbCBiZSBmaXJzdCBwYXJ0IG9mIGVhY2ggaHR0cC5nZXQgb3IgaHR0cC5wb3N0KCcuLi4gdXJsJywge30gKSBcbiAgICAgICAgfSk7XG4gICAgICAgIC8vc2VuZCBjbG9uZWQgcmVxdWVzdCB3aXRoIGhlYWRlciB0byB0aGUgbmV4dCBoYW5kbGVyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FsbCBcIiwgcmVxLnVybCApO1xuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUoYXV0aFJlcSk7XG4gICAgfVxufSJdfQ==