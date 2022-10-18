


function introMessage (){
    let fm = "Hi my name is Charles and I will be assisting you by recommending you an Apple product perfect for you. Lets get stared, what size would be your device (x-small, small, medium, large)?"
    document.getElementById("starter").innerHTML = '<p class = "botmsg"> <span>' + fm + '</span></p>';
}

introMessage();

function getHResponse(usertxt){
    let cRes = getBotResponse(usertxt);
    let botHtml = '<p class = "botmsg"><span>' + cRes + '</span></p>';
    $("#chat").append(botHtml);

}

function getUserResponse(){
    let usertxt = $("#usertxt").val();

    if (usertxt== ""){
        usertxt =  "please type something here";
    }

    let userHtml = '<p class = "botmsg"><span>' + usertxt + '</span></p>';

    $("#usertxt").val("");
    $("#ochat").append(userHtml);

    setTimeout(() =>{
        getHResponse(usertxt);
    }, 1000)

}
function fullSend(){
    getUserResponse();
}

$("#usertxt").keypress(function(e){
    if(e.which == 13){
        getUserResponse();
    }
})