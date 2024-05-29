[remote_ID_data_structure.txt](https://github.com/SkyTradeLinks/SkyRadar-server-v2/files/15483113/remote_ID_data_structure.txt)# Drone Radar Server

## Overview

This NestJS application provides a backend service for managing drone historical data through HTTP and WebSocket interfaces. It consists of:

### HTTP Endpoint (`/remoteIdentifier`)

- This endpoint is used to insert drone remote data into a PostgreSQL database. It accepts JSON payloads representing drone data and is primarily designed for storing historical drone information.
- Remote_ID DATA STRUCTURE:
  [Uploadiremotedata: {
    selfId: {
      descriptionType: 'Text',
      operationDescription: [
        68, 114, 111, 110, 101, 32, 73, 68, 32, 116, 101, 115, 116, 32, 102,
        108, 105, 103, 104, 116, 45, 45, 45,
      ],
    },
    system: {
      category: 'EU_Open',
      areaCount: 1,
      areaFloor: 0,
      areaRadius: 0,
      classValue: 'EU_Class_1',
      areaCeiling: 0,
      systemTimestamp: 28056789,
      operatorLatitude: 0.001,
      operatorLongitude: -0.001,
      classificationType: 'EU',
      operatorAltitudeGeo: 20.5,
      operatorLocationType: 'TakeOff',
    },
    location: {
      height: 80,
      status: 'AIRBORNE',
      distance: 5043501,
      latitude: 51.4791,
      direction: 361,
      longitude: -0.0013,
      heightType: 'Ground',
      baroAccuracy: 'meters_1',
      timeAccuracy: 0.1,
      speedAccuracy: 'meter_per_second_1',
      speedVertical: 0,
      speedHorizontal: 0,
      altitudeGeodetic: 110,
      altitudePressure: 100,
      verticalAccuracy: 'meters_10',
      locationTimestamp: 3605,
      horizontalAccuracy: 'meters_10',
    },
    id1Shadow: {
      uasId: [
        49, 49, 50, 54, 50, 52, 49, 53, 48, 65, 57, 48, 69, 51, 65, 69, 49, 69,
        67, 48,
      ],
      idType: 'Serial_Number',
      uaType: 'Helicopter_or_Multirotor',
    },
    id2Shadow: {
      uasId: [
        70, 68, 51, 52, 53, 52, 66, 55, 55, 56, 69, 53, 54, 53, 67, 50, 52, 66,
        55, 48,
      ],
      idType: 'Specific_Session_ID',
      uaType: 'Helicopter_or_Multirotor',
    },
    connection: {
      rssi: -28,
      lastSeen: 1711211364162,
      msgDelta: 1711211364162,
      firstSeen: 1711211364147,
      macAddress: 'ac:74:b1:42:34:34',
      transportType: 'Beacon',
    },
    macAddress: 212879972,
    operatorId: {
      operatorId: [
        70, 73, 78, 56, 55, 97, 115, 116, 114, 100, 103, 101, 49, 50, 107, 56,
        0, 0, 0, 0,
      ],
      operatorIdType: 0,
    },
    authentication: {
      authData: [
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
      authType: 'UAS_ID_Signature',
      authLength: 63,
      authDataPage: 0,
      authTimestamp: 28000000,
      authLastPageIndex: 2,
    },
    identification1: {
      uasId: [
        49, 49, 50, 54, 50, 52, 49, 53, 48, 65, 57, 48, 69, 51, 65, 69, 49, 69,
        67, 48,
      ],
      idType: 'Serial_Number',
      uaType: 'Helicopter_or_Multirotor',
    },
    identification2: {
      uasId: [
        70, 68, 51, 52, 53, 52, 66, 55, 55, 56, 69, 53, 54, 53, 67, 50, 52, 66,
        55, 48,
      ],
      idType: 'Specific_Session_ID',
      uaType: 'Helicopter_or_Multirotor',
    },
  },ng remote_ID_data_structure.txt…]()


### HTTP Endpoint(`/get-ceramic-drone-data`)
  -query-params(lon1, lat1, lon2, lat2)
  
  - This enpoint is used to fetch available drones in a land area.
  - Postman demo:
  
![query-params-server](https://github.com/SkyTradeLinks/SkyRadar-server-v2/assets/21036858/d350c9b8-633c-4033-a0c5-b9706002ad04)

-Server Response from composeDB
![server-response](https://github.com/SkyTradeLinks/SkyRadar-server-v2/assets/21036858/13ff5c23-9513-434a-b3a3-80f10ca3982c)


### WebSocket Endpoint (`/droneIdSocket`)

- This WebSocket endpoint subscribes to the `sendMessageByDroneId` message. It receives a drone MAC address as a payload and emits a `droneIdResponse` message containing historical data associated with the specified drone.

### WebSocket Endpoint (`/boundingBoxSocket`)

- This WebSocket endpoint subscribes to the `sendMessageByBoundingBox` message. It receives bounding box coordinates (`minLatitude`, `maxLatitude`, `minLongitude`, `maxLongitude`) and emits a `boundingBoxResponse` message containing a list of drones within the specified geographical area.


## Technology Stack

- [Next.js](https://nextjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [cors](https://github.com/expressjs/cors)
- [socket.io](https://socket.io/)


### Web Socket Integration

By leveraging Socket.io, we can enhance user experience by enabling features such as live updates on drone locations and flight paths. This integration allows us to implement dynamic, real-time tracking of drones using our radar app. Users can view drone movements instantly on the map, powered by Mapbox. Socket.io ensures that clients receive immediate updates on drone positions, altitude, speed, and direction, providing accurate and timely information to enhance monitoring capabilities.

In summary, integrating Socket.io into our Nest.js project enables efficient and real-time communication between the server and clients, ensuring instant updates and interactions, particularly essential for features like live drone tracking and monitoring


## Acknowledgments

- [Jonathan Dockrell](https://www.linkedin.com/in/jonathandockrell/)
- [Marcin Zduniak](https://www.linkedin.com/in/marcinzduniak/)
- [chukky](http://linkedin.com/in/chukky2486/)
- [Sayantan Modal](https://www.linkedin.com/in/sayantan-mondal-1693101b4/)
- [Yusuff Jamal](https://www.linkedin.com/in/jamal-yusuff-1a4aa1212/)
- [Glwadys Fayolle](https://www.linkedin.com/in/glwadysfayolle/)
- [Emnet Yohannes](https://www.linkedin.com/in/emnet-yohannes-4132bb1a1/)
- [Chinka Uchenna](https://www.linkedin.com/in/chinka-uchenna-loveday-955a1084)

## Pitch Deck

Check out our [Pitch Deck]([https://docs.google.com/presentation/d/1QKGFC1rzmfq2gfGGCehoOTlCrLVp9rz_IftHjV2kc-Y/edit](https://docs.google.com/presentation/d/1VTnetTIVSRTUtu8aEBAMtddwFpQXzJn_vT37olPoEg0/edit) for detailed information about our project and goals.
