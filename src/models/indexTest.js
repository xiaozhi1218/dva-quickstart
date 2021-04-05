import * as apis from '../services/example'

export default {

  namespace: 'indexTest',

  state: {
    name: "xiaomin",
    nodeData: []
  },

  reducers: {
    setName(state, action) {
      return {...state, name: action.payload.name};
    },
    setData(state, action) {
      return {...state, nodeData: action.payload}
    },
    testPath(state, action) {
      console.log('testPath');
      return state
    }
  },

  effects: {
    *setNameAsync({ payload }, { call, put }) {
      // yield console.log('run');
      console.log(payload);
      yield put({
        type: "setName",
        payload: {
          name: '超人强'
        }
      })
    },
    *testNode({ payload }, { call, put }) {
      const res = yield call(apis.testNode)
      yield put({
        type: "setData",
        payload: res.data.banners
      })
    }
  },

  subscriptions: {
    test({ dispatch, history }) {
      history.listen(({pathname}) => {
        if (pathname === '/user') {
          // console.log('用户页');
          dispatch({
            type: 'testPath',
          })
        }
      })
    }
  }

};
 