const dateEl = document.querySelector("#date-time");
dateEl.textContent = moment().format("MMMM D, YYYY");


const save9El = document.querySelector("#save-button-9");
const save10El = document.querySelector("#save-button-10");
const save11El = document.querySelector("#save-button-11");
const save12El = document.querySelector("#save-button-12");
const save13El = document.querySelector("#save-button-13");
const save14El = document.querySelector("#save-button-14");
const save15El = document.querySelector("#save-button-15");
const save16El = document.querySelector("#save-button-16");
const save17El = document.querySelector("#save-button-17");

const input9El = document.getElementById("task-9");
const input10El = document.getElementById("task-10");
const input11El = document.getElementById("task-11");
const input12El = document.getElementById("task-12");
const input13El = document.getElementById("task-13");
const input14El = document.getElementById("task-14");
const input15El = document.getElementById("task-15");
const input16El = document.getElementById("task-16");
const input17El = document.getElementById("task-17");



let taskData = [
    {
        input: input9El,
        hour: 9,
        task: ""
    },
    {
        input: input10El,
        hour: 10,
        task: ""
    },
    {
        input: input11El,
        hour: 11,
        task: ""
    },
    {
        input: input12El,
        hour: 12,
        task: ""
    },
    {
        input: input13El,
        hour: 13,
        task: ""
    },
    {
        input: input14El,
        hour: 14,
        task: ""
    },
    {
        input: input15El,
        hour: 15,
        task: ""
    },
    {
        input: input16El,
        hour: 16,
        task: ""
    },
    {
        input: input17El,
        hour: 17,
        task: ""
    }
];

//checks local storage for task data
const localStorageCheck = () => {
    if (localStorage.getItem("taskData") !== null) {
        taskData = JSON.parse(localStorage.getItem("taskData"));
        input9El.setAttribute("value", taskData[0].task);
        input10El.setAttribute("value", taskData[1].task);
        input11El.setAttribute("value", taskData[2].task);
        input12El.setAttribute("value", taskData[3].task);
        input13El.setAttribute("value", taskData[4].task);
        input14El.setAttribute("value", taskData[5].task);
        input15El.setAttribute("value", taskData[6].task);
        input16El.setAttribute("value", taskData[7].task);
        input17El.setAttribute("value", taskData[8].task);
    }
};

localStorageCheck();


save9El.addEventListener("click", function() {
    taskData[0].task = input9El.value;
    localStorage.setItem("taskData", JSON.stringify(taskData))
})

save10El.addEventListener("click", function() {
    taskData[1].task = input10El.value;
    localStorage.setItem("taskData", JSON.stringify(taskData))
})
save11El.addEventListener("click", function() {
    taskData[2].task = input11El.value;
    localStorage.setItem("taskData", JSON.stringify(taskData))
})
save12El.addEventListener("click", function() {
    taskData[3].task = input12El.value;
    localStorage.setItem("taskData", JSON.stringify(taskData))
})
save13El.addEventListener("click", function() {
    taskData[4].task = input13El.value;
    localStorage.setItem("taskData", JSON.stringify(taskData))
})
save14El.addEventListener("click", function() {
    taskData[5].task = input14El.value;
    localStorage.setItem("taskData", JSON.stringify(taskData))
})
save15El.addEventListener("click", function() {
    taskData[6].task = input15El.value;
    localStorage.setItem("taskData", JSON.stringify(taskData))
})
save16El.addEventListener("click", function() {
    taskData[7].task = input16El.value;
    localStorage.setItem("taskData", JSON.stringify(taskData))
})
save17El.addEventListener("click", function() {
    taskData[8].task = input17El.value;
    localStorage.setItem("taskData", JSON.stringify(taskData))
})



const changeBackground = () => {
    for (let i = 0; i < taskData.length; i++){
        //if taskData[i].hour isSame current hour taskData[i].input.style.backgroundColor = gray
        //if (moment().hour()){
            //taskData[i].input.style.backgroundColor = gray;
        //}
        //else if taskData[i].hour isBefore current hour background color is red
        //else background color is green
    //}
    console.log(moment().hour());
}
}

// loop over time blocks
// $('.time-block').each(function () {
//     var blockHour = parseInt($(this).attr('id').split('-')[1]);
    
// var blockHour = parseInt($(this).attr('id').split('-')[1]);

$('.saveBtn').on('click', function () {
    //get value from description
    //get time from id 
    
});

changeBackground();

// const changeBackground = () => {
//     if (moment().isBefore(moment({hour: 17})) && moment().isAfter(moment({hour: 15}))) {
//     input7El.style.backgroundColor = "gray";
//     } else if (moment().isBefore(moment({hour: 17})))
//     input0El.style.backgroundColor = "red";
//     input1El.style.backgroundColor = "red";
//     input2El.style.backgroundColor = "red";
//     input3El.style.backgroundColor = "red";
//     input4El.style.backgroundColor = "red";
//     input5El.style.backgroundColor = "red";
//     input6El.style.backgroundColor = "red";

// }

// changeBackground();

// console.log(moment().isSame(moment({hour: 13}))); //24hour time



// when i click the button 
// updates task data
// sets task data into local storage



