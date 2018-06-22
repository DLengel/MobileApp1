import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { QuestionsComponent } from "./questions/questions.component";

export const routes = [
    { path: "", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "questions", component: QuestionsComponent }
];

export const navigatableComponents = [
    LoginComponent,
    HomeComponent,
    QuestionsComponent
];