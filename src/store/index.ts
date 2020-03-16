import Vue from 'vue';
import Vuex, {ActionContext, StoreOptions} from 'vuex';

Vue.use(Vuex);

interface State {
  count: number;
}
// 테스ㄴ트 입니다.
//this is test
const store: StoreOptions<State> = {
  state: {
    count: 0,
  },
  mutations: {
    setCount(state: State, count: number) {
      state.count = count
    }
  },
  actions: {
    increase({ state, getters, dispatch, commit}: ActionContext<State, State>) {
      commit('setCount', state.count + 1)
    },
    decrease({ state, getters, dispatch, commit}: ActionContext<State, State>) {
      commit('setCount', state.count - 1)
    },
  },
  getters: {
    count: (state: State) => state.count
  }
}

export default new Vuex.Store(store)
