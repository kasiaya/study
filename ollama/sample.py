# OpenAIのPythonライブラリからOpenAIクラスをインポートします。
# このクラスを使って、API経由でモデルにアクセスできます。
from openai import OpenAI

# OpenAIクライアントのインスタンスを作成します。
# api_key は認証に使うキー（ここでは "ollama" になっています）。
# base_url はリクエストを送るサーバーのURL（ここではローカルで動いている Ollama サーバー）。
client = OpenAI(
    api_key="ollama",   
    base_url="http://localhost:12000/v1"
)

# Chat APIにリクエストを送って応答を取得します。
# model は使いたい言語モデル（ここでは "qwen3:0.6b"）。
# messages は会話履歴で、辞書のリストで指定します。
# ここでは1つだけメッセージを送っています。
# temperature は生成のランダム度合いで、0は最も決定的（毎回同じ回答に近い）。
response = client.chat.completions.create(
    model="qwen3:0.6b",
    messages=[{"role": "user", "content": "こんにちは、LLMについて教えて"}],
    temperature=0
)

# APIから返ってきたレスポンス全体を表示します。
# レスポンスには、テキストだけでなく、使用トークン数やメタ情報も含まれています。
print("reponse全体:", response)

# 実際にモデルが生成したテキストだけを取り出して表示します。
# response.choices[0] で最初の応答を取得し、.message.content でテキスト部分を参照。
print("テキストだけ抽出:", response.choices[0].message.content)
