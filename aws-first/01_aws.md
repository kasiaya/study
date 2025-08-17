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


それぞれのゲートの役割

- Internet Gateway (IGW)  
城の正門  
外の世界（インターネット）と 双方向に通れる  
例：EC2にパブリックIPをつければ、世界中からアクセスできるし、逆に外にも出られる  

- NAT Gateway
裏口の片道ドア  
城の中から外には出られるけど、外からは入ってこられない  
例：プライベートサブネットのEC2がyum updateしたいとき  

- Gateway型 Endpoint (S3/DynamoDB専用)
城からAWSの倉庫に直通する専用通路（料金無料）  
外（インターネット）に出なくても、S3/DynamoDBには直接行ける  

- Interface型 Endpoint (他サービス)
城の壁に増設する専用ドア  
特定のAWSサービスにだけ直通できるドア  
ただし「作るだけでお金がかかる」  

✅ 概要

- Internet Gateway = 正門（外と自由に出入りできる）
- NAT Gateway = 裏口（出るだけ、入れない）
- Gateway型 Endpoint = 特定サービス専用の直通通路（無料）
- Interface型 Endpoint = サービスごとに作れる専用ドア（有料）
