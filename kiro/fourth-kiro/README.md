# CRM アプリケーション Docker追加バージョン検証

Vue.js + Laravel + Docker で構築するCRM（顧客管理）システム

## プロジェクト構成

```
crm-app/
├── backend/                 # Laravel API
│   ├── app/
│   ├── config/
│   ├── database/
│   ├── routes/
│   └── ...
├── frontend/               # Vue.js アプリ
│   ├── src/
│   ├── public/
│   └── ...
├── docker/                 # Docker設定
│   ├── nginx/
│   ├── php/
│   └── mysql/
├── docker-compose.yml      # Docker構成
└── README.md

```

## 技術スタック

- **フロントエンド**: Vue 3 + Vite + Tailwind CSS
- **バックエンド**: Laravel 10 + PHP 8.2
- **データベース**: MySQL 8.0
- **Webサーバー**: Nginx
- **開発環境**: Docker + Docker Compose

## セットアップ

1. リポジトリをクローン
2. `docker-compose up -d` でコンテナ起動
3. Laravel初期設定とマイグレーション実行
4. Vue.jsの依存関係インストール

詳細は各ディレクトリのREADMEを参照してください。
