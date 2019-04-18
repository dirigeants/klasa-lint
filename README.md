# klasa-lint
Central shareable eslint config for all klasa repos. This is inteded for private use, but you can use it via:

```bash
npm i --save-dev dirigeants/klasa-lint
```

## standard eslint rules
```json
{
	"extends": "klasa"
}
```
requires:
* eslint

## markdown codeblock eslint rules
```json
{
	"extends": "klasa/md"
}
```
requires:
* eslint
* eslint-plugin-markdown

## eslint-typescript rules
```json
{
	"extends": "klasa/eslint-ts"
}
```
requires:
* eslint
* @typescript-eslint/parser
* @typescript-eslint/eslint-plugin

## tslint rules
```json
{
	"extends": "eslint-config-klasa/ts"
}
```
requires:
* tslint

## eslint vue rules
```json
{
	"extends": "klasa/vue"
}
```
requires:
* eslint
* eslint-plugin-vue
