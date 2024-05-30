import { By, PageElement } from "@serenity-js/web/lib/screenplay";

export class HomeComponent {
    static swagLabsTitle = PageElement.located(By.xpath("//div[contains(@class, 'app_logo')]")).describedAs('swag labs title home');

    static inventoryItemsList = PageElement.located(By.xpath("//div[@id='inventory_container']/descendant::div[@class='inventory_item']"))
        .describedAs('inventory items list');

    static firstItemOnInventory = PageElement.located(By.xpath("(//div[@id='inventory_container']/descendant::div[@class='inventory_item'])[1]"))
        .describedAs('first item on inventory');


    static inventoryItemsButtonsList = PageElement.located(By.xpath("//div[@id='inventory_container']/descendant::div[@class='inventory_item']/descendant::button"))
        .describedAs('inventory items buttons list');

    static buttonOfFirstItemOnInventory = PageElement.located(By.xpath("(//div[@id='inventory_container']/descendant::div[@class='inventory_item']/descendant::button)[1]"))
        .describedAs('button of first item on inventory');

    static goToCart = PageElement.located(By.xpath("//div[@id='shopping_cart_container']/a")).describedAs("go to cart")


}
