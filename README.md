## Usage

1. Install node modules, run
   `yarn`

2. Build extension, run
   `yarn dev`

3. Install the extension on Google Chrome

## Edit partners

Partner database file is located in src > database > partners.js

You can edit this file to add or remove partners.

## Config

 You should mention the JavaScript files that you want to be in the extension as following in **webpack.config.js**
```
  entry: {
    popup: "./src/popup.jsx",
    content: "./src/content.jsx",
    background: "./src/background.jsx",
  },
```

