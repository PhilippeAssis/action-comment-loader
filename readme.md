# Action Comment loader
For webpack2
This is a loader for action comment, to know about the action comment, go on [link](https://github.com/PhilippeAssis/actionComment)

## Install
`npm i --save-dev action-comment-loader`

## Use
### Example
```js
//...
module: {
  rules: [
    { test: /\.(js|vue|stylus|pug)$/,
      loader: 'action-comment-loader',
      'options': {
        'handles': {
          alert(line, index){
            return `alert("${line} in line ${index}")`;
          }
        }
      }
    }
//...
```

### With acHandles.js
```js
//...
module: {
  rules: [
    { test: /\.(js|vue|stylus|pug)$/,
      loader: 'action-comment-loader',
      'options': {
        'handles': require("./acHandles.js")
        }
      }
    }
//...
```
