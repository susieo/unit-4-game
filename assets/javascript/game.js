$(document).ready(function() {
    var savedNum = Math.floor(Math.random() * 12);
    var savedNum2 = Math.floor(Math.random() * 20);
    var savedNum3 = Math.floor(Math.random() * 50);
    var savedNum4 = Math.floor(Math.random() * 70);
    var randomnumber = Math.floor(Math.random() * 200);

    var score=0;
   
    var imageBtn = $("<button>");
    var imageBtn2 = $("<button>");
    var imageBtn3 = $("<button>");
    var imageBtn4 = $("<button>");

    imageBtn.addClass("operation-button button-color picture");  
    imageBtn2.addClass("operation-button button-color picture2");  
    imageBtn3.addClass("operation-button button-color picture3");  
    imageBtn4.addClass("operation-button button-color picture4");  

    // imageBtn.attr("data-number", savedNum);
    // imageBtn2.attr("data-number", savedNum2);
    imageBtn.val(savedNum)
    imageBtn2.val(savedNum2)
    imageBtn3.val(savedNum3) 
    imageBtn4.val(savedNum4)

    $("#buttons").append(imageBtn);
    $("#buttons").append(imageBtn2);
    $("#buttons").append(imageBtn3);
    $("#buttons").append(imageBtn4);
    $("#displayrandom").append(randomnumber);
   

    console.log("este es el numero uno", savedNum);
    console.log("este es el numero dos ",savedNum2);
    console.log("este es el numero uno", savedNum3);
    console.log("este es el numero dos ",savedNum4);

    // var savedNum = Math.floor(Math.random() * 12);
    // // var savedNum2 = Math.floor(Math.random() * 20);
    // console.log(savedNum);
    // // $("#btn").click(function(){
    // //     $("#btn").val(savedNum);
    // // });
    // // var letterBtn = $("<button>");
    // // // letterBtn.addClass("letter-button letter letter-button-color");  
    // // letterBtn.attr(savedNum);
    // // letterBtn.text(letters[i]);
    // // $("#buttons").append("<img src=/Users/susie/Bootstrap-Portfolio/tortuga.jpg width=400 height=400  />",letterBtn);
    // // $('button').attr(savedNum);
    // $('button').append("<img src=/Users/susie/Bootstrap-Portfolio/tortuga.jpg width=400 height=400  />").attr(savedNum);
    // // $("#btn2").append("<img src=/Users/susie/Bootstrap-Portfolio/tortuga.jpg width=400 height=400  />").val(savedNum2).button();
    
    $( ".operation-button" ).on( "click", function() {
        console.log($(this).val());        
        score+=parseInt($(this).val());
        // result+=$(this).val();
        console.log(score);
        $("#display").html(" ");
        $("#display").append(score);
        if(score === randomnumber)
        {
            $("#result").text("You are a winner");
        }
        else if(score > randomnumber)
        {
            $("#result").text("You are a loser");
        }
    });

});



 