# SkyTrade Drones Radar
Android APK for download: https://drive.google.com/file/d/1TgJI5ASaW2Kcxr3QfJ99pQ3E0QymQFbo/view?usp=sharing

The SkyRadar app collects RemoteID data from nearby drones using BRID. The data collected by the app is sent to our server, where it is aggregated and analyzed. SkyRadar uses Google Maps and Google Places for mapping and place prediction implementation. An explainer video of how our app works is added below

<div>
    <a href="https://www.loom.com/share/1132ef4f66114cc3ab1666e7c43fa374">
      <p>SkyRadar Demo Video</p>
    </a>
    <a href="https://www.loom.com/share/1132ef4f66114cc3ab1666e7c43fa374">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/1132ef4f66114cc3ab1666e7c43fa374-with-play.gif">
    </a>
  </div>


# SkyTrade Drones Real-Time API

## Overview
API domain: https://devradar.sky.trade

The API collects, stores, and aggregates SkyTrade Drones Radar app data. The NestJS application provides a backend service for managing drone historical data through HTTP and WebSocket interfaces. It consists of and is built together with:
- Ceramic/ComposeDB: A decentralized database network that plays an important role in our application's data management. By leveraging this technology, we ensure that our drone's historical data is stored securely, transparently, and highly available. ComposeDB's decentralized architecture allows real-time data synchronization and validation, making it an ideal solution for our use case. With Ceramic/ComposeDB, we can confidently store and manage large amounts of data while maintaining the highest data integrity and security levels.

- How we use it:
  A  GraphQL model is designed with the data structure of the drone signals that is sent to a Ceramic node, this data is indexed for easy access and also for proper filtering.
  This model is deployed on a Ceramic server running on AWS, which makes the signals readily available for use.
  During a request, a GraphQL query is sent directly to the Ceramic server. Since the model is indexed, this makes the response time faster than a regular REST API.
- API Response includes but is not limited to:
1, Specific macAddress that signifies each drone.
2, The current location of the drones.
3, The timestamp when the signal was created.
4, The timestamp of when a drone was last seen at a particular land area.

### HTTP Endpoint (`/remoteIdentifier`)

- This endpoint inserts drone remote data into a PostgreSQL/composeDB database. It accepts JSON payloads representing drone data and is primarily designed to store historical drone information.
-  Remote_ID Data Structure:
-  [remote_ID.json](https://github.com/SkyTradeLinks/SkyRadar-server-v2/files/15483650/remote_ID.json)




### HTTP Endpoint(`/get-ceramic-drone-data`)
  -query-params(lon1, lat1, lon2, lat2)
  
  - This endpoint is used to fetch available drones in a land area.
  - Postman API specification:
  - [Sky-Radar-Server.postman_collection.json](https://github.com/SkyTradeLinks/SkyRadar-server-v2/files/15483569/Sky-Radar-Server.postman_collection.json)

### WebSocket Endpoint (`/droneIdSocket`)

- This WebSocket endpoint subscribes to the `sendMessageByDroneId` message. It receives a drone MAC address as a payload and emits a `droneIdResponse` message containing historical data associated with the specified drone.

### WebSocket Endpoint (`/boundingBoxSocket`)

- This WebSocket endpoint subscribes to the `sendMessageByBoundingBox` message. It receives bounding box coordinates (`minLatitude`, `maxLatitude`, `minLongitude`, `maxLongitude`) and emits a `boundingBoxResponse` message containing a list of drones within the specified geographical area.


## Technology Stack

- [Next.js](https://nextjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Ceramic/ComposeDB](https://developers.ceramic.network/)
- [cors](https://github.com/expressjs/cors)
- [socket.io](https://socket.io/)


### Web Socket Integration

By leveraging Socket.io, we can enhance user experience by enabling features such as live updates on drone locations and flight paths. This integration allows us to implement dynamic, real-time tracking of drones using our radar app. Users can view drone movements instantly on the map, powered by Mapbox. Socket.io ensures that clients receive immediate updates on drone positions, altitude, speed, and direction, providing accurate and timely information to enhance monitoring capabilities.

In summary, integrating Socket.io into our Nest.js project enables efficient and real-time communication between the server and clients, ensuring instant updates and interactions, which is essential for features like live drone tracking and monitoring.

## Pitch Deck

Check out our [Pitch Deck](https://docs.google.com/presentation/d/1VTnetTIVSRTUtu8aEBAMtddwFpQXzJn_vT37olPoEg0/edit) for detailed information about our project and goals.

## Contact

If you have feedback or question to us please use our e-mail: m (at) sky.trade
