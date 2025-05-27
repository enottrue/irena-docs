# Документация проекта

## Аналитика

### Google Analytics (GA4)

#### Цели просмотра страниц
- `page_view` - Базовое событие просмотра страницы
  ```javascript
  gtag('event', 'page_view', {
    'page_title': 'Irena Ivanova - Personal Astrology Readings',
    'page_location': window.location.href,
    'page_path': window.location.pathname,
    'value': 100,
    'currency': 'USD'
  });
  ```

#### Цели действий пользователя
- `view_item` - Просмотр товара
  ```javascript
  gtag('event', 'view_item', {
    'items': [{
      'item_id': 'PRODUCT_ID',
      'item_name': 'PRODUCT_NAME',
      'price': 'PRICE'
    }],
    'value': 100,
    'currency': 'USD'
  });
  ```

- `begin_checkout` - Начало оформления заказа
  ```javascript
  gtag('event', 'begin_checkout', {
    'items': [{
      'item_id': 'PRODUCT_ID',
      'item_name': 'PRODUCT_NAME',
      'price': 'PRICE'
    }],
    'value': 100,
    'currency': 'USD'
  });
  ```

- `purchase` - Успешная оплата
  ```javascript
  gtag('event', 'purchase', {
    'transaction_id': 'INVOICE_ID',
    'client_id': 'GA_CLIENT_ID',
    'value': 100,
    'currency': 'USD',
    'items': [{
      'item_id': 'PRODUCT_ID',
      'item_name': 'PRODUCT_NAME',
      'price': 'PRICE'
    }]
  });
  ```

- `form_step1_complete_ask1` - Заполнение первого шага формы Ask 1
  ```javascript
  gtag('event', 'form_step1_complete_ask1', {
    'value': 100,
    'currency': 'USD'
  });
  ```

- `form_step1_complete_ask2` - Заполнение первого шага формы Ask 2
  ```javascript
  gtag('event', 'form_step1_complete_ask2', {
    'value': 100,
    'currency': 'USD'
  });
  ```

- `form_step1_complete_ask3` - Заполнение первого шага формы Ask 3
  ```javascript
  gtag('event', 'form_step1_complete_ask3', {
    'value': 150,
    'currency': 'USD'
  });
  ```

- `submint_finish` - Успешная отправка формы
  ```javascript
  // Для Ask 1-1 (ASTROLOGY READING)
  gtag('event', 'submint_finish', {
    'items': [{
      'item_id': '1730',
      'item_name': 'ASTROLOGY READING',
      'price': '100'
    }],
    'value': 100,
    'currency': 'USD'
  });

  // Для Ask 1-2 (LOVE ASTROLOGY READING)
  gtag('event', 'submint_finish', {
    'items': [{
      'item_id': '1732',
      'item_name': 'LOVE ASTROLOGY READING',
      'price': '100'
    }],
    'value': 100,
    'currency': 'USD'
  });

  // Для Ask 1-3 (BIRTH CHART READING)
  gtag('event', 'submint_finish', {
    'items': [{
      'item_id': '1734',
      'item_name': 'BIRTH CHART READING',
      'price': '150'
    }],
    'value': 150,
    'currency': 'USD'
  });
  ```

### Яндекс.Метрика

#### Цели просмотра страниц
- `view_home` - Просмотр главной страницы
  ```javascript
  ym(100786060, 'reachGoal', 'view_home', {
    value: 100,
    currency: 'USD'
  });
  ```

- `view_ask1` - Просмотр страницы Ask 1-1
  ```javascript
  ym(100786060, 'reachGoal', 'view_ask1', {
    value: 100,
    currency: 'USD'
  });
  ```

- `view_ask2` - Просмотр страницы Ask 1-2
  ```javascript
  ym(100786060, 'reachGoal', 'view_ask2', {
    value: 100,
    currency: 'USD'
  });
  ```

- `view_ask3` - Просмотр страницы Ask 1-3
  ```javascript
  ym(100786060, 'reachGoal', 'view_ask3', {
    value: 150,
    currency: 'USD'
  });
  ```

- `view_success` - Просмотр страницы успешной отправки формы
  ```javascript
  ym(100786060, 'reachGoal', 'view_success', {
    value: 100,
    currency: 'USD'
  });
  ```

