# Private-Blockchain-Hamster

THe Boilerplate Code of private-Blockchain using ES6
Using Express interfaces with the private blockchain.


## Getting Started


1. Clone the repository to your local computer.
2. Open the terminal and install the packages: `$ npm install`.
3. Under the project directory ,Run application `$ node app.js`
4. Test Endpoints with Curl or Postman.


### Prerequisites

* [nodejs](https://nodejs.org/en/) - Download and Setup Nodejs

* [npm](https://www.npmjs.com/) - Open the terminal and initialize under project folder
```
$ npm init
```

### Installing

Open the terminal and install the packages

```
$ npm install

```
#### Or setup packages following a step by step

JavaScript library of crypto standards. Utilize H264()

```
$ npm install  crypto-js
```

Fast & simple storage. The LevelDB is used in Bitcoin core.

```
$ npm install  level
```
Node.js body parsing middleware.

```
$ npm install body-parser
```

A RESTful framework for Node.js

```
$ npm install express
```

## Running the tests

 - Run server

```
$ node app.js
```
 - Get blcok by height from blockchain


 ```
 $ curl -X GET \
   http://localhost:8000/block/0

 ```
 - Post block to Blockchain

```
 $ curl -X POST \
   http://localhost:8000/block \
   -d '{
     "body":"Some data example"
 }'

 ```


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Tom gt** - *Fullstack egineer* - [github profile](https://github.com/tomgtbst)


## License

This project is licensed under the MIT License
