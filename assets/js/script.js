// Date Display
var timeEl = $("#currentDay")
timeEl.text(moment().format("MMM Do YYYY"))

// Set up time schedule Display
var timeTableEl = $("#time-table")
function timeSlot() {
    for (var i = 9; i <= 17; i++){
        var timeRow = $('<tr>');
        timeRow.appendTo(timeTableEl)
        var timeCol1 = $('<td>');
        var timeCol2 = $('<td>');
        var timeCol3 = $('<td>');
        timeCol1.addClass("col-1")
        timeCol3.addClass("col-1")
        if (i < 12){
            timeCol1.text(i + "AM").appendTo(timeRow);
        }
        else if (i === 12) {
            timeCol1.text(i + "PM").appendTo(timeRow);
        }
        else{
            timeCol1.text(i-12 + "PM").appendTo(timeRow);
        }
        timeCol2.appendTo(timeRow);
        timeCol3.appendTo(timeRow);
    }
    

}

timeSlot()