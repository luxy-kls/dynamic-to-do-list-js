document.addEventListener('DOMContentLoaded', function (){
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask(){
        let taskText = taskInput.value.trim();
        //task creation and Removal
        if (taskTest === ""){
            alert("Please enter a task");
        }
            let li = document.createElement("li");
            li.textContent = taskTest;

           const button = document.createElement("button");
button.textContent = "Remove";
button.classList.add("remove-btn");

button.addEventListener("click", function() {
  li.remove();
});

            li.append(button);
            taskList.append(li);
            
            taskInput.value ="";
}
            //Attaching event listeners
            addButton.addEventListener("click", addTask);
            taskInput.addEventListener("keypress", function(event){
                if (event.key === "Enter"){
                    addTask();
                }
            })
})