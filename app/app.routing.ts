import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { QuestionsComponent } from "./pages/questions/questions.component";

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