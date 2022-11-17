# Charles. (Apple Product Recommendation Bot) COSC 310

## What does Charles do?
Charles is a ChatBot the recommends the user their ideal Apple product based on the information gathered in the converstation.

## Charles Code
Charles has been developed in HTML, CSS and JavaScript. Here is a brief description of the operations each file runs.<br/>

index.html - This formats the home page of Charles. <br/>
about.html - This formats the about page of Charles.<br/>
styles.css - This file is responsible of the looks aspect of Charles (ex. Color, font, font-size, etc...)<br/>
app.js - This JavaScript file is responsible for the processing of the user input and sending it to the response.js file. This file also pastes the bots responses.<br/>
response.js - This JavaScript file is responsible for analizing the text and finding the proper responses that are hardcoded in the file.<br/>
response.test.js - Added for Assignment 3. This JavaScript file is responsible for unit testing of the major functions used in the response.js file.<br/>

## Testing
Jest framework was setup for unit testing for Charles.<br/>
The response.test.js files contains the code for all the unit tests of all the major functions.<br/>

17 test cases were written and all test cases pass successfully.<br/>

The list of the fuctions tested and their test cases are summarized as follows:<br/>
 
function greetings<br/>
1. when count is 0. (count is used to track the depth of the conversation).<br/>
2. when count is 1.<br/>
3. when count is 2.<br/>

function convoOne<br/>
1. if user chose watch as product type.<br/>
2. if user chose laptop as product type.<br/>
3. if user chose phone as product type.<br/>
4. if user chose tablet as product type.<br/>
5. if user chose desktop as product type.<br/>


function convoTwo<br/>
1. user chose watch and specified budget as 280 dollars.<br/>
2. user chose laptop and specified budget as 1440 dollars.<br/>
3. user chose phone and specified budget as 800 dollars.<br/>
4. user chose tablet and specified budget as 1200 dollars.<br/>
5. user chose desktop and specified budget as 1500 dollars.<br/>

function convoThree<br/>
1. user chose laptop, specified budget and size.<br/>
2. user chose phone, specified budget and size.<br/>
3. user chose tablet, specified budet and size.<br/>
4. user chose desktop, specified budget and size.<br/> 

All test cases pass successfully.<br/>

![Snippet of test code](https://imgur.com/0GTsvvc)<br/>



