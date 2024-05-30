import { By, PageElement } from "@serenity-js/web/lib/screenplay";

export class CheckoutCartComponent {
    static removeFirstItemOnCart = PageElement.located(By.xpath("(//div[@class='cart_list']/descendant::button[contains(text(), 'REMOVE')])[1]")).describedAs('remove first item on cart');
    static checkoutElement = PageElement.located(By.xpath("//div[@class='cart_footer']/descendant::a[contains(text(), 'CHECKOUT')]")).describedAs('checkout element');
    static firstNameOnCheckout = PageElement.located(By.id("first-name")).describedAs('first name on checkout');
    static lastNameOnCheckout = PageElement.located(By.id("last-name")).describedAs('last name on checkout');
    static postalCodeOnCheckout = PageElement.located(By.id("postal-code")).describedAs('postal code on checkout');
    static continueElementOnAddress = PageElement.located(By.xpath("//div[@class='checkout_buttons']/descendant::input[@value='CONTINUE']")).describedAs('continue on address');
    static cancelElementOnAddress = PageElement.located(By.xpath("//div[@class='checkout_buttons']/descendant::a[contains(text(), 'CANCEL')]")).describedAs('cancel on address')
    static cancelOnCheckoutOverview = PageElement.located(By.xpath("//div[@class='cart_footer']/descendant::a[contains(text(), 'CANCEL')]")).describedAs('cancel on checkout overview');
    static finishOnCheckoutOverview = PageElement.located(By.xpath("//div[@class='cart_footer']/descendant::a[contains(text(), 'FINISH')]")).describedAs('finish on checkout overview');
    static titleOfFirstItemOnCheckoutOverview = PageElement.located(By.xpath("(//div[@class='cart_list']/descendant::div[@class='cart_item']/descendant::div[@class='inventory_item_name'])[1]")).describedAs('name of first item on checkout overview');
    static descriptionOfFirstItemOnCheckoutOverview = PageElement.located(By.xpath("(//div[@class='cart_list']/descendant::div[@class='cart_item']/descendant::div[@class='inventory_item_desc'])[1]")).describedAs('description of first item on checkout overview');
    static priceOfFirstItemOnCheckoutOverview = PageElement.located(By.xpath("(//div[@class='cart_list']/descendant::div[@class='cart_item']/descendant::div[@class='inventory_item_price'])[1]")).describedAs('price of first item on checkout overview');
    static thankYouForTheOrderText = PageElement.located(By.xpath("//h2[contains(text(), 'THANK YOU')]")).describedAs('text of thanks for the order')
}
