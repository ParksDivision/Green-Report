'use strict';
import axios from 'axios';
const baseUrl = 'http://localhost:3001/' //FIXME this should probably be in a .env file

export class getGreenReportService {

  async getCategories() {
    return axios.get(baseUrl + 'categories');
  }

  async getCategory(categoryName) {
    return axios.get(baseUrl + 'categories/' + categoryName);
  }

  async postGreenReport() {

  }
}