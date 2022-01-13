import { useState } from 'react'
import './App.css'
import { ShowGrid } from './components/ShowGrid/ShowGrid'
import { Items } from './components/Items/Items'

const cols = 'f9e efa'.split(' ').map((e) => e.split(''))
const randInt = (max) => Math.floor(Math.random() * max)
const randIntr = (min, max) => randInt(max - min) + min
const randIdx = (arr) => randInt(arr.length)
const randItem = (arr) => arr[randIdx(arr)]
const shuffle = (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i])
    if (i > 0) {
      const lastIdx = result.length - 1
      const idx = Math.floor(Math.random() * result.length)
      const t = result[idx]
      result[idx] = result[lastIdx]
      result[lastIdx] = t
    }
  }
  return result
}

const cap = (str) => str[0].toUpperCase() + str.slice(1)
const words =
  'keep think though thought set custon to how 日本語 感じ カラオケ'.split(' ')

const mockShows = Array(13)
  .fill(null)
  .map((e) => {
    const color = shuffle(randItem(cols)).join('')
    return {
      color: '#' + color,
      // image: 'https://via.placeholder.com/150x88/' + color,
      image: '/shows/' + randIntr(1, 7) + '.jpg',
      title: shuffle(words).slice(0, randIdx(words)).join(' '),
    }
  })

const months = Array(12)
  .fill(null)
  .map((e, i) => i)
const days = Array(31)
  .fill(null)
  .map((e, i) => i + 1)
const years = Array(20)
  .fill(null)
  .map((e, i) => 2022 - i)

const leadZero = (str, num) => {
  return (Array(num).fill('0').join('') + str.toString()).slice(-num)
}

const names =
  '帆世雄一 伊東健人 小山力也 柚木涼香 杉田智和 後藤邑子 葉山翔太 榊原優希 伊東健人 木島隆一 石見舞菜香 牧野由依 佐伯伊織 佳原萌枝 瀬戸麻沙美 日高里菜 梶裕貴 下野紘 矢野奨吾 土屋神葉 間島淳司 小林裕介 久住琳 日岡なつみ 嶺内ともみ 斎賀みつき 速水奨 浦和希 渋谷慧 峯田大夢 kayto 歩サラ 餅月ひまり ファイルーズあい 直田姫奈 石毛翔弥 雨宮夕夏 星谷美緒 守屋亨香 風音 秋野花 速水奨 野村香菜子 礒部花凜 前田佳織里 堀江瞬 古賀葵 前野智昭 帆世雄一 伊東健人 小山力也 柚木涼香 杉田智和 後藤邑子 葉山翔太 榊原優希 伊東健人 木島隆一 石見舞菜香 牧野由依 佐伯伊織 佳原萌枝 瀬戸麻沙美 日高里菜 梶裕貴 下野紘 矢野奨吾 土屋神葉 間島淳司 小林裕介 久住琳 日岡なつみ 嶺内ともみ 斎賀みつき 速水奨 浦和希 渋谷慧 峯田大夢 kayto 歩サラ 餅月ひまり ファイルーズあい 直田姫奈 石毛翔弥 雨宮夕夏 星谷美緒 守屋亨香 風音 秋野花 速水奨 野村香菜子 礒部花凜 前田佳織里 堀江瞬 古賀葵 前野智昭 帆世雄一 伊東健人 小山力也 柚木涼香 杉田智和 後藤邑子 葉山翔太 榊原優希 伊東健人 木島隆一 瀬戸麻沙美 日高里菜 緑川光 今井麻美 内田彩 高木友梨香 阿座上洋平 熊谷健太郎 ランズベリー・アーサー 中島ヨシキ 代永翼 白井悠介 本渡楓 富田美憂 小清水亜美 杉田智和 後藤邑子 染谷俊之 代永翼 田丸篤志 高橋李依 小林裕介 ファイルーズあい 岡本信彦 富田美憂 前田佳織里 高尾奏音 岡本信彦 石川界人 神尾晋一郎 斉藤壮馬 佐藤元 佐藤日向 小泉萌香 名塚佳織 浅野真澄 上村源 髙橋ミナミ 星谷美緒 前田佳織里 大原さやか 広橋涼 大原さやか 松岡禎丞 天﨑滉平 岡咲美保 佐藤元 村井美里 秋葉佑 山根雅史 高橋李依 上田麗奈 瀬戸麻沙美 日高里菜 髙橋ミナミ 峯田大夢 浦和希 高森奈津美 三澤紗千香 黒沢ともよ 安済知佳 豊田萌絵 朝井彩加 井澤美香子 矢野妃菜喜 星希成奏 関根瞳'.split(
    ' '
  )
console.log(names)

const mockItems = Array(7)
  .fill(null)
  .map((e) => {
    const d = new Date(shuffle(years)[0], shuffle(months)[0], shuffle(days)[0])
    const t = Math.floor(14460 * Math.random())
    const p = Array(randIntr(2, 3))
      .fill(null)
      .map((e) => `${shuffle(names)[0]}`)
    const dateStr = `${d.getMonth() + 1}/${d.getDate()}`
    console.log(p)
    return {
      // date: d.toISOString().slice(0, 10),
      date: dateStr,
      title: shuffle(words).slice(0, randIdx(words)).join(' '),
      duration: `${Math.floor(t / 60)}:${leadZero(t % 60, 2)}`,
      performers: p,
    }
  })

console.log(mockItems)

export const App = () => {
  const [small, setSmall] = useState(false)
  const handleShow = (e) => {
    e.preventDefault()
    setSmall(!small)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
      </header>
      <div
        style={{
          paddingBottom: '50vh',
        }}
      >
        <ShowGrid shows={mockShows} onShow={handleShow} />
      </div>
      <div className="items-popup">
        <Items items={mockItems} />
      </div>
    </div>
  )
}
