/**
 =========================================================
 Vue Soft UI Dashboard - v3.0.0
 =========================================================
 */

import {createApp} from "vue";
import moment from 'moment-timezone'
import numeral from 'numeral'

import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import axios from 'axios';
import VueAxios from 'vue-axios'
import { VueCookieNext } from 'vue-cookie-next'
import Toast from "vue-toastification";
import 'vue-toastification/dist/index.css';

import SoftUIDashboard from "./soft-ui-dashboard";

const toastConfig = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
    position: "top-center",
}

const app = createApp(App);

/** @description filters are no longer supported in Vue 3 */
app.config.globalProperties.$filters = {
    formatNumber(value) {
        return numeral(value).format("0,0.00");
    }
}

/** @description filters are no longer supported in Vue 3 */
app.config.globalProperties.$filters = {
    formatDate(value) {
        const date = moment.utc(value).tz("Africa/Harare");
        return date.format('DD-MMM-YYYY');
    }
}

/** @description filters are no longer supported in Vue 3 */
app.config.globalProperties.$filters = {
    formatDateTime(value) {
        const date = moment.utc(value).tz("Africa/Harare");
        return date.format('DD-MMM-YYYY HH:mm');
    }
}
/**
 * @params {date} date to be converted to time ago
 * @returns returns timeAgo
 */
app.config.globalProperties.$filters = {
    timeAgo(date) {
        return moment(date).fromNow();
    },
}

app.use(VueCookieNext);

app.use(Toast, toastConfig);

app.use(VueAxios, axios); // 👈

app.use(store);
app.use(router);
app.use(SoftUIDashboard);
app.mount("#app");
