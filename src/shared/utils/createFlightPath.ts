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
  const uniqueIds = new Set();
  const uniqueJsonArray = [];

  for (const json of jsonData) {
    const jsonId = JSON.stringify(json);
    if (!uniqueIds.has(json.remoteData?.macAddress)) {
      uniqueIds.add(jsonId);
      uniqueJsonArray.push(json);
    }
  }

  return uniqueJsonArray;
}
