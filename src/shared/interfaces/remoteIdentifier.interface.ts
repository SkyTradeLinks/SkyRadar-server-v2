export interface IBoundingBoxData {
  minLatitude: number;
  maxLatitude: number;
  minLongitude: number;
  maxLongitude: number;
}

export interface RemoteData {
  location: {
    latitude: number;
    longitude: number;
  };
  macAddress: number;
}

export interface JsonObject {
  id: string;
  remoteData: RemoteData;
  createdAt: Date;
  updateAt: Date;
}
