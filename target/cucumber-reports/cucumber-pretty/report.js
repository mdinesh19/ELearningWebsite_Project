$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TrainingSession_Excel.feature");
formatter.feature({
  "line": 2,
  "name": "This feature is to create training session, add career, promotion and session",
  "description": "I want to use this template for my feature file",
  "id": "this-feature-is-to-create-training-session,-add-career,-promotion-and-session",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CreateTrainingSession_AddCareerPromotionSession_Excel"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "To verify whether the admin user is able to login to the application",
  "description": "",
  "id": "this-feature-is-to-create-training-session,-add-career,-promotion-and-session;to-verify-whether-the-admin-user-is-able-to-login-to-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@ElearningLogin"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I launch the url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the valid username in username textbox",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the valid password in password textbox",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify the title of the webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_launch_the_url()"
});
formatter.result({
  "duration": 14472311700,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_enter_the_valid_username_in_username_textbox()"
});
formatter.result({
  "duration": 249698600,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_enter_the_valid_password_in_password_textbox()"
});
formatter.result({
  "duration": 377305500,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Login_button()"
});
formatter.result({
  "duration": 6416504700,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_verify_the_title_of_the_webpage()"
});
formatter.result({
  "duration": 54207600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "To verify whether application allows admin to create training session",
  "description": "",
  "id": "this-feature-is-to-create-training-session,-add-career,-promotion-and-session;to-verify-whether-application-allows-admin-to-create-training-session",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@CreateTrainingSession"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I click on Administration tab",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on Add a training session link",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I enter valid data in Session name textbox",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select valid coach name in coach name dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on Next step button in Add a training session page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select course in course list window",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on \u003e button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Next step button in Add courses to this session page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter student name in Portal users list",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on the student name link",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I click on Finish session creation button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify whether the session is successfully created",
  "keyword": "And "
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Administration_tab()"
});
formatter.result({
  "duration": 2638769700,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Add_a_training_session_link()"
});
formatter.result({
  "duration": 7420105100,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_enter_valid_data_in_Session_name_textbox()"
});
formatter.result({
  "duration": 3939255600,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_select_valid_coach_name_in_coach_name_dropdown()"
});
formatter.result({
  "duration": 1903181100,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Next_step_button_in_Add_a_training_session_page()"
});
formatter.result({
  "duration": 3065782500,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_select_course_in_course_list_window()"
});
formatter.result({
  "duration": 530061500,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_button()"
});
formatter.result({
  "duration": 495061200,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Next_step_button_in_Add_courses_to_this_session_page()"
});
formatter.result({
  "duration": 2603100800,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_enter_student_name_in_Portal_users_list()"
});
formatter.result({
  "duration": 643950500,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_the_student_name_link()"
});
formatter.result({
  "duration": 4127488200,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Finish_session_creation_button()"
});
formatter.result({
  "duration": 4700274900,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_verify_whether_the_session_is_successfully_created()"
});
formatter.result({
  "duration": 78644200,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "To verify whether application allows admin to add career, promotion \u0026 add a session in career and promotions link",
  "description": "",
  "id": "this-feature-is-to-create-training-session,-add-career,-promotion-and-session;to-verify-whether-application-allows-admin-to-add-career,-promotion-\u0026-add-a-session-in-career-and-promotions-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@AddCareersPromotionAndSession"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I click on Administration tab",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click on Careers and promotions link",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on careers icon",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I click on Add icon",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter valid data in Name textbox of Add career page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I click on Add button in Add career page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify whether the career is successfully added",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I click on Careers and promotions link",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on Promotions icon",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I click on Add icon",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter valid data in Name textbox of Add promotion page",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I click on Add button in Add promotion page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I verify whether the promotion is successfully added",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I click on Add a training session icon",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter valid data in Session name textbox",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I select valid coach name in coach name dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I click on Next step button in Add a training session page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select course in course list window",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I click on \u003e button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on Next step button in Add courses to this session page",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter student name in Portal users list",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on the student name link",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I click on Finish session creation button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I verify whether the session is successfully created",
  "keyword": "And "
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Administration_tab()"
});
formatter.result({
  "duration": 1395276800,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Careers_and_promotions_link()"
});
formatter.result({
  "duration": 4074795900,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_careers_icon()"
});
formatter.result({
  "duration": 2579048700,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Add_icon()"
});
formatter.result({
  "duration": 1735592700,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_enter_valid_data_in_Name_textbox_of_Add_career_page()"
});
formatter.result({
  "duration": 3367596700,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Add_button_in_Add_career_page()"
});
formatter.result({
  "duration": 2152901900,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_verify_whether_the_career_is_successfully_added()"
});
formatter.result({
  "duration": 75449000,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Careers_and_promotions_link()"
});
formatter.result({
  "duration": 2575435600,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Promotions_icon()"
});
formatter.result({
  "duration": 1510758900,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Add_icon()"
});
formatter.result({
  "duration": 2677675800,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_enter_valid_data_in_Name_textbox_of_Add_promotion_page()"
});
formatter.result({
  "duration": 975383000,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Add_button_in_Add_promotion_page()"
});
formatter.result({
  "duration": 2151224100,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_verify_whether_the_promotion_is_successfully_added()"
});
formatter.result({
  "duration": 101132600,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Add_a_training_session_icon()"
});
formatter.result({
  "duration": 3697047500,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_enter_valid_data_in_Session_name_textbox()"
});
formatter.result({
  "duration": 939966400,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_select_valid_coach_name_in_coach_name_dropdown()"
});
formatter.result({
  "duration": 2340065500,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Next_step_button_in_Add_a_training_session_page()"
});
formatter.result({
  "duration": 3070653300,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_select_course_in_course_list_window()"
});
formatter.result({
  "duration": 262241300,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_button()"
});
formatter.result({
  "duration": 130438000,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Next_step_button_in_Add_courses_to_this_session_page()"
});
formatter.result({
  "duration": 2552869100,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_enter_student_name_in_Portal_users_list()"
});
formatter.result({
  "duration": 474418100,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_the_student_name_link()"
});
formatter.result({
  "duration": 4474085300,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_click_on_Finish_session_creation_button()"
});
formatter.result({
  "duration": 4955010700,
  "status": "passed"
});
formatter.match({
  "location": "TrainingSession_Stepdefinition.i_verify_whether_the_session_is_successfully_created()"
});
formatter.result({
  "duration": 998336000,
  "status": "passed"
});
});