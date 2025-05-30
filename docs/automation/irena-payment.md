# Обновление платежной системы

## Описание изменений
Обновлена система обработки платежей для поддержки различных типов товаров и улучшения процесса оплаты через Stripe.

## Основные изменения

### 1. Поддержка различных типов товаров
Добавлена поддержка трех типов товаров через параметр `type` в URL:
- `type=a` - ASTROLOGY READING (100$, item_id: 1730)
- `type=l` - LOVE ASTROLOGY READING (100$, item_id: 1732)
- `type=b` - BIRTH CHART READING (150$, item_id: 1734)

### 2. Минимальные параметры URL
Для формирования платежной ссылки необходимы следующие параметры:
```
https://astro-irena.com/pay.html?name=Sergei&mail=test@test.com&idDeal=82829&Idinvoice=12067&type=a
```

Обязательные параметры:
- `name` - имя клиента
- `mail` - email клиента
- `idDeal` - ID сделки
- `idInvoice` - ID инвойса
- `type` - тип товара (a, l или b)

Необязательные параметры:
- `tel` - телефон клиента
- `env` - режим работы (DEVELOPMENT/PRODUCTION)

### 3. Режимы работы
Система поддерживает два режима работы:

#### Тестовый режим (Development)
Активируется при:
- Наличии параметра `env=DEVELOPMENT` в URL
- Работе на localhost
- Работе на 127.0.0.1

Использует тестовые ключи Stripe:


#### Продакшн режим (Production)
Активируется по умолчанию на боевом сервере.
Использует боевые ключи Stripe:


### 4. URL'ы для успешной и неуспешной оплаты
Для каждого типа товара определены свои URL'ы:

#### ASTROLOGY READING (type=a)
- Success: `/ask-1-success.html?payment_intent={CHECKOUT_SESSION_ID}&dealid={DEAL_ID}`
- Cancel: `/ask-1-1.html?dealid={DEAL_ID}`

#### LOVE ASTROLOGY READING (type=l)
- Success: `/ask-2-success.html?payment_intent={CHECKOUT_SESSION_ID}&dealid={DEAL_ID}`
- Cancel: `/ask-1-2.html?dealid={DEAL_ID}`

#### BIRTH CHART READING (type=b)
- Success: `/ask-3-success.html?payment_intent={CHECKOUT_SESSION_ID}&dealid={DEAL_ID}`
- Cancel: `/ask-1-3.html?dealid={DEAL_ID}`

### 5. Метаданные платежа
Для каждого платежа в Stripe сохраняются следующие метаданные:
- `invoice_id` - ID инвойса
- `deal_id` - ID сделки
- `product_name` - название товара
- `item_id` - ID товара в системе (1730, 1732 или 1734)

## Логирование
Добавлено логирование для отслеживания:
- Режима работы (Development/Production)
- Используемых ключей Stripe
- Входящих параметров
- Ошибок при обработке платежей

Логи сохраняются в:
- `php-errors.log` - для PHP ошибок
- Консоль браузера - для клиентской части

## Тестирование
Для тестирования можно использовать следующие URL'ы:

### Тестовый режим
```
https://astro-irena.com/pay.html?name=Sergei&mail=test@test.com&idDeal=82829&Idinvoice=12067&type=a&env=DEVELOPMENT
```

### Продакшн режим
```
https://astro-irena.com/pay.html?name=Sergei&mail=test@test.com&idDeal=82829&Idinvoice=12067&type=a
```

## Безопасность
- Отключена проверка SSL в тестовом режиме
- В продакшн режиме используется полная проверка SSL
- Все чувствительные данные логируются только в защищенные файлы
- Добавлена валидация обязательных полей 