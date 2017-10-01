import { combineReducers } from 'redux'

const ideaBoard = (state = [], { type, payload }) => {
    switch (type) {
      case 'ADD_NEW_IDEA':
        return [
          ...state, payload.idea
        ]
      default:
        return state
    }
  }

const myWidgets = combineReducers({
    ideaBoard
})

export default myWidgets