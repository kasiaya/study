## Lambda

### デバッグ方法

Python Lambda 関数のログ記録とモニタリング  
https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/python-logging.html

```python
import json
import logging

logger = logging.getLogger()
logger.setLevel("INFO")

def lambda_handler(event, context):
    logger.info(event)
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
```

## SDK
https://aws.amazon.com/jp/sdk-for-python/


## API Gateway の統合レスポンス
https://docs.aws.amazon.com/ja_jp/apigateway/latest/developerguide/api-gateway-integration-settings-integration-response.html  

[![Image from Gyazo](https://i.gyazo.com/37f42bf37794fd88ab729ae3436c2414.png)](https://gyazo.com/37f42bf37794fd88ab729ae3436c2414)
