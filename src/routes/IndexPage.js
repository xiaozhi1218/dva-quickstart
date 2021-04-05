import React, { useEffect} from 'react';
import { connect } from 'dva';

import * as apis from '../services/example';

const IndexPage = (props) => {
  
  // useEffect(() => {
    // apis.testNode().then(res => {
    //   console.log(res);
    // })
  // }, [props.dispatch])

  const handleName = () => {
    props.dispatch({
      type: "indexTest/setName",
      payload: {
        name: "猪猪侠"
      }
    })
  }

  const handleNameAsync = () => {
    props.dispatch({
      type: "indexTest/setNameAsync",
      payload: {
        name: "猪猪侠"
      }
    })
  }

  const handleNetAsync = () => {
    props.dispatch({
      type: "indexTest/testNode"
    })
  }

  useEffect(() => {
    apis.mockdata().then(res => {
      console.log(res);
    })
  }, [])

  console.log(props);
  return (
    <div>
      <div>首页</div>
      <div>{props.name}</div>
      <button onClick={handleName}>发射dispatch</button>
      <button onClick={handleNameAsync}>异步发射dispatch</button>
      <button onClick={handleNetAsync}>异步发射dispatch网络请求</button>
      <div>
        {
          props.data.map(item => {
            return <div key={item.scm}>{item.imageUrl}</div>
          })
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    name: state.indexTest.name,
    data: state.indexTest.nodeData
  }
}

export default connect(mapStateToProps)(IndexPage);
