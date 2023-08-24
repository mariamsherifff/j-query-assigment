$(".sing").ready(function(){
    $(".paragraph").not($(this).next()).hide(0)
    $("#paragraph").show(0);
})

$("#sideBar span").ready(function(){
    let sideBarInnerWidth = $(".sideBar-inner").innerWidth();
    $("#sideBar").css({left:-sideBarInnerWidth})
})

$('.sing').click(function(){
    
    $('.paragraph').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

$("#sideBar span" ).click(function(){
    
    $("#sideBar").animate({left:'0px'}, 1000)
})
$("#x").click(function(){
    let width=$(".sideBar-inner").innerWidth();
    $("#sideBar").animate({left:-width} ,1000)
})

var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#redcon").text("your available character finished");
                
            }
        else{
        
        $("#redcon").text(AmountLeft);
        }
})
var countDownDate = new Date("dec 30, 2023 15:37:25").getTime();
var x = setInterval(function() {

var now = new Date().getTime();
var distance = countDownDate - now;
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let temp=`<div class="col-3 ">
      <div class="days ">${days}D</div>
  </div>
  
  <div class="col-3">
      <div class="days ">${hours}h</div>
  </div>
  
  <div class="col-3">
      <div class="days ">${minutes}m</div>
  </div>
  
  <div class="col-3">
      <div class="days ">${seconds}s</div>
  </div>`
  
  document.getElementById("time").innerHTML = temp

  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);