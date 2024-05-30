Feature: Checkout
    As a ecommerce user
    Chris wants proceed with the checkout at the SauceDemo platform
    So he can succeed with the buying of this products at the ecommerce

    Background:
    Given "Chris" is authenticated on the SauceDemo platform


  Scenario: Add a product into the cart
    When he adds a product into the cart
    Then he should see that the cart now has the proper product in there

  Scenario: Checkout and dispatch a product
    And he adds a product into the cart
    And he completes the checkout after the product was added
    Then he should see that the order has been properly dispatched
