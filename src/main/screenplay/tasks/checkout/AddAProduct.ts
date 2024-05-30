import { AnswerQuestions, Duration, PerformsActivities, Task, Wait } from "@serenity-js/core";
import { Click, Enter, Key, Navigate, Press, isVisible } from "@serenity-js/web";
import { isPresent, not } from "@serenity-js/assertions";
import { Cli } from "@cucumber/cucumber";
import { ReadFrom } from "../../questions/common/ReadFrom";
import { LoginComponent } from "../../components/LoginComponent";
import { CheckoutCartComponent } from "../../components/CheckoutCartComponent";
import { HomeComponent } from "../../components/HomeComponent";

export class AddAProduct extends Task {
    firstNameValue = "QA";
    lastNameValue = "Test";
    zipCodeValue = "123456"; 

    constructor(description: string) {
        super(description);
    }
 
    performAs(actor: PerformsActivities & AnswerQuestions): Promise<void> {
        

        return actor.attemptsTo(
            Wait.until(HomeComponent.buttonOfFirstItemOnInventory, isVisible()),
            Click.on(HomeComponent.buttonOfFirstItemOnInventory),
            Click.on(HomeComponent.goToCart),
            Wait.until(CheckoutCartComponent.titleOfFirstItemOnCheckoutOverview, isVisible()),
            Wait.until(CheckoutCartComponent.checkoutElement, isVisible())
        )
    }

    static intoCart() {
        return new AddAProduct(`Adds a product into cart`);
    }
    
}