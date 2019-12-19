module.exports = {
    root: true,
    extends: '@react-native-community',
    "env": {
      "es6": true,
      "node": true
  },
  "extends": [
      "airbnb",
      "eslint:recommended",
      "prettier",
      "prettier/flowtype",
      "prettier/react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "react-native",
      "jsx-a11y",
      "flowtype",
      "prettier"
  ],
  "settings": {
      "createClass": "createClass",
      "pragma": "React",
      "flowtype": {
          "onlyFilesWithFlowAnnotation": false
      }
  },
  "rules": {
      "global-require": "off",
      "linebreak-style": [
          "off",
          "unix"
      ],
      "strict": 0,
      "no-console": "off",
      "no-undef": "off",
      "no-underscore-dangle": 0,
      "no-use-before-define": 0,
      "no-unused-expressions": 0,
      "new-cap": 0,
      "no-plusplus": 0,
      "no-class-assign": 0,
      "no-duplicate-imports": 0,
      "import/first": "off",
      "import/order": "off",
      "import/extensions": 0,
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": 0,
      "import/no-unresolved": 0,
      "import/newline-after-import": "off",
      "no-multi-spaces": "warn",
      "prettier/prettier": [
          "error",
          {
              "arrowParens": "avoid",
              "trailingComma": "none",
              "singleQuote": true
          }
      ],
      "semi": [
          "error",
          "always"
      ],
      "react/sort-comp": [
          1,
          {
              "order": [
                  "static-methods",
                  "lifecycle",
                  "everything-else",
                  "rendering"
              ],
              "groups": {
                  "rendering": [
                      "/^render.+$/",
                      "render"
                  ]
              }
          }
      ],
      "react/prefer-stateless-function": 0,
      "react/forbid-prop-types": 0,
      "react/prop-types": 0,
      "react/require-default-props": 0,
      "react/no-unused-prop-types": 0,
      "react/jsx-uses-var": "off",
      "react/prefer-es6-class": "warn",
      "react/jsx-pascal-case": [
          "warn",
          {
              "allowAllCaps": true
          }
      ],
      "react/no-multi-comp": "off",
      "react/self-closing-comp": "error",
      "react/jsx-closing-bracket-location": "off",
      "react/require-render-return": "error",
      "react/jsx-no-bind": [
          "warn",
          {
              "ignoreRefs": true,
              "allowArrowFunctions": true
          }
      ],
      "react/no-is-mounted": "error",
      "react/jsx-tag-spacing": "error",
      "react/jsx-curly-brace-presence": "off",
      "react/jsx-filename-extension": [
          0,
          {
              "extensions": [
                  ".js",
                  ".jsx"
              ]
          }
      ],
      "react-native/no-unused-styles": 2,
      "react-native/split-platform-components": 0,
      "import/no-cycle": 0
  }
  };
  