test('匹配器：toBe-数字相等', () => {
  const a = 10
  expect(a).toBe(10)
})

test('匹配器：toEqual-内容相等', () => {
  const a = { one: 1 }
  expect(a).toEqual({ one: 1 })
})

test('匹配器：toBeGreaterThan-大于比较数', () => {
  const a = 4
  expect(a).toBeGreaterThan(2)
  expect(a).toBeGreaterThan(3)
})

test('匹配器：toBeGreaterThanOrEqual-大于等于比较数', () => {
  const a = 4
  expect(a).toBeGreaterThanOrEqual(4)
  expect(a).toBeGreaterThanOrEqual(3)
})

test('匹配器：toBeLessThan-小于比较数', () => {
  const a = 4
  expect(a).toBeLessThan(5)
})

test('匹配器：toBeLessThanOrEqual-小于等于比较数', () => {
  const a = 4
  expect(a).toBeLessThanOrEqual(4)
  expect(a).toBeLessThanOrEqual(5)
})

test('匹配器：toBeCloseTo-两个浮点数相加', () => {
  const sum = 0.1 + 0.2
  // expect(sum).toBe(0.3)
  expect(sum).toBeCloseTo(0.3, 5)
})

test('匹配器：toBeNaN-等于NaN', () => {
  expect(NaN).toBeNaN()
  expect(1).not.toBeNaN()
})