- `view_payment_success` - Просмотр страницы успешной оплаты
  ```javascript
  ym(100786060, 'reachGoal', 'view_payment_success', {
    value: 100,
    currency: 'USD'
  });
  ```

- `view_payment_failed` - Просмотр страницы неуспешной оплаты
  ```javascript
  ym(100786060, 'reachGoal', 'view_payment_failed', {
    value: 100,
    currency: 'USD'
  });
  ```

#### Цели действий пользователя
- `form_start` - Начало заполнения формы
  ```javascript
  ym(100786060, 'reachGoal', 'form_start', {
    value: 100,
    currency: 'USD'
  });
  ```

- `form_complete` - Завершение заполнения формы
  ```javascript
  ym(100786060, 'reachGoal', 'form_complete', {
    value: 100,
    currency: 'USD'
  });
  ```

- `payment_start` - Начало процесса оплаты
  ```javascript
  ym(100786060, 'reachGoal', 'payment_start', {
    value: 100,
    currency: 'USD'
  });
  ```

- `payment_complete` - Завершение процесса оплаты
  ```javascript
  ym(100786060, 'reachGoal', 'payment_complete', {
    value: 100,
    currency: 'USD'
  });
  ```

#### Цели выбора продукта
- `select_ask1` - Выбор продукта Ask 1-1
  ```javascript
  ym(100786060, 'reachGoal', 'select_ask1', {
    value: 100,
    currency: 'USD'
  });
  ```

- `select_ask2` - Выбор продукта Ask 1-2
  ```javascript
  ym(100786060, 'reachGoal', 'select_ask2', {
    value: 100,
    currency: 'USD'
  });
  ```

- `select_ask3` - Выбор продукта Ask 1-3
  ```javascript
  ym(100786060, 'reachGoal', 'select_ask3', {
    value: 150,
    currency: 'USD'
  });
  ```

#### Цели отправки формы
- `submint_finish` - Успешная отправка формы
  ```javascript
  // Для Ask 1-1 (ASTROLOGY READING)
  ym(100786060, 'reachGoal', 'submint_finish', {
    value: 100,
    currency: 'USD',
    items: [{
      item_id: '1730',
      item_name: 'ASTROLOGY READING',
      price: '100'
    }]
  });

  // Для Ask 1-2 (LOVE ASTROLOGY READING)
  ym(100786060, 'reachGoal', 'submint_finish', {
    value: 100,
    currency: 'USD',
    items: [{
      item_id: '1732',
      item_name: 'LOVE ASTROLOGY READING',
      price: '100'
    }]
  });

  // Для Ask 1-3 (BIRTH CHART READING)
  ym(100786060, 'reachGoal', 'submint_finish', {
    value: 150,
    currency: 'USD',
    items: [{
      item_id: '1734',
      item_name: 'BIRTH CHART READING',
      price: '150'
    }]
  });
  ```

## Продукты

### Ask 1-1 (ASTROLOGY READING)
- ID: 1730
- Цена: $100
- Формат: PDF
- Срок выполнения: 7-9 дней

### Ask 1-2 (LOVE ASTROLOGY READING)
- ID: 1732
- Цена: $100
- Формат: PDF
- Срок выполнения: 7-9 дней

### Ask 1-3 (BIRTH CHART READING)
- ID: 1734
- Цена: $150
- Формат: PDF
- Срок выполнения: 7-9 дней

## Техническая информация

### ID счетчиков аналитики
- Google Analytics: G-179S55ETXS
- Яндекс.Метрика: 100786060

### UTM-метки
Отслеживаются следующие UTM-метки:
- utm_source
- utm_medium
- utm_campaign
- utm_term
- utm_content

### Хранение данных
- Данные о платежах хранятся в localStorage и cookies
- Время хранения: 1 час (3600 секунд)
- Формат данных:
  ```javascript
  {
    client_id: 'GA_CLIENT_ID',
    items: [{
      item_id: 'PRODUCT_ID',
      item_name: 'PRODUCT_NAME',
      price: PRICE
    }],
    value: PRICE,
    currency: 'USD'
  }
  ```

## Контакты
- Email поддержки: support@astro-irena.com 