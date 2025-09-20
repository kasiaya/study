
```

crm-app/
├── README.md                                    # プロジェクト概要
├── SETUP.md                                     # セットアップガイド
├── setup.sh                                     # 自動セットアップスクリプト
├── .env.example                                 # 環境変数テンプレート
├── .gitignore                                   # Git除外設定
├── docker-compose.yml                           # Docker構成定義
│
├── backend/                                     # Laravel API
│   ├── .env.example                            # Laravel環境変数
│   ├── composer.json                           # PHP依存関係
│   ├── app/
│   │   ├── Models/
│   │   │   └── Customer.php                   # 顧客モデル
│   │   └── Http/
│   │       └── Controllers/
│   │           └── Api/
│   │               └── CustomerController.php  # 顧客API コントローラー
│   ├── database/
│   │   ├── migrations/
│   │   │   └── 2024_01_01_000001_create_customers_table.php  # 顧客テーブル
│   │   └── seeders/
│   │       └── CustomerSeeder.php             # サンプルデータ
│   └── routes/
│       └── api.php                            # APIルート定義
│
├── frontend/                                   # Vue.js アプリ
│   ├── index.html                             # HTMLテンプレート
│   ├── package.json                           # Node.js依存関係
│   ├── vite.config.js                         # Vite設定
│   ├── tailwind.config.js                     # Tailwind CSS設定
│   ├── postcss.config.js                      # PostCSS設定
│   └── src/
│       ├── main.js                            # アプリエントリーポイント
│       ├── App.vue                            # ルートコンポーネント
│       ├── style.css                          # グローバルスタイル
│       ├── router/
│       │   └── index.js                       # Vue Router設定
│       └── api/
│           ├── client.js                      # API クライアント
│           └── customers.js                   # 顧客API関数
│
└── docker/                                    # Docker設定
    ├── nginx/
    │   ├── Dockerfile                         # Nginx コンテナ
    │   └── nginx.conf                         # Nginx設定
    ├── php/
    │   ├── Dockerfile                         # PHP-FPM コンテナ
    │   └── php.ini                            # PHP設定
    ├── node/
    │   └── Dockerfile                         # Node.js コンテナ
    └── mysql/
        └── init.sql                           # MySQL初期化
```
