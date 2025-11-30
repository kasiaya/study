# ollama

## memo

- インストールできたか確認する
  - ollama --version

- モデルをインストールする
  - ollama pull <モデル名>

- インストールしたモデルを確認する
  - ollama list

- モデルを動かす
  - ollama run <model名>

- モデルを消すとき
  - ollama rm <model名>

---

- ポートを設定できるよ
  - OLLAMA_HOST=127.0.0.1:12000 ollama serve

---


## sample.pyの説明

### 💡 ポイント解説

OpenAI はAPIクライアントで、モデルにメッセージを送ると返答が返ってきます。

messages の中の "role" は "user"（あなたの入力）や "assistant"（AIの返答）、 "system"（会話の指示用）が指定可能。

temperature=0 は毎回同じ答えを返すようにする設定で、会話でブレが少なくなります。

### 1️⃣ オブジェクトの構造をイメージする

Pythonで書くと、今回の部分は 「オブジェクトのチェーン呼び出し」 です。

client.chat.completions.create(...)


client → OpenAIクラスのインスタンス

client.chat → 「チャット系API」にアクセスするためのオブジェクト

client.chat.completions → 「チャットの完了（completion）を作る機能」にアクセス

client.chat.completions.create(...) → 実際にリクエストを送ってモデルに文章生成させるメソッド

💡 要するに、

「クライアントを使ってチャット機能の完了を作る」

という意味になります。

### 2️⃣ 何が起きているのか

create() を呼ぶと次の流れです：

Pythonコードから HTTPリクエストを送信

base_url に指定したサーバー（ここでは http://localhost:12000/v1）にPOSTするイメージ

サーバー側のモデル（ここでは qwen3:0.6b）が受け取ったメッセージを理解

モデルが返答テキストを生成

サーバーが生成した結果をJSONで返す

create() はそのJSONをPythonオブジェクト（response）に変換して返す

