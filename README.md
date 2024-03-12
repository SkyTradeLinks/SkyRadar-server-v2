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
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Data structure
Information that can be retrieved from an aircraft is shown below:


```POST``` aircraft

```

{
  macAddress: long,
  
  connection: {
  
    rssi: int,
    
    transportType: string,
    
    macAddress: string,
    
    lastSeen: long (timestamp),
    
    firstSeen: long (timestamp),
    
    msgDelta: long (timestamp)
    
  },
  
  identification1: {
  
    uaType: enum, // possible values of uaType are None, Aeroplane, Helicopter_or_Multirotor, Gyroplane, Hybrid_Lift, Ornithopter, Glider, Kite, Free_balloon, Captive_balloon, Airship, Free_fall_parachute, Rocket, Tethered_powered_aircraft, Ground_obstacle, Other
    
    idType: enum, // possible values of idType are None, Serial_Number, CAA_Registration_ID, UTM_Assigned_ID, Specific_Session_ID
    
    uasId: byte[]
  
  },
  
  identification2: {
  
    uaType: enum, // possible values of uaType are None, Aeroplane, Helicopter_or_Multirotor, Gyroplane, Hybrid_Lift, Ornithopter, Glider, Kite, Free_balloon, Captive_balloon, Airship, Free_fall_parachute, Rocket, Tethered_powered_aircraft, Ground_obstacle, Other
    
    idType: enum, // possible values of idType are None, Serial_Number, CAA_Registration_ID, UTM_Assigned_ID, Specific_Session_ID
    
    uasId: byte[]
  
  },
  
  id1Shadow: {
  
    uaType: enum, // possible values of uaType are None, Aeroplane, Helicopter_or_Multirotor, Gyroplane, Hybrid_Lift, Ornithopter, Glider, Kite, Free_balloon, Captive_balloon, Airship, Free_fall_parachute, Rocket, Tethered_powered_aircraft, Ground_obstacle, Other
    
    idType: enum, // possible values of idType are None, Serial_Number, CAA_Registration_ID, UTM_Assigned_ID, Specific_Session_ID
    
    uasId: byte[]
  
  },
  
  id2Shadow: {

    uaType: enum, // possible values of uaType are None, Aeroplane, Helicopter_or_Multirotor, Gyroplane, Hybrid_Lift, Ornithopter, Glider, Kite, Free_balloon, Captive_balloon, Airship, Free_fall_parachute, Rocket, Tethered_powered_aircraft, Ground_obstacle, Other
    
    idType: enum, // possible values of idType are None, Serial_Number, CAA_Registration_ID, UTM_Assigned_ID, Specific_Session_ID
    
    uasId: byte[]
  
  },
  
  location: {
  
    status: enum, // possible values of status are Undeclared, Ground, Airborne, Emergency, Remote_ID_System_Failure
    
    heightType: enum // possible values of heightType are Takeoff, Ground
    
    direction: double,
    
    speedHorizontal: double,
    
    speedVertical: double,
    
    latitude: double,
    
    longitude: double,
    
    altitudePressure: double,
    
    altitudeGeodetic: double,
    
    height: double,
    
    horizontalAccuracy: enum, // possible values of horizontalAccuracy are Unknown, kilometers_18_52, kilometers_7_408, kilometers_3_704, kilometers_1_852, meters_926, meters_555_6, meters_185_2, meters_92_6, meters_30, meters_10, meters_3, meters_1
    
    verticalAccuracy: enum, // possible values of verticalAccuracy are Unknown, meters_150, meters_45, meters_25, meters_10, meters_3, meters_1
    
    baroAccuracy: enum, // possible values of baroAccuracy are Unknown, meters_150, meters_45, meters_25, meters_10, meters_3, meters_1
    
    speedAccuracy: enum, // possible values of speedAccuracy are Unknown, meter_per_second_10, meter_per_second_3, meter_per_second_1, meter_per_second_0_3
    
    locationTimestamp: double,
    
    timeAccuracy: double,
    
    distance: float
  
  },
  
  authentication: {
  
    authType: enum, // possible values of authType are None, UAS_ID_Signature, Operator_ID_Signature, Message_Set_Signature, Network_Remote_ID, Specific_Authentication, Private_Use_0xA, Private_Use_0xB, Private_Use_0xC, Private_Use_0xD, Private_Use_0xE, Private_Use_0xF
  
    authDataPage: int,
    
    authLastPageIndex: int,
    
    authLength: int,
    
    authTimestamp: long (timestamp),
    
    authData: byte[]
    
  },
  
  selfId: {

    descriptionType: enum, // possible values of descriptionType are Text, Emergency, Extended_Status, Invalid
    
    operationDescription: byte[]
  
  },
  
  system: {
  
    operatorLocationType: enum, // possible values of operatorLocationType are TakeOff, Dynamic, Fixed, Invalid
    
    classificationType: enum, // possible values of classificationType are Undeclared, EU
    
    operatorLatitude: double,
    
    operatorLongitude: double,
    
    areaCount: int,
    
    areaRadius: int,
    
    areaCeiling: double,
    
    areaFloor: double,
    
    category: enum, // possible values of category are Undeclared, EU_Open, EU_Specific, EU_Certified
    
    classValue: enum, // possible values of classValue are Undeclared, EU_Class_0, EU_Class_1, EU_Class_2, EU_Class_3, EU_Class_4, EU_Class_5, EU_Class_6
    
    operatorAltitudeGeo: double,
    
    systemTimestamp: long (timestamp)
    
  },
  
  operatorId: {
  
    operatorIdType: int,
    
    operatorId: byte[],
  
  },
}

```

