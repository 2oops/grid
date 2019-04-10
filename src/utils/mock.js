const Mock = require('mockjs')

export function getNum() {
  let num = Mock.mock({
    'a|0-40': 6,
    'b|0-40': 6,
    'c|0-40': 6,
    'd|0-40': 6,
    'e|0-40': 6,
    'f|0-40': 6
  })
  return num;
}