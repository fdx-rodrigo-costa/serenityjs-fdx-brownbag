import { AnswerQuestions, Duration, PerformsActivities, Task, Wait } from "@serenity-js/core";
import { Click, Enter, Key, Navigate, Press, isVisible } from "@serenity-js/web";
import { isPresent, not } from "@serenity-js/assertions";
import { Cli } from "@cucumber/cucumber";
import { ReadFrom } from "../../questions/common/ReadFrom";
import { EnterCredentials } from "./EnterCredentials";
import { LoginComponent } from "../../components/LoginComponent";

export class LoginAt extends Task {

    constructor(description: string) {
        super(description);
    }
 
    performAs(actor: PerformsActivities & AnswerQuestions): Promise<void> {
        const homeUrl = "/";
        let user = "standard_user";
        let pass = "secret_sauce";

        return actor.attemptsTo(
            Navigate.to(homeUrl),

            EnterCredentials.atSauceDemoOfUser(user).andPassword(pass)
        )
    }

    static sauceDemoPlatform() {
        return new LoginAt(`Login At SauceDemo platform`);
    }
    
}