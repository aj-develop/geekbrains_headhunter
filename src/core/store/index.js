import Vue from 'vue';
import Vuex from 'vuex';
import { instanceAuth as api } from '@api';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
        userLogin: 'unknown',
        vacancies: []
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUserLogin(state, login) {
            state.userLogin = login;
        },
        setVacancies(state, newVacancies) {
            state.vacancies = newVacancies;
        },
        delVacancy(state, idx) {
            state.vacancies.splice(idx, 1);
        }
    },
    actions: {
        async getUser({ commit }) {
            try {
                const response = await api.get('/user');
                const { result } = response.data;
                result ? commit('setUserLogin', result.login) :
                    commit('setUserLogin', 'unknown');
                return response.data;
            }
            catch (err) {
                console.log('==> user get fail ' + err);
                return null;
            }
        },
        async login({ commit }, data) {
            try {
                const response = await api.post('/user', data);
                const { token } = response.data;
                if (token) {
                    commit('setToken', token);
                    window.localStorage.setItem('tokenAuth', token);
                }
                return response.data;
            }
            catch (err) {
                console.log('==> user login fail ' + err);
                return null;
            }
        },
        async getVacanciesFromBD({ commit }) {
            try {
                const res = await api.get('/vacancies');
                const { result, status } = res.data;
                if (status == "ok") {
                    commit('setVacancies', result);
                    return result;
                }
                return null;
            } catch (err) {
                console.log(`==> get vacancies failure ` + err);
                return null;
            }
        },
        async getVacancies({ commit }, newVacancies) {
            try {
                commit('setVacancies', newVacancies);
            } catch (err) {
                console.log(`==> get vacancies failure ` + err);
                return null;
            }
        },
        async delVacancy({ commit }, id) {
            try {
                const res = await api.delete("/vacancy/" + id);
                const { status } = res.data;
                if (status == "ok" || this.state.userLogin == "unknown") {
                    const idx = this.state.vacancies.findIndex(el => el.origin_id === id);
                    if (idx !== -1) {
                        commit('delVacancy', idx);
                    }
                }
            } catch (err) {
                console.log("==> delete vacancy failure " + err);
            }
        },
        async pinVacancy({ commit }, payload) {
            try {
                const { id, pinned } = payload;
                const res = await api.put("/vacancy/" + id, { pinned });
                const { status } = res.data;
                if (status == "ok" || this.state.userLogin == "unknown") {
                    const newVacancies = this.state.vacancies.map(el => {
                        if (el.origin_id === id) {
                            return { ...el, pinned: pinned }
                        }
                        return el;
                    });
                    commit('setVacancies', newVacancies);
                }
            } catch (err) {
                console.log("==> change vacancy failure " + err);
            }
        }
    },
    getters: {
        userLogin_getter: state => state.userLogin,
        vacancies_getter: state => state.vacancies
    }
})
