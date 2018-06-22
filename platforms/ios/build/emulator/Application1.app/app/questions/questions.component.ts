import { Component, OnInit } from "@angular/core";

import { UserService } from "../services/user.service";

@Component({
    selector: "questions",
    moduleId: module.id,
    templateUrl: "./questions.component.html",
    styleUrls: ["./questions.component.css"]
})

export class QuestionsComponent implements OnInit{
    _challengeResponse: any;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getUserData().subscribe( //because you subscribe to an observable to recieve its value
            (resp: any) => {
                if (resp) {
                    this._challengeResponse = resp.challengeResponse;
                    //console.log("QUESTIONS COMPONENT QUESTION ONE: --- " + this._challengeResponse[0].Key)
                }
            }
        )
    }

}