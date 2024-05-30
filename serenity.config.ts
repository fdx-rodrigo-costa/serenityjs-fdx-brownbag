import { AfterAll, BeforeAll, setDefaultTimeout } from '@cucumber/cucumber';
import { configure, Duration } from '@serenity-js/core';
import path from 'path';
import * as playwright from 'playwright-core';

import { Actors } from './src/test/Actors';

const timeouts = {
    cucumber: {
        step: Duration.ofSeconds(60),                       // how long to wait for a Cucumber step to complete
    },
    playwright: {
        defaultNavigationTimeout: Duration.ofSeconds(60),   // how long to wait for a page to load
        defaultTimeout:           Duration.ofSeconds(60),    // how long to wait for an element to show up
    },
    serenity: {
        cueTimeout:               Duration.ofSeconds(5),    // how long to wait for Serenity/JS to complete any post-test activities, like saving screenshots and reports
    }
}

let browser: playwright.Browser;

// Configure default Cucumber step timeout
setDefaultTimeout(timeouts.cucumber.step.inMilliseconds());

BeforeAll(async () => {
    // Launch the browser once before all the tests
    // Serenity/JS will take care of managing Playwright browser context and browser tabs.
    browser = await playwright.chromium.launch({
        headless: false,
    });

    // Configure Serenity/JS
    configure({

        // Configure Serenity/JS actors to use Playwright browser
        actors: new Actors(browser, {
            baseURL:                    'https://www.saucedemo.com/v1',
            defaultNavigationTimeout:   timeouts.playwright.defaultNavigationTimeout.inMilliseconds(),
            defaultTimeout:             timeouts.playwright.defaultTimeout.inMilliseconds(),
        }),

        // Configure Serenity/JS reporting services
        crew: [
            [ '@serenity-js/console-reporter', { theme: 'auto' } ],
            [ '@serenity-js/web:Photographer', {
                // strategy: 'TakePhotosOfInteractions',TakePhotosOfFailures    // capture screenshots of all the interactions; slower but more comprehensive
                strategy: 'TakePhotosOfInteractions',           // capture screenshots of failed interactions; much faster
            } ],
            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: path.resolve(__dirname, './target/site/serenity') } ],
            [ '@serenity-js/serenity-bdd', { specDirectory: path.resolve(__dirname, './features/requirements') } ],
        ],

        cueTimeout: timeouts.serenity.cueTimeout,
    });
});

AfterAll(async () => {
    // Close the browser after all the tests are finished
    console.log(__dirname)
    if (browser) {
        await browser.close();
    }
})
