import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		transcripts: {},
	},
	mutations: {
		SET_TRANSCRIPT(state, t) {
			Vue.set(state.transcripts, t.id, t)
		},
		DEL_TRANSCRIPTS(state, id) {

			if (state.transcripts[id]) {
				Vue.delete(state.transcripts, id)
			} else {
				throw new Error('couldnt find transcript to delete')
			}
		},
	},
	actions: {
		loadTranscripts({commit}) {
			Vue.axios.get('').then( (response) => {
				for (const t of response.data) {
					commit('SET_TRANSCRIPT', t)
				}
			})
		},
		uploadTranscripts() {
			Vue.axios.post('').then( (response) => {
				console.log(response.data)
			})
		},

		deleteTranscript({commit}, id) {
			commit('DEL_TRANSCRIPTS', id)
		},
	},
})
