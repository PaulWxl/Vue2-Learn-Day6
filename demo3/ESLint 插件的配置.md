.prettier配置文件 (已放到D盘的VSCcode目录中) ，还要放到=="C:\\Users\\Lenovo\\.prettierrc",==目录中，

```
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true,
  "arrowParens": "avoid",
  "printWidth": 300
}
```

Vscode 中 settings.json  中的配置：

```
"prettier.configPath": "C:\\Users\\Lenovo\\.prettierrc",





	// ESLint 插件的配置
	"editor.codeActionsOnSave": {
 	  "source.fixAll": true
	}
 	"eslint.alwaysShowStatus": true,
 
 	// prettier 插件的配置
    "prettier.trailingComma": "none",
    "prettier.semi": false,
    // 每行文字个数超出此限制将会被迫换行
    "prettier.printWidth": 300,
    // 使用单引号替换双引号
    "prettier.singleQuote": true,
    "prettier.arrowParens": "avoid",
  
  
    // vetur 插件的配置
    // 设置 .vue 文件中，HTML代码的格式化插件
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.ignoreProjectWarning": true,
    "vetur.format.defaultFormatterOptions": {
        "prettier": {
            "trailingComma": "none",
            "singleQuote": true,
            "semi": false,
            "arrowParens": "avoid",
            "printWidth": 300
        },
        "js-beautify-html": {
            "wrap_attributes": false
        },
    },
```
