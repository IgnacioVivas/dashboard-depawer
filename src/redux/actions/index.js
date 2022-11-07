import axios from 'axios';



const postProducts = (values) => {
    return async function(){
  const create = axios.post(`https://dpower-production.up.railway.app/products`, values)
    return create;
  }  
};

export {
    postProducts,
}