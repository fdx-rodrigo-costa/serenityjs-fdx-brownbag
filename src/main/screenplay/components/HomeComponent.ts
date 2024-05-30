import { By, PageElement } from "@serenity-js/web/lib/screenplay";

export class HomeComponent {
    static swagLabsTitle = PageElement.located(By.xpath("//div[contains(@class, 'app_logo')]")).describedAs('swag labs title home');

}
