# SkyTrade Drones Radar
The SkyRadar app collects RemoteID data from nearby drones using BRID. The data collected by the app is sent to our server where its is aggregated and analysed. An explainer video is added below

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
deployed url: https://devradar.sky.trade/

The API collects, stores and aggregates data from the SkyTrade Drones Radar app. It is a NestJS application that provides a backend service for managing drone historical data through HTTP and WebSocket interfaces. It consists and built together with:
- Ceramic/ComposeDB: A decentralized database network that plays an important role in our application's data management. By leveraging this technology, we ensure that our drone historical data is stored in a secure, transparent, and highly available manner. ComposeDB's decentralized architecture allows for real-time data synchronization and validation, making it an ideal solution for our use case. With Ceramic/ComposeDB, we can confidently store and manage large amounts of data while maintaining the highest levels of data integrity and security.

- How we use it:
  A  GraphQL model is designed with the data structure of the drone signals that is sent to a Ceramic node, this data is indexed for easy access and also for proper filtering.
  This model is deployed on a Ceramic server running on AWS. This makes it easy for the signals to be readily available for use.
  During a request, A GraphQL query is sent directly to the Ceramic server and since the model is indexed, this makes the response time more faster than regular REST API.
- API Response includes but not limited to:
1, Specific macAddress that signifies each drone.
2, The current location the drones.
3, The timestamp when the signal was created.
4, The timestamp of when a drone was last seen at a particular land area.

### HTTP Endpoint (`/remoteIdentifier`)

- This endpoint is used to insert drone remote data into a PostgreSQL/composeDB database. It accepts JSON payloads representing drone data and is primarily designed for storing historical drone information.
-  Remote_ID Data Structure:
-  [remote_ID.json](https://github.com/SkyTradeLinks/SkyRadar-server-v2/files/15483650/remote_ID.json)




### HTTP Endpoint(`/get-ceramic-drone-data`)
  -query-params(lon1, lat1, lon2, lat2)
  
  - This enpoint is used to fetch available drones in a land area.
  - Postman Api specification:
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

In summary, integrating Socket.io into our Nest.js project enables efficient and real-time communication between the server and clients, ensuring instant updates and interactions, particularly essential for features like live drone tracking and monitoring

## Pitch Deck

Check out our [Pitch Deck](https://docs.google.com/presentation/d/1VTnetTIVSRTUtu8aEBAMtddwFpQXzJn_vT37olPoEg0/edit) for detailed information about our project and goals.
