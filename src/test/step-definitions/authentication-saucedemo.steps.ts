import { Given, Then, When } from '@cucumber/cucumber';
import { actorInTheSpotlight } from '@serenity-js/core';
import { Actor, Wait } from '@serenity-js/core/lib/screenplay';
import { Navigate, isVisible } from '@serenity-js/web';
import { LoginAt } from '../../main/screenplay/tasks/authentication/LoginAt';
import { Ensure, includes, isPresent } from '@serenity-js/assertions';
import { By, PageElement, Text } from '@serenity-js/web';
import { HomeComponent } from '../../main/screenplay/components/HomeComponent';

When('{pronoun} tries to login using valid credentials', async (actor: Actor) => 
    actor.attemptsTo(
        LoginAt.sauceDemoPlatform()
    )
)

Then('{pronoun} should see that the login was successfully performed', async (actor: Actor) => 
  actor.attemptsTo(
    Ensure.that(Text.of(HomeComponent.swagLabsTitle), isPresent())
)
)

Given('"{actor}" is on SauceDemo platform', async (actor: Actor) => 
  actor.attemptsTo(
    Navigate.to("/v1")
  )
)

Given('"{actor}" is authenticated on the SauceDemo platform', (actor: Actor) => 
  actor.attemptsTo(
    LoginAt.sauceDemoPlatform(),
    Wait.until(HomeComponent.swagLabsTitle, isVisible()),
)
)




