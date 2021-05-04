import Vue from 'vue'
import axios from 'axios';
import DOMPurify from 'dompurify';
const baseUrl = 'http://localhost:3001/'

declare module 'vue/types/vue' {
  interface Vue {
    $getAllInCategory(categoryName: string): Promise<any>, 
    $getCategories(): Promise<any>,
    $postGreenReport(
      productName: string, 
      productCompany: string,
      reasonForFlagging: string,
      productCategory: string,
      contributedBy: string,
    ): void,
    $getNewReports(): Promise<any>,
    $checkModPermissions(emailAddress: any): Promise<any>,
    $deleteReport(id: any, emailAddress: any): void,
    $approveReport(id: any, emailAddress: any): void,
    $searchReports(key: any): void
  }
}

Vue.prototype.$getAllInCategory = (categoryName: string) => {
  return axios.get(baseUrl + 'categories/' + categoryName);
}

Vue.prototype.$getCategories = () => {
  return axios.get(baseUrl + 'categories');
}

Vue.prototype.$postGreenReport = ( 
  productName: string, 
  productCompany: any,
  reasonForFlagging: string,
  productCategory: string,
  contributedBy: string,
  ) => {

  DOMPurify.sanitize(productName);
  DOMPurify.sanitize(productCompany);
  DOMPurify.sanitize(reasonForFlagging);
  DOMPurify.sanitize(productCategory);
  DOMPurify.sanitize(contributedBy);

  productCompany = productCompany.split(',');

  axios
    .post(baseUrl+'newReport', {
      productName: productName,
      productCompany: productCompany,
      productCategory: productCategory,
      reasonForFlagging: reasonForFlagging,
      contributedBy: contributedBy,
    });
}

Vue.prototype.$getNewReports = () => {
  return axios.get(baseUrl + 'newReport');
}

Vue.prototype.$checkModPermissions = (emailAddress: any) => {
  return axios.post(baseUrl + 'authorise', {
    emailAddress: emailAddress
  });
}

Vue.prototype.$deleteReport = (id: any, emailAddress: any) => {
  return axios.post(baseUrl + 'deleteReport', {
    id: id,
    emailAddress: emailAddress
  });
}

Vue.prototype.$approveReport = (id: any, emailAddress: any) => {
  return axios.post(baseUrl + 'approveReport', {
    id: id,
    emailAddress: emailAddress
  });
}

Vue.prototype.$searchReports = (key: any) => {
  return axios.post(baseUrl + 'search', {
    key: key
  });
}



