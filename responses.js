function getBotResponse(input){
    if(input == "x-small"){
        return "you chose xsmall";
    }else if (input == "medium"){
        return "you chose medium";
    }else if (input == "small"){
        return "you chose small";
    }else if (input == "large"){
        return "you chose large";
    }else{
        return "I don't understand, try again";
    }
}