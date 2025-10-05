document.addEventListener('DOMContentLoaded', function (){
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    loadTasks();

     function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.forEach(taskText => addTask(taskText, false)); 
        // false → prevents saving again while loading
    }

    function addTask(){
        let taskText = taskInput.value.trim();
        //task creation and Removal
        if (taskTest === ""){
            alert("Please enter a task");
            return;
        }
            let li = document.createElement("li");
            li.textContent = taskTest;

           const button = document.createElement("button");
button.textContent = "Remove";
button.classList.add("remove-btn");

button.addEventListener("click", function() {
  li.remove();
  removeFromLocalStorage(taskText);
});

            li.appendChild(button);
            taskList.appendChild(li);
            
            taskInput.value ="";
}
            if (save) {
            const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            storedTasks.push(taskText);
            localStorage.setItem("tasks", JSON.stringify(storedTasks));
        }
        // ---- Function to remove a task from Local Storage ----
    function removeFromLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
            //Attaching event listeners
            addButton.addEventListener("click", addTask);
            taskInput.addEventListener("keypress", function(event){
                if (event.key === "Enter"){
                    addTask();
                }
            });
});