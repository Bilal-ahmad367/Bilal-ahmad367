// store/index.js
import { createStore } from 'vuex';
import auth from './modules/auth';
import hotel from './modules/hotel';

export default createStore({
  modules: {
    auth,
    hotel,
  },
});
