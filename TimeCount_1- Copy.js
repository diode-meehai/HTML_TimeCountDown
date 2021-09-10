
//-------- TimeCount -------//
var interval = [null, null, null, null]
var hours = [0, 0, 0, 0]        //  <----
var minutes = [0, 0, 0, 0]      //  <----
var seconds = [0, 0, 0, 0]      //  <----
//var TimeToText = ''

function RunTimeCount(Check) {

    document.getElementById("ShowTime_" + Check).innerHTML = hours + " h : " + minutes + " m : " + seconds + " s";   //  <---- 
    if(interval[Check-1] == null)
    {
        //alert("Time Count 1");
        interval[Check-1] = setInterval(TimeCount(Check), 1000);//console.log(interval)//interval = setInterval(TimeCount, 1000, CheckIdButtonTabel, minutes, minutes,seconds);
        //interval = setInterval(function(){ TimeCount(CheckIdButtonTabel); }, 1000);
    }
 
}  

function RunTimeCountStop(Check) {
    if (interval[Check-1] != null) 
    {
        //alert("Stop Time Count 1!!");
        clearInterval(interval[Check-1]);
        interval[Check-1] = null;
        hours[Check-1] = 0;minutes[Check-1] = 0;seconds[Check-1] = 0;
        //document.getElementById("ShowTime").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    }
}

function TimeCount(Check) 
{
    if(seconds[Check-1] == 5) //60
    {
        seconds[Check-1] = 0
        minutes[Check-1]++
    }
    if(minutes[Check-1] == 5)
    {
        minutes[Check-1] = 0
        hours[Check-1]++
    }

    // Output
    document.getElementById("ShowTime_"+ Check).innerHTML = hours[Check-1] + " h : " + minutes[Check-1] + " m : " + seconds[Check-1] + " s";
    //console.log(seconds)
    //TimeToText = hours + " h : " + minutes + " m : " + seconds + " s";
    seconds[Check-1] ++ ;
}
//-------- TimeCount -------//



// -------------------- Time CountDown ------------------ //
var interval_countDown = [null, null, null, null]
//BtnCountDow.onclick = function() {
function TimeCountDown(Check) {

    if (interval_countDown[Check-1] == null) {

        document.getElementById("month_in_" + Check).disabled = true;
        document.getElementById("day_in_" + Check).disabled = true;
        document.getElementById("Year_in_" + Check).disabled = true;

        document.getElementById("hours_in_" + Check).disabled = true;
        document.getElementById("minutes_in_" + Check).disabled = true;
        document.getElementById("seconds_in_" + Check).disabled = true;
        //alert("Time CountDown 1");
        interval_countDown[Check-1] = setInterval(countDown(Check), 1000);
    }
}
//BtnCountDowStop.onclick = function() {
function TimeCountDownStop(Check) {
   if (interval_countDown[Check-1] !== null) 
   {
       clearInterval(interval_countDown[Check-1]);
       interval_countDown[Check-1] = null;

       d_ = [new Date(), new Date(), new Date(), new Date()]
       
       document.getElementById('month_in_' + Check).value = d_[Check-1].getMonth() + 1;
       document.getElementById('day_in_' + Check).value =  d_[Check-1].getDate();
       document.getElementById('Year_in_' + Check).value =  d_[Check-1].getFullYear();

       document.getElementById("month_in_" + Check).disabled = false;
       document.getElementById("day_in_" + Check).disabled = false;
       document.getElementById("Year_in_" + Check).disabled = false;

       document.getElementById('hours_in_' + Check).value = d_[Check-1].getHours();
       document.getElementById('minutes_in_' + Check).value = d_[Check-1].getMinutes();
       document.getElementById('seconds_in_' + Check).value = d_[Check-1].getSeconds();

       document.getElementById("hours_in_" + Check).disabled = false;
       document.getElementById("minutes_in_" + Check).disabled = false;
       document.getElementById("seconds_in_" + Check).disabled = false;
       //document.getElementById("ShowTime").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
   }
}

// Set the date we're counting down to
function countDown(Check)
{   
    var hours_in_1 = document.getElementById('hours_in_' + Check).value;
    var minutes_in_1 = document.getElementById('minutes_in_' + Check).value;
    var seconds_in_1 = document.getElementById('seconds_in_' + Check).value;

    const monthNames_1 = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    //var mont_1 = monthNames_1[d_1.getMonth()]
    //var day_1 = d_1.getDate()
    //var Year_1 = d_1.getFullYear()
    month_in = document.getElementById('month_in_' + Check).value
    var mont_1 = monthNames_1[month_in -1]
    var day_1 = document.getElementById('day_in_' + Check).value
    var Year_1 = document.getElementById('Year_in_' + Check).value

    //alert(mont+ " " + day + ", " + Year);
    
    // Set the date we're counting down to
    // var countDownDate = new Date( "Jul 3, 2020 " + hours_in + ":" +  minutes_in + ":" +  seconds_in).getTime();
    var countDownDate_1 = new Date( '"' + mont_1+ " " + day_1 + ", " + Year_1 + '"' + hours_in_1 + ":" +  minutes_in_1 + ":" +  seconds_in_1).getTime();
    //console.log('"' + mont_1+ " " + day_1 + ", " + Year_1 + '"' + hours_in_1 + ":" +  minutes_in_1 + ":" +  seconds_in_1)
    // Update the count down every 1 second

    // Get today's date and time
    var now_1 = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance_1 = countDownDate_1 - now_1;
        
    // Time calculations for days, hours, minutes and seconds
    var days_C1 = Math.floor(distance_1 / (1000 * 60 * 60 * 24));
    var hours_C1 = Math.floor((distance_1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_C1 = Math.floor((distance_1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_C1 = Math.floor((distance_1 % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    document.getElementById("TimeCountDow_" + Check).innerHTML = days_C1 + "d " + hours_C1 + "h " + minutes_C1 + "m " + seconds_C1 + "s ";
        
    // If the count down is over, write some text 
    if (distance_1 < 0) {
        document.getElementById("TimeCountDow_" + Check).innerHTML = "EXPIRED";
    }
            

}
// -------------------- Time CountDown ------------------ //