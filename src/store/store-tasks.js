import Vue from 'vue'
import {uid} from 'quasar'

const state = {
  tasks: {
    // 'ID1': {
    //   name: 'Go to shop',
    //   completed: false,
    //   dueDate: '2019/05/12',
    //   dueTime: '18:30'
    // }
  }
}

const actions = {
  updateTask({commit}, payload) {
    commit('updateTask', payload)
  },
  deleteTask({commit}, id) {
    commit('deleteTask', id)
  },
  addTask({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId, 
      task
    }
    commit('addTask', payload)
  }
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload){
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
    namespaced: true,
    state, 
    mutations, 
    actions, 
    getters
}