# CRM アプリケーション Docker追加バージョン検証

Vue.js + Laravel + Docker で構築するCRM（顧客管理）システム

※Kiroに生成を依頼した内容をそのままコピペ、あくまで現状イメージ把握目的のみ


# 🚀 CRM アプリケーション

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.3-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Laravel](https://img.shields.io/badge/Laravel-10-FF2D20?logo=laravel)](https://laravel.com/)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?logo=docker)](https://www.docker.com/)

Vue.js + Laravel + Docker で構築する**モダンなCRM（顧客管理）システム**

AWS上での本番運用を想定した、スケーラブルで保守性の高いアーキテクチャを採用しています。

## ✨ 主な機能

### 📊 ダッシュボード
- 顧客数・売上統計の可視化
- ステータス別顧客分布
- 最近の活動履歴
- 次回連絡予定の管理

### 👥 顧客管理
- **CRUD操作**: 顧客情報の作成・参照・更新・削除
- **高度な検索**: 会社名・担当者・メールでの横断検索
- **フィルタリング**: ステータス・契約日・金額での絞り込み
- **ソート機能**: 各項目での昇順・降順ソート
- **ページネーション**: 大量データの効率的な表示

### 🎯 ステータス管理
- **見込み客** (Prospect): 初期接触段階
- **アクティブ** (Active): 商談進行中
- **非アクティブ** (Inactive): 一時停止
- **成約済み** (Closed): 契約完了

## 🏗️ アーキテクチャ

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Vue.js SPA    │    │   Laravel API   │    │   MySQL DB      │
│                 │    │                 │    │                 │
│ • Tailwind CSS  │◄──►│ • RESTful API   │◄──►│ • 顧客データ    │
│ • Vue Router    │    │ • Eloquent ORM  │    │ • インデックス  │
│ • Pinia Store   │    │ • バリデーション │    │ • 論理削除      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   Docker        │
                    │                 │
                    │ • Nginx         │
                    │ • PHP-FPM       │
                    │ • MySQL         │
                    │ • Node.js       │
                    └─────────────────┘
```

## 📁 プロジェクト構成

```
crm-app/
├── 📄 README.md                                    # プロジェクト概要
├── 📄 SETUP.md                                     # セットアップガイド
├── 🔧 setup.sh                                     # 自動セットアップスクリプト
├── 🔧 docker-compose.yml                           # Docker構成定義
├── 🔧 .env.example                                 # 環境変数テンプレート
│
├── 🖥️ backend/                                     # Laravel API
│   ├── 📄 composer.json                           # PHP依存関係
│   ├── 🔧 .env.example                            # Laravel環境変数
│   ├── 📁 app/
│   │   ├── 📁 Models/
│   │   │   └── 📄 Customer.php                   # 顧客モデル
│   │   └── 📁 Http/Controllers/Api/
│   │       └── 📄 CustomerController.php         # 顧客API コントローラー
│   ├── 📁 database/
│   │   ├── 📁 migrations/
│   │   │   └── 📄 *_create_customers_table.php   # 顧客テーブル
│   │   └── 📁 seeders/
│   │       └── 📄 CustomerSeeder.php             # サンプルデータ
│   └── 📁 routes/
│       └── 📄 api.php                            # APIルート定義
│
├── 🎨 frontend/                                   # Vue.js アプリ
│   ├── 📄 package.json                           # Node.js依存関係
│   ├── 🔧 vite.config.js                         # Vite設定
│   ├── 🔧 tailwind.config.js                     # Tailwind CSS設定
│   └── 📁 src/
│       ├── 📄 main.js                            # アプリエントリーポイント
│       ├── 📄 App.vue                            # ルートコンポーネント
│       ├── 📄 style.css                          # グローバルスタイル
│       ├── 📁 router/
│       │   └── 📄 index.js                       # Vue Router設定
│       └── 📁 api/
│           ├── 📄 client.js                      # API クライアント
│           └── 📄 customers.js                   # 顧客API関数
│
└── 🐳 docker/                                    # Docker設定
    ├── 📁 nginx/                                 # Webサーバー
    ├── 📁 php/                                   # PHP-FPM
    ├── 📁 node/                                  # Node.js開発環境
    └── 📁 mysql/                                 # データベース
```

## 🛠️ 技術スタック

### フロントエンド
| 技術 | バージョン | 用途 |
|------|------------|------|
| **Vue.js** | 3.3+ | リアクティブUI フレームワーク |
| **Vite** | 4.4+ | 高速ビルドツール |
| **Tailwind CSS** | 3.3+ | ユーティリティファーストCSS |
| **Vue Router** | 4.2+ | SPA ルーティング |
| **Pinia** | 2.1+ | 状態管理 |
| **Axios** | 1.5+ | HTTP クライアント |

### バックエンド
| 技術 | バージョン | 用途 |
|------|------------|------|
| **Laravel** | 10+ | PHP Webフレームワーク |
| **PHP** | 8.2+ | サーバーサイド言語 |
| **Eloquent ORM** | - | データベース操作 |
| **Laravel Sanctum** | 3.2+ | API認証（将来実装） |

### インフラ・開発環境
| 技術 | バージョン | 用途 |
|------|------------|------|
| **Docker** | 20+ | コンテナ化 |
| **Docker Compose** | 2+ | マルチコンテナ管理 |
| **Nginx** | Alpine | Webサーバー・リバースプロキシ |
| **MySQL** | 8.0 | リレーショナルデータベース |
| **phpMyAdmin** | - | データベース管理ツール |

## 🚀 クイックスタート

### 前提条件
- Docker Desktop がインストール済み
- Git がインストール済み
- 8GB以上のメモリ推奨

### 1️⃣ リポジトリのクローン
```bash
git clone <repository-url>
cd crm-app
```

### 2️⃣ 自動セットアップ実行
```bash
chmod +x setup.sh
./setup.sh
```

### 3️⃣ アプリケーションにアクセス
- 🌐 **フロントエンド**: http://localhost:3000
- 🔌 **API**: http://localhost/api
- 🗄️ **phpMyAdmin**: http://localhost:8080

## 📋 API エンドポイント

### 顧客管理 API
| メソッド | エンドポイント | 説明 |
|----------|----------------|------|
| `GET` | `/api/customers` | 顧客一覧取得（検索・フィルタ・ページネーション対応） |
| `POST` | `/api/customers` | 新規顧客作成 |
| `GET` | `/api/customers/{id}` | 顧客詳細取得 |
| `PUT` | `/api/customers/{id}` | 顧客情報更新 |
| `DELETE` | `/api/customers/{id}` | 顧客削除（論理削除） |

### ダッシュボード API
| メソッド | エンドポイント | 説明 |
|----------|----------------|------|
| `GET` | `/api/dashboard` | 統計データ取得 |

### システム API
| メソッド | エンドポイント | 説明 |
|----------|----------------|------|
| `GET` | `/api/health` | ヘルスチェック |
| `GET` | `/api/info` | API情報取得 |

## 🔧 開発コマンド

### Docker管理
```bash
# コンテナ起動
docker-compose up -d

# ログ確認
docker-compose logs -f

# コンテナ停止
docker-compose down

# 再ビルド
docker-compose up -d --build
```

### Laravel開発
```bash
# Artisanコマンド実行
docker-compose exec php php artisan <command>

# マイグレーション
docker-compose exec php php artisan migrate

# シーダー実行
docker-compose exec php php artisan db:seed

# キャッシュクリア
docker-compose exec php php artisan cache:clear
```

### Vue.js開発
```bash
# 依存関係インストール
docker-compose exec frontend npm install

# 開発サーバー起動
docker-compose exec frontend npm run dev

# ビルド
docker-compose exec frontend npm run build
```

## 🌟 今後の拡張予定

### 🔐 認証・認可
- [ ] Laravel Sanctum による API認証
- [ ] ユーザー管理機能
- [ ] 役割ベースアクセス制御（RBAC）

### 📈 高度な機能
- [ ] 売上予測・分析ダッシュボード
- [ ] メール送信機能
- [ ] ファイルアップロード
- [ ] 活動履歴・タイムライン
- [ ] レポート出力（PDF/Excel）

### ☁️ AWS本番環境
- [ ] ECS Fargate デプロイ
- [ ] RDS MySQL 設定
- [ ] CloudFront + S3 静的ホスティング
- [ ] Application Load Balancer
- [ ] Route 53 DNS設定

### 🔍 監視・運用
- [ ] CloudWatch ログ・メトリクス
- [ ] AWS X-Ray 分散トレーシング
- [ ] CI/CD パイプライン（GitHub Actions）

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成
