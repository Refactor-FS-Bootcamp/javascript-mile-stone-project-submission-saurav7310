// BaseImplementation class is used for all the methods which is going to be used in both employee and departments
// means it will consist common functionality


export default class BaseImplementation
 {
  // Collection is used for storing the data of emp and dept
  collection = [];
  // Key which we going to use for storage set and get
  key_main = "";

// to construct main Key
  constructor(key) {
    //get it from session
    // setting Main Key
    this.key_main = key;
    
    // temp var for data from storage than checking weather data is present or not if not assiging to empty array 
    let collection_temp = localStorage.getItem(key);
    this.collection = collection_temp != null ? JSON.parse(collection_temp) : [];

  }

  /**
   * This function will be used to add data to session/local
   * @param {*} model  Model that needs to be added astrik(*) for data type means can be anything 
   */
  Add(model) {
    // max id than increment by 1 for the new entry 
    let maxNum = this.arrayMax(this.collection);
    let new_id = maxNum + 1;
    model["id"] = new_id;

    // Reasigning the data so that new data also added
    this.collection = [...this.collection, model];
    
    this.UpdateStore(this.key_main);
    return true;
  }

  Update(id, model) {
    let index;
    // Finding index of data in the collection according to given Id so that we can Update it
    this.collection.forEach((item, ind) => {
      if (item.id == id) {
        index = ind;
        return;
      }
    });
    // Updating Collection 
    this.collection.splice(index, 1, model);
    this.UpdateStore(this.key_main);
  }

  //  for deletion on the basis of id 
  Delete(id) {
    
    this.collection = this.collection.filter((item) => item.id != id);
    this.UpdateStore(this.key_main);
  }


  // Using for update every time new entry came up storage should be up to date 
  UpdateStore(key) {
    
    localStorage.setItem(key,JSON.stringify(this.collection))
    
  }
  // Finding max id so we can use that for new employee entry and on the basis of that we can add new id no  
  arrayMax(arr) {
    let max_id = arr.length === 0 ? 0 : null;

    if (arr.length === 1) {
      max_id = arr[0].id;
    } else if (arr.length > 1) {
      let max_id_temp = arr.reduce(function (p, v) {
        return p.id > v.id ? p.id : v.id;
      });

      max_id = max_id_temp;
    }

    return max_id;
  }

  // Here we using searching to get desired employee detail 
  search(searchText)
  { 
      let filterData = this.collection.filter((item)=>{
        let string = JSON.stringify(item).toLowerCase()
        return string.includes(searchText.toLowerCase())
      })
    return filterData

    
   
  }


  // pagination section 
 pagination(dataSet, page, rows) {
    page = +page;
    rows = +rows;

    let startIndex = (page - 1) * rows;
    console.log()
    let endIndex = startIndex + rows;

  
    let trimmedData = dataSet.slice(startIndex, endIndex);
  
    let pages = Math.ceil(dataSet.length / rows);
  
    // return the data for a single page means no of rows data and the page
    return {
      dataSet: trimmedData,
      pages: pages,
    };
    
  }
  
}
