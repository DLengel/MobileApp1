"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../services/user.service");
var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(userService) {
        this.userService = userService;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserData().subscribe(//because you subscribe to an observable to recieve its value
        function (resp) {
            if (resp) {
                _this._challengeResponse = resp.challengeResponse;
                //console.log("QUESTIONS COMPONENT QUESTION ONE: --- " + this._challengeResponse[0].Key)
            }
        });
    };
    QuestionsComponent = __decorate([
        core_1.Component({
            selector: "questions",
            moduleId: module.id,
            templateUrl: "./questions.component.html",
            styleUrls: ["./questions.component.css"]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], QuestionsComponent);
    return QuestionsComponent;
}());
exports.QuestionsComponent = QuestionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQseURBQXVEO0FBU3ZEO0lBR0ksNEJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQzVDLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBRSw2REFBNkQ7UUFDbkcsVUFBQyxJQUFTO1lBQ04sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDUCxLQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqRCx3RkFBd0Y7WUFDNUYsQ0FBQztRQUNMLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQWZRLGtCQUFrQjtRQVA5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDM0MsQ0FBQzt5Q0FLbUMsMEJBQVc7T0FIbkMsa0JBQWtCLENBaUI5QjtJQUFELHlCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicXVlc3Rpb25zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3F1ZXN0aW9ucy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9xdWVzdGlvbnMuY29tcG9uZW50LmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBfY2hhbGxlbmdlUmVzcG9uc2U6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0VXNlckRhdGEoKS5zdWJzY3JpYmUoIC8vYmVjYXVzZSB5b3Ugc3Vic2NyaWJlIHRvIGFuIG9ic2VydmFibGUgdG8gcmVjaWV2ZSBpdHMgdmFsdWVcbiAgICAgICAgICAgIChyZXNwOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFsbGVuZ2VSZXNwb25zZSA9IHJlc3AuY2hhbGxlbmdlUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJRVUVTVElPTlMgQ09NUE9ORU5UIFFVRVNUSU9OIE9ORTogLS0tIFwiICsgdGhpcy5fY2hhbGxlbmdlUmVzcG9uc2VbMF0uS2V5KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxufSJdfQ==