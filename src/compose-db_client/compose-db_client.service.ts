import { Injectable } from '@nestjs/common';
import { CreateComposeDbClientInput } from './dto/create-compose-db_client.input';
import { UpdateComposeDbClientInput } from './dto/update-compose-db_client.input';
import { definition } from './remoteDrone';
import { ComposeClient } from '@composedb/client';

@Injectable()
export class ComposeDbClientService {
  constructor() {}
  async createRemoteData() {
    const { ComposeClient } = await eval(`import('@composedb/client')`);

    const { CeramicClient } = await eval(
      `import('@ceramicnetwork/http-client')`,
    );
    const { DID } = await eval(`import('dids')`);
    const { Ed25519Provider } = await eval(
      `import('key-did-provider-ed25519')`,
    );
    const { getResolver } = await eval(`import('key-did-resolver')`);
    const { fromString } = await eval(`import('uint8arrays/from-string')`);

    const privateKey = fromString(process.env.CERAMIC_PRIVATE_KEY, 'base16');
    console.log('PK', privateKey);

    const did = new DID({
      resolver: getResolver(),
      provider: new Ed25519Provider(privateKey),
    });
    await did.authenticate();

    // Replace by the URL of the Ceramic node you want to deploy the Models to
    const ceramic = new CeramicClient('http://localhost:7007');
    // An authenticated DID with admin access must be set on the Ceramic instance
    ceramic.did = did;

    const compose = new ComposeClient({
      ceramic: ceramic,
      definition,
    });

    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000); // subtract 1 hour
    const fiveHoursAgo = new Date(now.getTime() - 5 * 60 * 60 * 1000);
    const lastSeen = oneHourAgo.getTime();
    const firstSeen = fiveHoursAgo.getTime();

    const createDrone = await compose.executeQuery(`
    mutation CreateRemoteData{
      createRemoteData(input: {
        content: {
          macAddress: "106:39:569:79:90:A8",
          lastSeen: "${lastSeen}",
          firstSeen: "${firstSeen}",
          transportType: "BLUETOOTH",
          status: AIRBORNE,
          created: "2024-05-09T12:00:00Z"
          longitude: -1254.6194
          latitude: 78.7749

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
    console.log(' Drone signal successfull!!', createDrone);

    return createDrone;
  }

  async getDroneData(params) {
    const { ComposeClient } = await eval(`import('@composedb/client')`);

    const { CeramicClient } = await eval(
      `import('@ceramicnetwork/http-client')`,
    );
    const { DID } = await eval(`import('dids')`);
    const { Ed25519Provider } = await eval(
      `import('key-did-provider-ed25519')`,
    );
    const { getResolver } = await eval(`import('key-did-resolver')`);
    const { fromString } = await eval(`import('uint8arrays/from-string')`);
    console.log('here', fromString);

    const privateKey = fromString(process.env.CERAMIC_PRIVATE_KEY, 'base16');
    console.log('PK', privateKey);

    const did = new DID({
      resolver: getResolver(),
      provider: new Ed25519Provider(privateKey),
    });
    await did.authenticate();

    // Replace by the URL of the Ceramic node you want to deploy the Models to
    const ceramic = new CeramicClient('http://localhost:7007');
    // An authenticated DID with admin access must be set on the Ceramic instance
    ceramic.did = did;

    const compose = new ComposeClient({
      ceramic: ceramic,
      definition,
    });

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
  }
}
