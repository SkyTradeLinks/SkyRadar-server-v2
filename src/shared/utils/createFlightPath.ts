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
  const uniqueValues = new Set();
  for (const obj of jsonData) {
    if (uniqueValues.has(obj.remoteData?.macAddress)) {
      continue;
    }
    uniqueValues.add(obj);
  }

  return Array.from(uniqueValues) as JsonObject[];
}
