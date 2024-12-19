# Documentation

This is the languageservice microservice. Its purpose is to provide a translation for a given translation key and language.

## Settings

- Default port: `3000`

- Default name: `languageservice`

## Usage

**/**:

`GET / HTTP/1.1`

**/getSupportedLanguages**:

`GET /getSupportedLanguages HTTP/1.1`

**/translate**:

`POST /translate HTTP/1.1`

Content-Type: `application/json`

Body:

```
{
    "targetLanguageCode": <string>
    "translationKey": <string>
}
```
