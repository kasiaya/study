# StepFunctions

## AWS Hands-on for begginer
AWS Step Functions 入門 - ビジュアルツールを使ってローコードにワークフローを作成する

<img width="525" height="364" alt="スクリーンショット 2025-09-15 16 35 11" src="https://github.com/user-attachments/assets/38e4465f-542e-4380-9143-96c89987babb" />

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

## translate text

サポートランゲージ
https://docs.aws.amazon.com/ja_jp/translate/latest/APIReference/API_TranslateText.html


## 完成作

```json

{
  "Comment": "A description of my state machine",
  "StartAt": "DynamoDB GetItem",
  "States": {
    "DynamoDB GetItem": {
      "Type": "Task",
      "Resource": "arn:aws:states:::aws-sdk:dynamodb:getItem",
      "Parameters": {
        "Key": {
          "ArticleID": {
            "S.$": "$.ArticleID"
          }
        },
        "TableName": "Article"
      },
      "Next": "Choice-Item Is Present"
    },
    "Choice-Item Is Present": {
      "Type": "Choice",
      "Choices": [
        {
          "Variable": "$.Item",
          "IsPresent": true,
          "Next": "Parallel"
        }
      ],
      "Default": "Fail"
    },
    "Parallel": {
      "Type": "Parallel",
      "End": true,
      "Branches": [
        {
          "StartAt": "TranslateText",
          "States": {
            "TranslateText": {
              "Type": "Task",
              "Parameters": {
                "SourceLanguageCode": "ja",
                "TargetLanguageCode": "en",
                "Text.$": "$.Item.Detail.S"
              },
              "Resource": "arn:aws:states:::aws-sdk:translate:translateText",
              "Next": "DynamoDB UpdateItem - EnglishVerison",
              "ResultPath": "$.Result"
            },
            "DynamoDB UpdateItem - EnglishVerison": {
              "Type": "Task",
              "Resource": "arn:aws:states:::aws-sdk:dynamodb:updateItem",
              "Parameters": {
                "TableName": "Article",
                "Key": {
                  "ArticleID": {
                    "S.$": "$.Item.ArticleID.S"
                  }
                },
                "UpdateExpression": "SET EnglishVersion = :EnglishVestionRef",
                "ExpressionAttributeValues": {
                  ":EnglishVestionRef": {
                    "S.$": "$.Result.TranslatedText"
                  }
                }
              },
              "End": true
            }
          }
        },
        {
          "StartAt": "StartSpeechSynthesisTask",
          "States": {
            "StartSpeechSynthesisTask": {
              "Type": "Task",
              "Parameters": {
                "OutputFormat": "mp3",
                "OutputS3BucketName": "h4b-stepfunctions-output-20250915",
                "Text.$": "$.Item.Detail.S",
                "VoiceId": "Mizuki"
              },
              "Resource": "arn:aws:states:::aws-sdk:polly:startSpeechSynthesisTask",
              "ResultPath": "$.Result",
              "Next": "GetSpeechSynthesisTask"
            },
            "GetSpeechSynthesisTask": {
              "Type": "Task",
              "Parameters": {
                "TaskId.$": "$.Result.SynthesisTask.TaskId"
              },
              "Resource": "arn:aws:states:::aws-sdk:polly:getSpeechSynthesisTask",
              "ResultPath": "$.Result",
              "Next": "Choice -Task is completed"
            },
            "Choice -Task is completed": {
              "Type": "Choice",
              "Choices": [
                {
                  "Variable": "$.Result.SynthesisTask.TaskStatus",
                  "StringMatches": "completed",
                  "Next": "DynamoDB UpdateItem -mp3 URL"
                }
              ],
              "Default": "Wait"
            },
            "DynamoDB UpdateItem -mp3 URL": {
              "Type": "Task",
              "Resource": "arn:aws:states:::dynamodb:updateItem",
              "Parameters": {
                "TableName": "Article",
                "Key": {
                  "ArticleID": {
                    "S.$": "$.Item.ArticleID.S"
                  }
                },
                "UpdateExpression": "SET S3URL = :S3URLRef",
                "ExpressionAttributeValues": {
                  ":S3URLRef": {
                    "S.$": "$.Result.SynthesisTask.OutputUri"
                  }
                }
              },
              "End": true
            },
            "Wait": {
              "Type": "Wait",
              "Seconds": 5,
              "Next": "GetSpeechSynthesisTask"
            }
          }
        }
      ]
    },
    "Fail": {
      "Type": "Fail"
    }
  },
  "QueryLanguage": "JSONPath",
  "TimeoutSeconds": 30
}

```
