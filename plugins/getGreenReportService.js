'use strict';
const baseUrl = 'http://localhost:3001/' //FIXME this should probably be in a .env file

export class getGreenReportService {
  constructor ($axios) {
    this.$axios = axios;
  }

  async getCategories () {
    return this.$axios.get(baseUrl+'categories');
  }

  async getCategory (categoryName) {
    return this.$axios.get(baseUrl+'categories/'+categoryName);
  }
}