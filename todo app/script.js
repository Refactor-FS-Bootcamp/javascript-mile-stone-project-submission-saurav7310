// let subButton = document.getElementById("submit");
// let title = document.getElementById("title");
// let todo = document.getElementById("todo");
// let todolist = document.getElementsByClassName("todolist");
// let collection = []

// function addData(){
//     let obj = new Object()
//     obj.title = title.value;
//     obj.todo = todo.value;
//     let date = new Date()
//     let todayDate = date.getDate() + " "+date.getDay()+ " "+ date.getFullYear();
//     console.log(todayDate)
//     obj.data = todayDate
//     collection.push(obj)
//     console.log(obj,collection)
//     localStorage.setItem('todo', JSON.stringify(collection))

    
// }

// let todoData = JSON.parse(localStorage.getItem('todo'))
// console.log(todoData)

// todoData.forEach((ele)=>{
//     // let heading = document.createElement('h6')
//     // heading.innerHTML = ele.title
//     // let paragraph = document.createElement('p')
//     // paragraph.innerHTML = ele.todo
//     // todolist.appendChild(heading)
//     // todolist.appendChild(paragraph)

//     todolist.innerHTMl = `<h6>ele.title</h6>`
//     todolist.innerHTMl = `<p>ele.tod</p>`

// })

// function displayTodo(){
    
// }

// subButton.addEventListener('click', addData)

// subButton.addEventListener('click',function(){
//     var paragraph = document.createElement('p')
//     paragraph.innerText = title.value
//     todolist.appendChild(paragraph)
// })


window.addEventListener('load',()=>{
    const form = document.querySelector("#form-submit")
    const input_title = document.querySelector("#title")
    const input_todo = document.querySelector("#todo")
    const display_list = document.querySelector(".task1")
    let collection = []
    form.addEventListener('submit' ,(e)=>{
        e.preventDefault();

        const task = input_title.value
        const task1 = input_todo.value
        let obj = new Object()
        obj.title=task
        obj.todo=task1
        collection.push(obj)
        localStorage.setItem('todo',JSON.stringify(collection))
        let todo_data_ls = localStorage.getItem('todo')
        let todo_data = todo_data_ls != null ? JSON.parse(todo_data_ls) : [];


        console.log(todo_data[0].title)

        console.log(obj)


        if(!task || !task1){
            alert("Please Fill the details")
            return;
        }

        
        todo_data.map((item)=>{

        const task_el = document.createElement("div")
        task_el.classList.add("task2");
        
// here we creating div so we can insert the input tag in it 
        const task_content_title = document.createElement("div")
        task_content_title.classList.add("title");
       
// here we inserting the input where the data going to be display 
        const task_input_el = document.createElement("input")
        task_input_el.classList.add("text")
        task_input_el.value = item.title
        task_input_el.type = "text"
        task_input_el.style.fontSize = "30px"
        task_input_el.setAttribute("readonly","readonly")
        task_content_title.appendChild(task_input_el)

// same as we did for title now for todo 
        const task_content_todo = document.createElement("div")
        task_content_todo.classList.add("container");
        
        
// here we going to create input for todo so that it can display and also edit 

        const task_input_todo = document.createElement("input")
        task_input_todo.classList.add("text1")
        task_input_todo.value = item.todo
        task_input_todo.type = "text" 
        task_input_todo.style.fontSize = "20px"
        task_input_todo.setAttribute("readonly","readonly")
        task_content_todo.appendChild(task_input_todo)

// here i am going to create another div for edit del button 

        const task_action_el = document.createElement("div")
        task_action_el.classList.add("action")


// now creating buttons for edit and del 

        const task_edit_el = document.createElement("button")
        task_edit_el.classList.add("edit")
        task_edit_el.innerHTML = "EDIT"

        const task_delete_el = document.createElement("button")
        task_delete_el.classList.add("delete")
        task_delete_el.innerHTML = "DELETE"

        task_action_el.appendChild(task_edit_el)
        task_action_el.appendChild(task_delete_el)


// here i am appending all the div inside each other 
        task_el.appendChild(task_content_title)
        task_el.appendChild(task_content_todo)
        task_el.appendChild(task_action_el)
        display_list.appendChild(task_el)

// now empty the input field after 
        //  task_input_el.value = ""
        // task_input_todo.value = ""

// addding functionality to the buttons of edit and delete 

        task_edit_el.addEventListener("click", ()=>{
            if(task_edit_el.innerText.toLowerCase() == "edit"){
                task_input_el.removeAttribute('readonly')
                task_input_todo.removeAttribute('readonly')
                task_edit_el.innerText = "Save"
                
            }
            else{
                task_input_el.setAttribute('readonly','readonly')
                task_input_todo.setAttribute('readonly','readonly')
                task_edit_el.innerText = "Edit"
            }
        })

        task_delete_el.addEventListener("click",()=>{
            display_list.removeChild(task_el)
        })
        
    })
     
})

})


