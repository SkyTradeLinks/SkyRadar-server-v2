<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

Code demo: https://www.loom.com/share/1f24d0d24dc54f2e9e5535b5f7ff7a9e?sid=516ef703-3ff6-4476-bf70-6a034468b094

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


# NestJS Drone Data Storage Project

This project implements a NestJS application for storing and retrieving drone historical data using PostgreSQL for storage. It includes an HTTP endpoint and two WebSocket endpoints for real-time data retrieval based on specified criteria.

## Introduction

This project leverages NestJS to provide an HTTP endpoint for inserting drone remote data into a PostgreSQL database. Additionally, it implements two WebSocket endpoints to allow real-time querying of drone historical data based on drone ID or location bounding box.

## Installation

To run this project locally, follow these steps:

 # 1. Clone the repository:

```bash
 $  git clone https://github.com/SkyTradeLinks/SkyRadar-server.git
```

 # 2. Navigate to the project directory:
```bash
 $  cd SkyRadar-server
```

 # 3. Install dependencies:

```bash
 $  yarn install
```

## Configuration

Create a .env file in the root of the project and specify the PostgreSQL database connection URL:

```bash
 $  DATABASE_URL=postgres://username:password@localhost:5432/dronedata
```
Replace username, password, and dronedata with your PostgreSQL database credentials.


## Usage
### Starting the Application

```bash
 $  yarn start
```
The application will run on https://localhost:5000 by default.



## Endpoints

### Drone Remote Data Insertion

- **Endpoint:** `POST /remoteIdentifier`

- **Description:** Inserts drone remote data into the PostgreSQL database.

- **Payload:** JSON data structure representing drone remote data.

- **Example Payload:**

```json
{
   "remoteData": {
    "selfId": {
      "descriptionType": "Text",
      "operationDescription": [
        68, 114, 111, 110, 101, 32, 73, 68, 32, 116, 101, 115, 116, 32, 102,
        108, 105, 103, 104, 116, 45, 45, 45,
      ],
    },
    "system": {
      "category": "EU_Open",
      "areaCount": 1,
      "areaFloor": 0,
      "areaRadius": 0,
      "classValue": "EU_Class_1",
      "areaCeiling": 0,
      "systemTimestamp": 28056789,
      "operatorLatitude": 0.001,
      "operatorLongitude": -0.001,
      "classificationType": "EU",
      "operatorAltitudeGeo": 20.5,
      "operatorLocationType": "TakeOff",
    },
    "location": {
      "height": 80,
      "status": "Airborne",
      "distance": 5043501,
      "latitude": 51.4791,
      "direction": 361,
      "longitude": -0.0013,
      "heightType": "Ground",
      "baroAccuracy": "meters_1",
      "timeAccuracy": 0.1,
      "speedAccuracy": "meter_per_second_1",
      "speedVertical": 0,
      "speedHorizontal": 0,
      "altitudeGeodetic": 110,
      "altitudePressure": 100,
      "verticalAccuracy": "meters_10",
      "locationTimestamp": 3605,
      "horizontalAccuracy": "meters_10",
    },
    "id1Shadow": {
      "uasId": [
        49, 49, 50, 54, 50, 52, 49, 53, 48, 65, 57, 48, 69, 51, 65, 69, 49, 69,
        67, 48,
      ],
     " idType": "Serial_Number",
      "uaType": "Helicopter_or_Multirotor",
    },
    "id2Shadow": {
      "uasId": [
        70, 68, 51, 52, 53, 52, 66, 55, 55, 56, 69, 53, 54, 53, 67, 50, 52, 66,
        55, 48,
      ],
      "idType": "Specific_Session_ID",
      "uaType": "Helicopter_or_Multirotor",
    },
    "connection": {
      "rssi": -28,
      "lastSeen": 1711211364162,
      "msgDelta": 1711211364162,
      "firstSeen": 1711211364147,
      "macAddress": "ac:74:b1:42:34:34",
      "transportType": "Beacon",
    },
    "macAddress": 212879972,
    "operatorId": {
      "operatorId": [
        70, 73, 78, 56, 55, 97, 115, 116, 114, 100, 103, 101, 49, 50, 107, 56,
        0, 0, 0, 0,
      ],
      "operatorIdType": 0,
    },
    "authentication": {
      "authData": [
        49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 49, 50, 51, 52, 53, 54, 55, 49,
        50, 51, 52, 53, 54, 55, 56, 57, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
        48, 49, 50, 51, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 49, 50, 51, 52,
        53, 54, 55, 56, 57, 48, 49, 50, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      "authType": "UAS_ID_Signature",
      "authLength": 63,
      "authDataPage": 0,
      "authTimestamp": 28000000,
      "authLastPageIndex": 2,
    },
    "identification1": {
     "uasId": [
        49, 49, 50, 54, 50, 52, 49, 53, 48, 65, 57, 48, 69, 51, 65, 69, 49, 69,
        67, 48,
      ],
      "idType": "Serial_Number",
      "uaType": "Helicopter_or_Multirotor",
    },
    "identification2": {
      "uasId": [
        70, 68, 51, 52, 53, 52, 66, 55, 55, 56, 69, 53, 54, 53, 67, 50, 52, 66,
        55, 48,
      ],
      "idType": "Specific_Session_ID",
      "uaType": "Helicopter_or_Multirotor",
    },
  },
}
```



## WebSocket Endpoints

### Drone ID Message Subscription

- **Message Subscription:** `sendMessageByDroneId`

- **Payload:** Drone MAC address.

- **Response:** Emits `droneIdResponse` with historical data associated with the specified drone.


### Bounding Box Message Subscription

- **Message Subscription:** `sendMessageByBoundingBox`

- **Payload:** Min and Max latitude/longitude coordinates (bounding box).

- **Response:**  Emits `boundingBoxResponse` with a list of drones within the specified bounding box.



## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.



## License

This project is licensed under the [MIT licensed](LICENSE).

```bash
 $ This comprehensive README provides detailed instructions on installation, configuration, usage, endpoints, WebSocket functionalities, and contribution guidelines for the NestJS Drone Data Management project. It is written in Markdown and adheres to best practices for documentation and readability. Feel free to customize it further.

```