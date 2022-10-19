// Importing Department Model to add new Department
import { DepartmentModel } from "../model/BaseModel.js";
// Importing Department Implementation to Perform department Related Operation
import DepartmentImplementation from "../Implementation/DepartmentImpementation.js";

// input tag to get the name of the department
let name = document.getElementById("deptName");
// Department Implementation  Object to Perform All the Department Related  Operation
let implementation = new DepartmentImplementation();



document.getElementById("submit").addEventListener("click", (event) => {
  // Using preventDefault so that default action of form can not perform,also we can pass directly
  // in the form tag as well 

  event.preventDefault();
  // creating Model of Department
  let department = new DepartmentModel(name.value);
  implementation.Add(department);
 

  alert("added successfully");

  name.value = "";
});

