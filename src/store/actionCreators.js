import * as actionTypes from './actionTypes'

export const createAction = (type, payload) => {
  return {
    type,
    payload,
  }
}

export const getSourceList = () => {
  return (dispatch, state) => {
    dispatch(createAction(actionTypes.GET_SOURCE_LIST, {
      list: [
        {id: 1, name: 'alipay',},
        {id: 2, name: 'wechat',},
        {id: 3, name: 'didi',},
      ]
    }))
  }
}