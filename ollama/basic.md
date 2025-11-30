memo

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

ポートを設定できるよ

OLLAMA_HOST=127.0.0.1:12000 ollama serve
