# CRM管理アプリ

## 概要
LaravelとVue.jsを使用したCRM管理システム

## 機能
- 顧客管理（登録・編集・削除・検索）
- 案件管理（登録・ステータス管理・顧客紐付け）
- タスク管理（作成・割り当て・進捗管理）
- 認証・権限管理
- ダッシュボード・レポート

## 技術スタック
- バックエンド: Laravel 10
- フロントエンド: Vue.js 3 + Vite
- CSS: Tailwind CSS
- データベース: MySQL

## セットアップ
```bash
# Laravelプロジェクト作成
composer create-project laravel/laravel crm-backend
cd crm-backend

# Vue.js + Viteセットアップ
npm install vue@next @vitejs/plugin-vue
npm install -D tailwindcss postcss autoprefixer
npm install axios vue-router@4 pinia

# Laravel Sanctum（API認証）
composer require laravel/sanctum
```
#
# 開発環境セットアップ手順

### バックエンド（Laravel）
```bash
# 依存関係インストール
composer install

# 環境設定
cp .env.example .env
php artisan key:generate

# データベース設定（.envファイルを編集）
# DB_DATABASE=crm_system
# DB_USERNAME=root
# DB_PASSWORD=

# データベース作成・マイグレーション
php artisan migrate

# Sanctum設定
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

# 開発サーバー起動
php artisan serve
```

### フロントエンド（Vue.js）
```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev
```

### アクセス
- フロントエンド: http://localhost:3000
- バックエンドAPI: http://localhost:8000/api

### 初期ユーザー作成
```bash
php artisan tinker

# 管理者ユーザー作成
User::create([
    'name' => '管理者',
    'email' => 'admin@example.com',
    'password' => Hash::make('password'),
    'role' => 'admin'
]);
```

## API仕様

### 認証
- POST /api/login - ログイン
- POST /api/register - ユーザー登録
- POST /api/logout - ログアウト
- GET /api/user - ユーザー情報取得

### 顧客管理
- GET /api/customers - 顧客一覧
- POST /api/customers - 顧客登録
- GET /api/customers/{id} - 顧客詳細
- PUT /api/customers/{id} - 顧客更新
- DELETE /api/customers/{id} - 顧客削除

### 案件管理
- GET /api/projects - 案件一覧
- POST /api/projects - 案件登録
- GET /api/projects/{id} - 案件詳細
- PUT /api/projects/{id} - 案件更新
- DELETE /api/projects/{id} - 案件削除

### タスク管理
- GET /api/tasks - タスク一覧
- POST /api/tasks - タスク作成
- GET /api/tasks/{id} - タスク詳細
- PUT /api/tasks/{id} - タスク更新
- DELETE /api/tasks/{id} - タスク削除

### ダッシュボード
- GET /api/dashboard - 統計情報取得

---

# CRM管理アプリの基本構造

CRM管理アプリの基本構造が完成しました！

## 作成したもの

### バックエンド（Laravel）
- データベース設計: 顧客、案件、タスク、ユーザーテーブル
- APIコントローラー: 認証、顧客、案件、タスク、ダッシュボード管理
- Eloquentモデル: リレーションシップ設定済み
- 認証: Laravel Sanctumを使用したAPI認証

### フロントエンド（Vue.js）
- ルーティング: Vue Router設定
- 状態管理: Pinia使用
- 認証システム: ログイン・ログアウト機能
- 画面: ダッシュボード、顧客管理、案件管理、タスク管理
- UI: Tailwind CSSでレスポンシブデザイン

## 主要機能
- 顧客管理: 登録・編集・削除・検索
- 案件管理: 顧客との紐付け・ステータス管理
- タスク管理: 担当者割り当て・優先度・期日管理
- 認証・権限: 管理者・一般ユーザー区分
- ダッシュボード: 統計情報表示

## 次のステップ
セットアップ手順に従って環境を構築し、必要に応じて以下の機能を追加できます：
- 通知機能
- ファイルアップロード
- レポート機能の拡張
- メール送信機能
- カレンダー表示
