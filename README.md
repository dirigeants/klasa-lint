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

## markdown codeblock eslint rules
```json
{
	"extends": "klasa/md"
}
```

## tslint rules
```json
{
	"extends": "eslint-config-klasa/ts"
}
```

## eslint vue rules
```json
{
	"extends": "klasa/vue"
}
```
