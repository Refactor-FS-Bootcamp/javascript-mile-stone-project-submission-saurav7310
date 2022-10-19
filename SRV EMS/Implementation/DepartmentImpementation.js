/* IMPORTING Baseimplementation so that we can inherit the methods and apply separately on dept using
DEPT class .
*/

import BaseImplementation from "./BaseImplementation.js";

// exporting DepartmentImplementation So that it can be used Everywhere
export default class DepartmentImplementation extends BaseImplementation{
    constructor(){
        // setting key for Department inside Local Storage
        super("dept");
    } 
}
