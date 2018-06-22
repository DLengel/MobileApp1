import { Component, OnInit } from "@angular/core";

import { Page } from "ui/page";

import { User } from "../../user/user";
import { UserService } from "../../services/user.service";
import { AuthService } from "../../services/authenticate.service";

@Component({
  moduleId: module.id,
  selector: "my-app",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit{
  user: User;

  constructor(private _authService: AuthService,
              private _userService: UserService,
              private _page: Page) {
    this.user = new User;
    console.log('init')
  }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }
  submit() {
    this._authService.getUserData(this.user).then(
      (resp: any) => {
        console.log("RESP: ", JSON.stringify(resp));
        //alert('success');
      },
      err => {
        console.log("ERROR: ", JSON.stringify(err));
      }
    )
  }
}