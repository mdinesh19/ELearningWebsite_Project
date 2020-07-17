@CreateTrainingSession_AddCareerPromotionSession_Excel
Feature: This feature is to create training session, add career, promotion and session
  I want to use this template for my feature file

  @ElearningLogin
  Scenario: To verify whether the admin user is able to login to the application
    Given I launch the url
    And I enter the valid username in username textbox
    Then I enter the valid password in password textbox
    And I click on Login button
    Then I verify the title of the webpage

  @CreateTrainingSession
  Scenario: To verify whether application allows admin to create training session
    Given I click on Administration tab
    Then I click on Add a training session link
    And I enter valid data in Session name textbox
    Then I select valid coach name in coach name dropdown
    And I click on Next step button in Add a training session page
    Then I select course in course list window
    And I click on > button
    And I click on Next step button in Add courses to this session page
    And I enter student name in Portal users list
    Then I click on the student name link
    And I click on Finish session creation button
    And I verify whether the session is successfully created

  @AddCareersPromotionAndSession
  Scenario: To verify whether application allows admin to add career, promotion & add a session in career and promotions link
    Given I click on Administration tab
    And I click on Careers and promotions link
    Then I click on careers icon
    And I click on Add icon
    Then I enter valid data in Name textbox of Add career page
    And I click on Add button in Add career page
    Then I verify whether the career is successfully added
    And I click on Careers and promotions link
    Then I click on Promotions icon
    And I click on Add icon
    Then I enter valid data in Name textbox of Add promotion page
    And I click on Add button in Add promotion page
    Then I verify whether the promotion is successfully added
    And I click on Add a training session icon
    And I enter valid data in Session name textbox
    Then I select valid coach name in coach name dropdown
    And I click on Next step button in Add a training session page
    Then I select course in course list window
    And I click on > button
    And I click on Next step button in Add courses to this session page
    And I enter student name in Portal users list
    Then I click on the student name link
    And I click on Finish session creation button
    And I verify whether the session is successfully created
		And I close the browser