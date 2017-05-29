//Vue
import Vue from 'vue';
import App from './App.vue';

//Plugins
import VueFractionGrid from 'vue-fraction-grid';
Vue.use(VueFractionGrid, {
    gutter: '8px'
});

//Font Awesome Icons
import Icon from 'vue-awesome/components/Icon.vue';
import 'vue-awesome/icons/circle';
import 'vue-awesome/icons/flask';
import 'vue-awesome/icons/times';
import 'vue-awesome/icons/wikipedia-w';
import 'vue-awesome/icons/chevron-left';
import 'vue-awesome/icons/chevron-right';
Icon.register({
    vue: {
        width: 256,
        height: 221,
        polygons: [
            {
                style: 'fill:#41B883',
                points: '0,0 128,220.8 256,0 204.8,0 128,132.48 50.56,0 0,0'
            },
            {
                style: 'fill:#35495E',
                points: '50.56,0 128,133.12 204.8,0 157.44,0 128,51.2 97.92,0 50.56,0'
            }
        ]
    }
});
Vue.component('icon', Icon);

//Main Instance
new Vue({
  el: '#app',
  render: h => h(App)
});
