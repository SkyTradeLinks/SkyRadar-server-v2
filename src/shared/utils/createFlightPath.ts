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

export function removeDuplicates(jsonArray: JsonObject[]): JsonObject[] {
  const uniqueStrings = new Set();
  const uniqueJsonArray = jsonArray.filter((jsonObj) => {
    const jsonString = JSON.stringify(jsonObj);
    if (uniqueStrings.has(jsonString)) {
      return false;
    } else {
      uniqueStrings.add(jsonString);
      return true;
    }
  });

  const uniqueObjects = uniqueJsonArray.map((jsonString) =>
    JSON.parse(jsonString as unknown as string),
  );

  return uniqueObjects;
}
