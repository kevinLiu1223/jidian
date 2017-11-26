import Axios from 'axios';
// export
const Order = {
  // Order:{
    Depository:{
      List:{
        get:(params)=>Axios.get("http://localhost:9090/company",params)
      }
    }
  // }
}
const Product = {
  Depository:{
    List:{
      get:111
    }
  }
}
export {Order,Product};
// module.exports = Http;