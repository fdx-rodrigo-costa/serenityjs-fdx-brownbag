import { AnswerQuestions, Duration, PerformsActivities, Task, Wait } from "@serenity-js/core";
import { Click, Enter, Key, Navigate, Press, isVisible } from "@serenity-js/web";
import { LoginComponent } from "../../components/LoginComponent";

export class EnterCredentials extends Task {
    userCredential: string;
    passwordCredential: string;

    constructor(description: string, userCredential: string, passwordCredential: string) {
        super(description);
        this.passwordCredential = passwordCredential;
        this.userCredential = userCredential;
    }
 
    performAs(actor: PerformsActivities & AnswerQuestions): Promise<void> {

        return actor.attemptsTo(
            Wait.until(LoginComponent.userNameInput, isVisible()),
            Enter.theValue(this.userCredential).into(LoginComponent.userNameInput),
            Wait.until(LoginComponent.passwordInput, isVisible()),
            Enter.theValue(this.passwordCredential).into(LoginComponent.passwordInput),
            Click.on(LoginComponent.loginElement)
        )
    }

    static atSauceDemoOfUser(userCredential: string) {
        return new EnterCredentialsBuilder(userCredential);
    }
    
}

export class EnterCredentialsBuilder {
    constructor(private userCredential: string){}

    public andPassword(passwordCredential: string) {
        return new EnterCredentials(`Enter user credentials At SauceDemo platform`, 
        this.userCredential, passwordCredential);
    }
}