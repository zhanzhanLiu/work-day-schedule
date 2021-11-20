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

        // Time Display of Column 1
        if (i < 12){
            timeCol1.text(i + "AM").appendTo(timeRow);
        }
        else if (i === 12) {
            timeCol1.text(i + "PM").appendTo(timeRow);
        }
        else{
            timeCol1.text(i-12 + "PM").appendTo(timeRow);
        }

        // Add Background Color according to current time to Column 2
        var currentTime = moment().format("h"); //Obtain current time hour
        var eventInput = $("<input>"); eventInput.addClass("form-control border-0");
    
        if (currentTime > i) {
            timeCol2.addClass("bg-secondary").appendTo(timeRow);
            eventInput.addClass("bg-secondary").appendTo(timeCol2)
        }
        else if (currentTime === i) {
            timeCol2.addClass("bg-danger").appendTo(timeRow);
            eventInput.addClass("bg-danger").appendTo(timeCol2)
        }
        else{
            timeCol2.addClass("bg-success").appendTo(timeRow);
            eventInput.addClass("bg-success").appendTo(timeCol2)
        }
        
        

        // Add buttons to Column 3
        var saveButton = $('<button>')
        saveButton.addClass("bi bi-save2-fill").appendTo(timeCol3);
        timeCol3.addClass("border rounded-right bg-primary").appendTo(timeRow);
    }
    

}

timeSlot()