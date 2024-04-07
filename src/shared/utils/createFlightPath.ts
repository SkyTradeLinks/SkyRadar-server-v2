import { JsonObject } from '../interfaces/remoteIdentifier.interface';

export function extractFlightPath(json: JsonObject[]): [][] {
  const collectionHolder: [][] = [];
  json?.forEach((data) => {
    const { latitude, longitude } = data?.remoteData?.location;
    const flightPath = [latitude, longitude];
    collectionHolder.push(flightPath as any);
  });

  return collectionHolder;
}

export function fetchUniqueData(jsonData: JsonObject[]): JsonObject[] {
  const uniqueMacAddresses = {};

  const filteredData = jsonData.filter((item) => {
    const macAddress = item.remoteData.macAddress;

    if (uniqueMacAddresses[macAddress]) {
      return false;
    } else {
      uniqueMacAddresses[macAddress] = true;
      return true;
    }
  });
  return filteredData;
}
