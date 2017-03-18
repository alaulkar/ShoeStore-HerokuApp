Feature: Monthly shoe release
  As a user of Shoe store
  I want to be able to visit a link for each month and see the shoes being released
  
@MonthScenario
  Scenario Outline: Month should display a shoe list with it's image and pricing 
    Given I am on rb-shoe-store.herokuapp.com
    When I click on <month>
    Then I should see "Shoe Description"
    And I should see "shoe image"
    And I should also see "Shoe Price"

    Examples:
      | month | 
      |     1 | 
      |     2 |
      |     3 | 
      |     4 | 
      |     5 | 
      |     6 | 
      |     7 | 
      |     8 | 
      |     9 | 
      |     10| 
      |     11| 
      |     12|