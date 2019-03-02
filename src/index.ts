import pinyin from 'pinyin'
import { compose, flatten } from 'ramda'
import fuzzyArrayMatch from 'array-fuzzy-match'

const toPinyin = (hans: string) => pinyin(hans, { style: pinyin.STYLE_NORMAL })

const hansPinyin = (rawData: string[]) => {
  const pinyinData = rawData.map<string[]>(compose<string, string[][], string[]>(flatten as any, toPinyin))
  return {
    lookup: (query: string) => {
      const found: string[] = []
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
