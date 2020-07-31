/** @swagger
* "components": {
*        "schemas":
*        {
*            "Error": {
*                "properties": {
*                    "status": {
*                        "type": "string",
*                    },
*                    "message": {
*                        "type": "string"
*                    },
*                    "extra": {
*                        "type": "object",
*                        "properties": {
*                            "name": { "type": "string" },
*                            "status": { "type": "integer" },
*                            "path": { "type": "string" },
*                            "errors": {
*                                "type": "object",
*                                "properties": {
*                                    "path": { "type": "string"},
*                                    "message": { "type": "string"},
*                                    "errorCode": { "type": "string"}
*                                }
*                            }
*                        }
*                    }
*                },
*                "required": [
*                    "message"
*                ],
*                "example":
*                {
*                    "message": "request.body should have required property 'greeting'",
*                    "extra": {
*                        "name": "Bad Request",
*                        "status": 400,
*                        "path": "/api/v1/hello",
*                        "errors": [
*                            {
*                                "path": ".body.greeting",
*                                "message": "should have required property 'greeting'",
*                                "errorCode": "required.openapi.validation"
*                            }
*                        ]
*                    }
*                }
*            }
*        }
*    }
*/