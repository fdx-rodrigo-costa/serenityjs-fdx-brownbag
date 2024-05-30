import { AnswerQuestions, Duration, PerformsActivities, Task, Wait } from "@serenity-js/core";
import { Click, Enter, Key, Navigate, Press, isVisible } from "@serenity-js/web";
import { isPresent, not } from "@serenity-js/assertions";
import { Cli } from "@cucumber/cucumber";
import { ReadFrom } from "../../questions/common/ReadFrom";
import { LoginComponent } from "../../components/LoginComponent";
import { CheckoutCartComponent } from "../../components/CheckoutCartComponent";
import { HomeComponent } from "../../components/HomeComponent";
import { AddAProduct } from "./AddAProduct";

export class PerformACheckout extends Task {
    firstNameValue = "QA";
    lastNameValue = "Test";
    zipCodeValue = "123456"; 

    constructor(description: string) {
        super(description);
    }
 
    performAs(actor: PerformsActivities & AnswerQuestions): Promise<void> {
        

        return actor.attemptsTo(
            Wait.until(CheckoutCartComponent.checkoutElement, isVisible()),
            Click.on(CheckoutCartComponent.checkoutElement),
            Wait.until(CheckoutCartComponent.firstNameOnCheckout, isVisible()),
            Enter.theValue(this.firstNameValue).into(CheckoutCartComponent.firstNameOnCheckout),
            Enter.theValue(this.lastNameValue).into(CheckoutCartComponent.lastNameOnCheckout),
            Enter.theValue(this.zipCodeValue).into(CheckoutCartComponent.postalCodeOnCheckout),
            Click.on(CheckoutCartComponent.continueElementOnAddress),
            Wait.until(CheckoutCartComponent.titleOfFirstItemOnCheckoutOverview, isVisible()),
            Click.on(CheckoutCartComponent.finishOnCheckoutOverview),
        )
    }

    static withAValidProduct() {
        return new PerformACheckout(`Performs a checkout with a valid product into the cart`);
    }
    
}