import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  personajes: [],
  idPersonaje:{},
  episodios:{},
}
const getters = {
  idPersonaje(state){
    return state.idPersonaje
  },
  personajes(state){
    return state.personajes
  }
}
const mutations = {
  almacenarPersonajes(state, data){
    state.personajes = data
  },
  almacenarID(state, data){
    state.idPersonaje = data
  }
}
const actions = {
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
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
