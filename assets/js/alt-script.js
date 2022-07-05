// $(document).ready(function () {
//     $('.saveBtn').on('click', function () {
//         //get value from input

//         let task = $(this).prev().val();
//         let hour = $(this).parent().id();

//         localStorage.setItem(hour, task);
//         //set to localStorage

//         //get time from id 

//     });

//     function backgroundColor () {

//         let currentHour = moment().hour();

//     //loop over time blocks
//     $('.time-block').each(function () {
//         let blockHour = parseInt($(this).attr('id').split('-')[1]);
        
//         //console.log(blockHour)

//     })
    
//     };

// $('#hour-9 .task').val(localStorage.getItem('hour-9'));

// });




$(document).ready(function () {

    $("button").text

    $(".saveBtn").on("click", function (){
        let value = $(this).prev().val();
        let time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
        })

    
    function backgroundCheck () {
        let currentHour = moment().hour();

        $(".task").each(function () {
            let blockHour = parseInt($(this).attr("id").split("-")[1])
        
            if (blockHour < currentHour) {
                $(this).addClass("past");
            } else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    backgroundCheck();

    setInterval(backgroundCheck, 1000);


    function updateTime () {
        const dateEl = document.querySelector("#date-time");
        dateEl.textContent = moment().format("MMMM D, YYYY, hh:mm:ss a");
    }

    updateTime();
    setInterval(updateTime, 1000)

    $("#task-9").val(localStorage.getItem("hour-9"));
    $("#task-10").val(localStorage.getItem("hour-10"));
    $("#task-11").val(localStorage.getItem("hour-11")); 
    $("#task-12").val(localStorage.getItem("hour-12"));
    $("#task-13").val(localStorage.getItem("hour-13"));
    $("#task-14").val(localStorage.getItem("hour-14"));
    $("#task-15").val(localStorage.getItem("hour-15"));
    $("#task-16").val(localStorage.getItem("hour-16"));
    $("#task-17").val(localStorage.getItem("hour-17"));
})