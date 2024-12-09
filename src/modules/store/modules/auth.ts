const state = () => ({
    token: localStorage.getItem('token') || null, // Load token from local storage if available
});

const getters = {
    isAuthenticated: (state) => !!state.token,
};

const mutations = {
    setToken(state, token) {
        state.token = token;
        localStorage.setItem('token', token); // Save token to local storage
    },
    clearToken(state) {
        state.token = null;
        localStorage.removeItem('token'); // Remove token from local storage
    },
};

const actions = {
    login({ commit }, token) {
        commit('setToken', token);
    },
    logout({ commit }) {
        commit('clearToken');
    },
};

export default {
    namespaced: true, // Ensure the module is namespaced
    state,
    getters,
    actions,
    mutations,
};
