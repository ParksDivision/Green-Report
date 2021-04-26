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
    category,
    contributedBy
  ) => {

    productCompany = productCompany.split(',');

    console.log(productName,
      productCompany,
      reasonForFlagging,
      category,
      contributedBy)
      /*axios
        .post(baseUrl+'newReport', {
          productName: productName,
          productCompany: productCompany,
          reasonForFlagging: reasonForFlagging,
          category: category,
          contributedBy: contributedBy,
        })*/
  });

  inject('checkModPermissions',
  (emailAddress) => {
    return axios.post(baseUrl + 'authorise', {
      emailAddress: emailAddress
    });
  });

  inject('getNewReports',
  () => {
    return axios.get(baseUrl + 'newReport');
  }
  );
}