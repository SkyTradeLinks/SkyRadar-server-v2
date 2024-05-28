import { Injectable } from '@nestjs/common';
import Ceramic from './ceramic';

@Injectable()
export class ComposeDbClientService {
  constructor() {}

  async createRemoteData(remoteData) {
    const now = new Date();
    const compose = await new Ceramic().composeDB();

    try {
      const createDrone = await compose.executeQuery(`
      mutation CreateRemoteData{
        createRemoteData(input: {
          content: {
            macAddress: "${remoteData.connection.macAddress}",
            lastSeen: "${remoteData.connection.lastSeen}",
            firstSeen: "${remoteData.connection.firstSeen}",
            transportType: "${remoteData.connection.transportType}",
            status: ${remoteData.location.status},
            created: "${now.toISOString()}"
            longitude: ${remoteData.location.longitude}
            latitude: ${remoteData.location.latitude}

          }
        }){
          document{
            macAddress
            lastSeen
            firstSeen
            transportType
            status
            created
            longitude
            latitude
          }
        }
      }
    `);

      return createDrone;
    } catch (error) {
      console.log(error);
    }
  }

  async getDroneData(params) {
    try {
      const compose = await new Ceramic().composeDB();

      const droneData = await compose.executeQuery(
        `
      query FilterByLongitude($input: RemoteDataFiltersInput!) {
        remoteDataIndex(filters: $input, first: 50) {
          edges {
            node {
              longitude
              latitude
              firstSeen
              lastSeen
              status
            }
          }
        }
      }
    `,
        {
          input: {
            or: [
              {
                where: {
                  longitude: {
                    equalTo: parseFloat(params.lon1),
                  },
                  latitude: {
                    equalTo: parseFloat(params.lat1),
                  },
                },
              },
              {
                where: {
                  longitude: {
                    equalTo: parseFloat(params.lon2),
                  },
                  latitude: {
                    equalTo: parseFloat(params.lat2),
                  },
                },
              },
            ],
          },
        },
      );

      return droneData;
    } catch (error) {
      throw new Error('Failed to fetch data from composeDB, Try again!!');
    }
  }
}
