// Date Display
var timeEl = $("#currentDay")
timeEl.text(moment().format("dddd, MMMM Do, YYYY"))

// Set up time schedule Display
var timeTableEl = $("#time-table")
function timeSlot() {
    for (var i = 9; i <= 17; i++){

        // Create Row and Column Element
        var timeRow = $('<tr>');
        timeRow.appendTo(timeTableEl)
        var timeCol1 = $('<td>');
        var timeCol2 = $('<td>');
        var timeCol3 = $('<td>');

        // Add width layout class to columns
        timeCol1.addClass("col-1")
        timeCol3.addClass("col-1")

        // Time Column Display
        if (i < 12){
            timeCol1.text(i + "AM").appendTo(timeRow);
        }
        else if (i === 12) {
            timeCol1.text(i + "PM").appendTo(timeRow);
        }
        else{
            timeCol1.text(i-12 + "PM").appendTo(timeRow);
        }

        // Background Color according to current time
        var currentTime = moment().format("h"); //Obtain current time hour
        console.log(currentTime)
        if (currentTime > i) {
            timeCol2.addClass("bg-secondary").appendTo(timeRow);
        }
        else if (currentTime === i) {
            timeCol2.addClass("bg-danger").appendTo(timeRow);
        }
        else{
            timeCol2.addClass("bg-success").appendTo(timeRow);
        }

        timeCol3.appendTo(timeRow);
    }
    

}

timeSlot()