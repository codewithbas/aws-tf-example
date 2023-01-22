import json
from time import gmtime, strftime
import boto3


dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("persistence-example")
now = strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())


def lambda_handler(event, context):
    name = (event.get("queryStringParameters", {}) or {}).get("name", "Bas")
    table.put_item(Item={"ID": str(name), "LatestGreetingTime": now})

    return {"statusCode": 200, "body": f"Hello, {name}!"}