Example response

```
[
  {
    "macAddress": 987654321098765,
    "connection": {
      "rssi": -80,
      "transportType": "Bluetooth",
      "macAddress": "12:34:56:78:90:AB",
      "lastSeen": 1678789600000,
      "firstSeen": 1678789500000,
      "msgDelta": 5000
    },
    "identification1": {
      "uaType": "Helicopter_or_Multirotor",
      "idType": "UTM_Assigned_ID",
      "uasId": [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
    },
    "identification2": {
      "uaType": "Glider",
      "idType": "Serial_Number",
      "uasId": [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
    },
    "id1Shadow": {
      "uaType": "None",
      "idType": "None",
      "uasId": []
    },
    "id2Shadow": {
      "uaType": "Rocket",
      "idType": "Specific_Session_ID",
      "uasId": [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
    },
    "location": {
      "status": "Airborne",
      "heightType": "Takeoff",
      "direction": 150.0,
      "speedHorizontal": 200.0,
      "speedVertical": 5.0,
      "latitude": 37.7749,
      "longitude": -122.4194,
      "altitudePressure": 500.0,
      "altitudeGeodetic": 520.0,
      "height": 250.0,
      "horizontalAccuracy": "meters_10",
      "verticalAccuracy": "meters_3",
      "baroAccuracy": "meters_1",
      "speedAccuracy": "meter_per_second_3",
      "locationTimestamp": 1678789700000,
      "timeAccuracy": 0.5,
      "distance": 150.0
    },
    "authentication": {
      "authType": "UAS_ID_Signature",
      "authDataPage": 1,
      "authLastPageIndex": 2,
      "authLength": 256,
      "authTimestamp": 1678789800000,
      "authData": [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
    },
    "selfId": {
      "descriptionType": "Text",
      "operationDescription": [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
    },
    "system": {
      "operatorLocationType": "Dynamic",
      "classificationType": "EU",
      "operatorLatitude": 37.7749,
      "operatorLongitude": -122.4194,
      "areaCount": 1,
      "areaRadius": 100,
      "areaCeiling": 800.0,
      "areaFloor": 200.0,
      "category": "EU_Specific",
      "classValue": "EU_Class_2",
      "operatorAltitudeGeo": 520.0,
      "systemTimestamp": 1678789900000
    },
    "operatorId": {
      "operatorIdType": 1,
      "operatorId": [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
    }
  }
]
```
