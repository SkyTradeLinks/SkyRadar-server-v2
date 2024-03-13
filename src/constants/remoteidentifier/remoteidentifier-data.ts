export const remoteIdentifierInputStructure = {
  macAddress: '987654321098765',
  connection: {
    create: {
      rssi: -80,
      transportType: 'Bluetooth',
      macAddress: '12:34:56:78:90:AB',
      lastSeen: 1678789600000,
      firstSeen: 1678789500000,
      msgDelta: 5000,
    },
  },
  identification1: {
    create: {
      uaType: 'Helicopter_or_Multirotor',
      idType: 'UTM_Assigned_ID',
      uasId: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    },
  },
  identification2: {
    create: {
      uaType: 'Glider',
      idType: 'Serial_Number',
      uasId: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    },
  },
  id1Shadow: {
    create: {
      uaType: 'None',
      idType: 'None',
      uasId: [],
    },
  },
  id2Shadow: {
    create: {
      uaType: 'Rocket',
      idType: 'Specific_Session_ID',
      uasId: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    },
  },
  location: {
    create: {
      status: 'Airborne',
      heightType: 'Takeoff',
      direction: 150.0,
      speedHorizontal: 200.0,
      speedVertical: 5.0,
      latitude: 37.7749,
      longitude: -122.4194,
      altitudePressure: 500.0,
      altitudeGeodetic: 520.0,
      height: 250.0,
      horizontalAccuracy: 'meters_10',
      verticalAccuracy: 'meters_3',
      baroAccuracy: 'meters_1',
      speedAccuracy: 'meter_per_second_3',
      locationTimestamp: 1678789700000,
      timeAccuracy: 0.5,
      distance: 150.0,
    },
  },
  authentication: {
    create: {
      authType: 'UAS_ID_Signature',
      authDataPage: 1,
      authLastPageIndex: 2,
      authLength: 256,
      authTimestamp: 1678789800000,
      authData: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    },
  },
  selfId: {
    create: {
      descriptionType: 'Text',
      operationDescription: [
        0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      ],
    },
  },
  system: {
    create: {
      operatorLocationType: 'Dynamic',
      classificationType: 'EU',
      operatorLatitude: 37.7749,
      operatorLongitude: -122.4194,
      areaCount: 1,
      areaRadius: 100,
      areaCeiling: 800.0,
      areaFloor: 200.0,
      category: 'EU_Specific',
      classValue: 'EU_Class_2',
      operatorAltitudeGeo: 520.0,
      systemTimestamp: 1678789900000,
    },
  },
  operatorId: {
    create: {
      operatorIdType: 1,
      operatorId: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    },
  },
};
