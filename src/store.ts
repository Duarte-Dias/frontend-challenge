import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		transcripts: [],
	},
	mutations: {
		SET_TRANSCRIPTS(state, data) {
			state.transcripts = data
		},
	},
	actions: {
		loadTranscripts({commit}) {
			Vue.axios.get('').then( (response) => {
				commit('SET_TRANSCRIPTS', response.data)
			})
		},
		uploadTranscripts() {
			Vue.axios.post('').then( (response) => {
				console.log(response.data)
			})
		},
	},
})
