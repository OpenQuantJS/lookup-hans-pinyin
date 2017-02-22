import pinyin from 'pinyin'
import { compose, flatten } from 'ramda'
import fuzzyArrayMatch from 'array-fuzzy-match'

const toPinyin = hans => pinyin(hans, { style: pinyin.STYLE_NORMAL })

const hansPinyin = rawData => {
  const pinyinData = rawData.map(compose(flatten, toPinyin))
  return {
    lookup: query => {
      const found = []
      pinyinData.forEach((pd, i) => {
        if (fuzzyArrayMatch(pd, query)) {
          found.push(rawData[i])
        }
      })
      return found
    },
  }
}

export default hansPinyin
