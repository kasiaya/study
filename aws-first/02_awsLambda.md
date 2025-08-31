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
