import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personajes: [],
    idPersonaje: {},
    episodios: {}
  },
  getters:{
    idPersonaje(state){
      return state.idPersonaje
    },
    personajes(state){
      return state.personajes
    }
  },
  mutations: {
    getPersonajes(state, data){
      state.personajes = data
    },
    getId(state, data){
      state.idPersonaje = data
    }
  },
  actions: {
    async obtenerPersonajes({commit}, id){
      let resultados = await axios.get('https://rickandmortyapi.com/api/character', {
        params: {
        page: id
        }
      })
      commit('almacenarPersonajes' , resultados.data)
    }, 
    obtenerIdPersonaje({commit}, id){
      axios.get(`https://rickandmortyapi.com/api/character/` + id)
      .then((response) => {
        commit('almacenarID' , response.data)
      })
      .catch(e => {
        console.log(e)
      })
    },
  },
  modules: {
  }
})
