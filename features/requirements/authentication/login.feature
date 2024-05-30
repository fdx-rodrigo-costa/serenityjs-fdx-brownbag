Feature: Login
    As a ecommerce user
    Mamta wants to login at the SauceDemo platform
    So she can buy items for her 

  Scenario: Login with a valid user on the SauceDemo platform
    Given "Mamta" is on SauceDemo platform
    When she tries to login using valid credentials
    Then she should see that the login was successfully performed
