# Drone Radar Server

## Overview
deployed url: https://devradar.sky.trade/

This NestJS application provides a backend service for managing drone historical data through HTTP and WebSocket interfaces. It consists of:

### HTTP Endpoint (`/remoteIdentifier`)

- This endpoint is used to insert drone remote data into a PostgreSQL database. It accepts JSON payloads representing drone data and is primarily designed for storing historical drone information.
-  Remote_ID Data Structure:
- [remote_ID_data_structure.txt](https://github.com/SkyTradeLinks/SkyRadar-server-v2/files/15483113/remote_ID_data_structure.txt)


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
- [cors](https://github.com/expressjs/cors)
- [socket.io](https://socket.io/)


### Web Socket Integration

By leveraging Socket.io, we can enhance user experience by enabling features such as live updates on drone locations and flight paths. This integration allows us to implement dynamic, real-time tracking of drones using our radar app. Users can view drone movements instantly on the map, powered by Mapbox. Socket.io ensures that clients receive immediate updates on drone positions, altitude, speed, and direction, providing accurate and timely information to enhance monitoring capabilities.

In summary, integrating Socket.io into our Nest.js project enables efficient and real-time communication between the server and clients, ensuring instant updates and interactions, particularly essential for features like live drone tracking and monitoring


## Acknowledgments

- [Jonathan Dockrell](https://www.linkedin.com/in/jonathandockrell/)
- [Marcin Zduniak](https://www.linkedin.com/in/marcinzduniak/)
- [chuka udemezue](http://linkedin.com/in/chukky2486/)
- [Sayantan Modal](https://www.linkedin.com/in/sayantan-mondal-1693101b4/)
- [Yusuff Jamal](https://www.linkedin.com/in/jamal-yusuff-1a4aa1212/)
- [Glwadys Fayolle](https://www.linkedin.com/in/glwadysfayolle/)
- [Emnet Yohannes](https://www.linkedin.com/in/emnet-yohannes-4132bb1a1/)
- [Chinka Uchenna](https://www.linkedin.com/in/chinka-uchenna-loveday-955a1084)

## Pitch Deck

Check out our [Pitch Deck](https://docs.google.com/presentation/d/1VTnetTIVSRTUtu8aEBAMtddwFpQXzJn_vT37olPoEg0/edit) for detailed information about our project and goals.
