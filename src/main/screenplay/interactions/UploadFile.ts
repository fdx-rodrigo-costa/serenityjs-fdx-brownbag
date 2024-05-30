import { Answerable, AnswersQuestions, Duration, Interaction, PerformsActivities, Task, UsesAbilities, Wait, d } from "@serenity-js/core";
import { Click, Enter, Key, Navigate, PageElement, PageElementInteraction, Press, isVisible } from "@serenity-js/web";
import { isPresent } from "@serenity-js/assertions";
import { AuthComponent } from "../components/AuthComponent";
import { Cli } from "@cucumber/cucumber";
import { BulkCreationComponent } from "../components/BulkCreationComponent";
import { PlaywrightPageElement } from "@serenity-js/playwright";
// import path from 'node:path'
const path = require('node:path')

export class UploadFile extends PageElementInteraction {
    static from(pathToFile: Answerable<typeof path>): { to: (pageElement: Answerable<PageElement>) => Interaction } {
        return {
            to: (pageElement: Answerable<PageElement>) => new UploadFile(pathToFile, pageElement),
        }
    }

    constructor(
        private readonly pathToFile: Answerable<typeof path>,
        private readonly pageElement: Answerable<PageElement>,
    ) {
        super(d`#actor uploads file from ${ pathToFile } to ${ pageElement }`);
    }

    async performAs(actor: UsesAbilities & AnswersQuestions): Promise<void> {
        const element: PlaywrightPageElement = await this.resolve(actor, this.pageElement);
        // const element = await this.resolve(actor, this.pageElement);
        const pathToFile = await actor.answer(this.pathToFile);

        const nativeElement = await element.nativeElement()

        console.log("IMPRIME: "+pathToFile)
        
        await nativeElement.setInputFiles(path.resolve(pathToFile).toString())
    }
}