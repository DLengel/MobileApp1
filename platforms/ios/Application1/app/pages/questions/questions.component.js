"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../services/user.service");
var QuestionsComponent = /** @class */ (function () {
    //testing: string = "Testing2";
    function QuestionsComponent(userService) {
        this.userService = userService;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserData().subscribe(function (resp) {
            if (resp) {
                _this._challengeResponse = resp.challengeResponse;
                console.log("QUESTION ONE: " + _this._challengeResponse[0].Key);
                console.log("QUESTION TWO: " + _this._challengeResponse[1].Key);
                console.log("QUESTION THREE: " + _this._challengeResponse[2].Key);
                //console.log(Math.floor(Math.random() * 3));
            }
        });
    };
    QuestionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "questions",
            templateUrl: "./questions.component.html",
            styleUrls: ["./questions.component.css"]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], QuestionsComponent);
    return QuestionsComponent;
}());
exports.QuestionsComponent = QuestionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsNERBQTBEO0FBUzFEO0lBRUksK0JBQStCO0lBRS9CLDRCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUM1QyxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQ3BDLFVBQUMsSUFBUztZQUNOLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsS0FBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakUsNkNBQTZDO1lBQ2pELENBQUM7UUFDTCxDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFuQlEsa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDO3lDQU1tQywwQkFBVztPQUpuQyxrQkFBa0IsQ0FvQjlCO0lBQUQseUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInF1ZXN0aW9uc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcXVlc3Rpb25zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3F1ZXN0aW9ucy5jb21wb25lbnQuY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIF9jaGFsbGVuZ2VSZXNwb25zZTogYW55O1xuICAgIC8vdGVzdGluZzogc3RyaW5nID0gXCJUZXN0aW5nMlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5nZXRVc2VyRGF0YSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXNwOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFsbGVuZ2VSZXNwb25zZSA9IHJlc3AuY2hhbGxlbmdlUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUVVFU1RJT04gT05FOiBcIiArIHRoaXMuX2NoYWxsZW5nZVJlc3BvbnNlWzBdLktleSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUVVFU1RJT04gVFdPOiBcIiArIHRoaXMuX2NoYWxsZW5nZVJlc3BvbnNlWzFdLktleSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUVVFU1RJT04gVEhSRUU6IFwiICsgdGhpcy5fY2hhbGxlbmdlUmVzcG9uc2VbMl0uS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxufSJdfQ==