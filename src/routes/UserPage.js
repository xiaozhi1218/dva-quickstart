import React, { Fragment } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { NavLink } from 'dva/router';
import Child from '../components/Child';

const UserPage = (props) => {

  const handleClick = () => {
    // console.log(props);
    props.history.push('/')
  }

  return (
    <Fragment>
      <div>我是用户页面</div>
      <NavLink to="/">跳转首页</NavLink>
      <button onClick={handleClick}>按钮跳转首页</button>
      <Child />
    </Fragment>
  );
}

UserPage.propTypes = {
};

export default UserPage;
