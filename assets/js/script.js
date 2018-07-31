$( document ).ready(function(){
  //math ramdom for the objective
  var objective = Math.floor(Math.random()*101+30)
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  var userTotal= 0; 
  var wins= 0;
  var losses= 0;
  var userTotal= 0; 
  var wins= 0;
  var losses= 0;
  var backsound= new Audio('./assets/sounds/crystal_cave.wav')
//set the objective
$('#goal').text(objective);
//crystal values
  $('#finalTotal').text("current score: " + userTotal);
  //win/loss tracker
$('#numberWins').text("wins: " + wins);
$('#numberLosses').text("losses: " + losses);
  //reset the game
 function reset(){
  objective= Math.floor(Math.random()*101+30);
      $('#goal').text(objective);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text("current score: " + userTotal);
 };
//add to current score then compare to objective number and check for win/loss
$('#crystal0').on('click',function crystal0(){
  $('#winLoss').text("")
  userTotal = userTotal + num1;
  backsound.play()
  console.log("New userTotal= " + userTotal);
  $('#finalTotal').text("current score: " + userTotal); 
        //sets win/lose conditions
        switch(expression) {
          case userTotal === objective:
              yay()
              break;
          case userTotal > objective:
            loser();
      }
});

$('#crystal1').on('click',function crystal1(){
  $('#winLoss').text("")
  userTotal = userTotal + num2;
  backsound.play()
  console.log("New userTotal= " + userTotal);
  $('#finalTotal').text("current score: " + userTotal); 
      if (userTotal === objective){
        yay();
      }
      else if ( userTotal > objective){
        loser();
      } 
});
$('#crystal2').on('click',function crystal2(){
  $('#winLoss').text("")
  userTotal = userTotal + num3;
  backsound.play()
  console.log("New userTotal= " + userTotal);
  $('#finalTotal').text("current score: " + userTotal);
        if (userTotal === objective){
        yay();
      }
      else if ( userTotal > objective){
        loser();
      } 
});
$('#crystal3').on('click',function crystal3(){
  $('#winLoss').text("")
  userTotal = userTotal + num4;
  backsound.play()
  console.log("New userTotal= " + userTotal);
  $('#finalTotal').text("current score: " + userTotal); 
        if (userTotal === objective){
        yay();
      }
      else if ( userTotal > objective){
        loser();
      }
});
 //adds to the win total
 function yay(){
  $('#winLoss').text("You Won!");
    wins++; 
    $('#numberWins').text("wins: " + wins);
    reset();
  }
  //adds to the loss total
  function loser(){
  $('#winLoss').text("You Lose!");
    losses++;
    $('#numberLosses').text("losses: " + losses);
    reset()
  }
});