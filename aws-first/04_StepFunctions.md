# StepFunctions

## AWS Hands-on for begginer
AWS Step Functions 入門 - ビジュアルツールを使ってローコードにワークフローを作成する


### ステートマシーン　passの最初のチェック
```json
{
	"Comment": "Insert your JSON here"
}
```

### DynamoDB GetItem
引数


```json
{
  "Key": {
    "ArticleID": {
      "S": "0001"
    }
  },
  "TableName": "Article"
}

```

#### 入力値で検索する方法は？

https://docs.aws.amazon.com/step-functions/latest/dg/input-output-itemspath.html

```json
{
  "Key": {
    "ArticleID": {
      "S.$":"$.ArticleID"
    }
  },
  "TableName": "Article"
}

```

```json
{
	"ArticleID": "0001"
}
```


```json

{
  "Comment": "A description of my state machine",
  "StartAt": "DynamoDB GetItem",
  "States": {
    "DynamoDB GetItem": {
      "Type": "Task",
      "Resource": "arn:aws:states:::aws-sdk:dynamodb:getItem",
      "Arguments": {
        "Key": {
          "ArticleID": {
            "S.$":"$.ArticleID"
          }
        },
        "TableName": "Article"
      },
      "End": true
    }
  },
  "QueryLanguage": "JSONata",
  "TimeoutSeconds": 30
}

```
※ "QueryLanguage": "JSONPath",　JSONataでは入力値の参照ができない

※　ArgumentはParametersにしないといけない

https://zenn.dev/snorlax/articles/721e605fe67d8d

https://repost.aws/pt/questions/QUX0cYT7inQd-GtppGyinQNA/stepfunctions%E3%81%AE%E5%BC%95%E6%95%B0%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6?sc_ichannel=ha&sc_ilang=ja&sc_isite=repost&sc_iplace=hp&sc_icontent=QUX0cYT7inQd-GtppGyinQNA&sc_ipos=3
