# Exchange API testing

Testing latency and load on the OpenAPI created exchange API using NodeJS.

## Summary

This repo provides tools for testing the [exchange](https://omiex-test.draglet.com/api#/) api which is created using OpenAPI. 

## Swagger

OpenAPI Specification (formerly [Swagger](https://swagger.io/docs/specification/about/) Specification) is an API description format for REST APIs, which are provided on draglet's platform. There is a swagger json file in the api documentation available at the Kapytal development endpoint. 

## Dredd

Dredd is a command line tool, which will run tests of an endpoint against a description file in yaml format. JSON is a subset of YAML. 

### Hooks

In addition to covering expected response objects and endpoints in swagger, we also want to test latency and load response times on the development server.

This needs a `hooks.js` file to prepare before and after functions for endpoint testing.

In addition, hooks is neded because there are `tokens` and other objects that some of the rest endpoints need to return expected output. 

## Example


```
json2yaml swagger-doc.js > swagger-doc.yml     
```
