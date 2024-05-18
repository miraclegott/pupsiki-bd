# Тестування працездатності системи
## Запуск серверу
![Server Start](./start.jpg)

## Метод GET
### GET /
#### Запит
![Server serverReq](./serverRequest.jpg)
#### Відповідь
![Server serverRes](./serverResponse.jpg)

### GET /USER
#### Запит
![Server userReq](./userRequest.jpg)
#### Відповідь
![Server userRes](./userResponse.jpg)

### GET /USER/:ID
#### Запит (Існуючий користувач)
![Server userIdCorrectReq](./userIdCorrectRequest.jpg)
#### Відповідь
![Server userIdCorrectRes](./userIdCorrectResponse.jpg)

#### Запит (Не існуючий користувач)
![Server userIdWrongReq](./userIdWrongRequest.jpg)
#### Відповідь
![Server userIdWrongRes](./userIdWrongResponse.jpg)

## Метод POST
#### Запит 
![Server postReq](./postRequest.jpg)
#### Відповідь
![Server postRes](./postResponse.jpg)

## Метод PATCH
#### Запит 
![Server patchUserCorrectReq](./patchUserCorrectRequest.jpg)
#### Відповідь
![Server patchUserCorrectRes](./patchUserCorrectResponse.jpg)

## Метод DELETE
#### Запит 
![Server deleteReq](./deleteRequest.jpg)
#### Відповідь
![Server deleteRes](./deleteResponse.jpg)
