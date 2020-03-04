import {RootState} from '@/store/store';
import {Module} from 'vuex';

interface moduleB {
    data: string
}

const module: Module<moduleB, RootState> = {
    state: {
        data: 'moduleB'
    },
    mutations: {
        setData(state, data: string) {
            state.data = data
        }
    },
    actions: {
        setRootData({commit}, data: string) {
            commit('setData', data)
        }
    },
    getters: {
        data: (state) => state.data
    }
}

export default module;
