let inputtask=document.querySelector(".task-input");
let priority=document.querySelector(".priority");
let date=document.querySelector(".date-input");
let addbutton=document.querySelector(".add-task");
let taskcontainer=document.querySelector(".tasks-container");
addbutton.addEventListener("click",async()=>{

    const task={
        title:inputtask.value,
        priority:priority.value,
        date:date.value,
        completed:false
    }
   const response = await fetch("/todo", {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(task)
});

const data = await response.json();

console.log(data);
    // console.log(task)
    let taskelement=document.createElement("div");
    taskelement.classList.add("task");
    taskelement.innerHTML=`
    <div class="task-info">
    <h3>${task.title}</h3>
    <div class="task-meta">
    <span class="priority-badge ${task.priority}">${task.priority}</span>
    <span>${task.date}</span>
    </div>
    </div>
    
    <div class="task-actions">
    <button class="complete">✓</button>
    <button class="delete">🗑</button>
    </div>
    
    </div>
    `
   taskcontainer.appendChild(taskelement);
      
    let deletebutton=taskelement.querySelector(".delete");
    deletebutton.addEventListener("click",async()=>{
        await fetch(`/todo/${data._id}`, {
            method: "DELETE"
        });
        taskelement.remove();
    });

  
    
    let completebutton = taskelement.querySelector(".complete");
    
    completebutton.addEventListener("click", async() => {
        await fetch(`/todo/${data._id}`, {
            method: "PATCH",
            
            headers: {
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify({
                completed: completed
            })
        });
        taskelement.classList.toggle("completed");
    });
});

 
async function loadTodos() {
    let response = await fetch("/todo");
    let todos = await response.json();

    todos.forEach(task => {
        let taskelement = document.createElement("div");
        taskelement.classList.add("task");

        taskelement.innerHTML = `
            <div class="task-info">
                <h3>${task.title}</h3>
                <div class="task-meta">
                    <span class="priority-badge ${task.priority}">
                        ${task.priority}
                    </span>
                    <span>${task.date}</span>
                </div>
            </div>

            <div class="task-actions">
                <button class="complete">✓</button>
                <button class="delete">🗑</button>
            </div>
        `;
 taskcontainer.appendChild(taskelement);
        let deletebutton = taskelement.querySelector(".delete");

deletebutton.addEventListener("click", async () => {

    await fetch(`/todo/${task._id}`, {
        method: "DELETE"
    });

    taskelement.remove();
});


let completebutton = taskelement.querySelector(".complete");

completebutton.addEventListener("click", async () => {

    let completed = !taskelement.classList.contains("completed");

    await fetch(`/todo/${task._id}`, {
        method: "PATCH",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            completed: completed
        })
    });

    taskelement.classList.toggle("completed");
});


});


}
loadTodos();