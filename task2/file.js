let input = document.querySelector(".input");
let submit =  document.querySelector(".addButton");
let tasksDiv = document.querySelector(".tasks");

//empty array to store data
let arrayOfTasks = [];

// add task 
submit.onclick = function() {
    if(input.value !== ""){
        addTaskToArray(input.value);
        input.value = "";
    }
}

// click on task element 
tasksDiv.addEventListener("click" ,(e) =>{
    if(e.target.classList.contains("delete")){
        // remove element from page
        e.target.parentElement.remove();
        
    }
    if(e.target.classList.contains("tasks")){
        e.target.classList.toggle("done")
    }
});


function addTaskToArray(taskText){
    const task ={
        id: Date.now(),
        title : taskText,
        finish  : false,
    };

    //push tasks to array'
    arrayOfTasks.push(task);

    addElementsToPage(arrayOfTasks);

}

function addElementsToPage(arrayOfTasks){
    tasksDiv.innerHTML = "";
    //looping in array
    arrayOfTasks.forEach(task => {
        //create main div
        let span = document.createElement("span");
        span.className = "task-box";
        //check if task is done 
        if(task.completed){
            div.className = "finish"
        }
        span.setAttribute ("data-id" ,task.id);
        span.appendChild(document.createTextNode(task.title));
        
        // create delete button
        /////////////////////////////////////////////////////////////////////////////////// there is a bug here
        let span1 = document.createElement("span");
        span1.className= "delete";
        span1.appendChild(document.createTextNode("delete"));
        //append button to main div
        span.appendChild(span1);
//////////////////////////////////////////////////////////////////////////////////////////////// done doesn't work
        //create done button 
        let span2 = document.createElement("span");
        span2.className = "done";
        span2.appendChild(document.createTextNode("done"));
        span.appendChild(span2);

        //display task in div container
        tasksDiv.appendChild(span);
    });
}

