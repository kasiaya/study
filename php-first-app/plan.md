## test
1. プロジェクト構造の確認
2. データベースの準備
    - マイグレーションファイルの作成
3. ユーザー登録機能
    - ルート設定
    - コントローラの作成と配置
    - ビューの作成（PHPのみ）
4. ログイン機能
    - ルート設定
    - コントローラの編集
    - ビューの作成（PHPのみ）
5. ログアウト機能
    - ルート設定
    - コントローラの追加
6. (セッション管理と認証)
    - セッションの利用
    - ログイン状態のチェック
  

## 構造
```
/project-root
    ├── app/
    │   └── Http/
    │       └── Controllers/
    │           └── UserController.php   ← 3-コントローラをここに配置
    ├── resources/
    │   └── views/
    │       ├── register.php            ← 5-登録フォームのビュー（PHPのみ）
    │       ├── login.php               ← 6-ログインフォームのビュー（PHPのみ）
    │       └── home.php                ← 4-ホーム画面のビュー（PHPのみ）
    ├── routes/
    │   └── web.php  ← 2-ルート設定
    ├── database/
    │   └── migrations/
    │       └── xxxx_xx_xx_xxxxxx_create_users_table.php  ← 1-マイグレーションファイル

```

