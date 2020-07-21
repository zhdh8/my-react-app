import * as actionTypes from './actionTypes'

const defaultState = {
  source: 2,
}

export default (state = defaultState, action) => {

  const { type, payload } = action
  switch (type) {
    case actionTypes.GET_SOURCE_LIST:
      return {
        ...state,
        sourceList: payload.list,
      }

    default:
      return state
  }
}