## CRM管理アプリ - ディレクトリ構造とファイル一覧

```
crm-system/
├── 📁 app/                                    # Laravel アプリケーション
│   ├── 📁 Http/
│   │   └── 📁 Controllers/
│   │       └── 📁 Api/                        # API コントローラー
│   │           ├── 📄 AuthController.php      # 認証管理
│   │           ├── 📄 CustomerController.php  # 顧客管理
│   │           ├── 📄 DashboardController.php # ダッシュボード
│   │           ├── 📄 ProjectController.php   # 案件管理
│   │           └── 📄 TaskController.php      # タスク管理
│   └── 📁 Models/                             # Eloquent モデル
│       ├── 📄 Customer.php                    # 顧客モデル
│       ├── 📄 Project.php                     # 案件モデル
│       ├── 📄 Task.php                        # タスクモデル
│       └── 📄 User.php                        # ユーザーモデル
│
├── 📁 database/                               # データベース関連
│   └── 📁 migrations/                         # マイグレーションファイル
│       ├── 📄 2024_01_01_000001_create_customers_table.php
│       ├── 📄 2024_01_01_000002_create_projects_table.php
│       ├── 📄 2024_01_01_000003_create_tasks_table.php
│       └── 📄 2024_01_01_000004_add_role_to_users_table.php
│
├── 📁 routes/                                 # ルート定義
│   └── 📄 api.php                             # API ルート
│
├── 📁 src/                                    # Vue.js フロントエンド
│   ├── 📁 components/                         # Vue コンポーネント
│   │   └── 📄 Layout.vue                      # レイアウトコンポーネント
│   ├── 📁 router/                             # Vue Router
│   │   └── 📄 index.js                        # ルート設定
│   ├── 📁 stores/                             # Pinia ストア
│   │   └── 📄 auth.js                         # 認証ストア
│   ├── 📁 views/                              # ページコンポーネント
│   │   ├── 📄 Customers.vue                   # 顧客管理画面
│   │   ├── 📄 Dashboard.vue                   # ダッシュボード画面
│   │   ├── 📄 Login.vue                       # ログイン画面
│   │   ├── 📄 Projects.vue                    # 案件管理画面
│   │   └── 📄 Tasks.vue                       # タスク管理画面
│   ├── 📄 App.vue                             # ルートコンポーネント
│   ├── 📄 main.js                             # エントリーポイント
│   └── 📄 style.css                           # Tailwind CSS
│
├── 📄 .env.example                            # 環境設定テンプレート
├── 📄 composer.json                           # PHP 依存関係
├── 📄 index.html                              # HTML エントリーポイント
├── 📄 package.json                            # Node.js 依存関係
├── 📄 postcss.config.js                       # PostCSS 設定
├── 📄 README.md                               # プロジェクト説明
├── 📄 tailwind.config.js                      # Tailwind CSS 設定
└── 📄 vite.config.js                          # Vite 設定
```

# CRMシステム ファイル分類

合計: 約30ファイルで構成された本格的なCRMシステムです！

## 🔧 設定ファイル
- **composer.json** - Laravel/PHP依存関係管理
- **package.json** - Vue.js/Node.js依存関係管理
- **vite.config.js** - Vite（ビルドツール）設定
- **tailwind.config.js** - Tailwind CSS設定
- **postcss.config.js** - PostCSS設定
- **.env.example** - 環境変数テンプレート

## 🗄️ バックエンド（Laravel）
- **モデル**: 4ファイル（Customer, Project, Task, User）
- **コントローラー**: 5ファイル（Auth, Customer, Dashboard, Project, Task）
- **マイグレーション**: 4ファイル（テーブル作成・更新）
- **ルート**: 1ファイル（API定義）

## 🎨 フロントエンド（Vue.js）
- **ページ**: 5ファイル（Login, Dashboard, Customers, Projects, Tasks）
- **コンポーネント**: 1ファイル（Layout）
- **ストア**: 1ファイル（認証管理）
- **ルーター**: 1ファイル（画面遷移）
- **エントリー**: 3ファイル（main.js, App.vue, index.html）

## 📚 ドキュメント
- **README.md** - セットアップ手順・API仕様
