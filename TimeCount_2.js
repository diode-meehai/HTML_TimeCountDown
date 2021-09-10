
//-------- TimeCount -------//
var interval_2 = null;
var hours_2 = 0;        //  <----
var minutes_2 = 0;      //  <----
var seconds_2 = 0;      //  <----
//var TimeToText = ''

function RunTimeCount_2() {
    document.getElementById("ShowTime_2").innerHTML = hours_2 + " h : " + minutes_2 + " m : " + seconds_2 + " s";   //  <---- 
    if(interval_2 == null)
    {
        interval_2 = setInterval(TimeCount_2, 1000);
    }
 
}  

function RunTimeCountStop_2() {
    if (interval_2 != null) 
    {
        clearInterval(interval_2);
        interval_2 = null;
        hours_2 = 0;minutes_2 = 0;seconds_2 = 0;
    }
}

function TimeCount_2() 
{
    if(seconds_2 == 60) //60
    {
        seconds_2 = 0
        minutes_2++
    }
    if(minutes_2 == 60)
    {
        minutes_2 = 0
        hours_2++
    }

    // Output
    document.getElementById("ShowTime_2").innerHTML = hours_2 + " h : " + minutes_2 + " m : " + seconds_2 + " s";
    seconds_2++ ;
}
//-------- TimeCount -------//



// -------------------- Time CountDown ------------------ //
var interval_countDown_2 = null;
//BtnCountDow.onclick = function() {
function TimeCountDown_2() {

    if (interval_countDown_2 === null) {

        document.getElementById("month_in_2").disabled = true;
        document.getElementById("day_in_2").disabled = true;
        document.getElementById("Year_in_2").disabled = true;

        document.getElementById("hours_in_2").disabled = true;
        document.getElementById("minutes_in_2").disabled = true;
        document.getElementById("seconds_in_2").disabled = true;
        //alert("Time CountDown 1");
        interval_countDown_2 = setInterval(countDown_2, 1000);
    }
}
//BtnCountDowStop.onclick = function() {
function TimeCountDownStop_2() {
   if (interval_countDown_2 !== null) 
   {
       clearInterval(interval_countDown_2);
       interval_countDown_2 = null;

       d_2 = new Date();
       
       document.getElementById('month_in_2').value = d_2.getMonth() + 1;
       document.getElementById('day_in_2').value =  d_2.getDate();
       document.getElementById('Year_in_2').value =  d_2.getFullYear();

       document.getElementById("month_in_2").disabled = false;
       document.getElementById("day_in_2").disabled = false;
       document.getElementById("Year_in_2").disabled = false;

       document.getElementById('hours_in_2').value = d_2.getHours();
       document.getElementById('minutes_in_2').value = d_2.getMinutes();
       document.getElementById('seconds_in_2').value = d_2.getSeconds();

       document.getElementById("hours_in_2").disabled = false;
       document.getElementById("minutes_in_2").disabled = false;
       document.getElementById("seconds_in_2").disabled = false;
       //document.getElementById("ShowTime").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
   }
}

// Set the date we're counting down to
function countDown_2()
{   
    var hours_in_2 = document.getElementById('hours_in_2').value;
    var minutes_in_2 = document.getElementById('minutes_in_2').value;
    var seconds_in_2 = document.getElementById('seconds_in_2').value;

    const monthNames_2 = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    //var mont_1 = monthNames_1[d_1.getMonth()]
    //var day_1 = d_1.getDate()
    //var Year_1 = d_1.getFullYear()
    month_in_2 = document.getElementById('month_in_2').value
    var mont_2 = monthNames_2[month_in_2 -1]
    var day_2 = document.getElementById('day_in_2').value
    var Year_2 = document.getElementById('Year_in_2').value

    //alert(mont+ " " + day + ", " + Year);
    
    // Set the date we're counting down to
    // var countDownDate = new Date( "Jul 3, 2020 " + hours_in + ":" +  minutes_in + ":" +  seconds_in).getTime();
    var countDownDate_2 = new Date( '"' + mont_2+ " " + day_2 + ", " + Year_2 + '"' + hours_in_2 + ":" +  minutes_in_2 + ":" +  seconds_in_2).getTime();
    //console.log('"' + mont_2+ " " + day_2 + ", " + Year_2 + '"' + hours_in_2 + ":" +  minutes_in_2 + ":" +  seconds_in_2)
    // Update the count down every 1 second

    // Get today's date and time
    var now_2 = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance_2 = countDownDate_2 - now_2;
        
    // Time calculations for days, hours, minutes and seconds
    var days_C2 = Math.floor(distance_2 / (1000 * 60 * 60 * 24));
    var hours_C2 = Math.floor((distance_2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_C2 = Math.floor((distance_2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_C2 = Math.floor((distance_2 % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    document.getElementById("TimeCountDow_2").innerHTML = days_C2 + "d " + hours_C2 + "h " + minutes_C2 + "m " + seconds_C2 + "s ";
        
    // If the count down is over, write some text 
    if (distance_2 < 0) {
        document.getElementById("TimeCountDow_2").innerHTML = "EXPIRED";
    }
            

}
// -------------------- Time CountDown ------------------ //