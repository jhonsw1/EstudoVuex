import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arreyTarefas: [{nome: 'Estudar React.js', data: '2020-04-13'},{nome: 'Estudar Vue.js', data: '2020-05-13'},{nome: 'Estudar Node.js', data: '2020-06-13'}]
  },
  mutations: {
    arrey: function(state, cadastrar){
        state.arreyTarefas.push(cadastrar)
    }
  },
  actions: {
  },
  modules: {
  }
})
