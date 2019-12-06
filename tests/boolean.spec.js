test('匹配器：toBeNull-与Null相等', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeFalsy()
})

test('匹配器：toBeUndefined-与undefined相等', () => {
  const u = undefined
  expect(u).toBeUndefined()
})

test('匹配器：toBeDefined-被定义过的，非undefined,可为null', () => {
  const n = null
  expect(n).toBeDefined()
})

test('匹配器：toBeTruthy-真值或者隐藏为true的', () => {
  const a = 1
  expect(a).toBeTruthy()
})

test('匹配器：toBeFalsy-假值或者隐藏为false的', () => {
  const arr = [null, '', NaN, false, 0, undefined]
  arr.forEach((item) => {
    expect(item).toBeFalsy()
  })
})

