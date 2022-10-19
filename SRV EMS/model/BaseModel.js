// BaseModel consist the model which is going to hold the data which we call model and than pass into the 
// methods we using


// Base holding id because it is common which is used in both dept model and emp model 
class BaseModel{
    constructor(){
        this.id = 0
     }
};


export class EmployeeModel extends BaseModel{
    constructor(name,age){
        super()
        this.name  = name;
        this.age = age;
    }
}

 
export class DepartmentModel extends BaseModel{
    constructor(name){
        super()
        this.dep_name  = name;
    }
}

export default BaseModel ;