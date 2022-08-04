//get the current date and time 
var currentHour = moment().hours(); 
console.log(currentHour); 
var currentDate = moment().format("dddd MMMM Do, YYYY"); 
$("#currentDay").text(currentDate); 
//create an array for the hours in a business day 
var businessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
//implement some containers for each hour of the day
for (var i = 0; i < 9; i++)
{
var content = $('<div>', {
    id: "event-container-" + businessHours[i],
    class: 'event-container-class',
    title: 'Event-Container'
}).appendTo('.container');
}
//add the hour of the day 
for (var j = 0; j < 9; j++)
{

var eventText = $("<p>")
 .addClass("timestamp")
 .text(businessHours[j]);
 eventText.appendTo("#event-container-" + businessHours[j]); 

 //add input box for event content
 var content = $('<textarea>', {
    id: "input-" + businessHours[j],
    class: 'input-class',
}).appendTo("#event-container-" + businessHours[j]);

//add button
 var abtn = $("<button>")
 .addClass("saveBtn");
 abtn.appendTo("#event-container-" + businessHours[j]); 
 
}

function backGroundColourChanger()
{
    //loop through the business hours array 
    $('.event-container-class').each(function () {

        //get just the number 
        var eventHour = $(this).attr('id').replace(/\D/g, "");

        //change the classes of the text containers to reflect the current hour
        if (eventHour < currentHour)
        $(this).addClass('past'); 
        else if (eventHour === currentHour) {
            $(this).removeClass('past'); 
            $(this).addClass('present');
        }
        else {
            $(this).removeClass('future'); 
            $(this).removeClass('past'); 
            $(this).addClass('future');
        }

    })
}


//var interval = setInterval(UpdateItems,15000);



var SetItems = function (){

    for (var q = 0; q < businessHours.length; q++)
    {
        var item = localStorage.getItem("event-container-" + businessHours[q]); 
        if (item)
        {
            $("#input-" + businessHours[q]).val(item); 
        }
    }
}

backGroundColourChanger(); 
SetItems(); 



//function that grabs the local Storage data and appends the items to the appropriate containers
$('.saveBtn').on('click', function () {

    var value = $(this).siblings(".input-class").val(); 
    var time = $(this).parent().attr('id'); 
    console.log(time); 
    console.log(value); 

    localStorage.setItem(time,value); 
    
    
    }); 
//function reads the local storage on startup and populated the values into the webpage 










