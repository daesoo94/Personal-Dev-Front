import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

export const store: Store<{}> = new Vuex.Store({
    state: {
    },
    getters: {
        test: (state, getters): any => {
            return 'test';
        }
    },
    mutations: {
        test: (state, payload): void => {
        }
    },
    actions: {
        async isVaildToken({ dispatch, commit, state }, payload): Promise<any> {
            await commit('test', payload);
        }
    }
});