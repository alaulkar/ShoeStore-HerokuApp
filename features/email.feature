Feature: email submission for reminder 
  As a user of Shoe store
  I want to be able to submit my email in order to be reminded of upcoming shoe releases 

  @emailScenario
  Scenario: user should be able to access email input field and able to submit a valid email address  
    Given I am on rb-shoe-store.herokuapp.com
    When I provide a valid email address
    And click "Submit"
    Then I should see "a success message"
    And submitted email address
