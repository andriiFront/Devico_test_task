# Devico_test_task
this repository is designed for a test task (Devico) 

TAP **[PREVIEW LINK](https://docs.google.com/document/d/1GdGyLuKCMr3lJUE2PahhIuADuE5uMQNw/edit?usp=sharing&ouid=116817835323586075431&rtpof=true&sd=true)** TO SEE TEST TASK

## **[Task 1](https://docs.google.com/document/d/1BFz-s2ShURCU_ydq1ZeBQmm9VKRtlCYWY6IB9Uf6abo/edit?usp=sharing)**

## Task 2 (Practical task)

#1. 
- Create your repositoy under GitHub
- Create separate repo named Devico_test_task
- Make it available for viewing
Solution: [devico_test_task](https://github.com/andriiFront/devico_test_task/tree/master/devico_test_task)

#2. 
- Go to https://devico.io/
- Find the 'Get in Touch' button under the 'Let's make an extraordinary product together' section
- Write Xpath and CSS selector for that button
- add .txt file with locators into repo from #1
Solution:
- full XPath:   /html/body/div/div/div[2]/section[1]/div/div/div[1]/a/div;
- Xpath:        //a[@class='home-top-section__button-container']/div[@class='button'];
- XPath:        //a[@class='home-top-section__button-container']/div[contains(text(), 'Get in Touch')];
- CSS selector: a.home-top-section__button-container>div.button

#3.
A farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
- chicken = 2 legs
- cows = 4 legs
- pigs = 4 legs
The farmer has counted his animals and he givews you a subtotal for each species. You have to implement a function that reads data from a file and returns the total number of legs of all the animals. Information about all farmer's animals is storedin the animal.json file. Here is an example of an animal.json file:
{
  "pigs": 6,
  "chickens": 12,
  "cows": 21,
}
Return the result in a suitable way.

Solution:
- [Demo](https://andriifront.github.io/devico_test_task/)
- [Code](https://github.com/andriiFront/devico_test_task/tree/master/devico_test_task)
