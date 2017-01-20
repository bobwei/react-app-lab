import axios from 'axios';

export default {
  init({
    DATA_API_BASE_URL,
  }) {
    this.axios = axios.create({
      baseURL: DATA_API_BASE_URL,
    });
  },

  request() {
    return this.axios;
  },
};
