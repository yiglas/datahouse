# datahouse



### Deploy
Dependencies: [Serverless](https://serverless.com/) : must be configured with AWS credentials.

```bash
npm install
serverless deploy
```

### Test
After running the `serverless deploy` command, you should see the new URL for the Lambda function exposed via API Gateway.

```
GET https://{URL from results of serverless deploy}.us-east-2.amazonaws.com/dev/score
content-type: application/json

{
  "team": [
    {
      "name": "Eddie",
      "attribute": {
        "intelligence": 1,
        "strength": 5,
        "endurance": 3,
        "spicyFoodTolerance": 1
      }
    },
    {
      "name": "Will",
      "attribute": {
        "intelligence": 9,
        "strength": 4,
        "endurance": 1,
        "spicyFoodTolerance": 6
      }
    },
    {
      "name": "Mike",
      "attribute": {
        "intelligence": 3,
        "strength": 2,
        "endurance": 9,
        "spicyFoodTolerance": 5
      }
    }
  ],
  "applicants": [
    {
      "name": "John",
      "attribute": {
        "intelligence": 4,
        "strength": 5,
        "endurance": 2,
        "spicyFoodTolerance": 1
      }
    },
    {
      "name": "Jane",
      "attribute": {
        "intelligence": 7,
        "strength": 4,
        "endurance": 3,
        "spicyFoodTolerance": 2
      }
    },
    {
      "name": "Joe",
      "attribute": {
        "intelligence": 1,
        "strength": 1,
        "endurance": 1,
        "spicyFoodTolerance": 10
      }
    }
  ]
}
```