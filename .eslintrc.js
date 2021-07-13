module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  parser: "@typescript-eslint/parser",
  root: true,
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint"],
  extends: ["airbnb-typescript", "airbnb/hooks", "prettier"],
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase", "snake_case"], // 변수명에 적용할 rule
        leadingUnderscore: "allow", // underscore(_) 로 시작하는 변수명 허용
      },
    ],

    "@typescript-eslint/no-use-before-define": "warn", // 선언전에 사용시 경고
    "@typescript-eslint/no-shadow": "warn", // 상위 스코프에 동일 변수명이 있을경우 경고
    "@typescript-eslint/no-unused-vars": "warn", // 미사용 변수 경고
    "jsx-a11y/anchor-is-valid": "off", // anchor에서 link onClick 허용
    "jsx-a11y/click-events-have-key-events": "off", // div에서 keyEvent 의무 X
    "jsx-a11y/no-static-element-interactions": "off", // div에서 onClick 허용
    "react/jsx-closing-bracket-location": "off", // closing bracket 위치
    "react/jsx-one-expression-per-line": "off", // 한줄에 여러 tag 허용
    "react/no-danger": "off", // dangerouslySetInnerHTML 허용
    "react/no-array-index-key": "warn", // key로 index 사용시 경고
    "import/order": "off", // import 순서 확인 안함
    "import/no-cycle": "off",
    "no-unneeded-ternary": "warn", // 불필요한 삼항연산자 경고
    "no-empty": "off", // 빈 객체 허용
    "no-nested-ternary": "off", // 중첩 삼항연산자 허용
    "prefer-destructuring": "off", // destructuring 의무 X

    // tslint.json 에서 수동 mig
    "object-curly-spacing": ["error", "always"], // 객체내 공백 체크
    "strict-boolean-expressions": "off",

    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        exports: "always-multiline",
        functions: "only-multiline",
        imports: "always-multiline",
        objects: "always-multiline",
      },
    ],

    "react/require-default-props": "off", // defaultProps 의무 X
    "import/prefer-default-export": "off",
    "max-classes-per-file": "off",
    "class-methods-use-this": "off",
  },
};
