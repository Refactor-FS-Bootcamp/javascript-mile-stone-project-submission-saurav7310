
/* IMPORT BaseImplemtation so that EmployeeImplementation class can inherit the method
*/

import BaseImplementation from "./BaseImplementation.js";


export default class EmployeeImplementation extends BaseImplementation{
    constructor(){
        // setting key for Employee inside Local Storage
        super("emp");
    }


}
