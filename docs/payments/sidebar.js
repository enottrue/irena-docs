const fs = require('fs');
const path = require('path');

// Получаем все .md файлы из текущей директории
const files = fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.md'))
  .map(file => file.replace('.md', ''));

// Создаем массив элементов для сайдбара
module.exports = files.map(file => `payments/${file}`); 