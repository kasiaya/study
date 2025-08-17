## AWS Hands-on for Beginners
Network編#1 AWS上にセキュアなプライベートネットワーク空間を作成する


https://pages.awscloud.com/JAPAN-event-OE-Hands-on-for-Beginners-Network1-2022-reg-event.html?trk=aws_introduction_page



### Gateway型
| 特徴         | Gateway型            | Interface型                |
| ---------- | ------------------- | ------------------------- |
| 対応サービス     | S3 / DynamoDB       | ほぼ全AWSサービス（+ PrivateLink） |
| 接続方式       | ルートテーブル経由           | ENI (プライベートIP) 経由         |
| コスト        | 無料                  | 有料（時間＋通信料）                |
| セキュリティグループ | 使えない                | 使える                       |
| 利用イメージ     | S3/DynamoDB専用の専用料金所 | VPC内に専用ドアを作って直通接続         |
