import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function testNode() {
  return request('http://123.207.32.32:9001/banner');
}

export function mockdata() {
  return request("/api/mockdata");
}
