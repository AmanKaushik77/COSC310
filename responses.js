var productType = 0;
var budgetType = 0;
var count = 0;
var budget
function getBotResponse(input){
    input = input.toLowerCase();
    input = input.trim();
    // type of product
    if(count == 0){
        count++;
        if(input == "watch"){
            productType = 1;
            return "you chose watch, what is your budget?";
        }else if (input == "laptop"){
            productType = 2;
            return "you chose laptop, what is your budget?";
        }else if (input == "phone" || input == "phones" || input == "iphone"){
            productType = 3;
            return "you chose phone, what is your budget?";
        }else if (input == "tablet" || input == "ipad"){
            productType = 4;
            return "you chose tablet, what is your budget?";
        }else{
            count = 0;
            return "Sorry, didn't seem to understand, please try again :)"
        }
    }
    // getting budget 
    if (count == 1){
        var budget = parseInt(input);
        count ++;
        // budget for watch **needs work**
        if (productType == 1){
            if(budget < 300){
                count = 1;
                return "sorry nothing fits your budget, try again";
            }else if (budget >= 300 && budget < 700){
                budgetType = 1;
                return "Got it! what size would you prefer (x-small, small, medium, large)?";
            }
        }
        // budget for laptop 
        if (productType == 2){
            if(budget < 1300){
                count = 1;
                return "sorry nothing fits your budget, try again";
            }else if(budget >= 1300 && budget < 1500){
                return "The MacBook Air (M1, 2020) is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website."
            }else if(budget >= 1500 && budget < 2500){
                budgetType =  1;
                return "Got it! what size would you prefer (small or large)?";
            }else if (budget >= 2500 && budget < 3200){
                budgetType = 2;
                return "Got it! what size would you prefer (small or large)?";
            }else if (budget >= 3200 ){
                budgetType = 3;
                return "Got it! what size would you prefer (small or large)?"
            }else{
                count = 1;
                return "Sorry, didn't seem to understand, please try again :)"
            }
        }
        // Budget for Phone 
        if (productType == 3){
            if(budget < 700){
                count = 1;
                return "sorry nothing fits your budget, try again";
            }else if(budget >= 700 && budget < 900){
                budgetType = 1;
                return "Got it! what size would you prefer (small, medium, large)?";
            }else if (budget >= 900 && budget < 1000){
                budgetType = 2;
                return "Got it! what size would you prefer (small, medium, large)?";
            }else if (budget >= 1000 && budget < 1300){
                budgetType = 3;
                return "Got it! what size would you prefer (x-small, small, medium, large)?";
            }else if (budget >= 1300 ){
                budgetType = 4;
                return "Got it! what size would you prefer (x-small, small, medium, large)?";
            }else{
                count = 1;
                return "Sorry, didn't seem to understand, please try again :)"
            }
        }
        //Budget for tablet 
        if (productType == 4){
            if(budget < 450){
                count = 1;
                return "sorry nothing fits your budget, try again";
            }else if(budget >= 450 && budget < 680){
                budgetType = 1;
                return "Got it! what size would you prefer (small or large)?";
            }else if(budget >= 680 && budget < 1100){
                budgetType = 2;
                return "Got it! what size would you prefer (small or large)?";
            }else if (budget >=1100 ){
                budgetType = 3;
                return "Got it! what size would you prefer (small, medium, large)?";
            }else{
                count = 1;
                return "Sorry, didn't seem to understand, please try again :)"
            }
        }
    }
    // size and recomendation 
    if(count == 2){
        // recomendations for laptop
        if(productType == 2 && budgetType == 1){
            if(input == "small"){
                return "The MacBook Air (M1, 2020) is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website."
            }else if(input == "large"){
                return "The MacBook Air (M2, 2022) is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else{
                count = 2;
                return "Sorry, didn't seem to understand, please try again :)"
            }
        }else if (productType == 2 && budgetType == 2){
            if(input == "small"){
                return "The MacBook Air (M2, 2022) is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website."
            }else if(input == "large"){
                return "The MacBook Pro (2021) 14-in is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else{
                count = 2;
                return "Sorry, didn't seem to understand, please try again :)"
            }
        } else if(productType == 2 && budgetType == 3){
            if(input == "small"){
                return "The MacBook Pro (2021) 14-in is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website."
            }else if(input == "large"){
                return "The MacBook Pro (2021) 16-in is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else{
                count = 2;
                return "Sorry, didn't seem to understand, please try again :)"
            }
        }
        // recomendations for phones
        if(productType == 3 && budgetType == 1){
            if(input == "small"){
                return "The IPhone SE is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if(input == "medium"){
                return "The IPhone 13 mini is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if(input == "large"){
                return "The IPhone 12 is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else{
                count = 2;
                return "Sorry, didn't seem to understand, please try again :)"
            }
        }else if (productType == 3 && budgetType == 2){
            if(input == "small"){
                return "The IPhone SE is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if(input == "medium"){
                return "The IPhone 13 mini is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if(input == "large"){
                return "The IPhone 12 is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else{
                count = 2;
                return "Sorry, didn't seem to understand, please try again :)"
            }
        }else if(productType == 3 && budgetType == 3){
            if (input == "x-small"){
                return "The IPhone SE is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if(input == "small"){
                return "The IPhone 13 mini is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if(input == "medium"){
                return "The IPhone 12, IPhone 13, and IPhone 14 fit this screen size but the Phones cost $850, $1000, $1100 each respectively. A specification comparison can be made on the Apple website to list every one of their differences.";
            }else if(input == "large"){
                return "The IPhone 14 plus is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else{
                count = 2;
                return "Sorry, didn't seem to understand, please try again :)"
            }
        }else if(productType == 3 && budgetType == 4){
            if (input == "x-small"){
                return "The IPhone SE is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if(input == "small"){
                return "The IPhone 13 mini is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if(input == "medium"){
                return "The IPhone 12, IPhone 13, and IPhone 14 fit this screen size but the Phones cost $850, $1000, $1100 each respectively. A specification comparison can be made on the Apple website to list every one of their differences.";
            }else if(input == "large"){
                return " Both the IPhone 14 and IPhone 14 Pro Max fit this screen size but the IPhone 14 Pro Max is $300 more than the IPhone 14 Plus. A specification comparison can be made on the Apple website to list every one of their differences.";
            }else{
                count = 2;
                return "Sorry, didn't seem to understand, please try again :)"
            }
        }
        // recommendations for tablets
        if(productType == 4 && budgetType == 1){
            return "The IPad Generation 9 and Generation 10 are the devices for you! They fit the information you have provided, and more information about and comparisons between these devices can be found at the apple website.";
        }else if(productType == 4 && budgetType == 2){
            if(input == "small"){
                return "The IPad mini is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if (input == "large"){
                return "The IPad Generation 9 and Generation 10 are the devices for you! They fit the information you have provided, and more information about and comparisons between these devices can be found at the apple website.";
            }else{
                count = 2;
                return "Sorry, didn't seem to understand, please try again :)"
            }
        }else if(productType == 4 && budgetType == 3){
            if(input == "small"){
                return "The IPad mini is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website."; 
            }else if (input == "medium"){
                return "The IPad Generation 9 and Generation 10 are the devices for you! They fit the information you have provided, and more information about and comparisons between these devices can be found at the apple website.";
            }else if (input == "large"){
                return "The IPad Pro which comes in the listed sizes is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else{
                count = 2;
                return "Sorry, didn't seem to understand, please try again :)"
            }
        }

    }
}