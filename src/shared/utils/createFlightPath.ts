import { JsonObject } from '../interfaces/remoteIdentifier.interface';

export function extractFlightPath(json: JsonObject[]): JsonObject[] {
  return json?.map((data) => {
    const { latitude, longitude } = data?.remoteData?.location;
    const droneRemoteId = data?.remoteData;
    const flightPath = [latitude, longitude];
    const updatedJson = {
      ...data,
      remoteData: {
        ...droneRemoteId,
        flightPath,
      },
    };
    return updatedJson;
  }) as unknown as JsonObject[];
}
