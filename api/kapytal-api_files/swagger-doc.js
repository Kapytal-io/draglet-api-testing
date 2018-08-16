{
  "swagger": "2.0",
  "info": {
    "description": "draglet exchange API",
    "version": "0.1",
    "title": "Draglet API"
  },
  "host": "vanilla-test.draglet.com",
  "basePath": "/en",
  "schemes": ["http"],
  "paths": {
    "/gateway/public/authByToken": {
      "post": {
        "tags": ["common"],
        "summary": "user login by token",
        "description": "with a successful login basic customer account properties are returned\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "authByTokenParameters",
          "description": "the login token",
          "required": false,
          "schema": {
            "$ref": "#/definitions/authByTokenParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/authBTResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/authenticate": {
      "post": {
        "tags": ["common"],
        "summary": "user login",
        "description": "with a successful login basic customer account properties are returned\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "authenticateParameters",
          "description": "Put here the real username and password to get the real API response",
          "required": true,
          "schema": {
            "$ref": "#/definitions/authRequest"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/authResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/bestOffer": {
      "post": {
        "tags": ["exchange"],
        "summary": "the current orderbook",
        "description": "a number of the current orderbook's entries are accumulated on both sides of the current rate - is called as /public/bestOffer without returning notifications\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "bestOfferParameters",
          "description": "the login token",
          "required": false,
          "schema": {
            "$ref": "#/definitions/bestOfferParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/bestofferResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/deleteAccount": {
      "post": {
        "tags": ["common"],
        "summary": "support",
        "description": "confirms a customer's deletion request\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "deleteAccountParameters",
          "description": "a security token created by the server and sent by e-mail in a link",
          "required": false,
          "schema": {
            "$ref": "#/definitions/deleteAccountParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/deleteAccountResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/config": {
      "get": {
        "tags": ["common"],
        "summary": "retrieve configuration",
        "description": "retrieve configuration of the exchange",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/confResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/contact": {
      "post": {
        "tags": ["common"],
        "summary": "support",
        "description": "send a mail to support\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "contactParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/contactParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/contactResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/charts": {
      "get": {
        "tags": ["common"],
        "summary": "all charts",
        "description": "retrieve charts\n",
        "produces": ["application/json"],
        "parameters": [],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/chartsResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/chart": {
      "post": {
        "tags": ["common"],
        "summary": "specific charts",
        "description": "retrieve a specific list of charts, selected either by chart idents or by market ident\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "chartParameters",
          "description": "Put here the chart names, the market ident and the time intervals",
          "required": false,
          "schema": {
            "$ref": "#/definitions/chartParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/chartResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/checkTransfer": {
      "post": {
        "tags": ["pos"],
        "summary": "check transfer state",
        "description": "check the state of a transfer previously prepared\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "checkTransferParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/checkTransferParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/checkTransferResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/emailConfirmation": {
      "post": {
        "tags": ["common"],
        "summary": "confirm e-mail address",
        "description": "confirms a customer's registration request\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "emailConfirmationParameters",
          "description": "a security token created by the server and sent by e-mail in a link",
          "required": false,
          "schema": {
            "$ref": "#/definitions/emailConfirmationParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/emailConfirmation"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/feedback": {
      "post": {
        "tags": ["common"],
        "summary": "user feedback",
        "description": "user can send feedback from ui pages\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "feedbackParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/feedbackParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/feedback"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/lastTradesConverted": {
      "post": {
        "tags": ["exchange"],
        "summary": "the last executions, converted to a different limit currency",
        "description": "",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "lastTradesConvertedParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/lastTradesConvertedParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/lastTradesConverted"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/lastTrades": {
      "post": {
        "tags": ["exchange"],
        "summary": "the last executions, converted to a different limit currency",
        "description": "",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "lastTradesParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/lastTradesParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/lastTrades"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/passwordForgotten": {
      "post": {
        "tags": ["common"],
        "summary": "trequest password recovery",
        "description": "send password recovery token to the user's e-mail address\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "passwordForgottenParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/passwordForgottenParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/passwordForgotten"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/passwordRecovery": {
      "post": {
        "tags": ["common"],
        "summary": "recover password",
        "description": "set a new user password\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "passwordRecoveryParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/passwordRecoveryParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/passwordRecovery"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/prepareTransfer": {
      "post": {
        "tags": ["pos"],
        "summary": "prepare new payment",
        "description": "prepare a new payment based on fiat amount\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "prepareTransferParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/prepareTransferParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/prepareTransfer"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/ranking": {
      "post": {
        "tags": ["exchange"],
        "summary": "paged ranking search",
        "description": "two of the three parameters allowed or only limit, with limit only /public/ranking defaults to first rankings and /private/ranking return a page where the logged in customer is be in the middle of the returned data page\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "rankingParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/rankingParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/ranking"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/register": {
      "post": {
        "tags": ["common"],
        "summary": "register new account",
        "description": "after a successful register call the customer will receive a comfirmation mail with a confirmation link\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "registerParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/registerParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/register"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/resendConfirmation": {
      "post": {
        "tags": ["common"],
        "summary": "request a new e-mail with a link for registration confirmation",
        "description": "send new registration confirmation token to the user's e-mail address\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "resendConfirmationParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/resendConfirmationParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/resendConfirmation"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/terms": {
      "get": {
        "tags": ["common"],
        "summary": "all terms",
        "description": "retrieve terms\n",
        "produces": ["application/json"],
        "parameters": [],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/terms"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/transferDetails": {
      "get": {
        "tags": ["common"],
        "summary": "paypal withdrawal confirmation",
        "description": "That is the simple check to be sure that the user is asking to withdraw funds by her paypal email \n",
        "produces": ["application/json"],
        "parameters": [{
          "name": "token",
          "in": "query",
          "description": "confirmation token",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/transferDetails"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/public/unsubscribe": {
      "post": {
        "tags": ["common"],
        "summary": "unsubscribe from newsletter without logging in",
        "description": "customer receives the unsubscribe token via email in the footer of the newsletter\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "unsubscribeParameters",
          "description": "a security token created by the server and sent by e-mail in a link",
          "required": false,
          "schema": {
            "$ref": "#/definitions/unsubscribeParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/unsubscribe"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/private/abortDepositRequest": {
      "post": {
        "tags": ["exchange"],
        "summary": "abort deposit request",
        "description": "the customer can abort her deposit request \n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "abortDepositRequestParameters",
          "description": "deposit request id",
          "required": false,
          "schema": {
            "$ref": "#/definitions/abortDepositRequestParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/abortDepositRequest"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/acceptTerms": {
      "post": {
        "tags": ["common"],
        "summary": "accept term",
        "description": "the customer can accept some term\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "acceptTermsParameters",
          "description": "term id",
          "required": false,
          "schema": {
            "$ref": "#/definitions/acceptTermsParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/acceptTerms"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/balance": {
      "post": {
        "tags": ["exchange"],
        "summary": "get the current balance for the requested accounts",
        "description": "get the current balance either for the requested accounts or for all accounts\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "balanceParameters",
          "description": "term id",
          "required": false,
          "schema": {
            "$ref": "#/definitions/balanceParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/balance"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/bestOffer": {
      "post": {
        "tags": ["exchange"],
        "summary": "the current orderbook",
        "description": "a number of the current orderbook's entries are accumulated on both sides of the current rate - is called as /public/bestOffer without returning notifications\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "bestOfferParameters",
          "description": "the login token",
          "required": false,
          "schema": {
            "$ref": "#/definitions/bestOfferParameters_1"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/bestofferResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/buy": {
      "post": {
        "tags": ["exchange"],
        "summary": "order entry",
        "description": "enter buy order with market, amount and limit\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "buyParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/buyParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/buyResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/checkNickname": {
      "post": {
        "tags": ["common"],
        "summary": "check a requested nickname",
        "description": "can be used in an ajax-driven input to instantly show the availability of the user name\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "checkNicknameParameters",
          "description": "the requested nickname",
          "required": false,
          "schema": {
            "$ref": "#/definitions/checkNicknameParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/checkNicknameResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/dso/buy": {
      "post": {
        "tags": ["dso"],
        "summary": "dso buy",
        "description": "dso buy\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "buyParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/buyParameters_1"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/dsoBuyResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/dso/orderCancel": {
      "post": {
        "tags": ["dso"],
        "summary": " cancel dso order",
        "description": "cancel dso order\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "orderCancelParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/orderCancelParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/dsoOrderCancelResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/dso/orders": {
      "post": {
        "tags": ["dso"],
        "summary": "dso orders",
        "description": "dso orders\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "ordersParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/ordersParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/dsoOrdersResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/dso/orderModify": {
      "post": {
        "tags": ["dso"],
        "summary": "modify dso order",
        "description": "modify dso order\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "orderModifyParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/orderModifyParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/dsoOrderModifyResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/dso/sell": {
      "post": {
        "tags": ["dso"],
        "summary": "dso sell",
        "description": "dso sell\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "sellParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/sellParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/dsoBuyResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/nanobnk/private/sendInternal": {
      "post": {
        "tags": ["aac"],
        "summary": "send fund to the recipient internally",
        "description": "This feature is for the nanobnk only\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "aacSendInternalParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/aacSendInternalParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/aasSendInternalResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/nanobnk/private/transactions": {
      "post": {
        "tags": ["aac"],
        "summary": "transactions + partner transactions",
        "description": "This feature was developed  for the nanobnk customer. The user gets her own transactions plus her sibling partner transactions\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "aacTransactionsParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/aacTransactionsParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/aasTransactionsResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/coinhub/private/settings": {
      "post": {
        "tags": ["cnh"],
        "summary": "transactions + partner transactions",
        "description": "This handler has a custom response format for uploaded files that includes document type\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "cnhSettingsParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/cnhSettingsParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/settingsResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/coinhub/private/fileUpload": {
      "post": {
        "tags": ["cnh"],
        "summary": "store a KYC-related file on the server",
        "description": "Available if KYC is not done, yet\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "description": "a security token created by the server and sent by e-mail in a link",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/cnhFileUploadResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/coinhub/private/newAddress": {
      "post": {
        "tags": ["cnh"],
        "summary": "No address for kyc level 0",
        "description": "If the user has the kyc level 0 he can not get a new address\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_1"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/cnhNewAddressResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        }
      }
    },
    "/gateway/digibitx/private/confirmInterac": {
      "post": {
        "tags": ["dbx"],
        "summary": "confirm interac transaction by Interpay",
        "description": "This is the second request to Interpay to confirm interac transaction\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "dbxСonfirmInteracParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/dbxonfirmInteracParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/dbxConfirmInteracResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/digibitx/private/newAddress": {
      "post": {
        "tags": ["dbx"],
        "summary": "No address for kyc level 0",
        "description": "If the user has the kyc level 0 she can not get a new address\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "dbxТewAddressParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/dbxewAddressParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/dbxNewAddressResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/digibitx/private/settings": {
      "post": {
        "tags": ["dbx"],
        "summary": "4Stop kyc provider",
        "description": "4Stop kyc provider is used to check the user input profile data\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "dbxSettingsParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/dbxSettingsParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/settingsResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/digibitx/private/startInterac": {
      "post": {
        "tags": ["dbx"],
        "summary": "Interpay initial request",
        "description": "The initial Interpay request to get Interac redirect url \n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "dbxStartInteracParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/dbxStartInteracParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/dbxStartInteracResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/finbit/private/addDescription": {
      "post": {
        "tags": ["fnb"],
        "summary": "Customer's description to the transaction",
        "description": "Customer can set descriptions for the existed transactions that can be found in his transaction list\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "fnbAddDescription",
          "required": false,
          "schema": {
            "$ref": "#/definitions/fnbAddDescription"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/fnbAddDescriptionResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/finbit/private/address": {
      "post": {
        "tags": ["fnb"],
        "summary": "",
        "description": "",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "addressParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/addressParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/fnbAddressResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/finbit/private/balance": {
      "post": {
        "tags": ["fnb"],
        "summary": "Mass transfer allowed/disallowed",
        "description": "This custom handler includes a field, that shows customer's mass transfer ability\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "fnbBalance",
          "description": "",
          "required": false,
          "schema": {
            "$ref": "#/definitions/fnbBalance"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/fnbBalanceResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/finbit/private/generateFile": {
      "post": {
        "tags": ["fnb"],
        "summary": "Generate a file for mass transfer",
        "description": "This custom feature generates a file with transactions in mass transfer CSV format based on customer's transaction history\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "fnbGenerateFile",
          "description": "",
          "required": false,
          "schema": {
            "$ref": "#/definitions/fnbGenerateFile"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/fnbGenerateFileResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/finbit/private/sendMassFunds": {
      "post": {
        "tags": ["fnb"],
        "summary": "Create a bunch of BTC transfer",
        "description": "This feature allows user to send up to 100 BTC transfers using one CSV file with special format\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "fnbSendMassFunds",
          "required": false,
          "schema": {
            "$ref": "#/definitions/fnbSendMassFunds"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/fnbSendMassFundsResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/finbit/private/transactions": {
      "post": {
        "tags": ["fnb"],
        "summary": "Transactions + customer's description",
        "description": "This feature shows transactions with narrative descriptions that customer may have set\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "fnbTransactions",
          "required": false,
          "schema": {
            "$ref": "#/definitions/fnbTransactions"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/transactionsResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/utz/private/buy": {
      "post": {
        "tags": ["utz"],
        "summary": "",
        "description": "",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "utzBuyParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/utzBuyParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/utzBuyResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/utz/private/claimSearch": {
      "post": {
        "tags": ["utz"],
        "summary": "",
        "description": "",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "utzClaimSearchParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/utzClaimSearchParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/utzClaimSearchResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/utz/private/orders": {
      "post": {
        "tags": ["utz"],
        "summary": "",
        "description": "",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "utzOrdersParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/utzOrdersParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/utzOrdersResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/utz/private/redeem": {
      "post": {
        "tags": ["utz"],
        "summary": "",
        "description": "",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "utzRedeemParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/utzRedeemParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/utzRedeemResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/utz/private/sell": {
      "post": {
        "tags": ["utz"],
        "summary": "",
        "description": "",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "utzSellParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/utzSellParameters"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/utzSellResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/confirmPaypal": {
      "post": {
        "tags": ["wallet"],
        "summary": "deposit confirming",
        "description": "getting the status of a paypal transaction",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_2"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/confirmPaypalResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/createBankAccount": {
      "post": {
        "tags": ["wallet"],
        "summary": "create bank account entry",
        "description": "create a new bank account entry",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_3"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/createBankAccountResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/createDepositRequest": {
      "post": {
        "tags": ["wallet"],
        "summary": "create a deposit request",
        "description": "creates a deposit request on an account",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_4"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/createDepositResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/deleteBankAccount": {
      "post": {
        "tags": ["wallet"],
        "summary": "confirm bank account deletion",
        "description": "confirms a customer's bank account deletion request",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_5"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/deleteBankAccountResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/feedback": {
      "post": {
        "tags": ["common"],
        "summary": "user feedback",
        "description": "user can send feedback from ui pages\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "feedbackParameters",
          "required": false,
          "schema": {
            "$ref": "#/definitions/feedbackParameters_1"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/feedbackResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/fileUpload": {
      "post": {
        "tags": ["common"],
        "summary": "store a KYC-related file on the server",
        "description": "available if KYC is not done, yet",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_6"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/fileUploadResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/googleAuth": {
      "post": {
        "tags": ["common"],
        "summary": "setup Google Auth",
        "description": "provides Auth Key plus one Auth Code to verify that the Auth device works correctly",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_7"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/googleAuthResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/listBankAccounts": {
      "get": {
        "tags": ["wallet"],
        "summary": "list bank accounts",
        "description": "all bank accounts of the customer",
        "produces": ["application/json"],
        "parameters": [],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/listBankAccountsResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/listChildren": {
      "get": {
        "tags": ["user-groups"],
        "summary": "lists children info",
        "description": "lists account's children info",
        "produces": ["application/json"],
        "parameters": [],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/listChildrenResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/listDepositRequests": {
      "get": {
        "tags": ["user-groups"],
        "summary": "list deposit requests",
        "description": "all deposit requests made by customer (sorted by creation time)",
        "produces": ["application/json"],
        "parameters": [],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/listDepositRequestsResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/newAddress": {
      "post": {
        "tags": ["wallet"],
        "summary": "request a new receive address",
        "description": "for crypto currencies users can create new receive addresses",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_8"
          }
        }],
        "responses": {
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/offMarketAccept": {
      "post": {
        "tags": ["exchange"],
        "summary": "accept an off market deal",
        "description": "enter the ordernumber of the deal",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_9"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/offMarketAcceptResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/offMarketCancel": {
      "post": {
        "tags": ["exchange"],
        "summary": "cancel an off market deal",
        "description": "enter the ordernumber of the deal",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_10"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/offMarketCancelResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/offMarketRequest": {
      "post": {
        "tags": ["exchange"],
        "summary": "request an off market deal",
        "description": "enter off market request with market, nominal, rate, receiver username and order type",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_11"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/offMarketRequestResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/orderCancel": {
      "post": {
        "tags": ["exchange"],
        "summary": "cancel an order",
        "description": "cancel order based on ordernumber",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_12"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/orderCancelResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/orderModify": {
      "post": {
        "tags": ["exchange"],
        "summary": "modify the nominal of an order",
        "description": "modify order based on ordernumber",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_13"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/orderModifyResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/orders": {
      "post": {
        "tags": ["exchange"],
        "summary": "search orders",
        "description": "sorted and paged order search",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_14"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/ordersResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/ranking": {
      "post": {
        "tags": ["exchange"],
        "summary": "paged ranking search",
        "description": "two of the three parameters allowed or only limit, with limit only /public/ranking defaults to first rankings and /private/ranking return a page where the logged in customer is be in the middle of the returned data page",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_15"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/rankingResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/requestDeletion": {
      "post": {
        "tags": ["common"],
        "summary": "request account deletion",
        "description": "the customer will receive an e-mail with a confirmation token that triggers deleteAccount",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_16"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/requestDeletionResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/requestWithdrawal": {
      "post": {
        "tags": ["wallet"],
        "summary": "request fiat payout",
        "description": "for withdrawing fiat credits from the exchange",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_17"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/requestWithdrawalResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/searchUser": {
      "post": {
        "tags": ["common"],
        "summary": "search users",
        "description": "Search for users on the exchange",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_18"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/searchUserResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/sell": {
      "post": {
        "tags": ["exchange"],
        "summary": "order entry",
        "description": "enter sell order with market ident, nominal and limit",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_19"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/sellResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/sendFunds": {
      "post": {
        "tags": ["exchange"],
        "summary": "send funds to another address",
        "description": "for sending funds from one account to another outside the exchange",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_20"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/sendFundsResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/setPermissions": {
      "post": {
        "tags": ["user-groups"],
        "summary": "set permissions",
        "description": "set/unset role to child user",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_21"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/setPermissionsResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/settings": {
      "post": {
        "tags": ["common"],
        "summary": "persist user settings",
        "description": "persist user settings to the exchange",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_22"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/settingsResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/startPaypal": {
      "post": {
        "tags": ["wallet"],
        "summary": "get PayPal redirect URL",
        "description": "get PayPal redirect URL and redirect user",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_23"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/startPaypalResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/support": {
      "get": {
        "tags": ["common"],
        "summary": "retrieve support history",
        "description": "all historical support messages of this customer (sorted descending by timestamp)",
        "produces": ["application/json"],
        "parameters": [],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/supportGetResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      },
      "post": {
        "tags": ["common"],
        "summary": "new support request",
        "description": "post a new support message and receive the complete history",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_24"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/supportPostResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/private/transactions": {
      "post": {
        "tags": ["exchange"],
        "summary": "search transactions",
        "description": "sorted and paged transaction search",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_25"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/transactionsResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/payyex/private/requestWithdrawal": {
      "post": {
        "tags": ["px"],
        "summary": "request fiat payout",
        "description": "Handler for withdrawing fiat money from exchange account.\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_26"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/pxRequestWithdrawalResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    },
    "/gateway/payyex/private/createDepositRequest": {
      "post": {
        "tags": ["px"],
        "summary": "request fiat payout",
        "description": "Handler for creates a deposit request on an account\n",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "body",
          "required": false,
          "schema": {
            "$ref": "#/definitions/body_27"
          }
        }],
        "responses": {
          "200": {
            "description": "response from API",
            "schema": {
              "$ref": "#/definitions/pxCreateDepositRequestResponse"
            }
          },
          "default": {
            "description": "error from server"
          }
        },
        "security": [{
          "APIKeyHeader": []
        }]
      }
    }
  },
  "securityDefinitions": {
    "APIKeyHeader": {
      "type": "apiKey",
      "name": "Auth-token",
      "in": "header"
    }
  },
  "definitions": {
    "authRequest": {
      "type": "object",
      "properties": {
        "username": {
          "type": "string"
        },
        "password": {
          "type": "string"
        }
      },
      "xml": {
        "name": "authRequest"
      }
    },
    "authResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/authErrors"
      }, {
        "$ref": "#/definitions/authResult"
      }]
    },
    "authErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "authResult": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/authResult_results"
          }
        }
      }
    },
    "authBTResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/authBTErrors"
      }, {
        "$ref": "#/definitions/authResult"
      }]
    },
    "authBTErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "bestofferResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/bestofferErrors"
      }, {
        "$ref": "#/definitions/bestofferResult"
      }]
    },
    "bestofferErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "bestofferResult": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/bestofferResult_results"
          }
        }
      }
    },
    "deleteAccountResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/deleteAccountErrors"
      }]
    },
    "deleteAccountErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "contactResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {}]
    },
    "chartsResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/chartsResult"
      }]
    },
    "chartsResult": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/chartsResult_results"
          }
        }
      }
    },
    "chartResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/chartErrors"
      }, {
        "$ref": "#/definitions/chartResult"
      }]
    },
    "chartErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "chartResult": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/chartResult_results"
          }
        }
      }
    },
    "checkTransferResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/checkTransferErrors"
      }, {
        "$ref": "#/definitions/checkTransferResult"
      }]
    },
    "checkTransferErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "checkTransferResult": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/checkTransferResult_results"
          }
        }
      }
    },
    "emailConfirmation": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/emailConfirmationErrors"
      }]
    },
    "emailConfirmationErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "feedback": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {}]
    },
    "lastTradesConverted": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/lastTradesConvertedErrors"
      }, {
        "$ref": "#/definitions/lastTradesConvertedResult"
      }]
    },
    "lastTradesConvertedErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "lastTradesConvertedResult": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/lastTradesConvertedResult_results"
          }
        }
      }
    },
    "lastTrades": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/lastTradesErrors"
      }, {
        "$ref": "#/definitions/lastTradesResult"
      }]
    },
    "lastTradesErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "lastTradesResult": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/lastTradesConvertedResult_results"
          }
        }
      }
    },
    "passwordForgotten": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/passwordForgottenErrors"
      }]
    },
    "passwordForgottenErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "passwordRecovery": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/passwordRecoveryErrors"
      }]
    },
    "passwordRecoveryErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "prepareTransfer": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/prepareTransferErrors"
      }, {
        "$ref": "#/definitions/prepareTransferResult"
      }]
    },
    "prepareTransferErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "prepareTransferResult": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/prepareTransferResult_results"
          }
        }
      }
    },
    "ranking": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/rankingResult"
      }]
    },
    "rankingResult": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/rankingResult_results"
          }
        }
      }
    },
    "register": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/registerErrors"
      }]
    },
    "registerErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "resendConfirmation": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/resendConfirmationErrors"
      }]
    },
    "resendConfirmationErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "terms": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/termsResult"
      }]
    },
    "termsResult": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/termsResult_results"
          }
        }
      }
    },
    "transferDetails": {
      "description": "no response"
    },
    "unsubscribe": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/unsubscribeErrors"
      }]
    },
    "unsubscribeErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "abortDepositRequest": {
      "allOf": [{
        "$ref": "#/definitions/abortDepositRequestResponse"
      }, {
        "$ref": "#/definitions/abortDepositRequestErrors"
      }]
    },
    "abortDepositRequestErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "acceptTerms": {
      "allOf": [{
        "$ref": "#/definitions/acceptTermsResponse"
      }, {
        "$ref": "#/definitions/acceptTermsErrors"
      }]
    },
    "acceptTermsResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        }
      }
    },
    "acceptTermsErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "balance": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/balanceErrors"
      }, {
        "$ref": "#/definitions/balanceResult"
      }]
    },
    "balanceErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "balanceResult": {
      "type": "object",
      "properties": {
        "results": {
          "$ref": "#/definitions/balanceResult_results"
        }
      }
    },
    "buyResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/buyErrors"
      }, {
        "$ref": "#/definitions/buyResult"
      }]
    },
    "buyErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "buyResult": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/buyResult_results"
          }
        }
      }
    },
    "checkNicknameResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/checkNicknameResult"
      }]
    },
    "checkNicknameResult": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/checkNicknameResult_results"
          }
        }
      }
    },
    "dsoBuyResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/buyErrors"
      }, {
        "$ref": "#/definitions/buyResult"
      }]
    },
    "dsoOrderCancelResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/dsoOrderCancelErrors"
      }]
    },
    "dsoOrderCancelErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "dsoOrdersResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/dsoOrdersErrors"
      }]
    },
    "dsoOrdersErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "dsoOrderModifyResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/dsoOrderModifyErrors"
      }]
    },
    "dsoOrderModifyErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "aasSendInternalResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/aasSendInternalErrors"
      }]
    },
    "aasSendInternalErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "aasTransactionsResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/aasTransactionsErrors"
      }]
    },
    "aasTransactionsErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "cnhSettingsResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/cnhSettingsErrors"
      }]
    },
    "cnhSettingsErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "dbxConfirmInteracResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/dbxConfirmInteracErrors"
      }, {
        "$ref": "#/definitions/dbxConfirmInteracResults"
      }]
    },
    "dbxConfirmInteracErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "dbxConfirmInteracResults": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/dbxConfirmInteracResults_results"
          }
        }
      }
    },
    "dbxNewAddressResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/dbxNewAddressErrors"
      }, {
        "$ref": "#/definitions/dbxNewAddressResults"
      }]
    },
    "dbxNewAddressErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "dbxNewAddressResults": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/dbxNewAddressResults_results"
          }
        }
      }
    },
    "dbxSettingsResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/Errors"
      }, {
        "$ref": "#/definitions/dbxSettingsResults"
      }]
    },
    "dbxSettingsResults": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/dbxSettingsResults_results"
          }
        }
      }
    },
    "dbxStartInteracResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/dbxStartInteracErrors"
      }, {
        "$ref": "#/definitions/dbxStartInteracResults"
      }]
    },
    "dbxStartInteracErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "dbxStartInteracResults": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/dbxStartInteracResults_results"
          }
        }
      }
    },
    "fnbAddDescriptionResponse": {
      "allOf": [{
        "$ref": "#/definitions/fnbAddDescrResponse"
      }, {
        "$ref": "#/definitions/fnbAddDescriptionErrors"
      }]
    },
    "fnbAddDescrResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/fnbAddDescrResponse_infos"
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        }
      }
    },
    "fnbAddDescriptionErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "fnbAddressResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/fnbAddressErrors"
      }, {
        "$ref": "#/definitions/fnbAddressResults"
      }]
    },
    "fnbAddressErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "fnbAddressResults": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/fnbAddressResults_results"
          }
        }
      }
    },
    "fnbBalanceResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/balanceErrors"
      }, {
        "$ref": "#/definitions/fnbBalanceResult"
      }]
    },
    "fnbBalanceResult": {
      "type": "object",
      "properties": {
        "results": {
          "$ref": "#/definitions/fnbBalanceResult_results"
        }
      }
    },
    "fnbGenerateFileResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/fnbGenerateFileErrors"
      }, {
        "$ref": "#/definitions/fnbGenerateFileResult"
      }]
    },
    "fnbGenerateFileErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "fnbGenerateFileResult": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/fnbGenerateFileResult_results"
          }
        }
      }
    },
    "fnbSendMassFundsResponse": {
      "allOf": [{
        "$ref": "#/definitions/fnbSndMassFundsResponse"
      }, {
        "$ref": "#/definitions/fnbSendMassFundsErrors"
      }]
    },
    "fnbSndMassFundsResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "array",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        }
      }
    },
    "fnbSendMassFundsErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "transactionsResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/Errors"
      }, {
        "$ref": "#/definitions/transactionsResult"
      }]
    },
    "transactionsResult": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/transactionsResult_results"
          }
        }
      }
    },
    "utzBuyResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/utzBuyErrors"
      }, {
        "$ref": "#/definitions/buyResult"
      }]
    },
    "utzBuyErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "utzClaimSearchResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/Errors"
      }]
    },
    "utzOrdersResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/Errors"
      }]
    },
    "utzRedeemResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/Errors"
      }]
    },
    "utzSellResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {}]
    },
    "Response": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Infos"
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        }
      }
    },
    "abortDepositRequestResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        }
      }
    },
    "TwoFactors": {
      "properties": {
        "googleAuth": {
          "type": "string",
          "description": "googleAuth is missing"
        },
        "emailAuth": {
          "type": "string",
          "description": "emailAuth is missing"
        },
        "resendCodes": {
          "type": "array",
          "description": "resendCodes is missing",
          "items": {
            "type": "string"
          }
        }
      },
      "example": {
        "googleAuth": "googleAuth",
        "resendCodes": ["resendCodes", "resendCodes"],
        "emailAuth": "emailAuth"
      }
    },
    "Infos": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Notification"
      }
    },
    "Notification": {
      "properties": {
        "message": {
          "type": "string",
          "description": "massage of the notification which appears to user instantly"
        },
        "context": {
          "type": "string",
          "description": "context of the notification"
        }
      }
    },
    "Warning": {
      "properties": {
        "message": {
          "type": "string",
          "description": "massage of the warning which appears to user instantly"
        },
        "context": {
          "type": "string",
          "description": "context of warnings"
        }
      },
      "example": {
        "context": "context",
        "message": "message"
      }
    },
    "Errors": {
      "properties": {
        "message": {
          "type": "string",
          "description": "massage of the error which appears to user instantly"
        },
        "context": {
          "type": "string",
          "description": "context of error"
        }
      },
      "example": {
        "context": "context",
        "message": "message"
      }
    },
    "configResult": {
      "properties": {
        "message": {
          "type": "string",
          "description": "massage of the error which appears to user instantly"
        },
        "context": {
          "type": "string",
          "description": "context of error"
        }
      }
    },
    "confResponse": {
      "type": "object",
      "properties": {
        "success": {
          "type": "string",
          "example": "true"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Infos"
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Errors"
          }
        },
        "results": {
          "$ref": "#/definitions/confResult"
        }
      },
      "example": {
        "success": "true",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": {
          "markets": [{
            "takerFeeNominal": 7,
            "buyFeeNominal": 7,
            "sellFeeLimit": 4,
            "sellFeeNominal": 1,
            "limitCurrency": "limitCurrency",
            "takerFeeLimit": 3,
            "nominalCurrency": "nominalCurrency",
            "buyFeeLimit": 2,
            "makerFeeLimit": 9,
            "lastQuote": 1.024645700144157789424070870154537260532379150390625,
            "makerFeeNominal": 2
          }, {
            "takerFeeNominal": 7,
            "buyFeeNominal": 7,
            "sellFeeLimit": 4,
            "sellFeeNominal": 1,
            "limitCurrency": "limitCurrency",
            "takerFeeLimit": 3,
            "nominalCurrency": "nominalCurrency",
            "buyFeeLimit": 2,
            "makerFeeLimit": 9,
            "lastQuote": 1.024645700144157789424070870154537260532379150390625,
            "makerFeeNominal": 2
          }],
          "languages": [{
            "name": "name",
            "id": "id"
          }, {
            "name": "name",
            "id": "id"
          }],
          "installIdent": "installIdent",
          "currencies": [{
            "minimum_withdrawal": 6.02745618307040320615897144307382404804229736328125,
            "num_decimals": 1,
            "name": "name",
            "fiat": true,
            "id": "id",
            "type": 0,
            "network_fee": 5,
            "confirmations": 5
          }, {
            "minimum_withdrawal": 6.02745618307040320615897144307382404804229736328125,
            "num_decimals": 1,
            "name": "name",
            "fiat": true,
            "id": "id",
            "type": 0,
            "network_fee": 5,
            "confirmations": 5
          }]
        },
        "infos": ["", ""],
        "errors": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }]
      }
    },
    "confResult": {
      "properties": {
        "installIdent": {
          "type": "string",
          "description": "customer identifier from the license"
        },
        "currencies": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/confResult_currencies"
          }
        },
        "markets": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/confResult_markets"
          }
        },
        "languages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/confResult_languages"
          }
        }
      },
      "example": {
        "markets": [{
          "takerFeeNominal": 7,
          "buyFeeNominal": 7,
          "sellFeeLimit": 4,
          "sellFeeNominal": 1,
          "limitCurrency": "limitCurrency",
          "takerFeeLimit": 3,
          "nominalCurrency": "nominalCurrency",
          "buyFeeLimit": 2,
          "makerFeeLimit": 9,
          "lastQuote": 1.024645700144157789424070870154537260532379150390625,
          "makerFeeNominal": 2
        }, {
          "takerFeeNominal": 7,
          "buyFeeNominal": 7,
          "sellFeeLimit": 4,
          "sellFeeNominal": 1,
          "limitCurrency": "limitCurrency",
          "takerFeeLimit": 3,
          "nominalCurrency": "nominalCurrency",
          "buyFeeLimit": 2,
          "makerFeeLimit": 9,
          "lastQuote": 1.024645700144157789424070870154537260532379150390625,
          "makerFeeNominal": 2
        }],
        "languages": [{
          "name": "name",
          "id": "id"
        }, {
          "name": "name",
          "id": "id"
        }],
        "installIdent": "installIdent",
        "currencies": [{
          "minimum_withdrawal": 6.02745618307040320615897144307382404804229736328125,
          "num_decimals": 1,
          "name": "name",
          "fiat": true,
          "id": "id",
          "type": 0,
          "network_fee": 5,
          "confirmations": 5
        }, {
          "minimum_withdrawal": 6.02745618307040320615897144307382404804229736328125,
          "num_decimals": 1,
          "name": "name",
          "fiat": true,
          "id": "id",
          "type": 0,
          "network_fee": 5,
          "confirmations": 5
        }]
      }
    },
    "createBankAccountResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "results": {
          "$ref": "#/definitions/createBankAccountResponse_results"
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": {
          "id": 0
        },
        "infos": ["", ""],
        "errors": ["errors", "errors"]
      }
    },
    "createDepositResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "$ref": "#/definitions/createDepositResponse_results"
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": {
          "id": 0
        },
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "deleteBankAccountResponse": {
      "allOf": [{
        "$ref": "#/definitions/deleteBankAccountErrors"
      }, {
        "$ref": "#/definitions/transactionsResult"
      }]
    },
    "deleteBankAccountErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "listBankAccountsResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/listBankAccountsResult"
      }]
    },
    "listBankAccountsResult": {
      "type": "object",
      "properties": {
        "bankaccountcount": {
          "type": "integer"
        },
        "bankaccounts": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/listBankAccountsResult_bankaccounts"
          }
        }
      }
    },
    "listDepositRequestsResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/listDepositResult"
      }]
    },
    "listDepositResult": {
      "type": "object",
      "properties": {
        "depositrequestcount": {
          "type": "integer"
        },
        "depositrequests": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/listDepositResult_depositrequests"
          }
        }
      }
    },
    "ordersResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "$ref": "#/definitions/ordersResponse_results"
        }
      },
      "example": {
        "success": "false",
        "warnings": ["", ""],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": {
          "orders": ["orders", "orders"],
          "ordercount": 0
        },
        "infos": ["infos", "infos"],
        "errors": ["", ""]
      }
    },
    "cnhFileUploadResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/cnhFileUploadErrors"
      }]
    },
    "cnhFileUploadErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "cnhNewAddressResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/cnhNewAddressErrors"
      }, {
        "$ref": "#/definitions/newAddressResults"
      }]
    },
    "cnhNewAddressErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "newAddressResults": {
      "type": "object"
    },
    "supportGetResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Infos"
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Errors"
          }
        },
        "results": {
          "$ref": "#/definitions/supportResult"
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": "",
        "infos": ["", ""],
        "errors": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }]
      }
    },
    "supportPostResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "$ref": "#/definitions/supportResult"
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": "",
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "supportResult": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/supportResult_inner"
      }
    },
    "settingsResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/settingsResponse_results"
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": ["", ""],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": [{
          "uploadedFiles": ["uploadedFiles", "uploadedFiles"],
          "preferredLanguage": "preferredLanguage",
          "paymentProcessor": [{
            "settings": [
              ["{}", "{}"],
              ["{}", "{}"]
            ],
            "environment": "environment",
            "licensed": true,
            "name": "name",
            "description": "description",
            "deposit": true,
            "withdrawals": true,
            "activated": true
          }, {
            "settings": [
              ["{}", "{}"],
              ["{}", "{}"]
            ],
            "environment": "environment",
            "licensed": true,
            "name": "name",
            "description": "description",
            "deposit": true,
            "withdrawals": true,
            "activated": true
          }],
          "signup": true,
          "subscribedEmails": [
            ["{}", "{}"],
            ["{}", "{}"]
          ],
          "nick": "nick",
          "depositToken": "depositToken",
          "hasGoogleAuth": true,
          "kyc": 0,
          "kycState": {
            "currentLevel": 6,
            "kycLevelState": "kycLevelState",
            "definedLevels": [{
              "level": 1,
              "totalLimits": {
                "period": "period",
                "curType": "curType",
                "balance": "balance",
                "currency": "currency",
                "time": 5,
                "type": "type",
                "value": 5
              },
              "userLimits": {
                "period": "period",
                "curType": "curType",
                "balance": "balance",
                "currency": "currency",
                "time": 5,
                "type": "type",
                "value": 5
              },
              "currencyLimits": {
                "period": "period",
                "curType": "curType",
                "balance": "balance",
                "currency": "currency",
                "time": 5,
                "type": "type",
                "value": 5
              },
              "description": "description"
            }, {
              "level": 1,
              "totalLimits": {
                "period": "period",
                "curType": "curType",
                "balance": "balance",
                "currency": "currency",
                "time": 5,
                "type": "type",
                "value": 5
              },
              "userLimits": {
                "period": "period",
                "curType": "curType",
                "balance": "balance",
                "currency": "currency",
                "time": 5,
                "type": "type",
                "value": 5
              },
              "currencyLimits": {
                "period": "period",
                "curType": "curType",
                "balance": "balance",
                "currency": "currency",
                "time": 5,
                "type": "type",
                "value": 5
              },
              "description": "description"
            }]
          },
          "email": "email",
          "annex": [{
            "riskOption": "riskOption",
            "feePercentage": "feePercentage",
            "merchantId": "merchantId"
          }, {
            "riskOption": "riskOption",
            "feePercentage": "feePercentage",
            "merchantId": "merchantId"
          }],
          "otc": true
        }, {
          "uploadedFiles": ["uploadedFiles", "uploadedFiles"],
          "preferredLanguage": "preferredLanguage",
          "paymentProcessor": [{
            "settings": [
              ["{}", "{}"],
              ["{}", "{}"]
            ],
            "environment": "environment",
            "licensed": true,
            "name": "name",
            "description": "description",
            "deposit": true,
            "withdrawals": true,
            "activated": true
          }, {
            "settings": [
              ["{}", "{}"],
              ["{}", "{}"]
            ],
            "environment": "environment",
            "licensed": true,
            "name": "name",
            "description": "description",
            "deposit": true,
            "withdrawals": true,
            "activated": true
          }],
          "signup": true,
          "subscribedEmails": [
            ["{}", "{}"],
            ["{}", "{}"]
          ],
          "nick": "nick",
          "depositToken": "depositToken",
          "hasGoogleAuth": true,
          "kyc": 0,
          "kycState": {
            "currentLevel": 6,
            "kycLevelState": "kycLevelState",
            "definedLevels": [{
              "level": 1,
              "totalLimits": {
                "period": "period",
                "curType": "curType",
                "balance": "balance",
                "currency": "currency",
                "time": 5,
                "type": "type",
                "value": 5
              },
              "userLimits": {
                "period": "period",
                "curType": "curType",
                "balance": "balance",
                "currency": "currency",
                "time": 5,
                "type": "type",
                "value": 5
              },
              "currencyLimits": {
                "period": "period",
                "curType": "curType",
                "balance": "balance",
                "currency": "currency",
                "time": 5,
                "type": "type",
                "value": 5
              },
              "description": "description"
            }, {
              "level": 1,
              "totalLimits": {
                "period": "period",
                "curType": "curType",
                "balance": "balance",
                "currency": "currency",
                "time": 5,
                "type": "type",
                "value": 5
              },
              "userLimits": {
                "period": "period",
                "curType": "curType",
                "balance": "balance",
                "currency": "currency",
                "time": 5,
                "type": "type",
                "value": 5
              },
              "currencyLimits": {
                "period": "period",
                "curType": "curType",
                "balance": "balance",
                "currency": "currency",
                "time": 5,
                "type": "type",
                "value": 5
              },
              "description": "description"
            }]
          },
          "email": "email",
          "annex": [{
            "riskOption": "riskOption",
            "feePercentage": "feePercentage",
            "merchantId": "merchantId"
          }, {
            "riskOption": "riskOption",
            "feePercentage": "feePercentage",
            "merchantId": "merchantId"
          }],
          "otc": true
        }],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "confirmPaypalResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": ["results", "results"],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "feedbackResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Errors"
          }
        },
        "results": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": ["results", "results"],
        "infos": ["", ""],
        "errors": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }]
      }
    },
    "fileUploadResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": ["results", "results"],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "googleAuthResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": ["results", "results"],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "listChildrenResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Infos"
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "username": {
                  "type": "string"
                },
                "email": {
                  "type": "string"
                },
                "roles": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "annexes": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": [
          ["{}", "{}"],
          ["{}", "{}"]
        ],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "offMarketAcceptResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Infos"
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": ["results", "results"],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "offMarketCancelResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Infos"
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": ["results", "results"],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "offMarketRequestResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Infos"
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/buyResult_results"
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": [{
          "ordernumber": 0
        }, {
          "ordernumber": 0
        }],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "orderCancelResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": ["results", "results"],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "orderModifyResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": ["results", "results"],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "rankingResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Infos"
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Errors"
          }
        },
        "results": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/rankingResponse_results"
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": ["", ""],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": [{
          "players": "players",
          "position": [{
            "nick": "nick",
            "score": 6,
            "yourposition": true,
            "achievements": "achievements",
            "position": 0,
            "realscore": 1.4658129
          }, {
            "nick": "nick",
            "score": 6,
            "yourposition": true,
            "achievements": "achievements",
            "position": 0,
            "realscore": 1.4658129
          }]
        }, {
          "players": "players",
          "position": [{
            "nick": "nick",
            "score": 6,
            "yourposition": true,
            "achievements": "achievements",
            "position": 0,
            "realscore": 1.4658129
          }, {
            "nick": "nick",
            "score": 6,
            "yourposition": true,
            "achievements": "achievements",
            "position": 0,
            "realscore": 1.4658129
          }]
        }],
        "infos": ["", ""],
        "errors": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }]
      }
    },
    "startPaypalResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Infos"
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/startPaypalResponse_results"
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": [{
          "approvalUrl": "approvalUrl"
        }, {
          "approvalUrl": "approvalUrl"
        }],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "requestDeletionResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": ["results", "results"],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "requestWithdrawalResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": ["results", "results"],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "searchUserResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "username": {
                  "type": "string"
                },
                "email": {
                  "type": "string"
                },
                "roles": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "annexes": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": ["", ""],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": [
          ["{}", "{}"],
          ["{}", "{}"]
        ],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "sellResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "ordernumber": {
                  "type": "integer"
                }
              }
            }
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": ["", ""],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": [
          ["{}", "{}"],
          ["{}", "{}"]
        ],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "sendFundsResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": ["", ""],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": ["results", "results"],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "setPermissionsResponse": {
      "properties": {
        "success": {
          "type": "string",
          "example": "false"
        },
        "missing_authenticators": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TwoFactors"
          }
        },
        "infos": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Infos"
          }
        },
        "warnings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Warning"
          }
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        },
        "results": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "example": {
        "success": "false",
        "warnings": [{
          "context": "context",
          "message": "message"
        }, {
          "context": "context",
          "message": "message"
        }],
        "missing_authenticators": [{
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }, {
          "googleAuth": "googleAuth",
          "resendCodes": ["resendCodes", "resendCodes"],
          "emailAuth": "emailAuth"
        }],
        "results": ["results", "results"],
        "infos": ["", ""],
        "errors": ["", ""]
      }
    },
    "pxRequestWithdrawalResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/pxRequestWithdrawalErrors"
      }]
    },
    "pxRequestWithdrawalErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "pxCreateDepositRequestResponse": {
      "allOf": [{
        "$ref": "#/definitions/Response"
      }, {
        "$ref": "#/definitions/pxCreateDepositRequestErrors"
      }, {
        "$ref": "#/definitions/pxCreateDepositRequestResult"
      }]
    },
    "pxCreateDepositRequestErrors": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "string",
            "example": ""
          }
        }
      }
    },
    "pxCreateDepositRequestResult": {
      "type": "object",
      "properties": {
        "results": {
          "type": "array",
          "description": "results from this object",
          "items": {
            "$ref": "#/definitions/pxCreateDepositRequestResult_results"
          }
        }
      }
    },
    "authByTokenParameters": {
      "type": "object",
      "required": ["token"],
      "properties": {
        "token": {
          "type": "string"
        }
      }
    },
    "bestOfferParameters": {
      "type": "object",
      "required": ["market"],
      "properties": {
        "market": {
          "type": "string",
          "example": "BTC-EUR",
          "description": "the market to query in the format nominalCurrency-limitCurrency, e.g. BTC-EUR"
        },
        "count": {
          "type": "integer",
          "example": 20,
          "description": "tthe number of items to return from the orderbook"
        }
      }
    },
    "deleteAccountParameters": {
      "type": "object",
      "required": ["token"],
      "properties": {
        "token": {
          "type": "string"
        }
      }
    },
    "contactParameters": {
      "type": "object",
      "required": ["content"],
      "properties": {
        "fields": {
          "type": "array",
          "description": "an optional json-object collection fields",
          "items": {
            "type": "string"
          }
        },
        "topic": {
          "type": "string",
          "description": "an optional topic"
        },
        "content": {
          "type": "string",
          "description": "content of the support request"
        }
      }
    },
    "gatewaypublicchart_charts": {
      "properties": {
        "ident": {
          "type": "string",
          "example": "vanilla BTC-EUR 1m weighted average",
          "description": "The identifier has format  <installident> <marketident> 1m|15m|1h|4h|1d weighted average By omitting the aggregation part (... weighted average) you get the highest available resolution. "
        },
        "market": {
          "type": "string",
          "example": "BTC-EUR",
          "description": "market ident for which to retrieve the default charts in the format nominalCurrency-limitCurrency, e.g. BTC-EUR"
        },
        "from": {
          "type": "integer",
          "example": 111111,
          "description": "from (integer, optional) - latest chart value the client already received as a JavaScript timestamp"
        }
      }
    },
    "chartParameters": {
      "type": "object",
      "required": ["charts"],
      "properties": {
        "charts": {
          "type": "array",
          "description": "array of chart idents",
          "items": {
            "$ref": "#/definitions/gatewaypublicchart_charts"
          }
        },
        "openIntervals": {
          "type": "boolean",
          "description": "Send the currently open interval(s) (defaults to )"
        }
      }
    },
    "checkTransferParameters": {
      "type": "object",
      "required": ["address"],
      "properties": {
        "address": {
          "type": "string",
          "description": "address that was returned as receival address by prepareTransfer"
        },
        "googleAuth": {
          "type": "string"
        },
        "emailAuth": {
          "type": "string"
        },
        "resendCodes": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "emailConfirmationParameters": {
      "type": "object",
      "required": ["token"],
      "properties": {
        "token": {
          "type": "string"
        }
      }
    },
    "feedbackParameters": {
      "type": "object",
      "required": ["page"],
      "properties": {
        "feedback": {
          "type": "string"
        },
        "page": {
          "type": "string"
        }
      }
    },
    "lastTradesConvertedParameters": {
      "type": "object",
      "required": ["count", "currency", "market"],
      "properties": {
        "market": {
          "type": "string",
          "example": "BTC-EUR",
          "description": "the base market to query in the format nominalCurrency-limitCurrency, e.g. BTC-EUR"
        },
        "currency": {
          "type": "string",
          "example": "USD",
          "description": "the limit currency to which to convert"
        },
        "count": {
          "type": "integer",
          "example": 10,
          "description": "the number of items to return from the orderbook"
        }
      }
    },
    "lastTradesParameters": {
      "type": "object",
      "required": ["count", "market"],
      "properties": {
        "market": {
          "type": "string",
          "example": "BTC-EUR",
          "description": "the base market to query in the format nominalCurrency-limitCurrency, e.g. BTC-EUR"
        },
        "count": {
          "type": "integer",
          "example": 10,
          "description": "the number of items to return from the orderbook"
        }
      }
    },
    "passwordForgottenParameters": {
      "type": "object",
      "required": ["email"],
      "properties": {
        "email": {
          "type": "string",
          "description": "the customer's mail address that receives the recovery mail"
        }
      }
    },
    "passwordRecoveryParameters": {
      "type": "object",
      "required": ["newPassword", "token"],
      "properties": {
        "token": {
          "type": "string",
          "description": "a security token created by the server and sent by e-mail in a link"
        },
        "newPassword": {
          "type": "string",
          "description": "the customer's new password"
        }
      }
    },
    "prepareTransferParameters": {
      "type": "object",
      "required": ["amount", "currency", "merchant_id"],
      "properties": {
        "merchant_id": {
          "type": "string",
          "description": "the merchant id of the merchant receiving the payment"
        },
        "currency": {
          "type": "string",
          "description": "the currency of the amount to pay"
        },
        "amount": {
          "type": "number",
          "description": "the amount in currency to pay"
        },
        "reference_id": {
          "type": "string",
          "description": "reference id for merchant callbacks"
        }
      }
    },
    "rankingParameters": {
      "type": "object",
      "properties": {
        "from": {
          "type": "integer",
          "example": 1,
          "description": "retrieve ranking from (inclusive), must be combined with to OR limit"
        },
        "to": {
          "type": "integer",
          "example": 10,
          "description": "retrieve ranking to (inclusive), must be combined with from OR limit"
        },
        "limit": {
          "type": "integer",
          "example": 10,
          "description": "retrieve ranking rows up to the limit, can be combined with from OR to, if from and to are omitted, /public/ranking returns the first rankings, /private/ranking places the logged in customer in the middle of the returned data page"
        }
      }
    },
    "registerParameters": {
      "type": "object",
      "required": ["dataProtection", "email", "password", "preferredLanguage"],
      "properties": {
        "email": {
          "type": "string",
          "format": "email",
          "example": "myemail@gmail.com",
          "description": "the e-mail address of the new customer"
        },
        "password": {
          "type": "string",
          "description": "the password address of the new customer"
        },
        "dataProtection": {
          "type": "string",
          "example": "yes",
          "description": "the data protection text that the new customer has accepted (for archiving purposes)"
        },
        "preferredLanguage": {
          "type": "string",
          "example": "en",
          "description": "the preferred language of the new customer"
        },
        "signup": {
          "type": "boolean",
          "example": true,
          "description": "whether the new customer wants to signup for a newsletter"
        },
        "annex": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "resendConfirmationParameters": {
      "type": "object",
      "required": ["email"],
      "properties": {
        "email": {
          "type": "string",
          "format": "email",
          "example": "myemail@gmail.com",
          "description": "the customer's mail address that receives the registration mail"
        }
      }
    },
    "unsubscribeParameters": {
      "type": "object",
      "required": ["token"],
      "properties": {
        "token": {
          "type": "string"
        }
      }
    },
    "abortDepositRequestParameters": {
      "type": "object",
      "required": ["id"],
      "properties": {
        "id": {
          "type": "integer"
        }
      }
    },
    "acceptTermsParameters": {
      "type": "object",
      "required": ["id"],
      "properties": {
        "id": {
          "type": "integer"
        }
      }
    },
    "balanceParameters": {
      "type": "object",
      "properties": {
        "currencies": {
          "type": "array",
          "description": "the requested currencies in an array ['CURR1', 'CURR2', ...], e.g. ['EUR', 'BTC']. Defaults to all currencies.",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "bestOfferParameters_1": {
      "type": "object",
      "required": ["market"],
      "properties": {
        "market": {
          "type": "string",
          "example": "BTC-EUR",
          "description": "the market to query in the format nominalCurrency-limitCurrency, e.g. BTC-EUR"
        },
        "count": {
          "type": "integer",
          "example": 20,
          "description": "the number of items to return from the orderbook"
        }
      }
    },
    "buyParameters": {
      "type": "object",
      "required": ["market", "nominal"],
      "properties": {
        "market": {
          "type": "string",
          "example": "BTC-EUR",
          "description": "the ident of the market in which to buy in the format nominalCurrency-limitCurrency"
        },
        "nominal": {
          "type": "number",
          "format": "float",
          "example": 0.01,
          "description": "the nominal to buy"
        },
        "limit": {
          "type": "number",
          "format": "float",
          "description": "the limit with which to buy"
        },
        "pauseNoCredit": {
          "type": "boolean",
          "example": false,
          "description": "whether to pause this order when no credit is available"
        },
        "immediateOrCancel": {
          "type": "boolean",
          "example": false,
          "description": "When set, the order will be either executed or cancel immediatly, but never saved to the orderbook as a market maker. Partial executions are possible, the remaining nominal would be canceled"
        }
      }
    },
    "checkNicknameParameters": {
      "type": "object",
      "required": ["wantedNick"],
      "properties": {
        "wantedNick": {
          "type": "string"
        }
      }
    },
    "buyParameters_1": {
      "type": "object",
      "required": ["market", "nominal"],
      "properties": {
        "market": {
          "type": "string",
          "example": "BTC-EUR",
          "description": "the ident of the market in which to buy in the format nominalCurrency-limitCurrency"
        },
        "nominal": {
          "type": "number",
          "format": "float",
          "example": 0.01,
          "description": "the nominal to buy"
        },
        "limit": {
          "type": "number",
          "format": "float",
          "description": "the limit with which to buy"
        },
        "immediateOrCancel": {
          "type": "boolean",
          "example": false,
          "description": "When set, the order will be either executed or cancel immediatly, but never saved to the orderbook as a market maker. Partial executions are possible, the remaining nominal would be canceled"
        }
      }
    },
    "orderCancelParameters": {
      "type": "object",
      "required": ["ordernumber"],
      "properties": {
        "ordernumber": {
          "type": "string",
          "description": "order id to cansel"
        }
      }
    },
    "ordersParameters": {
      "type": "object",
      "required": ["pagenumber", "pagesize"],
      "properties": {
        "markets": {
          "type": "array",
          "example": "[\"BTC-EUR\"]",
          "description": "array of markets to retrieve in the format nominalCurrency-limitCurrency, e.g. ['BTC-EUR']",
          "items": {
            "type": "string"
          }
        },
        "states": {
          "type": "array",
          "example": "[1]",
          "description": "possible value are 0-open, 1-executed, 2-cancelled, 3-paused",
          "items": {
            "type": "integer"
          }
        },
        "type": {
          "type": "integer",
          "description": "possible value are 1-buy, 2-sell, defaults to all"
        },
        "fromOrdernumber": {
          "type": "integer"
        },
        "toOrdernumber": {
          "type": "integer"
        },
        "sortBy": {
          "type": "string",
          "description": "the sort column"
        },
        "sortDirection": {
          "type": "string",
          "description": "the sort column"
        },
        "pagesize": {
          "type": "integer"
        },
        "pagenumber": {
          "type": "integer"
        }
      }
    },
    "orderModifyParameters": {
      "type": "object",
      "required": ["nominal", "ordernumber"],
      "properties": {
        "ordernumber": {
          "type": "integer",
          "example": 1,
          "description": "id of the order"
        },
        "nominal": {
          "type": "number",
          "format": "float",
          "example": 0.01,
          "description": "the nominal to buy"
        }
      }
    },
    "sellParameters": {
      "type": "object",
      "required": ["market", "nominal"],
      "properties": {
        "market": {
          "type": "string",
          "example": "BTC-EUR",
          "description": "the ident of the market in which to buy in the format nominalCurrency-limitCurrency"
        },
        "nominal": {
          "type": "number",
          "format": "float",
          "example": 0.01,
          "description": "the nominal to sell"
        },
        "limit": {
          "type": "number",
          "format": "float",
          "description": "the limit with which to sell"
        },
        "immediateOrCancel": {
          "type": "boolean",
          "example": false,
          "description": "When set, the order will be either executed or cancel immediatly, but never saved to the orderbook as a market maker. Partial executions are possible, the remaining nominal would be canceled"
        }
      }
    },
    "aacSendInternalParameters": {
      "type": "object",
      "required": ["amount", "currency", "password", "recipient"],
      "properties": {
        "recipient": {
          "type": "string",
          "format": "email",
          "description": "the recipient email"
        },
        "currency": {
          "type": "string",
          "description": "the currency to send"
        },
        "amount": {
          "type": "number",
          "format": "float",
          "description": "the amount to send"
        },
        "description": {
          "type": "string",
          "description": "the description of the internal action"
        },
        "password": {
          "type": "string",
          "description": "the password of the user"
        }
      }
    },
    "aacTransactionsParameters": {
      "type": "object",
      "required": ["currency", "pagenumber", "pagesize"],
      "properties": {
        "currency": {
          "type": "string",
          "description": "the currency of the transaction list"
        },
        "type": {
          "type": "integer",
          "description": "possible value are 0-credit, 1-debit, defaults to all"
        },
        "fromDate": {
          "type": "integer",
          "description": "earliest transaction time as a JavaScript timestamp"
        },
        "toDate": {
          "type": "integer",
          "description": "latest transaction time as a JavaScript timestamp"
        },
        "sortBy": {
          "type": "string",
          "description": "the sort column"
        },
        "sortDirection": {
          "type": "string",
          "description": "the sort column"
        },
        "pagesize": {
          "type": "integer"
        },
        "pagenumber": {
          "type": "integer"
        }
      }
    },
    "gatewaycoinhubprivatesettings_twoFactor": {
      "properties": {
        "emailAuth": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "googleAuth": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "description": "the two factor authentication settings"
    },
    "gatewaycoinhubprivatesettings_annex": {
      "properties": {
        "firstName": {
          "type": "string",
          "description": "basic profile field"
        },
        "lastName": {
          "type": "string",
          "description": "basic profile field"
        }
      },
      "description": "the user's profile fields which could be dynamically configured from the admin panel"
    },
    "cnhSettingsParameters": {
      "type": "object",
      "properties": {
        "password": {
          "type": "string",
          "description": "the user's password for e-mail changes and account deletions or the new password for password changes"
        },
        "oldPassword": {
          "type": "string",
          "description": "the user's old password for password changes"
        },
        "kycLevelRequested": {
          "type": "integer",
          "description": "request for kyc level"
        },
        "nick": {
          "type": "string",
          "description": "the customer's nick"
        },
        "email": {
          "type": "string",
          "description": "the customer's e-mail"
        },
        "signup": {
          "type": "boolean",
          "description": "wether newsletters are desired"
        },
        "sortDirection": {
          "type": "string",
          "description": "the sort column"
        },
        "preferredLanguage": {
          "type": "string",
          "description": "wether newsletters are desired"
        },
        "twoFactor": {
          "$ref": "#/definitions/gatewaycoinhubprivatesettings_twoFactor"
        },
        "googleAuth": {
          "type": "string",
          "description": "Google Auth code in case of 2-factor auth"
        },
        "emailAuth": {
          "type": "string",
          "description": "e-mail auth code in case of 2-factor auth"
        },
        "resendCodes": {
          "type": "array",
          "description": "requests a new two factor auth code",
          "items": {
            "type": "string"
          }
        },
        "annex": {
          "$ref": "#/definitions/gatewaycoinhubprivatesettings_annex"
        }
      }
    },
    "body": {
      "type": "object",
      "required": ["content", "filename"],
      "properties": {
        "filename": {
          "type": "string",
          "description": "name of the file to store"
        },
        "content": {
          "type": "string",
          "description": "content of the file to store"
        },
        "md5": {
          "type": "string",
          "description": "expected MD5 sum of the file"
        }
      }
    },
    "body_1": {
      "type": "object",
      "required": ["currency"],
      "properties": {
        "currency": {
          "type": "string",
          "example": "BTC",
          "description": "the currency ID"
        }
      }
    },
    "dbxonfirmInteracParameters": {
      "type": "object",
      "required": ["secureID"],
      "properties": {
        "secureID": {
          "type": "string",
          "description": "the secure ID returned by Interpay"
        }
      }
    },
    "dbxewAddressParameters": {
      "type": "object",
      "required": ["currency"],
      "properties": {
        "currency": {
          "type": "string",
          "example": "BTC",
          "description": "the currency ID"
        }
      }
    },
    "dbxSettingsParameters": {
      "type": "object",
      "required": ["device"],
      "properties": {
        "device": {
          "type": "string",
          "description": "the user device ID"
        },
        "password": {
          "type": "string",
          "description": "the user's password for e-mail changes and account deletions or the new password for password changes"
        },
        "oldPassword": {
          "type": "string",
          "description": "the user's old password for password changes"
        },
        "kycLevelRequested": {
          "type": "string",
          "description": "request for kyc level"
        },
        "nick": {
          "type": "string",
          "description": "the customer's nick"
        },
        "email": {
          "type": "string",
          "description": "the customer's e-mail"
        },
        "signup": {
          "type": "boolean",
          "description": "wether newsletters are desired"
        },
        "sortDirection": {
          "type": "string",
          "description": "the sort column"
        },
        "preferredLanguage": {
          "type": "string",
          "description": "wether newsletters are desired"
        },
        "twoFactor": {
          "$ref": "#/definitions/gatewaycoinhubprivatesettings_twoFactor"
        },
        "googleAuth": {
          "type": "string",
          "description": "Google Auth code in case of 2-factor auth"
        },
        "emailAuth": {
          "type": "string",
          "description": "e-mail auth code in case of 2-factor auth"
        },
        "resendCodes": {
          "type": "array",
          "description": "requests a new two factor auth code",
          "items": {
            "type": "string"
          }
        },
        "annex": {
          "$ref": "#/definitions/gatewaycoinhubprivatesettings_annex"
        }
      }
    },
    "dbxStartInteracParameters": {
      "type": "object",
      "required": ["amount", "interacEmail", "lang"],
      "properties": {
        "amount": {
          "type": "number",
          "format": "float",
          "description": "the amount of CAD"
        },
        "interacEmail": {
          "type": "string",
          "format": "email",
          "description": "the user email known to Interac"
        },
        "lang": {
          "type": "string",
          "description": "the user language"
        }
      }
    },
    "fnbAddDescription": {
      "type": "object",
      "required": ["transactionId"],
      "properties": {
        "transactionId": {
          "type": "integer",
          "description": "the id of transaction"
        },
        "narrativeDescription": {
          "type": "string",
          "description": "the narrative description of transaction"
        }
      }
    },
    "addressParameters": {
      "type": "object",
      "required": ["cryptoCurrency"],
      "properties": {
        "cryptoCurrency": {
          "type": "string",
          "description": "the id of cryptocurrency"
        }
      }
    },
    "fnbBalance": {
      "type": "object",
      "properties": {
        "currencies": {
          "type": "array",
          "description": "the requested currencies in an array ['CURR1', 'CURR2', ...], e.g. ['EUR', 'BTC']. Defaults to all currencies.",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "fnbGenerateFile": {
      "type": "object",
      "properties": {
        "currency": {
          "type": "string",
          "description": "the currency id"
        }
      }
    },
    "fnbSendMassFunds": {
      "type": "object",
      "required": ["password"],
      "properties": {
        "password": {
          "type": "string",
          "description": "the user password"
        },
        "content": {
          "type": "string",
          "description": "the content"
        },
        "twoFactor": {
          "$ref": "#/definitions/TwoFactors"
        }
      }
    },
    "fnbTransactions": {
      "type": "object",
      "required": ["currency", "pagenumber", "pagesize"],
      "properties": {
        "currency": {
          "type": "string",
          "description": "the user password"
        },
        "type": {
          "type": "integer",
          "description": "the content"
        },
        "transactionTypes": {
          "type": "array",
          "description": "the content",
          "items": {
            "type": "string"
          }
        },
        "fromDate": {
          "type": "integer",
          "description": "the content"
        },
        "toDate": {
          "type": "integer",
          "description": "the content"
        },
        "sortBy": {
          "type": "string",
          "description": "the content"
        },
        "sortDirection": {
          "type": "string",
          "description": "the content"
        },
        "pagesize": {
          "type": "integer",
          "description": "the content"
        },
        "pagenumber": {
          "type": "integer",
          "description": "the content"
        }
      }
    },
    "utzBuyParameters": {
      "type": "object",
      "required": ["market", "nominal"],
      "properties": {
        "market": {
          "type": "string",
          "example": "BTC-EUR",
          "description": "the ident of the market in which to buy in the format nominalCurrency-limitCurrency"
        },
        "nominal": {
          "type": "number",
          "format": "float",
          "example": 0.01,
          "description": "the nominal to buy"
        },
        "limit": {
          "type": "number",
          "format": "float",
          "description": "the limit with which to buy"
        },
        "pauseNoCredit": {
          "type": "boolean",
          "example": false,
          "description": "whether to pause this order when no credit is available"
        },
        "immediateOrCancel": {
          "type": "boolean",
          "example": false,
          "description": "When set, the order will be either executed or cancel immediatly, but never saved to the orderbook as a market maker. Partial executions are possible, the remaining nominal would be canceled"
        }
      }
    },
    "utzClaimSearchParameters": {
      "type": "object",
      "required": ["type", "val"],
      "properties": {
        "type": {
          "type": "string",
          "description": "",
          "enum": ["country", "product", "retailer"]
        },
        "val": {
          "type": "string",
          "description": "the nominal to buy"
        }
      }
    },
    "utzOrdersParameters": {
      "type": "object",
      "required": ["type", "val"],
      "properties": {
        "type": {
          "type": "string",
          "description": "",
          "enum": ["country", "product", "retailer"]
        },
        "val": {
          "type": "string",
          "description": "the nominal to buy"
        }
      }
    },
    "utzRedeemParameters": {
      "type": "object",
      "required": ["type", "val"],
      "properties": {
        "type": {
          "type": "string",
          "description": "",
          "enum": ["country", "product", "retailer"]
        },
        "val": {
          "type": "string",
          "description": "the nominal to buy"
        }
      }
    },
    "utzSellParameters": {
      "type": "object",
      "required": ["market", "nominal"],
      "properties": {
        "market": {
          "type": "string",
          "example": "BTC-EUR",
          "description": "the ident of the market in which to buy in the format nominalCurrency-limitCurrency"
        },
        "nominal": {
          "type": "number",
          "format": "float",
          "example": 0.01,
          "description": "the nominal to buy"
        },
        "limit": {
          "type": "number",
          "format": "float",
          "description": "the limit with which to buy"
        },
        "pauseNoCredit": {
          "type": "boolean",
          "example": false,
          "description": "whether to pause this order when no credit is available"
        },
        "immediateOrCancel": {
          "type": "boolean",
          "example": false,
          "description": "When set, the order will be either executed or cancel immediatly, but never saved to the orderbook as a market maker. Partial executions are possible, the remaining nominal would be canceled"
        }
      }
    },
    "body_2": {
      "type": "object",
      "required": ["payerId", "paymentId"],
      "properties": {
        "paymentId": {
          "type": "string"
        },
        "payerId": {
          "type": "string"
        }
      }
    },
    "body_3": {
      "type": "object",
      "required": ["accountNumber", "bankName", "ownerName"],
      "properties": {
        "name": {
          "type": "string",
          "description": "name of bank account"
        },
        "bankName": {
          "type": "string",
          "description": "name of bank"
        },
        "bankBranch": {
          "type": "string",
          "description": "name of bank branch"
        },
        "ownerName": {
          "type": "string",
          "description": "name of bank account owner"
        },
        "accountNumber": {
          "type": "string",
          "description": "account number"
        }
      }
    },
    "body_4": {
      "type": "object",
      "required": ["amount", "bankAccountId", "currency", "referenceCode"],
      "properties": {
        "bankAccountId": {
          "type": "integer",
          "description": "id of the account where the deposit will happen, the account must belong to the authenticated customer"
        },
        "currency": {
          "type": "string",
          "description": "currency of the deposit"
        },
        "amount": {
          "type": "number",
          "format": "float",
          "description": "amount of the deposit"
        },
        "referenceCode": {
          "type": "string",
          "description": "reference code for the deposite, it must be unique"
        }
      }
    },
    "body_5": {
      "type": "object",
      "required": ["id"],
      "properties": {
        "id": {
          "type": "integer",
          "description": "bank account id"
        }
      }
    },
    "feedbackParameters_1": {
      "type": "object",
      "required": ["page"],
      "properties": {
        "feedback": {
          "type": "string"
        },
        "page": {
          "type": "string"
        }
      }
    },
    "body_6": {
      "type": "object",
      "required": ["content", "filename", "kycLevelRequested", "md5"],
      "properties": {
        "filename": {
          "type": "string",
          "description": "name of the file to store"
        },
        "content": {
          "type": "string",
          "description": "content of the file to store"
        },
        "md5": {
          "type": "string",
          "description": "expected MD5 sum of the file"
        },
        "kycLevelRequested": {
          "type": "string"
        },
        "document_type": {
          "type": "string"
        }
      }
    },
    "body_7": {
      "type": "object",
      "required": ["authenticationCode", "authenticationKey"],
      "properties": {
        "authenticationKey": {
          "type": "string",
          "description": "the key that was generated on client side"
        },
        "authenticationCode": {
          "type": "string",
          "description": "the code that proves the user's auth device is working correctly"
        }
      }
    },
    "body_8": {
      "type": "object",
      "required": ["currency"],
      "properties": {
        "currency": {
          "type": "string",
          "description": "the address's crypto currency"
        }
      }
    },
    "body_9": {
      "type": "object",
      "required": ["ordernumber"],
      "properties": {
        "ordernumber": {
          "type": "integer",
          "description": "the ordernumber of the order"
        }
      }
    },
    "body_10": {
      "type": "object",
      "required": ["ordernumber"],
      "properties": {
        "ordernumber": {
          "type": "integer",
          "description": "the ordernumber of the order"
        }
      }
    },
    "body_11": {
      "type": "object",
      "required": ["market", "nominal", "rate", "type", "username"],
      "properties": {
        "market": {
          "type": "string",
          "description": "the ident of the market in which to trade in the format nominalCurrency-limitCurrency, e.g. BTC-EUR"
        },
        "nominal": {
          "type": "number",
          "format": "float",
          "description": "the nominal for the trade"
        },
        "rate": {
          "type": "number",
          "format": "float",
          "description": "the rate for the trade"
        },
        "username": {
          "type": "string",
          "description": "the username of the receiver"
        },
        "type": {
          "type": "integer",
          "description": "the type of the order (1-buy, 2-sell)"
        }
      }
    },
    "body_12": {
      "type": "object",
      "required": ["ordernumber"],
      "properties": {
        "ordernumber": {
          "type": "integer"
        }
      }
    },
    "body_13": {
      "type": "object",
      "required": ["nominal", "ordernumber"],
      "properties": {
        "ordernumber": {
          "type": "integer"
        },
        "nominal": {
          "type": "number",
          "format": "float",
          "description": "the new nominal"
        }
      }
    },
    "body_14": {
      "type": "object",
      "properties": {
        "markets": {
          "type": "array",
          "description": "array of markets to retrieve in the format nominalCurrency-limitCurrency, e.g. [\"BTC-EUR\"]",
          "items": {
            "type": "string"
          }
        },
        "states": {
          "type": "array",
          "description": "possible value are 0-open, 1-executed, 2-cancelled, 3-paused",
          "items": {
            "type": "integer"
          }
        },
        "type": {
          "type": "integer",
          "description": "possible value are 1-buy, 2-sell, defaults to all"
        },
        "fromOrdernumber": {
          "type": "integer"
        },
        "toOrdernumber": {
          "type": "integer"
        },
        "sortBy": {
          "type": "string",
          "description": "the sort column"
        },
        "sortDirection": {
          "type": "string",
          "description": "the sort column"
        },
        "pagesize": {
          "type": "integer"
        },
        "pagenumber": {
          "type": "integer"
        }
      }
    },
    "body_15": {
      "type": "object",
      "properties": {
        "from": {
          "type": "integer",
          "description": "retrieve ranking from (inclusive), must be combined with to OR limit"
        },
        "to": {
          "type": "integer",
          "description": "retrieve ranking to (inclusive), must be combined with from OR limit"
        },
        "limit": {
          "type": "integer",
          "description": "retrieve ranking rows up to the limit, can be combined with from OR to, if from and to are omitted, /public/ranking returns the first rankings, /private/ranking places the logged in customer in the middle of the returned data page"
        }
      }
    },
    "body_16": {
      "type": "object",
      "required": ["password"],
      "properties": {
        "password": {
          "type": "string",
          "description": "the user password to validate account deletion"
        }
      }
    },
    "body_17": {
      "type": "object",
      "required": ["amount", "currency"],
      "properties": {
        "currency": {
          "type": "string",
          "description": "the currency to send"
        },
        "amount": {
          "type": "number",
          "format": "float",
          "description": "the amount to send"
        },
        "transferDetails": {
          "type": "object",
          "description": "simple key/value object of additional details",
          "properties": {}
        },
        "googleAuth": {
          "type": "string"
        },
        "emailAuth": {
          "type": "string"
        },
        "resendCodes": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "body_18": {
      "type": "object",
      "properties": {
        "username": {
          "type": "string",
          "description": "search by username"
        },
        "email": {
          "type": "string",
          "description": "search by e-mail"
        },
        "roles": {
          "type": "array",
          "description": "search by roles",
          "items": {
            "type": "string"
          }
        },
        "annexes": {
          "type": "array",
          "description": "search by annexes",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "body_19": {
      "type": "object",
      "required": ["market", "nominal"],
      "properties": {
        "market": {
          "type": "string",
          "description": "the ident of the market in which to sell in the format nominalCurrency-limitCurrency, e.g. BTC-EUR"
        },
        "nominal": {
          "type": "number",
          "format": "float",
          "description": "the nominal to sell"
        },
        "limit": {
          "type": "number",
          "format": "float",
          "description": "the limit with which to sell"
        },
        "pauseNoCredit": {
          "type": "boolean",
          "description": "whether to pause this order when no credit is available"
        },
        "immediateOrCancel": {
          "type": "boolean",
          "description": "When set, the order will be either executed or cancel immediatly, but never saved to the orderbook as a market maker. Partial executions are possible, the remaining nominal would be canceled."
        }
      }
    },
    "body_20": {
      "type": "object",
      "required": ["amount", "currency", "password", "toAddress"],
      "properties": {
        "currency": {
          "type": "string",
          "description": "the currency to send"
        },
        "password": {
          "type": "string",
          "description": "the user password to authenticate the transaction"
        },
        "amount": {
          "type": "number",
          "format": "float",
          "description": "the amount to send"
        },
        "toAddress": {
          "type": "string",
          "description": "the target address"
        },
        "description": {
          "type": "string",
          "description": "describes the purpose of the transfer"
        },
        "includeMinerFee": {
          "type": "number",
          "format": "float",
          "description": "the included miner fee for the transfer"
        },
        "googleAuth": {
          "type": "string",
          "description": "Google Auth code in case of 2-factor auth"
        },
        "emailAuth": {
          "type": "string",
          "description": "e-mail auth code in case of 2-factor auth"
        },
        "resendCodes": {
          "type": "array",
          "description": "requests a new two factor auth code",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "body_21": {
      "type": "object",
      "required": ["role", "status", "userId"],
      "properties": {
        "role": {
          "type": "string",
          "description": "role to set"
        },
        "status": {
          "type": "integer",
          "description": "set/unset role(1-set, 0-unset)"
        },
        "userId": {
          "type": "integer",
          "description": "ID of child user to set/unset role"
        }
      }
    },
    "body_22": {
      "type": "object",
      "properties": {
        "nick": {
          "type": "string",
          "description": "the customer's nick"
        },
        "password": {
          "type": "string",
          "description": "the user's password for e-mail changes and account deletions or the new password for password changes"
        },
        "oldPassword": {
          "type": "string",
          "description": "the user's old password for password changes"
        },
        "email": {
          "type": "string",
          "description": "the customer's e-mail"
        },
        "signup": {
          "type": "boolean",
          "description": "whther newsletters are desired"
        },
        "preferredLanguage": {
          "type": "string",
          "description": "the preferred interface language"
        },
        "twoFactor": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "annex": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "subscribedEmails": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "group": {
          "type": "string"
        },
        "kycLevelRequested": {
          "type": "string"
        }
      }
    },
    "body_23": {
      "type": "object",
      "required": ["amount", "currency"],
      "properties": {
        "amount": {
          "type": "number",
          "format": "float"
        },
        "currency": {
          "type": "string"
        }
      }
    },
    "body_24": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "description": "the support request"
        }
      }
    },
    "body_25": {
      "type": "object",
      "required": ["currency", "pagenumber", "pagesize"],
      "properties": {
        "currency": {
          "type": "string",
          "description": "the currency of the transaction list"
        },
        "type": {
          "type": "integer",
          "description": "possible value are 0-credit, 1-debit, defaults to all"
        },
        "fromDate": {
          "type": "integer",
          "description": "earliest transaction time as a JavaScript timestamp"
        },
        "toDate": {
          "type": "integer",
          "description": "latest transaction time as a JavaScript timestamp"
        },
        "sortBy": {
          "type": "string",
          "description": "the sort column"
        },
        "sortDirection": {
          "type": "string",
          "description": "the sort column"
        },
        "pagesize": {
          "type": "integer"
        },
        "pagenumber": {
          "type": "integer"
        }
      }
    },
    "body_26": {
      "type": "object",
      "properties": {
        "currency": {
          "type": "string",
          "description": "the currency to send"
        },
        "amount": {
          "type": "number",
          "description": "the amount to send"
        },
        "transferDetails": {
          "type": "array",
          "description": "simple key/value object of additional details",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "body_27": {
      "type": "object",
      "properties": {
        "bankAccountId": {
          "type": "integer",
          "description": "id of the account where the deposit will happen, the account must belong to the authenticated customer"
        },
        "currency": {
          "type": "string",
          "description": "currency of the deposit"
        },
        "amount": {
          "type": "number",
          "description": "amount of the deposit"
        },
        "referenceCode": {
          "type": "string",
          "description": "reference code for the deposite, it must be unique"
        }
      }
    },
    "authResult_morphInto": {
      "properties": {
        "name": {
          "type": "string",
          "description": "Username of the morph target"
        },
        "email": {
          "type": "string",
          "description": "E-mail address of the morph target"
        },
        "token": {
          "type": "string",
          "description": "Token to use when morphing into this user"
        }
      }
    },
    "authResult_results": {
      "properties": {
        "lastLogin": {
          "type": "integer",
          "description": "JavaScript time or string 'never'for first login"
        },
        "nick": {
          "type": "string",
          "description": "The nickname that was previously set for this account"
        },
        "preferredLanguage": {
          "type": "string",
          "description": "2-char identifier for language set for this account"
        },
        "roles": {
          "type": "array",
          "description": "Roles owned by this account",
          "items": {
            "type": "string"
          }
        },
        "morphInto": {
          "type": "array",
          "description": "A list of possible users which this user may morph into",
          "items": {
            "$ref": "#/definitions/authResult_morphInto"
          }
        }
      }
    },
    "bestofferResult_bid": {
      "properties": {
        "elem1": {
          "type": "number",
          "description": "the first element of this array is the quote"
        },
        "elem2": {
          "type": "number",
          "description": "the second element of this array is the volume"
        }
      },
      "description": "This is array"
    },
    "bestofferResult_results": {
      "properties": {
        "bid": {
          "type": "array",
          "description": "an array of quote/volume pairs",
          "items": {
            "$ref": "#/definitions/bestofferResult_bid"
          }
        },
        "ask": {
          "type": "array",
          "description": "an array of quote/volume pairs",
          "items": {
            "$ref": "#/definitions/bestofferResult_bid"
          }
        },
        "lastQuote": {
          "type": "number",
          "format": "float"
        },
        "rate24h": {
          "type": "number",
          "format": "float"
        }
      }
    },
    "chartsResult_results": {
      "properties": {
        "name": {
          "type": "string",
          "description": "chart category name"
        },
        "market": {
          "type": "string",
          "description": "market ident"
        }
      },
      "description": "this is array"
    },
    "chartResult_data": {
      "properties": {
        "timestamp": {
          "type": "integer"
        },
        "average": {
          "type": "number"
        },
        "volume": {
          "type": "number"
        },
        "open": {
          "type": "number"
        },
        "high": {
          "type": "number"
        },
        "low": {
          "type": "number"
        },
        "close": {
          "type": "number"
        }
      }
    },
    "chartResult_charts": {
      "properties": {
        "ident": {
          "type": "string",
          "description": "the client can identify the chart and add a translation based on the ident"
        },
        "name": {
          "type": "string",
          "description": "the name of this chart to display on the client if the client doesn't have a translation for the ident"
        },
        "data": {
          "type": "array",
          "description": "the data of this chart",
          "items": {
            "$ref": "#/definitions/chartResult_data"
          }
        },
        "color": {
          "type": "string",
          "description": "the color to display this chart on the client (HTML color code"
        }
      },
      "description": "This is array"
    },
    "chartResult_results": {
      "properties": {
        "charts": {
          "type": "array",
          "description": "an array of quote/volume pairs",
          "items": {
            "$ref": "#/definitions/chartResult_charts"
          }
        },
        "chunked": {
          "type": "boolean",
          "description": "whether the server has more chart entries to offer and the client should send another request"
        }
      }
    },
    "checkTransferResult_results": {
      "properties": {
        "received": {
          "type": "boolean",
          "description": "Whether the price was received"
        },
        "retry": {
          "type": "boolean",
          "description": "Whether to retry this request"
        }
      },
      "description": "this is array"
    },
    "lastTradesConvertedResult_results": {
      "properties": {
        "time": {
          "type": "integer",
          "description": "the execution time as a JavaScript timestamp"
        },
        "type": {
          "type": "integer",
          "description": "possible value are 1-buy, 2-sell"
        },
        "rate": {
          "type": "number",
          "format": "double",
          "description": "the rate of this execution (nominalCurrency/limitCurrency)"
        },
        "nominal": {
          "type": "number",
          "format": "double",
          "description": "the nominal of this execution in nominalCurrency"
        },
        "price": {
          "type": "number",
          "format": "double",
          "description": "the price of this execution in limitCurrency"
        }
      },
      "description": "this is array"
    },
    "prepareTransferResult_results": {
      "properties": {
        "address": {
          "type": "string",
          "description": "the cryptocoin target address"
        },
        "amount": {
          "type": "number",
          "format": "double",
          "description": "the cryptocoin amount to pay"
        },
        "currency": {
          "type": "string",
          "description": "the cryptocoin currency of the amount to pay"
        },
        "validity": {
          "type": "integer",
          "description": "the validity of the transfer in milliseconds"
        }
      },
      "description": "this is array"
    },
    "rankingResult_results": {
      "properties": {
        "position": {
          "type": "integer",
          "description": "ranking position of this customer"
        },
        "nick": {
          "type": "string",
          "description": "nick of this customer"
        },
        "score": {
          "type": "integer",
          "description": " rounded score of this customer"
        },
        "realScore": {
          "type": "number",
          "format": "float",
          "description": " exact score of this customer"
        },
        "achievements": {
          "type": "string",
          "description": "achievements of this customer"
        }
      },
      "description": "this is array"
    },
    "termsResult_results": {
      "properties": {
        "id": {
          "type": "string",
          "description": "term id"
        },
        "content": {
          "type": "string",
          "description": "content of the term"
        }
      },
      "description": "this is array"
    },
    "balanceResult_results": {
      "properties": {
        "currency": {
          "type": "string",
          "description": "the currency of this account"
        },
        "balance": {
          "type": "number",
          "format": "double",
          "description": "the balance of this account"
        },
        "inEUR": {
          "type": "number",
          "format": "double",
          "description": "the EUR equivalent of this account (for BTC accounts)"
        },
        "inBTC": {
          "type": "number",
          "format": "double",
          "description": "tthe BTC equivalent of this account (for EUR accounts)"
        },
        "receiveAddress": {
          "type": "string",
          "description": "the current address to receive funds for this account, if available"
        }
      },
      "description": "results from this object"
    },
    "buyResult_results": {
      "properties": {
        "ordernumber": {
          "type": "integer"
        }
      },
      "example": {
        "ordernumber": 0
      }
    },
    "checkNicknameResult_results": {
      "properties": {
        "available": {
          "type": "boolean",
          "description": "availability of the user name"
        }
      },
      "description": "this is array"
    },
    "dbxConfirmInteracResults_results": {
      "properties": {
        "transactionConfirmed": {
          "type": "integer",
          "description": "Invoice of the confirmed Interac transaction"
        },
        "amountOfCAD": {
          "type": "integer",
          "description": "Amount of the confirmed Interac transaction"
        }
      },
      "description": "this is array"
    },
    "dbxNewAddressResults_results": {
      "properties": {
        "newAddress": {
          "type": "string",
          "description": "4stop recommendations"
        }
      },
      "description": "this is array"
    },
    "dbxSettingsResults_results": {
      "properties": {
        "recommendation": {
          "type": "string",
          "description": "4stop recommendations"
        },
        "fourStopScore": {
          "type": "integer",
          "description": "4Stop score. 0 is the highest"
        },
        "upperThreshhold": {
          "type": "integer",
          "description": "This treshhold is set to automatically reject the user kyc request"
        },
        "lowerThreshhold": {
          "type": "integer",
          "description": "This treshhold is set to approve reject the user kyc request"
        },
        "kyc": {
          "type": "boolean",
          "description": "This is indicating whether the automatic kyc actions was taken"
        },
        "rulesTriggered": {
          "type": "array",
          "description": "Special rules triggered by 4Stop on the user profile data",
          "items": {
            "type": "string"
          }
        }
      },
      "description": "this is array"
    },
    "dbxStartInteracResults_results": {
      "properties": {
        "interacURL": {
          "type": "string",
          "description": "Interac redirect url"
        },
        "SecureId": {
          "type": "string"
        },
        "SecureTYPE": {
          "type": "string"
        }
      },
      "description": "this is array"
    },
    "fnbAddDescrResponse_infos": {
      "properties": {
        "DESCRIPTION_SET": {
          "type": "array",
          "items": {
            "type": "integer"
          }
        }
      }
    },
    "fnbAddressResults_results": {
      "properties": {
        "address": {
          "type": "string",
          "description": "Wallet address"
        },
        "frequency": {
          "type": "integer",
          "description": "frequency of address"
        }
      },
      "description": "this is array"
    },
    "fnbBalanceResult_results_balances": {
      "properties": {
        "currency": {
          "type": "string",
          "description": "the currency of this account"
        },
        "balance": {
          "type": "number",
          "format": "double",
          "description": "the balance of this account"
        },
        "fiat": {
          "type": "boolean"
        },
        "depositText": {
          "type": "string"
        }
      }
    },
    "fnbBalanceResult_results": {
      "properties": {
        "balances": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/fnbBalanceResult_results_balances"
          }
        },
        "sendMassFundsAllowed": {
          "type": "boolean"
        }
      },
      "description": "results from this object"
    },
    "fnbGenerateFileResult_results": {
      "properties": {
        "head": {
          "type": "string"
        },
        "columns": {
          "type": "string"
        },
        "rows": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "description": "this is array"
    },
    "transactionsResult_results": {
      "properties": {
        "transactions": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "transactioncount": {
          "type": "integer"
        },
        "unprocessedTransactions": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "description": "this is array"
    },
    "confResult_currencies": {
      "properties": {
        "id": {
          "type": "string",
          "description": "id of currency"
        },
        "name": {
          "type": "string",
          "description": "name of currency"
        },
        "type": {
          "type": "integer",
          "description": "The currency type. 1 for Fiat, 2 for Crypto."
        },
        "fiat": {
          "type": "boolean",
          "description": "Deprecated. Use type instead. Is this a fiat currency (or a crypto-currency)?"
        },
        "minimum_withdrawal": {
          "type": "number",
          "description": "The minimum withdrawal"
        },
        "num_decimals": {
          "type": "integer",
          "description": "Number of decimal digits for this currency"
        },
        "network_fee": {
          "type": "integer",
          "description": "Amount of usual network fee for this currency (crypto-only)"
        },
        "confirmations": {
          "type": "integer",
          "description": "Number of confirmations this crypto-currency requires"
        }
      },
      "example": {
        "minimum_withdrawal": 6.02745618307040320615897144307382404804229736328125,
        "num_decimals": 1,
        "name": "name",
        "fiat": true,
        "id": "id",
        "type": 0,
        "network_fee": 5,
        "confirmations": 5
      }
    },
    "confResult_markets": {
      "properties": {
        "nominalCurrency": {
          "type": "string",
          "description": "currency of the nominal"
        },
        "limitCurrency": {
          "type": "string",
          "description": "counter currency for limited and unlimited orders"
        },
        "makerFeeNominal": {
          "type": "integer",
          "description": "nominal currency fee for order that is not matching with other orders"
        },
        "takerFeeNominal": {
          "type": "integer",
          "description": "nominal currency fee for order that is matching with another order"
        },
        "makerFeeLimit": {
          "type": "integer",
          "description": "limit currency fee for order that is not matching with other orders"
        },
        "takerFeeLimit": {
          "type": "integer",
          "description": "limit currency fee for order that is matching with another order"
        },
        "buyFeeLimit": {
          "type": "integer",
          "description": "description"
        },
        "sellFeeLimit": {
          "type": "integer",
          "description": "description"
        },
        "buyFeeNominal": {
          "type": "integer",
          "description": "description"
        },
        "sellFeeNominal": {
          "type": "integer",
          "description": "description"
        },
        "lastQuote": {
          "type": "number",
          "description": "quote for each market"
        }
      },
      "example": {
        "takerFeeNominal": 7,
        "buyFeeNominal": 7,
        "sellFeeLimit": 4,
        "sellFeeNominal": 1,
        "limitCurrency": "limitCurrency",
        "takerFeeLimit": 3,
        "nominalCurrency": "nominalCurrency",
        "buyFeeLimit": 2,
        "makerFeeLimit": 9,
        "lastQuote": 1.024645700144157789424070870154537260532379150390625,
        "makerFeeNominal": 2
      }
    },
    "confResult_languages": {
      "properties": {
        "id": {
          "type": "string",
          "description": "language short-code"
        },
        "name": {
          "type": "string",
          "description": "name of the language"
        }
      },
      "example": {
        "name": "name",
        "id": "id"
      }
    },
    "createBankAccountResponse_results": {
      "properties": {
        "id": {
          "type": "integer",
          "description": "id of created bank account entry"
        }
      },
      "example": {
        "id": 0
      }
    },
    "createDepositResponse_results": {
      "properties": {
        "id": {
          "type": "integer",
          "description": "id of created deposit request on an account"
        }
      },
      "example": {
        "id": 0
      }
    },
    "listBankAccountsResult_bankaccounts": {
      "properties": {
        "id": {
          "type": "integer"
        },
        "bankName": {
          "type": "string"
        },
        "ownerName": {
          "type": "string"
        },
        "accountNumber": {
          "type": "integer"
        }
      }
    },
    "listDepositResult_depositrequests": {
      "properties": {
        "id": {
          "type": "integer"
        },
        "bankAccountId": {
          "type": "integer"
        },
        "currency": {
          "type": "string"
        },
        "amount": {
          "type": "integer"
        },
        "referenceCode": {
          "type": "string"
        },
        "time": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "state": {
          "type": "string"
        }
      }
    },
    "ordersResponse_results": {
      "properties": {
        "orders": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "ordercount": {
          "type": "integer"
        }
      },
      "example": {
        "orders": ["orders", "orders"],
        "ordercount": 0
      }
    },
    "supportResult_inner": {
      "properties": {
        "message": {
          "type": "string"
        },
        "date": {
          "type": "integer"
        },
        "type": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      }
    },
    "settingsResponse_annex": {
      "properties": {
        "feePercentage": {
          "type": "string"
        },
        "merchantId": {
          "type": "string"
        },
        "riskOption": {
          "type": "string"
        }
      },
      "example": {
        "riskOption": "riskOption",
        "feePercentage": "feePercentage",
        "merchantId": "merchantId"
      }
    },
    "settingsResponse_kycState_totalLimits": {
      "properties": {
        "type": {
          "type": "string"
        },
        "curType": {
          "type": "string"
        },
        "time": {
          "type": "integer"
        },
        "period": {
          "type": "string"
        },
        "value": {
          "type": "integer"
        },
        "currency": {
          "type": "string"
        },
        "balance": {
          "type": "string"
        }
      },
      "example": {
        "period": "period",
        "curType": "curType",
        "balance": "balance",
        "currency": "currency",
        "time": 5,
        "type": "type",
        "value": 5
      }
    },
    "settingsResponse_kycState_definedLevels": {
      "properties": {
        "level": {
          "type": "integer"
        },
        "description": {
          "type": "string"
        },
        "totalLimits": {
          "$ref": "#/definitions/settingsResponse_kycState_totalLimits"
        },
        "userLimits": {
          "$ref": "#/definitions/settingsResponse_kycState_totalLimits"
        },
        "currencyLimits": {
          "$ref": "#/definitions/settingsResponse_kycState_totalLimits"
        }
      },
      "example": {
        "level": 1,
        "totalLimits": {
          "period": "period",
          "curType": "curType",
          "balance": "balance",
          "currency": "currency",
          "time": 5,
          "type": "type",
          "value": 5
        },
        "userLimits": {
          "period": "period",
          "curType": "curType",
          "balance": "balance",
          "currency": "currency",
          "time": 5,
          "type": "type",
          "value": 5
        },
        "currencyLimits": {
          "period": "period",
          "curType": "curType",
          "balance": "balance",
          "currency": "currency",
          "time": 5,
          "type": "type",
          "value": 5
        },
        "description": "description"
      }
    },
    "settingsResponse_kycState": {
      "properties": {
        "currentLevel": {
          "type": "integer"
        },
        "kycLevelState": {
          "type": "string"
        },
        "definedLevels": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/settingsResponse_kycState_definedLevels"
          }
        }
      },
      "example": {
        "currentLevel": 6,
        "kycLevelState": "kycLevelState",
        "definedLevels": [{
          "level": 1,
          "totalLimits": {
            "period": "period",
            "curType": "curType",
            "balance": "balance",
            "currency": "currency",
            "time": 5,
            "type": "type",
            "value": 5
          },
          "userLimits": {
            "period": "period",
            "curType": "curType",
            "balance": "balance",
            "currency": "currency",
            "time": 5,
            "type": "type",
            "value": 5
          },
          "currencyLimits": {
            "period": "period",
            "curType": "curType",
            "balance": "balance",
            "currency": "currency",
            "time": 5,
            "type": "type",
            "value": 5
          },
          "description": "description"
        }, {
          "level": 1,
          "totalLimits": {
            "period": "period",
            "curType": "curType",
            "balance": "balance",
            "currency": "currency",
            "time": 5,
            "type": "type",
            "value": 5
          },
          "userLimits": {
            "period": "period",
            "curType": "curType",
            "balance": "balance",
            "currency": "currency",
            "time": 5,
            "type": "type",
            "value": 5
          },
          "currencyLimits": {
            "period": "period",
            "curType": "curType",
            "balance": "balance",
            "currency": "currency",
            "time": 5,
            "type": "type",
            "value": 5
          },
          "description": "description"
        }]
      }
    },
    "settingsResponse_paymentProcessor": {
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "deposit": {
          "type": "boolean"
        },
        "withdrawals": {
          "type": "boolean"
        },
        "licensed": {
          "type": "boolean"
        },
        "activated": {
          "type": "boolean"
        },
        "environment": {
          "type": "string"
        },
        "settings": {
          "type": "array",
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "example": {
        "settings": [
          ["{}", "{}"],
          ["{}", "{}"]
        ],
        "environment": "environment",
        "licensed": true,
        "name": "name",
        "description": "description",
        "deposit": true,
        "withdrawals": true,
        "activated": true
      }
    },
    "settingsResponse_results": {
      "properties": {
        "uploadedFiles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "nick": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "signup": {
          "type": "boolean"
        },
        "preferredLanguage": {
          "type": "string"
        },
        "hasGoogleAuth": {
          "type": "boolean"
        },
        "kyc": {
          "type": "integer"
        },
        "annex": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/settingsResponse_annex"
          }
        },
        "otc": {
          "type": "boolean"
        },
        "depositToken": {
          "type": "string"
        },
        "subscribedEmails": {
          "type": "array",
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "ident": {
                  "type": "string"
                },
                "subscribed": {
                  "type": "boolean"
                }
              }
            }
          }
        },
        "kycState": {
          "$ref": "#/definitions/settingsResponse_kycState"
        },
        "paymentProcessor": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/settingsResponse_paymentProcessor"
          }
        }
      },
      "example": {
        "uploadedFiles": ["uploadedFiles", "uploadedFiles"],
        "preferredLanguage": "preferredLanguage",
        "paymentProcessor": [{
          "settings": [
            ["{}", "{}"],
            ["{}", "{}"]
          ],
          "environment": "environment",
          "licensed": true,
          "name": "name",
          "description": "description",
          "deposit": true,
          "withdrawals": true,
          "activated": true
        }, {
          "settings": [
            ["{}", "{}"],
            ["{}", "{}"]
          ],
          "environment": "environment",
          "licensed": true,
          "name": "name",
          "description": "description",
          "deposit": true,
          "withdrawals": true,
          "activated": true
        }],
        "signup": true,
        "subscribedEmails": [
          ["{}", "{}"],
          ["{}", "{}"]
        ],
        "nick": "nick",
        "depositToken": "depositToken",
        "hasGoogleAuth": true,
        "kyc": 0,
        "kycState": {
          "currentLevel": 6,
          "kycLevelState": "kycLevelState",
          "definedLevels": [{
            "level": 1,
            "totalLimits": {
              "period": "period",
              "curType": "curType",
              "balance": "balance",
              "currency": "currency",
              "time": 5,
              "type": "type",
              "value": 5
            },
            "userLimits": {
              "period": "period",
              "curType": "curType",
              "balance": "balance",
              "currency": "currency",
              "time": 5,
              "type": "type",
              "value": 5
            },
            "currencyLimits": {
              "period": "period",
              "curType": "curType",
              "balance": "balance",
              "currency": "currency",
              "time": 5,
              "type": "type",
              "value": 5
            },
            "description": "description"
          }, {
            "level": 1,
            "totalLimits": {
              "period": "period",
              "curType": "curType",
              "balance": "balance",
              "currency": "currency",
              "time": 5,
              "type": "type",
              "value": 5
            },
            "userLimits": {
              "period": "period",
              "curType": "curType",
              "balance": "balance",
              "currency": "currency",
              "time": 5,
              "type": "type",
              "value": 5
            },
            "currencyLimits": {
              "period": "period",
              "curType": "curType",
              "balance": "balance",
              "currency": "currency",
              "time": 5,
              "type": "type",
              "value": 5
            },
            "description": "description"
          }]
        },
        "email": "email",
        "annex": [{
          "riskOption": "riskOption",
          "feePercentage": "feePercentage",
          "merchantId": "merchantId"
        }, {
          "riskOption": "riskOption",
          "feePercentage": "feePercentage",
          "merchantId": "merchantId"
        }],
        "otc": true
      }
    },
    "rankingResponse_position": {
      "properties": {
        "position": {
          "type": "integer"
        },
        "nick": {
          "type": "string"
        },
        "score": {
          "type": "integer"
        },
        "realscore": {
          "type": "number",
          "format": "float"
        },
        "achievements": {
          "type": "string"
        },
        "yourposition": {
          "type": "boolean"
        }
      },
      "example": {
        "nick": "nick",
        "score": 6,
        "yourposition": true,
        "achievements": "achievements",
        "position": 0,
        "realscore": 1.4658129
      }
    },
    "rankingResponse_results": {
      "properties": {
        "players": {
          "type": "string"
        },
        "position": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/rankingResponse_position"
          }
        }
      },
      "example": {
        "players": "players",
        "position": [{
          "nick": "nick",
          "score": 6,
          "yourposition": true,
          "achievements": "achievements",
          "position": 0,
          "realscore": 1.4658129
        }, {
          "nick": "nick",
          "score": 6,
          "yourposition": true,
          "achievements": "achievements",
          "position": 0,
          "realscore": 1.4658129
        }]
      }
    },
    "startPaypalResponse_results": {
      "properties": {
        "approvalUrl": {
          "type": "string"
        }
      },
      "example": {
        "approvalUrl": "approvalUrl"
      }
    },
    "pxCreateDepositRequestResult_results": {
      "properties": {
        "id": {
          "type": "string",
          "description": "id deposit request"
        }
      },
      "description": "this is array"
    }
  }
}
