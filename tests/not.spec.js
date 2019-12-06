test('匹配器：not-不是xx', () => {
  const a = 1
  expect(a).not.toBe(2)
  expect(a).not.toBeFalsy()
})

describe('not.arrayContaining', () => {
  const expected = ['sam']
  it('如果接受的数组不包含sam就通过', () => {
    expect(['kk', 'zz']).toEqual(expect.not.arrayContaining(expected))
  })
  it('如果接受的数组包含sam就通过', () => {
    expect(['kk', 'sam']).toEqual(expect.arrayContaining(expected))
  })
})

describe('not.objectContaining', () => {
  const expected = { foo: 'bar' }
  it(`如果接受的对象不包含{ foo: 'bar' }就通过测试`, () => {
    expect({ bar: 'baz' }).toEqual(expect.not.objectContaining(expected))
  })
})

describe('not.stringContaining', () => {
  const expected = 'Hello World'
  it('接受的字符串不完全等于Hello World就通过', () => {
    expect('Hello').toEqual(expect.not.stringContaining(expected))
  })
})

describe('not.stringMatching', () => {
  const expected = /Hello World/
  it('接受字符串不包含Hello World就通过', () => {
    expect('Hello Worl').toEqual(expect.not.stringMatching(expected))
  })
  it('接受字符串不包含Hello World就通过', () => {
    expect('How are you').toEqual(expect.not.stringMatching(expected))
  })
})