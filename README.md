This project is created by create-react-app.

#### redux-mock-store
Reduxの非同期ActionCreeatorのテストをするためのライブラリ

#### jest-fetch-mock
Jest + Fetchを使っている場合にAPIリクエストのモックを簡単に行えるライブラリ
(src/setupTest.jsを作成する必要がある)

### enzymeはShallow Renderingのテスト

### react-test-rendererでのスナップショットテストについて
スナップショットのテストが失敗した場合には下記２つの選択肢から選ぶ

* コンポーネントまたはテストを修正し、再度テストを実行
* スナップショット自体を更新

スナップショットを更新する場合は `npm test -- --updateSnapshot` を実行する
