const Mock = require('mockjs')

export function getNum() {
  let num = Mock.mock({
    'a|0-9': 6,
    'b|0-9': 6,
    'c|0-9': 6,
    'd|0-9': 6,
    'e|0-9': 6,
    'f|0-9': 6
  })
  return num;
}