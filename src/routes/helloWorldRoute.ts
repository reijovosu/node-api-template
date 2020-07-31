import { Router } from 'express';
import { getHelloWorldGet, getHelloWorldPost } from '../controllers/hello';
import { asyncHandler } from '../lib/asyncHandler';

/**
 * @swagger
 * "components": {
 *     "schemas": {
 *         "Hello": {
 *             "properties": {
 *                 "status": {
 *                     "type": "string",
 *                 },
 *                 "msg": {
 *                     "type": "string"
 *                 }
 *             },
 *             "required": [
 *                 "msg"
 *             ]
 *         },
 *         "Greeting": {
 *             "required": [
 *                 "greeting"
 *             ],
 *             "properties": {
 *                 "greeting": {
 *                     "type": "string"
 *                 }
 *             }
 *         }
 *     }
 * }
 */

/**
 * @swagger
 * "/hello": {
 *    "get": {
 *        "x-eov-operation-handler": "helloWorldRoute",
 *        "operationId": "helloWorldGet",
 *        "tags": [
 *            "/hello"
 *        ],
 *        "description": "Returns greeting.",
 *        "parameters": [
 *            {
 *                "name": "greeting",
 *                "in": "query",
 *                "description": "Name of greeting",
 *                "required": true,
 *                "schema": {
 *                    "type": "string"
 *                }
 *            }
 *        ],
 *        "responses": {
 *            "200": {
 *                "description": "Successful request.",
 *                "content": {
 *                    "application/json": {
 *                        "schema": {
 *                            "$ref": "#/components/schemas/Hello"
 *                        }
 *                    }
 *                }
 *            },
 *            "default": {
 *                "description": "Invalid request.",
 *                "content": {
 *                    "application/json": {
 *                        "schema": {
 *                            "$ref": "#/components/schemas/Error"
 *                        }
 *                    }
 *                }
 *            }
 *        }
 *    }
 *}
 */
export const helloWorldGet = Router().use('/', asyncHandler(getHelloWorldGet, 'helloWorldGet'));

/**
 * @swagger
 * "/hello": {
*     "post": {
*         "x-eov-operation-handler": "helloWorldRoute",
*         "operationId": "helloWorldPost",
*         "tags": [
*             "/hello"
*         ],
*         "description": "Returns greeting.",
*         "requestBody": {
*             "content": {
*                 "application/json": {
*                     "schema": {
*                         "$ref": "#/components/schemas/Greeting",
*                         "properties": {
*                             "greeting": {
*                                 "type": "string"
*                             },
*                             "example": {
*                                 "greeting": "Mikel"
*                             }
*                         }
*                     }
*                 }
*             },
*             "required": true
*         },
*         "responses": {
*             "200": {
*                 "description": "Successful request.",
*                 "content": {
*                     "application/json": {
*                         "schema": {
*                             "$ref": "#/components/schemas/Hello"
*                         }
*                     }
*                 }
*             },
*             "default": {
*                 "description": "Invalid request.",
*                 "content": {
*                     "application/json": {
*                         "schema": {
*                             "$ref": "#/components/schemas/Error"
*                         }
*                     }
*                 }
*             }
*         }
*     }
*  }  
 */

export const helloWorldPost = Router().use('/', asyncHandler(getHelloWorldPost, 'helloWorldPost'));
