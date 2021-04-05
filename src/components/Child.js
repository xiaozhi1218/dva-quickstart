import React from 'react';
import { withRouter } from 'react-router';

const Child = (props) => {

  const handleClick = () => {
    props.history.push('/')
  }

  return (
    <div>
      <div>我是通用子组件</div>
      <button onClick={handleClick}>通用子组件跳转首页</button>
    </div>
  );
};

Child.propTypes = {
};

export default withRouter(Child);
