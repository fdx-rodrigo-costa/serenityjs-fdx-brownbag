import { Given, Then, When } from '@cucumber/cucumber';
import { actorInTheSpotlight } from '@serenity-js/core';
import { Actor } from '@serenity-js/core/lib/screenplay';
import { Navigate } from '@serenity-js/web';
import { LoginAt } from '../../main/screenplay/tasks/authentication/LoginAt';
import { Ensure, contain, includes, isPresent } from '@serenity-js/assertions';
import { By, PageElement, Text } from '@serenity-js/web';
import { HomeComponent } from '../../main/screenplay/components/HomeComponent';
import { AddAProduct } from '../../main/screenplay/tasks/checkout/AddAProduct';
import { CheckoutCartComponent } from '../../main/screenplay/components/CheckoutCartComponent';
import { PerformACheckout } from '../../main/screenplay/tasks/checkout/PerformACheckout';


Then('{pronoun} should see that the cart now has the proper product in there', (actor: Actor) => 
  actor.attemptsTo(
    Ensure.that(Text.of(CheckoutCartComponent.titleOfFirstItemOnCheckoutOverview), isPresent())
  )
)

When('{pronoun} adds a product into the cart', (actor: Actor) => 
  actor.attemptsTo(
    AddAProduct.intoCart()
  )
)

Then('{pronoun} completes the checkout after the product was added', (actor: Actor) => 
  actor.attemptsTo(
    PerformACheckout.withAValidProduct(),
  )
)

Then('{pronoun} should see that the order has been properly dispatched', (actor: Actor) => 
  actor.attemptsTo(
    Ensure.that(Text.of(CheckoutCartComponent.thankYouForTheOrderText), isPresent()),
    Ensure.that(Text.of(CheckoutCartComponent.thankYouForTheOrderText), includes('THANK YOU'))
  )
)




