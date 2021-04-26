'use strict';
import axios from 'axios';
import DOMPurify from 'dompurify';
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
    productCategory,
    contributedBy
  ) => {
    // Clean the form's input fields with DomPurify
    for(var i = 0, j = arguments.length; i < j; i++){
      arguments[i] = DOMPurify.sanitize(arguments[i]);
    }
    productCompany = productCompany.split(',');

    // console.log(productName,
    //   productCompany,
    //   reasonForFlagging,
    //   category,
    //   contributedBy)
    axios
      .post(baseUrl+'newReport', {
        productName: productName,
        productCompany: productCompany,
        productCategory: productCategory,
        reasonForFlagging: reasonForFlagging,
        contributedBy: contributedBy,
      });
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