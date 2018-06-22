import { Component } from "@angular/core";

import { User } from "../user/user";
import { UserService } from "../services/user.service";
import { AuthService } from "../services/authenticate.service";

@Component({
  selector: "my-app",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent{
  user: User;

  constructor(private _authService: AuthService, private _userService: UserService) {
    this.user = new User;
    console.log('init')
  }
  submit() {
    this._authService.getUserData(this.user).then(
      (resp: any) => {
        console.log("RESP: ", JSON.stringify(resp));
        alert('success');
        
      },
      err => {
        console.log("ERROR: ", JSON.stringify(err));
      }
    )
  }
}