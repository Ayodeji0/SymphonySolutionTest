# SymphonySolutionTest
# Description
This is a test on how to automate saucepage using playwright with typescript,the test automate and verified the login page and sorted the names of inventory from A-Z and Z-A respectively
# STEPS ON HOW TO RUN IT ON LOCAL
This is a typscript project, so the first thing to do is to run npm install  in your terminal editor preferabbly vscode
This will install all the dependencies
# Arrangement 
This code is a page object model, so it has 2 pages and one test page
the first page is the login page and the second page is the action page
while the test page is the demotest.spec.ts page, this is the page where the test is run
The login page has the element selector where all the element are selected 
The action page is where actions are perfomed on the elements selected, the actions are the click, fill and all the sorting activities 
The demotestspec.ts page is where the test is run the login page and the activity page is imported to the test page because this is where the running takes place
# HOW TO RUN THE TEST
Once you have installed the dependency by running npm install now the stage is set to run the test
there are many ways to run this test
* On you terminal you can use either npx playwright test, npx playwright test --ui npx playwright test --headed
  1.npx playwright test will run the test on all multiple browsers and it is done in the endless mood after runnung you can run npx playwright --show-report to see the result in html format on your screen
  2. npx playwright --ui This will run the test on the UI, where you can see the result on your screen instead terminal, the beauty of this is you see the result as it runs and can see the result immediately without going to the terminal
  3. npx playwright --headed. This will run the script in an visible mode whereby you see the code as it runs on the multiple browers, by defualt playwright run in headless mode but with this command you see the activity as it runs.
