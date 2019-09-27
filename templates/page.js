module.exports = pageName => `
extends ../../layouts/default

block head
  - var pageTitle = Amethyst + ' | ${pageName}'

block content
  p Страница: ${pageName}
`;
