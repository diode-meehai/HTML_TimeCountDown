//-------- TimeCount -------//
var interval_4 = null;
var hours_4 = 0;        //  <----
var minutes_4 = 0;      //  <----
var seconds_4 = 0;      //  <----

function RunTimeCount_4() {
    document.getElementById("ShowTime_4").innerHTML = hours_4 + " h : " + minutes_4 + " m : " + seconds_4 + " s";   //  <---- 
    if(interval_4 == null)
    {
        interval_4 = setInterval(TimeCount_4, 1000);
    }
 
}  

function RunTimeCountStop_4() {
    if (interval_4 != null) 
    {
        clearInterval(interval_4);
        interval_4 = null;
        hours_4 = 0;minutes_4 = 0;seconds_4 = 0;
    }
}

function TimeCount_4() 
{
    if(seconds_4 == 60) //60
    {
        seconds_4 = 0
        minutes_4++
    }
    if(minutes_4 == 60)
    {
        minutes_4 = 0
        hours_4++
    }

    // Output
    document.getElementById("ShowTime_4").innerHTML = hours_4 + " h : " + minutes_4 + " m : " + seconds_4 + " s";
    seconds_4++ ;
}
//-------- TimeCount -------//



// -------------------- Time CountDown ------------------ //
var interval_countDown_4 = null;

function TimeCountDown_4() {

    if (interval_countDown_4 === null) {

        document.getElementById("month_in_4").disabled = true;
        document.getElementById("day_in_4").disabled = true;
        document.getElementById("Year_in_4").disabled = true;

        document.getElementById("hours_in_4").disabled = true;
        document.getElementById("minutes_in_4").disabled = true;
        document.getElementById("seconds_in_4").disabled = true;
        //alert("Time CountDown 1");
        interval_countDown_4 = setInterval(countDown_4, 1000);
    }
}

function TimeCountDownStop_4() {
   if (interval_countDown_4 !== null) 
   {
       clearInterval(interval_countDown_4);
       interval_countDown_4 = null;

       d_4 = new Date();
       
       document.getElementById('month_in_4').value = d_4.getMonth() + 1;
       document.getElementById('day_in_4').value =  d_4.getDate();
       document.getElementById('Year_in_4').value =  d_4.getFullYear();

       document.getElementById("month_in_4").disabled = false;
       document.getElementById("day_in_4").disabled = false;
       document.getElementById("Year_in_4").disabled = false;

       document.getElementById('hours_in_4').value = d_4.getHours();
       document.getElementById('minutes_in_4').value = d_4.getMinutes();
       document.getElementById('seconds_in_4').value = d_4.getSeconds();

       document.getElementById("hours_in_4").disabled = false;
       document.getElementById("minutes_in_4").disabled = false;
       document.getElementById("seconds_in_4").disabled = false;
       //document.getElementById("ShowTime").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
   }
}

// Set the date we're counting down to
function countDown_4()
{   
    var hours_in_4 = document.getElementById('hours_in_4').value;
    var minutes_in_4 = document.getElementById('minutes_in_4').value;
    var seconds_in_4 = document.getElementById('seconds_in_4').value;

    const monthNames_4 = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    month_in_4 = document.getElementById('month_in_4').value
    var mont_4 = monthNames_4[month_in_4 -1]
    var day_4 = document.getElementById('day_in_4').value
    var Year_4 = document.getElementById('Year_in_4').value
    //alert(mont+ " " + day + ", " + Year);
    
    // Set the date we're counting down to
    var countDownDate_4 = new Date( '"' + mont_4 + " " + day_4 + ", " + Year_4 + '"' + hours_in_4 + ":" +  minutes_in_4 + ":" +  seconds_in_4).getTime();

    // Get today's date and time
    var now_4 = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance_4 = countDownDate_4 - now_4;
        
    // Time calculations for days, hours, minutes and seconds
    var days_C4 = Math.floor(distance_4 / (1000 * 60 * 60 * 24));
    var hours_C4 = Math.floor((distance_4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_C4 = Math.floor((distance_4 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_C4 = Math.floor((distance_4 % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    document.getElementById("TimeCountDow_4").innerHTML = days_C4 + "d " + hours_C4 + "h " + minutes_C4 + "m " + seconds_C4 + "s ";
        
    // If the count down is over, write some text 
    if (distance_4 < 0) {
        document.getElementById("TimeCountDow_4").innerHTML = "EXPIRED";
    }           
}
// -------------------- Time CountDown ------------------ //