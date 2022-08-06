import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuetify);

export default new Vuetify({
    // theme: {
    //     themes: {
    //       light: {
    //         primary: '#3f51b5',
    //         secondary: '#b0bec5',
    //         anchor: '#8c9eff',
    //       },
    //     },
    //   },
    icons: {
        iconfont: 'fa' || 'md',
    },
});
