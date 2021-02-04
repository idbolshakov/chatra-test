# Chatra-test

## Задача

Сделать маленький сервис, который будет принимать несколько ссылок на аккаунты пользователей в Стиме и показывать их
общие мультиплеерные игры, чтобы несколько человек могли легко решить, во что поиграть вместе.

Придумайте простой, но удобный интерфейс. Результат должен показываться на той же странице.

Вот три публичных аккаунта для тестов, на каждом несколько сотен купленных игр:
* https://steamcommunity.com/id/gwellir
* https://steamcommunity.com/id/molotoko
* https://steamcommunity.com/id/Tryr


API для работы с аккаунтами и играми:
* https://developer.valvesoftware.com/wiki/Steam_Web_API
* https://wiki.teamfortress.com/wiki/WebAPI/ResolveVanityURL
* https://wiki.teamfortress.com/wiki/User:RJackson/StorefrontAPI

API-Ключ приватный, поэтому запросы к апи, требующие ключа, должны производиться только с сервера.

Стек
Любой современный фреймворк для вьюх на фронте + что угодно на ноде на бекенде.

Для стилей препроцессор по вашему выбору. Обязательно использовать изоляцию стилей компонентов
(БЭМ или что-то другое по вашему выбору).


## development usage

1. make sure your system have installed project dependencies:
* `docker`
* `docker-compose`
2. run from current dir: `./scripts/develop [SCOPE] [COMMAND]`
* `[SCOPE]` - list of current scopes you can see in `src/scopes/`
* `[COMMAND]` - list of current commands you can see in `scripts/entrypoints`

### Example
```
./scripts/develop userspace run
```
