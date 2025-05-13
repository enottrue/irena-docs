# Аналитика

В этом документе описаны все цели и события, которые передаются в системы аналитики (Google Analytics 4 и Яндекс.Метрика).

## Google Analytics 4 (GA4)

### События на главной странице

#### Посещение главной страницы
```javascript
gtag('event', 'page_view', {
    'page_title': 'Irena Ivanova - Personal Astrology Readings',
    'page_location': window.location.href,
    'page_path': window.location.pathname
});
```

### События на страницах товаров

#### Просмотр товара (view_item)
```javascript
gtag('event', 'view_item', {
    'items': [{
        'item_id': '1730', // ID товара в CRM
        'item_name': 'ASTROLOGY READING',
        'price': '100'
    }],
    'value': 100,
    'currency': 'USD'
});
```

#### Начало оформления (begin_checkout)
```javascript
gtag('event', 'begin_checkout', {
    'items': [{
        'item_id': '1730', // ID товара в CRM
        'item_name': 'ASTROLOGY READING',
        'price': '100'
    }],
    'value': 100,
    'currency': 'USD'
});
```

### События форм

#### ASTROLOGY READING (ask1)
- `form_step1_complete_ask1` - отправляется при успешном заполнении первого шага формы
- `form_step2_complete_ask1` - отправляется при успешном заполнении второго шага формы

#### LOVE ASTROLOGY READING (ask2)
- `form_step1_complete_ask2` - отправляется при успешном заполнении первого шага формы
- `form_step2_complete_ask2` - отправляется при успешном заполнении второго шага формы

#### BIRTH CHART READING (ask3)
- `form_step1_complete_ask3` - отправляется при успешном заполнении первого шага формы
- `form_step2_complete_ask3` - отправляется при успешном заполнении второго шага формы

### События перехода на оплату

#### ASTROLOGY READING
```javascript
gtag('event', 'payment_link_clicked', {
    'items': [{
        'item_id': '1730', // ID товара в CRM
        'item_name': 'ASTROLOGY READING',
        'price': '100'
    }],
    'value': 100,
    'currency': 'USD'
});
```

#### LOVE ASTROLOGY READING
```javascript
gtag('event', 'payment_link_clicked', {
    'items': [{
        'item_id': '1732', // ID товара в CRM
        'item_name': 'LOVE ASTROLOGY READING',
        'price': '100'
    }],
    'value': 100,
    'currency': 'USD'
});
```

#### BIRTH CHART READING
```javascript
gtag('event', 'payment_link_clicked', {
    'items': [{
        'item_id': '1733', // ID товара в CRM
        'item_name': 'BIRTH CHART READING',
        'price': '100'
    }],
    'value': 100,
    'currency': 'USD'
});
```

### События от сервера (Node.js)

Следующие события отправляются из Node.js после получения уведомлений от платежной системы Stripe:

#### Успешная оплата
```javascript
// Отправляется при получении статуса 'paid' от Stripe
{
    t: 'event',
    ec: 'ecommerce',
    ea: 'payment_complete',
    ev: amount, // Сумма в долларах/евро
    items: [{
        item_id: session.metadata.item_id,
        item_name: session.metadata.item_name,
        price: amount
    }],
    value: amount,
    currency: currency
}
```

#### Ошибка оплаты
```javascript
// Отправляется при получении статуса 'unpaid' или 'failed' от Stripe
{
    t: 'event',
    ec: 'ecommerce',
    ea: 'payment_failed',
    ev: amount,
    items: [{
        item_id: session.metadata.item_id,
        item_name: session.metadata.item_name,
        price: amount
    }],
    value: amount,
    currency: currency
}
```

#### Истекшая сессия оплаты
```javascript
// Отправляется при получении события 'checkout.session.expired' от Stripe
{
    t: 'event',
    ec: 'ecommerce',
    ea: 'payment_failed_session_expired',
    ev: amount,
    items: [{
        item_id: session.metadata.item_id,
        item_name: session.metadata.item_name,
        price: amount
    }],
    value: amount,
    currency: currency
}
```

## Яндекс.Метрика

### Цели просмотра страниц
- `view_home` - просмотр главной страницы
- `view_ask1` - просмотр страницы ASTROLOGY READING
- `view_ask2` - просмотр страницы LOVE ASTROLOGY READING
- `view_ask3` - просмотр страницы BIRTH CHART READING
- `view_payment_success` - просмотр страницы успешной оплаты
- `view_payment_failed` - просмотр страницы ошибки оплаты


### Цели на главной странице
- `select_ask1` - отправляется при клике на "Learn More" для ASTROLOGY READING
- `select_ask2` - отправляется при клике на "Learn More" для LOVE ASTROLOGY READING
- `select_ask3` - отправляется при клике на "Learn More" для BIRTH CHART READING

### Цели форм

#### ASTROLOGY READING (ask1)
- `form_step1_complete_ask1` - отправляется при успешном заполнении первого шага формы
- `form_step2_complete_ask1` - отправляется при успешном заполнении второго шага формы

#### LOVE ASTROLOGY READING (ask2)
- `form_step1_complete_ask2` - отправляется при успешном заполнении первого шага формы
- `form_step2_complete_ask2` - отправляется при успешном заполнении второго шага формы

#### BIRTH CHART READING (ask3)
- `form_step1_complete_ask3` - отправляется при успешном заполнении первого шага формы
- `form_step2_complete_ask3` - отправляется при успешном заполнении второго шага формы

## Дополнительная информация

### Client ID
При отправке формы на сервер, также передается `ga_client_id` из Google Analytics 4. Это позволяет связать данные формы с данными аналитики.

### UTM-метки
Все UTM-метки из URL автоматически добавляются в данные формы и передаются в системы аналитики:
- utm_source
- utm_medium
- utm_campaign
- utm_term
- utm_content

### ID товаров в CRM
В событиях аналитики используются следующие ID товаров:
- `1730` - ASTROLOGY READING
- `1732` - LOVE ASTROLOGY READING
- `1733` - BIRTH CHART READING

Эти ID соответствуют товарам в CRM-системе и используются для корректной идентификации товаров в аналитике. 