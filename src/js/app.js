import sayHello from './lib/sayHello.js';
import Vue from 'vue';
import Vuesax from 'vuesax';

sayHello();


Vue.use(Vuesax);


new Vue({
  el: '#wrap',
  data: () => ({
    active: false,
    activeSearch: false
  })
});
