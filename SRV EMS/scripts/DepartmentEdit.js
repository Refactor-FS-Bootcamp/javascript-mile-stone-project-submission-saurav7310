import DepartmentImplementation from "../Implementation/DepartmentImpementation.js"
import {URLDecoder} from "../scripts/Utility.js"

let Implementation  =new DepartmentImplementation
console.log(Implementation)
//  UI Elements Buttons
let update = document.getElementById("update")
let cancel = document.getElementById("cancel")
let name = document.getElementById("deptName")


// Parsing URl Using URl searchParams
let id = URLDecoder(window.location.href)
console.log(id)

// UI EventListener to Update Data From the List 
update.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(e)
       
        if(name.value)
        {
            let obj = {
                id :id,
                dept_name : name.value,

            }
            Implementation.Update(id,obj)
            alert("updated Successfully")
            window.location.replace("../pages/department.html")
        }
        else{
         alert("Please fill the name")   
        }
    
    })
    
// UI EventListener to Update Data From the List
cancel.addEventListener("click",(e)=>{
    e.preventDefault()
    
    let result = confirm("Cancel?")
    if(result)
    {
        window.location.replace("../pages/department.html")
    }
    else{
        return;
    }
    
    }) 


