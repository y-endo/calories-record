# 摂取したカロリーと栄養素を記録するWebアプリ
フロントエンド TypeScript、React、redux-toolkit、styled-components  
バックエンド Node、express、mongodb、mongoose  

## 開発環境構築
node と docker がインストールされている前提。  
動作確認バージョン  
- node: v12.13.1
- docker: 20.10.6

1. node_modules のインストール  
   ```
   yarn
   ```
2. docker-compose 起動（mongodb）  
   ```
   docker-compose up
   ```
3. Express起動（APIサーバー）
   ```
   yarn api-server
   ```

port: 30000 に webpack-dev-server が起動。  
port: 30001 に Express が起動。  

### 開発コマンド
```
yarn dev
```

### ビルドコマンド
```
yarn build
```

ビルドコマンドはJSの圧縮以外にstylelintも走るので、エラーがでた場合は要修正。  
現状styled-componentsに対してstylelintのfixオプションは使えない。  
