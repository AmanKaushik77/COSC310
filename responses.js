var productType = 0;
var budgetType = 0;
var count = 0;
var budget
function getBotResponse(input){
    
    if(count == 0){
        count++;
        if(input == "watch"){
            productType = 1;
            
            return "you chose watch, what is your budget?";
        }else if (input == "tv box"){
            productType = 2;
            
            return "you chose tv box, what is your budget?";
        }else if (input == "phone"){
            productType = 3;
            
            return "you chose phone, what is your budget?";
        }else if (input == "tablet"){
            productType = 4;
            
            return "you chose tablet, what is your budget?";
        }
    }

    if (count == 1){
        var budget = parseInt(input);
        count ++;
        
        if (productType == 1){
            if(budget < 300){
                count = 0;
                return "sorry nothing fits your budget, try again";
            }else if (budget >= 300 && budget < 700){
                budgetType = 1;
                return "Got it! what size would you prefer (x-small, small, medium, large)?"
            }
        }
        if (productType == 2){
            if(budget < 100){
                count = 0;
                return "sorry nothing fits your budget, try again";
            }
        }
        if (productType == 3){
            if(budget < 600){
                count = 0;
                return "sorry nothing fits your budget, try again";
            }
        }
        if (productType == 4){
            if(budget < 600){
                count = 0;
                return "sorry nothing fits your budget, try again";
            }
        }
    }

    if(count == 2){
        return "we doing good!";
    }
}
function getProduct(type){
    
}