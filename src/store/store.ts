import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import moduleA from '@/store/moduleA.store.ts'
import moduleB from '@/store/moduleB.store.ts'

Vue.use(Vuex)

export interface RootState {
    data: string
}

const store: StoreOptions<RootState> = {
    modules: {
      moduleA,
      moduleB
    },
    state: {
        data: 'root'
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

export default  new Vuex.Store(store)
