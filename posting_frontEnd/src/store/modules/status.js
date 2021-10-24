import {
  newStatus
} from '@/services/StatusServices.js'

export default {
  state: {
    status: [
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
      newStatus(),
    ],
    oneStatus: newStatus(),
  },
  mutations: {
    addStatus: (state, payload) => (state.status.push(payload)),
    setCommentStatus: (state, payload) => (state.status[payload.id].comments.push(payload)),
    resetStatus: state => state.oneStatus = newStatus(),

  },
  actions: {},
  getters: {
    getStatus: state => state.oneStatus,
    getStatus: state => state.status
  },
}