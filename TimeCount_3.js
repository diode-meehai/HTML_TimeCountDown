//-------- TimeCount -------//
var interval_3 = null;
var hours_3 = 0;        //  <----
var minutes_3 = 0;      //  <----
var seconds_3 = 0;      //  <----

function RunTimeCount_3() {
    document.getElementById("ShowTime_3").innerHTML = hours_3 + " h : " + minutes_3 + " m : " + seconds_3 + " s";   //  <---- 
    if(interval_3 == null)
    {
        interval_3 = setInterval(TimeCount_3, 1000);
    }
 
}  

function RunTimeCountStop_3() {
    if (interval_3 != null) 
    {
        clearInterval(interval_3);
        interval_3 = null;
        hours_3 = 0;minutes_3 = 0;seconds_3 = 0;
    }
}

function TimeCount_3() 
{
    if(seconds_3 == 60) //60
    {
        seconds_3 = 0
        minutes_3++
    }
    if(minutes_3 == 60)
    {
        minutes_3 = 0
        hours_3++
    }

    // Output
    document.getElementById("ShowTime_3").innerHTML = hours_3 + " h : " + minutes_3 + " m : " + seconds_3 + " s";
    seconds_3++ ;
}
//-------- TimeCount -------//



// -------------------- Time CountDown ------------------ //
var interval_countDown_3 = null;

function TimeCountDown_3() {

    if (interval_countDown_3 === null) {

        document.getElementById("month_in_3").disabled = true;
        document.getElementById("day_in_3").disabled = true;
        document.getElementById("Year_in_3").disabled = true;

        document.getElementById("hours_in_3").disabled = true;
        document.getElementById("minutes_in_3").disabled = true;
        document.getElementById("seconds_in_3").disabled = true;
        //alert("Time CountDown 1");
        interval_countDown_3 = setInterval(countDown_3, 1000);
    }
}

function TimeCountDownStop_3() {
   if (interval_countDown_3 !== null) 
   {
       clearInterval(interval_countDown_3);
       interval_countDown_3 = null;

       d_3 = new Date();
       
       document.getElementById('month_in_3').value = d_3.getMonth() + 1;
       document.getElementById('day_in_3').value =  d_3.getDate();
       document.getElementById('Year_in_3').value =  d_3.getFullYear();

       document.getElementById("month_in_3").disabled = false;
       document.getElementById("day_in_3").disabled = false;
       document.getElementById("Year_in_3").disabled = false;

       document.getElementById('hours_in_3').value = d_2.getHours();
       document.getElementById('minutes_in_3').value = d_2.getMinutes();
       document.getElementById('seconds_in_3').value = d_2.getSeconds();

       document.getElementById("hours_in_3").disabled = false;
       document.getElementById("minutes_in_3").disabled = false;
       document.getElementById("seconds_in_3").disabled = false;
       //document.getElementById("ShowTime").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
   }
}

// Set the date we're counting down to
function countDown_3()
{   
    var hours_in_3 = document.getElementById('hours_in_3').value;
    var minutes_in_3 = document.getElementById('minutes_in_3').value;
    var seconds_in_3 = document.getElementById('seconds_in_3').value;

    const monthNames_3 = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    month_in_3 = document.getElementById('month_in_3').value
    var mont_3 = monthNames_3[month_in_3 -1]
    var day_3 = document.getElementById('day_in_3').value
    var Year_3 = document.getElementById('Year_in_3').value
    //alert(mont+ " " + day + ", " + Year);
    
    // Set the date we're counting down to
    var countDownDate_3 = new Date( '"' + mont_3 + " " + day_3 + ", " + Year_3 + '"' + hours_in_3 + ":" +  minutes_in_3 + ":" +  seconds_in_3).getTime();

    // Get today's date and time
    var now_3 = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance_3 = countDownDate_3 - now_3;
        
    // Time calculations for days, hours, minutes and seconds
    var days_C3 = Math.floor(distance_3 / (1000 * 60 * 60 * 24));
    var hours_C3 = Math.floor((distance_3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_C3 = Math.floor((distance_3 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_C3 = Math.floor((distance_3 % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    document.getElementById("TimeCountDow_3").innerHTML = days_C3 + "d " + hours_C3 + "h " + minutes_C3 + "m " + seconds_C3 + "s ";
        
    // If the count down is over, write some text 
    if (distance_3 < 0) {
        document.getElementById("TimeCountDow_3").innerHTML = "EXPIRED";
    }           
}
// -------------------- Time CountDown ------------------ //