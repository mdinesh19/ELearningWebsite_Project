package stepdefinitions;

import java.util.Random;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import common.Wrapper;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class TrainingSession_Stepdefinition {
	Logger report = Logger.getLogger("TrainingSession_Stepdefinition");
	static WebDriver driver;
	@Given("^I launch the url$")
	public void i_launch_the_url() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
        driver.get(Wrapper.getDataFromExcel("Login", "ApplicationURL"));  
	}

	@And("^I enter the valid username in username textbox$")
	public void i_enter_the_valid_username_in_username_textbox() throws Throwable {
	    driver.findElement(By.xpath("//input[@id='login']")).sendKeys(Wrapper.getDataFromExcel("Login", "Username"));    
	}

	@Then("^I enter the valid password in password textbox$")
	public void i_enter_the_valid_password_in_password_textbox() throws Throwable {
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys(Wrapper.getDataFromExcel("Login", "Password"));   
	}

	@And("^I click on Login button$")
	public void i_click_on_Login_button() throws Throwable {
	    driver.findElement(By.xpath("//button[@name='submitAuth']")).click();
	}

	@Then("^I verify the title of the webpage$")
	public void i_verify_the_title_of_the_webpage() throws Throwable {
	    String actualTitle= driver.getTitle();
	    String expectedTitle="My Organization - My education";
	    Assert.assertEquals(actualTitle, expectedTitle);
	    report.info("Login to elearning website is successful");   
	}

	@Given("^I click on Administration tab$")
	public void i_click_on_Administration_tab() throws Throwable {
		driver.findElement(By.linkText("Administration")).click();
	}

	@Then("^I click on Add a training session link$")
	public void i_click_on_Add_a_training_session_link() throws Throwable {
		driver.findElement(By.linkText("Add a training session")).click();
	}

	@And("^I enter valid data in Session name textbox$")
	public void i_enter_valid_data_in_Session_name_textbox() throws Throwable {
		driver.findElement(By.xpath("//input[@id='add_session_name']")).sendKeys(Wrapper.getDataFromExcel("CreateTrainingSession", "SessionName")+Math.random());
	}
	
	@Then("^I select valid coach name in coach name dropdown$") 
	public void i_select_valid_coach_name_in_coach_name_dropdown() throws Throwable {
		driver.findElement(By.xpath("//span[contains(@id,'coach_username-container')]")).click();;
		driver.findElement(By.xpath("//input[contains(@class, 'search__field')]")).sendKeys(Wrapper.getDataFromExcel("CreateTrainingSession", "CoachName"));
		Actions actions = new Actions(driver);
		WebDriverWait wait = new WebDriverWait(driver,20);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//li[text()='Abc Def']")));
		WebElement coachFieldValue = driver.findElement(By.xpath("//li[text()='Abc Def']"));
		actions.moveToElement(coachFieldValue).click().perform();
	}
	
	@And("^I click on Next step button in Add a training session page$")
	public void i_click_on_Next_step_button_in_Add_a_training_session_page() throws Throwable {
	   driver.findElement(By.xpath("//button[@id='add_session_submit']")).click();
	}

	@Then("^I select course in course list window$")
	public void i_select_course_in_course_list_window() throws Throwable {
	    WebElement courseslistDropdown = driver.findElement(By.xpath("//select[contains(@name,'NoSessionCoursesList')]"));
		Select select = new Select(courseslistDropdown);
	    select.selectByVisibleText(Wrapper.getDataFromExcel("CreateTrainingSession", "CourseName"));
	}

	@And("^I click on > button$")
	public void i_click_on_button() throws Throwable {
	    driver.findElement(By.xpath("//button[@name='add_course']")).click();
	}
	
	@And("I click on Next step button in Add courses to this session page")
	public void i_click_on_Next_step_button_in_Add_courses_to_this_session_page(){
		 driver.findElement(By.xpath("//button[@name='next']")).click();
	}

	@And("^I enter student name in Portal users list$")
	public void i_enter_student_name_in_Portal_users_list() throws Throwable {
	    driver.findElement(By.xpath("//input[@id='user_to_add']")).sendKeys(Wrapper.getDataFromExcel("CreateTrainingSession", "StudentName"));
	}

	@Then("^I click on the student name link$")
	public void i_click_on_the_student_name_link() throws Throwable {
		Actions actions = new Actions(driver);
		WebDriverWait wait = new WebDriverWait(driver,20);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(), 'Dinesh')]")));
		Thread.sleep(2000);
		WebElement studentNameValue = driver.findElement(By.xpath("//a[contains(text(), 'Dinesh')]"));
		actions.moveToElement(studentNameValue).click().perform();	    
	}

	@And("^I click on Finish session creation button$")
	public void i_click_on_Finish_session_creation_button() throws Throwable {
	    driver.findElement(By.xpath("//button[@name='next']")).click();
	}

	@And("^I verify whether the session is successfully created$")
	public void i_verify_whether_the_session_is_successfully_created() throws Throwable {	   
	   if(driver.findElement(By.xpath("//div[text()='Update successful']")).isDisplayed()) {
		   System.out.println("Creation of training session is successful");	
		   report.info("Create training session - successful");
	   }   
	   else {
		   System.err.println("Creation of training session failed");
		   report.error("Create training session - Failed");
	   }
	}

	@Then("^I click on careers icon$")
	public void i_click_on_careers_icon() throws Throwable {
	    driver.findElement(By.xpath("//img[@title='Careers']")).click();
	}

	@And("^I click on Add icon$")
	public void i_click_on_Add_icon() throws Throwable {
		driver.findElement(By.xpath("//img[@title='Add']")).click();
	}

	@Then("^I enter valid data in Name textbox of Add career page$")
	public void i_enter_valid_data_in_Name_textbox_of_Add_career_page() throws Throwable {
		driver.findElement(By.xpath("//input[@id='career_name']")).sendKeys(Wrapper.getDataFromExcel("AddCareersPromotion", "CareerName"));
		Thread.sleep(3000);
	}

	@And("^I click on Add button in Add career page$")
	public void i_click_on_Add_button_in_Add_career_page() throws Throwable {
		driver.findElement(By.xpath("//button[@id='career_submit']")).click();
	}

	@Then("^I verify whether the career is successfully added$")
	public void i_verify_whether_the_career_is_successfully_added() throws Throwable {
		if(driver.findElement(By.xpath("//div[text()='Item added']")).isDisplayed()) {
			System.out.println("Career addition is successful");	
			report.info("Add career - successful");
		}	
		else {
			System.err.println("Career addition failed");
			report.error("Add career - Failed");
		}	
	    
	}

	@And("^I click on Careers and promotions link$")
	public void i_click_on_Careers_and_promotions_link() throws Throwable {
	    driver.findElement(By.linkText("Careers and promotions")).click();    
	}

	@Then("^I click on Promotions icon$")
	public void i_click_on_Promotions_icon() throws Throwable {
		 driver.findElement(By.xpath("//img[@title='Promotions']")).click();    
	}

	@Then("^I enter valid data in Name textbox of Add promotion page$")
	public void i_enter_valid_data_in_Name_textbox_of_Add_promotion_page() throws Throwable {
	    driver.findElement(By.xpath("//input[@name='name']")).sendKeys(Wrapper.getDataFromExcel("AddCareersPromotion", "PromotionName"));
	}
	
	@And("^I click on Add button in Add promotion page$")
	public void i_click_on_Add_button_in_Add_promotion_page() throws Throwable {
	    driver.findElement(By.xpath("//button[@id='promotion_submit']")).click();
	}
	
	@Then("^I verify whether the promotion is successfully added$")
	public void i_verify_whether_the_promotion_is_successfully_added() throws Throwable {
		if(driver.findElement(By.xpath("//div[text()='Item added']")).isDisplayed()) {
			System.out.println("Promotion addition is successful");	
			report.info("Add promotion - successful");
		}
		else {
			System.err.println("Promotion addition failed");   
			report.error("Add promotion - Failed");
		}	
	}

	@And("^I click on Add a training session icon$")
	public void i_click_on_Add_a_training_session_icon() throws Throwable {
		driver.findElement(By.xpath("//img[@title='Add a training session']")).click();
	}


	@Given("^I launch the application url \"([^\"]*)\"$")
	public void i_launch_the_application_url(String url) throws Throwable {
		System.setProperty("webdriver.chrome.driver", "Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
        driver.get(url);  
	    
	}

	@And("^I enter the valid username \"([^\"]*)\" in username$")
	public void i_enter_the_valid_username_in_username(String userName) throws Throwable {
		driver.findElement(By.xpath("//input[@id='login']")).sendKeys(userName);    
	}

	@Then("^I enter the valid password \"([^\"]*)\" in password$")
	public void i_enter_the_valid_password_in_password(String password) throws Throwable {
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password); 
	}

	@And("^I enter valid data \"([^\"]*)\" in Session name$")
	public void i_enter_valid_data_in_Session_name(String sessionName) throws Throwable {
		driver.findElement(By.xpath("//input[@id='add_session_name']")).sendKeys(sessionName+Math.random());
	}

	@Then("^I select valid coach name \"([^\"]*)\" in coach name$")
	public void i_select_valid_coach_name_in_coach_name(String coachName) throws Throwable {
		driver.findElement(By.xpath("//span[contains(@id,'coach_username-container')]")).click();;
		driver.findElement(By.xpath("//input[contains(@class, 'search__field')]")).sendKeys(coachName);
		Actions actions = new Actions(driver);
		WebDriverWait wait = new WebDriverWait(driver,20);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//li[text()='Abc Def']")));
		WebElement coachFieldValue = driver.findElement(By.xpath("//li[text()='Abc Def']"));
		actions.moveToElement(coachFieldValue).click().perform();
	}

	@Then("^I select course \"([^\"]*)\" in course list$")
	public void i_select_course_in_course_list(String courseList) throws Throwable {
		WebElement courseslistDropdown = driver.findElement(By.xpath("//select[contains(@name,'NoSessionCoursesList')]"));
		Select select = new Select(courseslistDropdown);
	    select.selectByVisibleText(courseList);
	}

	@And("^I enter student name \"([^\"]*)\" in users list$")
	public void i_enter_student_name_in_users_list(String studentName) throws Throwable {
		driver.findElement(By.xpath("//input[@id='user_to_add']")).sendKeys(studentName);
	}

	@Then("^I enter valid data \"([^\"]*)\" in Name field of Add career page$")
	public void i_enter_valid_data_in_Name_field_of_Add_career_page(String careerName) throws Throwable {
		driver.findElement(By.xpath("//input[@id='career_name']")).sendKeys(careerName);
		Thread.sleep(3000);
	}

	@Then("^I enter valid data \"([^\"]*)\" in Name field of Add promotion page$")
	public void i_enter_valid_data_in_Name_field_of_Add_promotion_page(String promotionName) throws Throwable {
		driver.findElement(By.xpath("//input[@name='name']")).sendKeys(promotionName);
	}

	@And("^I close the browser$")
	public void i_close_the_browser() {
		driver.quit();
	}

	
}
