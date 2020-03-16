import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators";

@Module({namespaced: true, name: 'moduleA'})
export default class ModuleA extends VuexModule {
    data: string = 'moduleA';

    @Mutation
    setData (data: string) {
        this.data = data
    }

    @Action
    editData (data: string) {
        this.context.commit('setData', data)
    }

    get moduleAdata() {
        return this.data
    }
}

/*
import {RootState} from '@/store/store';
import {Module} from 'vuex';

interface moduleA {
    data: string
}

const module: Module<moduleA, RootState> = {
    namespaced: true,
    state: {
        data: 'moduleA'
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
*/
