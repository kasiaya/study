## イメージ
1. プロジェクト構造の確認
2. データベースの準備
    - マイグレーションファイルの作成
    - モデルファイルの作成
    - （△バリデーションファイルの作成）
3. ユーザー登録機能 register/create&store　「post」
    - ルート設定
    - コントローラの作成と配置
    - ビューの作成（PHPのみ）→成功したらhomeに連れてく????一覧表示させる？？？
4. ログイン機能 login (login→成功したらhome!）/これはオリジナルのメソッド??「get」
    - ルート設定
    - コントローラの編集
    - ビューの作成（PHPのみ）
6. ログアウト機能 logout（home→logout?）
    - ルート設定
    - コントローラの追加
　　
## コマンドについての仮説
dockerを使わない場合の仮説   
`php artisan migrate`
`php artisan migrate:rollback --step=1`

dockerを使う場合の仮説  
`docker-compose exec app php artisan migrate`　　
`docker-compose exec app php artisan migrate:rollback --step=1`
  　
## 構造
```
/project-root
    ├── app/
    │   └── Http/
    │       └── Controllers/
    │           └── UserController.php   ← 4-コントローラをここに配置
    │       └── Requests/
    │           └── UserRequest.php 　   ← 3-バリデーションをここに配置
    │   └── Models/
    │       └── User.php   ← 2-モデルファイル
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

