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
      "S": "$.ArticleID"
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
            "S": "$.ArticleID"
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
