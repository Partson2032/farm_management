import {createStore} from "vuex";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";

export default createStore({
    state: {
        hideConfigButton: false,
        isPinned: true,
        showConfig: false,
        isTransparent: "",
        isRTL: false,
        color: "",
        isNavFixed: false,
        isAbsolute: false,
        showNavs: true,
        showSidenav: true,
        showNavbar: true,
        showFooter: true,
        showMain: true,
        navbarFixed:
            "position-sticky blur shadow-blur left-auto top-1 z-index-sticky px-0 mx-4",
        absolute: "position-absolute px-4 mx-0 w-100 z-index-2",
        bootstrap,
        // custom diaspora state
        customerQuoteDetail: null,
        currency: {
            code: 'USD',
            rate: 1
        },
    },

    mutations: {
        toggleConfigurator(state) {
            state.showConfig = !state.showConfig;
        },
        navbarMinimize(state) {
            const sidenav_show = document.querySelector(".g-sidenav-show");
            if (sidenav_show.classList.contains("g-sidenav-hidden")) {
                sidenav_show.classList.remove("g-sidenav-hidden");
                sidenav_show.classList.add("g-sidenav-pinned");
                state.isPinned = true;
            } else {
                sidenav_show.classList.add("g-sidenav-hidden");
                sidenav_show.classList.remove("g-sidenav-pinned");
                state.isPinned = false;
            }
        },
        sidebarType(state, payload) {
            state.isTransparent = payload;
        },

        cardBackground(state, payload) {
            state.color = payload;
        },

        navbarFixed(state) {
            if (state.isNavFixed === false) {
                state.isNavFixed = true;
            } else {
                state.isNavFixed = false;
            }
        },

        toggleEveryDisplay(state) {
            state.showNavbar = !state.showNavbar;
            state.showSidenav = !state.showSidenav;
            state.showFooter = !state.showFooter;
        },
        toggleHideConfig(state) {
            state.hideConfigButton = !state.hideConfigButton;
        },
        // diaspora state
        /** @return void */
        setGetQuoteDetail(state, payload) {
            state.customerQuoteDetail = payload;
        },

        /** @return void */
        setCurrency(state, payload) {
            state.currency = payload;
        }
    },

    actions: {
        toggleSidebarColor({commit}, payload) {
            commit("sidebarType", payload);
        },

        setCardBackground({commit}, payload) {
            commit("cardBackground", payload);
        },
    },

    getters: {
        getQuoteDetail: state => {
            return state.customerQuoteDetail
        },

        getCurrency: state => {
            return state.currency
        },
    },
});
