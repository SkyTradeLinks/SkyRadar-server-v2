import { JsonObject } from '../interfaces/remoteIdentifier.interface';

export function extractFlightPath(json: JsonObject[]): JsonObject[][] {
  const collectionHolder: JsonObject[][] = [];
  json?.forEach((data) => {
    const { latitude, longitude } = data?.remoteData?.location;
    const flightPath = [latitude, longitude];
    collectionHolder.push(flightPath as any);
  });

  return collectionHolder;
}
