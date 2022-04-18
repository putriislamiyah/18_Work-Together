import Vue from "vue";
import Vuex from "vuex"

import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const persistedDataState = createPersistedState()

export default new Vuex.Store({
    plugins: [persistedDataState],
    state: {
        todos: []
    },
    mutations: {
        addTodo(state, param) {
            state.todos.push(param)
        },
        editDescription(state, param) {
            const { id, description } = param
            state.todos[id].description = description
        },
        deleteTodo(state, param) {
            state.todos.splice(param, 1)
        },
        editTitle(state, param) {
            const { id, title} = param
            state.todos[id].list = title
        }
    }
})