# Drone Radar Server
[Sky-Radar-Server.postman_collection.json](https://github.com/SkyTradeLinks/SkyRadar-server-v2/files/15483569/Sky-Radar-Server.postman_collection.json)
[remote_ID_data_structure.txt](https://github.com/SkyTradeLinks/SkyRadar-server-v2/files/15483113/remote_ID_data_structure.txt)

## Overview
deployed url: https://devradar.sky.trade/

This NestJS application provides a backend service for managing drone historical data through HTTP and WebSocket interfaces. It consists of:

### HTTP Endpoint (`/remoteIdentifier`)

- This endpoint is used to insert drone remote data into a PostgreSQL database. It accepts JSON payloads representing drone data and is primarily designed for storing historical drone information.


### HTTP Endpoint(`/get-ceramic-drone-data`)
  -query-params(lon1, lat1, lon2, lat2)
  
  - This enpoint is used to fetch available drones in a land area.
  - Postman Api specification:
    
[Uploading Sky-Radar-Server{
	"info": {
		"_postman_id": "19f3e856-2888-4b02-86aa-76b60a25e2cc",
		"name": "Sky-Radar-Server",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "23359673"
	},
	"item": [
		{
			"name": "Get drones",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Authorization",
						"value": "",
						"disabled": true
					},
					{
						"key": "Accept",
						"value": "",
						"disabled": true
					}
				],
				"url": {
					"raw": "https://devradar.sky.trade/remoteIdentifier/get-ceramic-drone-data?lon1=-0.1315&lat1=152.4791&lon2=-0.0015&lat2=98.7749",
					"protocol": "https",
					"host": [
						"devradar",
						"sky",
						"trade"
					],
					"path": [
						"remoteIdentifier",
						"get-ceramic-drone-data"
					],
					"query": [
						{
							"key": "lon1",
							"value": "-0.1315"
						},
						{
							"key": "lat1",
							"value": "152.4791"
						},
						{
							"key": "lon2",
							"value": "-0.0015"
						},
						{
							"key": "lat2",
							"value": "98.7749"
						},
						{
							"key": "",
							"value": null,
							"disabled": true
						},
						{
							"key": "",
							"value": null,
							"disabled": true
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Store drone signal",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"remoteData\": {\r\n    \"selfId\": {\r\n      \"descriptionType\": \"Text\",\r\n      \"operationDescription\": [\r\n        68, 114, 111, 110, 101, 32, 73, 68, 32, 116, 101, 115, 116, 32, 102,\r\n        108, 105, 103, 104, 116, 45, 45, 45\r\n      ]\r\n    },\r\n    \"system\": {\r\n      \"category\": \"EU_Open\",\r\n      \"areaCount\": 1,\r\n      \"areaFloor\": 0,\r\n      \"areaRadius\": 0,\r\n      \"classValue\": \"EU_Class_1\",\r\n      \"areaCeiling\": 0,\r\n      \"systemTimestamp\": 28056789,\r\n      \"operatorLatitude\": 0.001,\r\n      \"operatorLongitude\": -0.001,\r\n      \"classificationType\": \"EU\",\r\n      \"operatorAltitudeGeo\": 20.5,\r\n      \"operatorLocationType\": \"TakeOff\"\r\n    },\r\n    \"location\": {\r\n      \"height\": 80,\r\n      \"status\": \"AIRBORNE\",\r\n      \"distance\": 5043501,\r\n      \"latitude\": 152.4791,\r\n      \"direction\": 361,\r\n      \"longitude\": -0.1315,\r\n      \"heightType\": \"Ground\",\r\n      \"baroAccuracy\": \"meters_1\",\r\n      \"timeAccuracy\": 0.1,\r\n      \"speedAccuracy\": \"meter_per_second_1\",\r\n      \"speedVertical\": 0,\r\n      \"speedHorizontal\": 0,\r\n      \"altitudeGeodetic\": 110,\r\n      \"altitudePressure\": 100,\r\n      \"verticalAccuracy\": \"meters_10\",\r\n      \"locationTimestamp\": 3605,\r\n      \"horizontalAccuracy\": \"meters_10\"\r\n    },\r\n    \"connection\": {\r\n      \"rssi\": -28,\r\n      \"lastSeen\": 1711211364162,\r\n      \"msgDelta\": 1711211364162,\r\n      \"firstSeen\": 1711211364147,\r\n      \"macAddress\": \"ac:74:b1:42:34:34\",\r\n      \"transportType\": \"Beacon\"\r\n    },\r\n\r\n    \"macAddress\": 212879972\r\n  }\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://devradar.sky.trade/remoteIdentifier/store-drone-signal/",
					"protocol": "https",
					"host": [
						"devradar",
						"sky",
						"trade"
					],
					"path": [
						"remoteIdentifier",
						"store-drone-signal",
						""
					]
				}
			},
			"response": []
		}
	]
}.postman_collection.json…]()



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
