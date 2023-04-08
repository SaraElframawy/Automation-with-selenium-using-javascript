import { Builder, By, Key } from 'selenium-webdriver';



async function example1() {
  // Launch the browser
  let driver = await new Builder()
    .forBrowser("firefox")  
    .build();

  // Navigate to our app
  await driver.get("https://lambdatest.github.io/sample-todo-app/");

  // To do
  await driver.findElement(By.id("sampletodotext")).sendKeys("Learn selenium", Key.RETURN);
  

  // Close the browser
  await driver.quit();
 
}

example1();

