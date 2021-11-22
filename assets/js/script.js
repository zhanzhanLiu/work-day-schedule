// Date Display
var timeEl = $("#currentDay")
timeEl.text(moment().format("dddd, MMMM Do, YYYY"))

// Set up time schedule Display
var timeTableEl = $("#time-table");
var eventStorage = localStorage.getItem("eventSaving");
eventStorage = JSON.parse(eventStorage) ?? {};
var eventSaving = eventStorage;
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
        var currentTime = moment().format("H"); //Obtain current time hour
        var eventInput = $("<input>"); eventInput.addClass("form-control border-0");
        if (currentTime > i) {
            timeCol2.addClass("bg-secondary").appendTo(timeRow);
            eventInput.addClass("bg-secondary").appendTo(timeCol2)
        }
        else if (currentTime == i) {
            timeCol2.addClass("bg-danger").appendTo(timeRow);
            eventInput.addClass("bg-danger").appendTo(timeCol2)
        }
        else{
            timeCol2.addClass("bg-success").appendTo(timeRow);
            eventInput.addClass("bg-success").appendTo(timeCol2)
        }
        $(eventInput).attr("id","input" + (i-9));
        $(timeCol2).attr("id","row" + (i-9));

        

        // Add buttons to Column 3
        // var saveButton = $('<button>')
        var saveIcon = $("<button>"); 
        $(saveIcon).attr("id","button" + (i-9));
        $(saveIcon).attr("value", "save");
        // saveButton.addClass("btn btn-primary btn-control")
        saveIcon.addClass("bi bi-save-fill bg-primary").appendTo(timeCol3)
        // $(saveIcon).attr("color", "blue");
        // saveButton.appendTo(timeCol3);
        timeCol3.addClass("border rounded-right bg-primary").appendTo(timeRow);

        saveIcon.on("click", function(event) {
            event.preventDefault()
            
            console.log(event.target);
            buttonId = event.target.id;
            console.log(buttonId.split(""))
            var inputTimeSlot = buttonId.split("")[6];
            console.log(inputTimeSlot);
            var eventInputId = "input" + inputTimeSlot;
            var eventInputEl = document.getElementById(eventInputId);
            // var rowInputEl = document.getElementById("row"+inputTimeSlot);
            // rowInputEl.textContent = eventInputEl.value;
            console.log(eventInputEl.value);

            var timeEvent= {
                timeHour: inputTimeSlot,
                event: eventInputEl.value
            };
            
            eventSaving[eventInputId] = eventInputEl.value;
            
            localStorage.setItem("eventSaving", JSON.stringify(eventSaving));

        })

        // function userExists(i) {
        //     return eventStorage.some(function(el) {
        //     return el.id === i-9;
        //     }); 
        // }
              
        // console.log(userExists(i));
    }

    // Check if the event has been saved before
    Object.keys(eventStorage).forEach(function(inputID) {
        document.getElementById(inputID).value = eventStorage[inputID];
    })

}

timeSlot()