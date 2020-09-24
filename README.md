# Coding Challenge 1

## Installation

```
git clone git@gitlab.com:StellarPumpkin/codingchallenge.git
```
 
```
npm install
```

```
node build/Main.js
```

POST request to `http://localhost:3000/` containing a single transaction from `transaction.txt`

Example cURL request

```
curl -X POST \
  http://localhost:3000/ \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: e4d5a9b2-f376-451a-9036-91b644a5b9ff' \
  -d '{"id":1,"date":"2013-06-03T04:48:20+02:00","from":{"currency":"EUR","value":47.43},"to":{"currency":"USD","value":65.5236957156108}}'
```


## Tests

```
npm run test
```

## Context

You're asked by the European Union to audit the currency exchange offices in the Amsterdam area. The assignment is to check a set of sample transactions that took place between 2013 and 2020.

According to EU regulations, a currency exchange office may make a profit of up to 10% on any currency exchange transaction.

The sample transactions are in the repository named `transactions.txt`.

## Assignment

Create a **REST service** with an endpoint to audit a single transaction. Calling the endpoint should output if the transaction is compliant with the EU profit regulations explained or is not compliant.

* Use any IDE you like, we use VS Code
* Use Node.js and Typescript
* Add unit tests
* Start your service with `node build/Main.js`
* Use open APIs like [Frankfurter](https://www.frankfurter.app/),
  [Foreign Exchange Rate API](https://exchangeratesapi.io/) or 
  [Exchange Rate API](https://www.exchangerate-api.com/docs/free-exchange-rate-api)