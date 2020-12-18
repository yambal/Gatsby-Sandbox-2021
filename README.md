# Gatsby Sandbox 2021

## TypeScript

### gatsby-plugin-graphql-codegen
  - Query型を自動生成する [See](https://qiita.com/Takepepe/items/144209f860fbe4d5e9bb#query%E5%9E%8B%E3%82%92%E8%87%AA%E5%8B%95%E7%94%9F%E6%88%90%E3%81%99%E3%82%8B)
  - [gatsby-plugin-graphql-codegen](https://www.gatsbyjs.com/plugins/gatsby-plugin-graphql-codegen/)

### gatsby-plugin-ts-config

> このプラグインを使用すると`gatsby-*`などの構成ファイルが Typescriptで書き込むことができます。

  - [gatsby-plugin-ts-config](https://www.gatsbyjs.com/plugins/gatsby-plugin-ts-config/)

`gatsby-browser.js`と`gatsby-ssr.js`にProviderを設置する事になるが、本体部分をTS(TSX)化しても、読み込み側がJSならばコンパイルで詰んでしまう。

解消方法はいくつかあろうが、構成ファイル自体をTS化するのが一番スマートだろう。

## Storybook

## xstyled