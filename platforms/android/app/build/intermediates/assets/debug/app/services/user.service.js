"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.userData = new BehaviorSubject_1.BehaviorSubject(null);
    }
    //POST to web API
    UserService.prototype.addUser = function (user) {
        this._user = user;
        this.userData.next(this._user);
    };
    UserService.prototype.getUserData = function () {
        return this.userData;
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUVsRCx3REFBdUQ7QUFPdkQ7SUFJSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxhQUFRLEdBQTBCLElBQUksaUNBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUc1RCxDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLDZCQUFPLEdBQVAsVUFBUSxJQUFVO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQWZRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FLaUIsaUJBQVU7T0FKM0IsV0FBVyxDQWdCdkI7SUFBRCxrQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdXNlci91c2VyXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfdXNlcjogVXNlcjtcbiAgICB1c2VyRGF0YTogQmVoYXZpb3JTdWJqZWN0PFVzZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIH1cblxuICAgIC8vUE9TVCB0byB3ZWIgQVBJXG4gICAgYWRkVXNlcih1c2VyOiBVc2VyKSB7XG4gICAgICAgIHRoaXMuX3VzZXIgPSB1c2VyO1xuICAgICAgICB0aGlzLnVzZXJEYXRhLm5leHQodGhpcy5fdXNlcilcbiAgICB9XG5cbiAgICBnZXRVc2VyRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckRhdGE7XG4gICAgfVxufSJdfQ==