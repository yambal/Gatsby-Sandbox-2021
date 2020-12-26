---
title: Font Awesome Icon の導入
template: SandboxTemplate
---

> Font Awesome とは : 使い勝手のよいアイコン集です。

以前は「フォントアイコン」として配布されたいましたが、Ver.5 からは「SVGアイコン」として配布されています。

Font Awesame を利用する目的は「使い勝手が良い」が全てを表していて、**無難で高品質なアイコン**を、簡単にWebシステムに組み込める点です。

本質的にはサイトやサービスの目的や特徴に合わせて、より価値の高い価値を創出するデザインとしてアイコンはデザインされるべきですが（昔はそうしてました）、リソースや時間が限られたシーンでは「無難に役割を果たすアイコン」というのは、充分価値のある選択肢です。

## 最初に押さえておくこと

- Font Awesome には Free と Pro がある
  - Pro（$90/year）を使うには発行される Token が必要
- 独特の prefix がある
  - fas : Solid (Free あり)
  - far : Regular (Free あり)
  - fal : Light (Pro のみ)
  - fad : Duotone (Pro のみ)
  - fab : Bland (Free)

Free で利用できるのは、Solid と Reqular の一部と Brand である。
公式サイト等で書かれているサンプルが、Free 版ユーザーでは表示されないものもあるので、対象のアイコンが Free で使えるモノかどうかは確認しておきたい。

> 本記事は、Freeプランで利用する事を前提としている。

## React に Font Awesome を組み込む
ちゃんと　React 向けのライブラリが公式からリリースされている。

- 参照 : [React](https://fontawesome.com/how-to-use/on-the-web/using-with/react) (Font Awesome)
- 参照 : [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) (Github)

基本は上記のドキュメントどおり

### インストール

```yarn
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-regular-svg-icons
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/react-fontawesome
```

### 実装

|  組み込み方法  |  利点  |  欠点  |
| ---- | ---- | ---- |
|  個別使用  |  インポートしたアイコンのみがソースに組み込まれる  | 利用するアイコンをそれぞれ明示的にインポートしなくてはいけない |
|  グローバル使用  |  一か所でインポートするだけで各所でアイコンをパラメタで指定し、組み込める | 使用しないアイコンのコードも含み事になる |

#### 個別使用
いちばんコンパクトな組み込みは、以下のようになるだろう
```js
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export function Icon() {
 return (
  <FontAwesomeIcon icon={faCoffee} />
 )
}
```
コーヒーカップのアイコンを表示するコンポーネントとなる。
この方法だと、あらかじめ必要なアイコンを決めて利用する手間がある反面、利用しないアイコンは読み込まないことが分かりやすい。

#### グローバル使用
グローバル使用には、あらかじめグローバルでライブラリを読み込んでおくという手順が加わる。

具体的には以下のようなソースを初期化時に読み込まれるようにします
```tsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(far, fas)
```
たとえば、Reactならば（慣例的に）App.tsx が妥当でしょう。

上記のコードがうまく働くなら、アイコンの呼び出しは以下のようになります。

```tsx
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

...

<FontAwesomeIcon icon={['fas', 'coffee']} /＞
```
アイコンのコードをまとめて読み込んでいるので、変数でその全てを呼び出すことができます。とにかく色んなアイコンを使えるようにしておく方法としてはラクちんですが、もちろんビルドされたコードは大きくなるでしょう。

#### グローバル使用 ：Gatsby 編
Gatsby とてコードがコンパクトであることに越したことは無いので、グローバル使用は避けた方が良いでしょう。

先ほど 初期化コードを React なら App.tsx に書く、と説明しましたが
、Gatsby の場合は`gatsby-browser.js`や`gatsby-ssr.js`となります。

しかし、そのままでは Font Awesome の CSS 読み込みの遅延現象が発生します。
例えば、読み込み時に一瞬アイコンが巨大表示される、などです。

対処コードは以下のようになります。
```tsx
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
config.autoAddCss = false
library.add(far, fas)
```
上記を読み解くと、Font Awesome で使用するCSSを、手動でインポートしています。
そのかわり、`config.autoAddCss = false`で自動読み込みをキャンセルしていますね。

#### グローバル使用 ：Gatsby + 俺 編
んまぁ、本サイトは個人学習サイトなのでそれ自体に高いポテンシャルは必要ありません。だからコーディングが楽しい「グローバル使用」で組んでいます。

具体的には`src\gatsby\api\wrapPageElement.tsx`にその記述があります。