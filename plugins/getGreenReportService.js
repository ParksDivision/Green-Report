'use strict';
import axios from 'axios';
const baseUrl = 'http://localhost:3001/' //FIXME this should probably be in a .env file

export default ({ app }, inject) => {
  inject('getCategories',
  () => {
    return axios.get(baseUrl + 'categories');
  });

  inject('getAllInCategory',
  (categoryName) => {
    return axios.get(baseUrl + 'categories/' + categoryName);
  });

  inject('postGreenReport',
  (
    productName,
    productCompany,
    reasonForFlagging,
    contributedBy,
    email
  ) => {
    console.log(productName,
      productCompany,
      reasonForFlagging,
      contributedBy,
      email)
  });

}