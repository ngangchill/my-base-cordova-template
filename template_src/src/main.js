import Vue from 'vue';
import Vuex from 'vuex';
import VueOnsen from 'vue-onsenui';

import store from './store.js';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


// Import App Custom Styles
import AppStyles from './assets/sass/main.scss'
import AppNavigator from './AppNavigator.vue';
import Fab from './partials/fab.vue'

Vue.component('fab', Fab);

Vue.filter('json', function(data) {
    return JSON.stringify(data);
});

Vue.use(Vuex);
Vue.use(VueOnsen);

var vm = null;
var db = null;
var app = {
    fire: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("online", this.checkOnline, false);
        document.addEventListener("pause", this.checkOnline, false);
        document.addEventListener("resume", this.checkOnline, false);
    },
    onDeviceReady: function() {
        app.setupOnsen();
    },
    checkOnline: function() {
        //todo
        //alert("Online");
    },
    setupOnsen: function() {
        vm = new Vue({
            el: '#app',
            render: h => h(AppNavigator),
            store: new Vuex.Store(store),
            beforeCreate() {
                this.$ons.platform.select('android');
                // Shortcut for Material Design
                Vue.prototype.md = this.$ons.platform.isAndroid();
            }
        })
    }
};
// Init App
app.fire();