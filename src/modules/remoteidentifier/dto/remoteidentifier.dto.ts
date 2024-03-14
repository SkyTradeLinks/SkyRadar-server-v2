import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RemoteIdentifierEntity {
  @ApiProperty()
  @IsNotEmpty()
  macAddress: string;

  @ApiProperty()
  @IsNotEmpty()
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
  @IsNotEmpty()
  identification1: {
    create: {
      uaType: string;
      idType: string;
      uasId: number[];
    };
  };

  @ApiProperty()
  @IsNotEmpty()
  identification2: {
    create: {
      uaType: string;
      idType: string;
      uasId: number[];
    };
  };

  @ApiProperty()
  @IsNotEmpty()
  id1Shadow: {
    create: {
      uaType: string;
      idType: string;
      uasId: number[];
    };
  };

  @ApiProperty()
  @IsNotEmpty()
  id2Shadow: {
    create: {
      uaType: string;
      idType: string;
      uasId: number[];
    };
  };

  @ApiProperty()
  @IsNotEmpty()
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
  @IsNotEmpty()
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
  @IsNotEmpty()
  selfId: {
    create: {
      descriptionType: string;
      operationDescription: number[];
    };
  };

  @ApiProperty()
  @IsNotEmpty()
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
  @IsNotEmpty()
  operatorId: {
    create: {
      operatorIdType: number;
      operatorId: number[];
    };
  };
}
