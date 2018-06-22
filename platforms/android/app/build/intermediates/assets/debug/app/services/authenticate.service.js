"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var user_service_1 = require("./user.service");
var base64 = require("base-64");
var AuthService = /** @class */ (function () {
    function AuthService(router, http, userService) {
        this.router = router;
        this.http = http;
        this.userService = userService;
        this.baseUrl = "";
        this.sessionKey = "";
        this.baseUrl = "MobileServices/AuthenticationService/mAuthenticate/";
    }
    //POST to web API
    AuthService.prototype.getUserData = function (user) {
        var _this = this;
        var url = this.baseUrl + base64.encode(user.username) + "/" + base64.encode(user.password);
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(url, {}).subscribe(function (resp) {
                if (resp.UserData.sessionKey) {
                    _this.sessionKey = resp.UserData.sessionKey;
                    //resp.UserData.challengeResponse
                    _this.userService.addUser(resp.UserData);
                    //console.log('QUESTION ONE: ' + resp.UserData.challengeResponse)
                    _this.router.navigate(['/questions']);
                    resolve(resp.UserData);
                }
                else {
                    alert('Incorrect username or password. Please try again.');
                }
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    AuthService.prototype.getAuthorizationInfo = function () {
        return this.sessionKey;
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            http_1.HttpClient,
            user_service_1.UserService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoZW50aWNhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2Q0FBa0Q7QUFDbEQsMENBQXlDO0FBRXpDLCtDQUE2QztBQUU3QyxnQ0FBa0M7QUFHbEM7SUFJSSxxQkFBb0IsTUFBYyxFQUNkLElBQWdCLEVBQ2hCLFdBQXdCO1FBRnhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTDVDLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUtwQixJQUFJLENBQUMsT0FBTyxHQUFHLHFEQUFxRCxDQUFDO0lBQ3pFLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsaUNBQVcsR0FBWCxVQUFZLElBQVU7UUFBdEIsaUJBdUJDO1FBdEJHLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xHLElBQUksT0FBTyxHQUFRLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDM0MsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDN0IsVUFBQyxJQUFTO2dCQUNOLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDMUIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztvQkFDM0MsaUNBQWlDO29CQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3hDLGlFQUFpRTtvQkFDakUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUMxQixDQUFDO2dCQUNELElBQUksQ0FBQyxDQUFDO29CQUNGLEtBQUssQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2dCQUMvRCxDQUFDO1lBQ0wsQ0FBQyxFQUNELFVBQUMsR0FBUTtnQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDZixDQUFDLENBQ0osQ0FBQTtRQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBQ0QsMENBQW9CLEdBQXBCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQXJDUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBS21CLGVBQU07WUFDUixpQkFBVTtZQUNILDBCQUFXO09BTm5DLFdBQVcsQ0EwQ3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi91c2VyL3VzZXJcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcblxuaW1wb3J0ICogYXMgYmFzZTY0IGZyb20gXCJiYXNlLTY0XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gICAgYmFzZVVybDogc3RyaW5nID0gXCJcIjtcbiAgICBzZXNzaW9uS2V5OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSBcIk1vYmlsZVNlcnZpY2VzL0F1dGhlbnRpY2F0aW9uU2VydmljZS9tQXV0aGVudGljYXRlL1wiO1xuICAgIH1cblxuICAgIC8vUE9TVCB0byB3ZWIgQVBJXG4gICAgZ2V0VXNlckRhdGEodXNlcjogVXNlcik6IFByb21pc2U8VXNlcj57XG4gICAgICAgIGxldCB1cmw6IHN0cmluZyA9IHRoaXMuYmFzZVVybCArIGJhc2U2NC5lbmNvZGUodXNlci51c2VybmFtZSkgKyBcIi9cIiArYmFzZTY0LmVuY29kZSh1c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgbGV0IHByb21pc2U6IGFueSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaHR0cC5wb3N0KHVybCwge30pLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAocmVzcDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3AuVXNlckRhdGEuc2Vzc2lvbktleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uS2V5ID0gcmVzcC5Vc2VyRGF0YS5zZXNzaW9uS2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9yZXNwLlVzZXJEYXRhLmNoYWxsZW5nZVJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmFkZFVzZXIocmVzcC5Vc2VyRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdRVUVTVElPTiBPTkU6ICcgKyByZXNwLlVzZXJEYXRhLmNoYWxsZW5nZVJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcXVlc3Rpb25zJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwLlVzZXJEYXRhKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0luY29ycmVjdCB1c2VybmFtZSBvciBwYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgICAgIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGdldEF1dGhvcml6YXRpb25JbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXNzaW9uS2V5O1xuICAgIH1cbiAgICAvL2dldFNlY3VyaXR5UXVlc3Rpb25zKGNoYWxsZW5nZVJlc3BvbnNlOiBhbnkpIHtcbiAgICAvLyAgICBjb25zb2xlLmxvZygnUVVFU1RJT04gT05FOiAnICsgY2hhbGxlbmdlUmVzcG9uc2VbMF0uS2V5KVxuICAgIC8vICAgIHJldHVybiBjaGFsbGVuZ2VSZXNwb25zZVswXS5LZXk7XG4gICAgLy99XG59Il19