'use strict';
import axios from 'axios';
import DOMPurify from 'dompurify';
const baseUrl = 'http://localhost:3001/' //FIXME this should probably be in a .env file

export default ({ app }, inject) => {
  // Get the list of categories products can be filed under
  inject('getCategories',
  () => {
    return axios.get(baseUrl + 'categories');
  });

  inject('getAllInCategory',
  (categoryName) => {
    return axios.get(baseUrl + 'categories/' + categoryName);
  });

  // Send a new green report for the newReports page
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

    axios
      .post(baseUrl+'newReport', {
        productName: productName,
        productCompany: productCompany,
        productCategory: productCategory,
        reasonForFlagging: reasonForFlagging,
        contributedBy: contributedBy,
      });
  });

  // Get the list of unverified reports
  inject('getNewReports',
  () => {
    return axios.get(baseUrl + 'newReport');
  }
  );

  // Check if the user is allowed to view the newReport page
  inject('checkModPermissions',
  (emailAddress) => {
    return axios.post(baseUrl + 'authorise', {
      emailAddress: emailAddress
    });
  });

  // Used to delete unverified reports, called in NewReportCard component,
  // which is a child of pages/newReports.
  inject('deleteReport',
  (id, emailAddress) => { //Note: This is a post request intentionally. No req.body on delete
    return axios.post(baseUrl + 'deleteReport', {
      id: id,
      emailAddress: emailAddress
    });
  });

  // Remove the unverified post from its old database, and add it to the verified one
  inject('approveReport',
  (id, emailAddress) => {
    return axios.post(baseUrl + 'approveReport', {
      id: id,
      emailAddress: emailAddress
    });
  });

  inject('searchReports',
  (key) => {
    return axios.post(baseUrl + 'search', {
      key: key
    });
  });
}