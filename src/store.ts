import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		transcripts: {},
		editingTranscript: null,
	},

	mutations: {
		SET_TRANSCRIPT(state, t) {
			Vue.set(state.transcripts, t.id, t)
		},
		CLEAR_TRANSCRIPTS(state) {
			state.transcripts = {}
		},
		DEL_TRANSCRIPT(state, id) {

			if (state.transcripts[id]) {
				Vue.delete(state.transcripts, id)
			} else {
				throw new Error('couldnt find transcript to delete')
			}
		},

		START_EDIT(state, id) {
			state.editingTranscript = id
		},
		CLEAR_EDIT(state) {

			state.editingTranscript = null
		},
	},

	getters: {
		editing: (state) => {
			return state.editingTranscript !== null
		},
	},
	actions: {
		loadTranscripts({commit}) {
			commit('CLEAR_TRANSCRIPTS')
			Vue.axios.get('').then( (response) => {
				for (const t of response.data) {
					commit('SET_TRANSCRIPT', t)
				}
			})
		},
		uploadTranscripts({state}) {
			Vue.axios.post('' , state.transcripts).then( (response) => {
				console.log('Successfully uploaded data, response:')
				console.log(response.data)
			})
		},

		setTranscript({commit, state}, t) {
			commit('SET_TRANSCRIPT', t)
			commit('CLEAR_EDIT')
		},

		addTranscript({commit, state}) {
			// This would probably be done by the backend,
			// but here I give the new transcript the biggest id
			let newId = 0
			// If object isn't empty
			if (Object.keys(state.transcripts).length > 0) {
				const transcriptKeys = Object.keys(state.transcripts).map(Number)
				newId = Math.max(...transcriptKeys) + 1
			}

			const t = {
				voice: '',
				text: '',
				id: newId,
			}

			commit('START_EDIT', t.id)
			commit('SET_TRANSCRIPT', t)
		},

		deleteTranscript({commit}, id) {
			commit('DEL_TRANSCRIPT', id)
		},


		startEdit({commit}, id) {
			commit('START_EDIT', id)
		},
		cancelEdit({commit}, id) {
			commit('CLEAR_EDIT')
		},
	},
})
