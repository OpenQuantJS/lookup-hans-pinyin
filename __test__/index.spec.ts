import hansPinyinMatcher from '../src'

const rawData = [
  '中水渔业',
  '中航重机',
  '滨江集团',
  '中远海特',
]

describe('hans lookup', () => {
  it('should return matched strings', () => {
    const matcher = hansPinyinMatcher(rawData)
    expect(matcher.lookup('zsyy')).toEqual(['中水渔业'])
    expect(matcher.lookup('ZSYY')).toEqual(['中水渔业'])
    expect(matcher.lookup('bjjt')).toEqual(['滨江集团'])
    expect(matcher.lookup('z')).toEqual(['中水渔业', '中航重机', '中远海特'])
    expect(matcher.lookup('zh')).toEqual(['中水渔业', '中航重机', '中远海特'])
    expect(matcher.lookup('jituan')).toEqual(['滨江集团'])
  })
})
