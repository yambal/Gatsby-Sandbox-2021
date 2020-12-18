# Gatsby Sandbox 2021
(https://www.gatsbyjs.com/starters/msallent/gatsby-starter-skeleton)」をベースに作成しました

フロントエンジニアとしてReactを扱っていますが、そこで面白いと感じた手段や方法について、モリモリに盛り込んで学習するテンプレート。

## TypeScript
### gatsby-plugin-graphql-codegen

> graphqlクエリの自動型生成

Gatsby でTypeScriptを使うとGraphQL部分の型定義が大変。

そもそもGraphQLスキーマに型が定義されているのにTypeScriptで型定義をするのは二重定義。

GraphQLスキーマまたはGraphQLドキュメントから型定義を自動生成してくれるのが`gatsby-plugin-graphql-codegen`である。

元はおそらく[GraphQL Code Generator](https://graphql-code-generator.com/)ではないだろうか。

#### 参照

- [Query型を自動生成する](https://qiita.com/Takepepe/items/144209f860fbe4d5e9bb#query%E5%9E%8B%E3%82%92%E8%87%AA%E5%8B%95%E7%94%9F%E6%88%90%E3%81%99%E3%82%8B)
- Gatsby pligin : [gatsby-plugin-graphql-codegen](https://www.gatsbyjs.com/plugins/gatsby-plugin-graphql-codegen/)

### gatsby-plugin-ts-config

> このプラグインを使用すると`gatsby-*`などの構成ファイルが Typescriptで書き込むことができます。

`gatsby-browser.js`と`gatsby-ssr.js`にProviderを設置する事になるが、本体部分をTS(TSX)化しても、読み込み側がJSならばコンパイルで詰んでしまう。

解消方法はいくつかあろうが、構成ファイル自体をTS化するのが一番スマートだろう。

#### 参照

- Gatsby pligin : [gatsby-plugin-ts-config](https://www.gatsbyjs.com/plugins/gatsby-plugin-ts-config/)

## Storybook

## styled-components + xstyled

> ES6とCSSの最高の部分を使用して、ストレスなくアプリのスタイルを設定します<br />styled-components

> コンポーネントのスタイルを設定する新しい方法。テーマベースの一貫性のあるスタイリング<br />xstyled

xstyledはstyled-componentsの単なるラッパーです。`styled-components`や`styled-system`から発展したもので、堅牢さと可用性をあわせもっています。

`styled-components`は堅牢なプレゼンテーショナルコンポーネントの構築と運用を実現してくれて、本当に感動しました。

`styled-system`は（まだ使い始めたところですが）その使い勝手に感動しています。特にスタイリングを`tailwindowcss`のユーティリティクラスのように扱えるのが便利です。


#### 参照

- [styled-components](https://styled-components.com/)
- [xstyled](https://xstyled.dev/)