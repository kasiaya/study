テストの呼び出しタイプを非同期にした場合、 
永続化の実行を15分以上にしても設定ができ、テストは実行できる


### 検証1:waitで16分待てるのか？

Python3.1

You cannot synchronously invoke a durable function with an executionTimeout greater than 15 minutes.

> waitが16分は失敗 ・・・waitはできないのか説？  
> 永続実行を16分以上にすることも難しそう

<details><summary>テスト１</summary>


```python
from aws_durable_execution_sdk_python.config import Duration
from aws_durable_execution_sdk_python.context import DurableContext, StepContext, durable_step
from aws_durable_execution_sdk_python.execution import durable_execution

@durable_step
def my_step(step_context: StepContext, my_arg: int) -> str:
    step_context.logger.info("Hello from my_step")
    return f"from my_step: {my_arg}"

@durable_execution
def lambda_handler(event, context) -> dict:
    msg: str = context.step(my_step(123))

    context.wait(Duration.from_seconds(960))

    context.logger.info("Waited for 16mins (=960 seconds) without consuming CPU.")

    return {
        "statusCode": 200,
        "body": msg,
    }


```

</details>



### 検証２:STEPで2分→wait14分は？処理として15分を超えるけどこれならどうなるのかな

これも同じくExecutionTimedOutが発生する


### 検証３:STEPで2分→wait14分は？処理として15分を超えるけどこれならどうなるのかな

テストの呼び出しタイプを非同期にした場合、 
永続化の実行を15分以上にしても設定ができ、テストは実行できる◎  
