# look up hans by pinyin

```
npm i lookup-hans-pinyin --save
```

```
import hansPinyinMatcher from 'lookup-hans-pinyin'

const rawData = [
  '中水渔业',
  '中航重机',
  '滨江集团',
  '中远海特',
]

test('should return matched strings', t => {
  const matcher = hansPinyinMatcher(rawData)
  t.deepEqual(matcher.lookup('zsyy'), ['中水渔业'])
  t.deepEqual(matcher.lookup('ZSYY'), ['中水渔业'])
  t.deepEqual(matcher.lookup('bjjt'), ['滨江集团'])
  t.deepEqual(matcher.lookup('z'), ['中水渔业', '中航重机', '中远海特'])
  t.deepEqual(matcher.lookup('zh'), ['中水渔业', '中航重机', '中远海特'])
  t.deepEqual(matcher.lookup('jituan'), ['滨江集团'])
})
```
