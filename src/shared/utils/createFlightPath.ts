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
  // Create an empty object to keep track of unique macAddresses
  const uniqueMacAddresses = {};

  // Use the filter method to iterate over the array
  const filteredData = jsonData.filter((item) => {
    // Get the macAddress property of the current item
    const macAddress = item.remoteData.macAddress;

    // Check if the macAddress already exists in the uniqueMacAddresses object
    if (uniqueMacAddresses[macAddress]) {
      // If the macAddress exists, return false to filter out the duplicate item
      return false;
    } else {
      // If the macAddress doesn't exist, add it to the uniqueMacAddresses object
      uniqueMacAddresses[macAddress] = true;
      // Return true to keep the item in the filtered array
      return true;
    }
  });

  // Return the filtered array
  return filteredData;
}
