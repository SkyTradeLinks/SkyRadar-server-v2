import { Injectable } from '@nestjs/common';
import Ceramic from './ceramic';

@Injectable()
export class ComposeDbClientService {
  constructor() {}

  async createRemoteData(remoteData) {
    const now = new Date();
    const compose = await new Ceramic().composeDB();
    console.log(`"${remoteData.operatorId.operatorId}"`);

    if (process.env.IS_CERAMIC_ACTIVE) {
      try {
        const createDrone = await compose.executeQuery(`
        mutation CreateRemoteData{
          createRemoteData(input: {
            content: {
              macAddress: "${remoteData.connection.macAddress}",
              lastSeen: "${remoteData.connection.lastSeen}",
              firstSeen: "${remoteData.connection.firstSeen}",
              transportType: "${remoteData.connection.transportType}",
              operatorId: "${remoteData.operatorId.operatorId}",
              uasId: "${remoteData.identification1.uasId}",
              idType: "${remoteData.identification1.idType}",
              uaType: "${remoteData.identification1.uaType}"
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
              operatorId 
                uasId
                idType
                uaType 
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
    } else {
      return 'Creamic network is inactive. Pls try again later!!';
    }
  }

  async getCeramicDroneData(params: {
    lon1: string;
    lat1: string;
    lon2: string;
    lat2: string;
  }) {
    if (process.env.IS_CERAMIC_ACTIVE) {
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
                operatorId {
                  operatorId
                }
                identification1 {
                  uasId
                  idType
                  uaType
                }
                identification2 {
                  uasId
                  idType
                  uaType
                }
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
    } else {
      return 'Creamic network is inactive. Pls try again later!!';
    }
  }
}
