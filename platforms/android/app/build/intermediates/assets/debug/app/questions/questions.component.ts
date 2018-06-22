import { Component, OnInit } from "@angular/core";

import { UserService } from "../services/user.service";

@Component({
    moduleId: module.id,
    selector: "questions",
    templateUrl: "./questions.component.html",
    styleUrls: ["./questions.component.css"]
})

export class QuestionsComponent implements OnInit{
    _challengeResponse: any;
    //testing: string = "Testing2";

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getUserData().subscribe(
            (resp: any) => {
                if (resp) {
                    this._challengeResponse = resp.challengeResponse;
                    console.log("QUESTION ONE: " + this._challengeResponse[0].Key);
                    console.log("QUESTION TWO: " + this._challengeResponse[1].Key);
                    console.log("QUESTION THREE: " + this._challengeResponse[2].Key);
                    //console.log(Math.floor(Math.random() * 3));
                }
            }
        )
    }
}