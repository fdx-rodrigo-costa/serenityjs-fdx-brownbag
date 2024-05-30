import { By, PageElement } from "@serenity-js/web/lib/screenplay";

export class LoginComponent {
    static userNameInput = PageElement.located(By.id("user-name")).describedAs('username field');
    static passwordInput =  PageElement.located(By.id("password")).describedAs('password field');
    static loginElement = PageElement.located(By.id("login-button")).describedAs('login element')

}
