module.exports = {
  root: true,
  extends: [
    '@antfu',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    // 元素/组件特性的顺序
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        // alphabetical: true, // 字母排序
      },
    ],
  },
}
