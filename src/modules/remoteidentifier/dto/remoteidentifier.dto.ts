import { ApiProperty } from '@nestjs/swagger';

export class RemoteIdentifierEntity {
  @ApiProperty()
  macAddress: string;

  @ApiProperty()
  connection: {
    create: {
      rssi: number;
      transportType: string;
      macAddress: string;
      lastSeen: number;
      firstSeen: number;
      msgDelta: number;
    };
  };

  @ApiProperty()
  identification1: {
    create: {
      uaType: string;
      idType: string;
      uasId: number[];
    };
  };

  @ApiProperty()
  identification2: {
    create: {
      uaType: string;
      idType: string;
      uasId: number[];
    };
  };

  @ApiProperty()
  id1Shadow: {
    create: {
      uaType: string;
      idType: string;
      uasId: number[];
    };
  };

  @ApiProperty()
  id2Shadow: {
    create: {
      uaType: string;
      idType: string;
      uasId: number[];
    };
  };

  @ApiProperty()
  location: {
    create: {
      status: string;
      heightType: string;
      direction: number;
      speedHorizontal: number;
      speedVertical: number;
      latitude: number;
      longitude: number;
      altitudePressure: number;
      altitudeGeodetic: number;
      height: number;
      horizontalAccuracy: string;
      verticalAccuracy: string;
      baroAccuracy: string;
      speedAccuracy: string;
      locationTimestamp: number;
      timeAccuracy: number;
      distance: number;
    };
  };

  @ApiProperty()
  authentication: {
    create: {
      authType: string;
      authDataPage: number;
      authLastPageIndex: number;
      authLength: number;
      authTimestamp: number;
      authData: number[];
    };
  };

  @ApiProperty()
  selfId: {
    create: {
      descriptionType: string;
      operationDescription: number[];
    };
  };

  @ApiProperty()
  system: {
    create: {
      operatorLocationType: string;
      classificationType: string;
      operatorLatitude: number;
      operatorLongitude: number;
      areaCount: number;
      areaRadius: number;
      areaCeiling: number;
      areaFloor: number;
      category: string;
      classValue: string;
      operatorAltitudeGeo: number;
      systemTimestamp: number;
    };
  };

  @ApiProperty()
  operatorId: {
    create: {
      operatorIdType: number;
      operatorId: number[];
    };
  };
}
