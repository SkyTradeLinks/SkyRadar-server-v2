import { definition } from '../remoteDrone';

export default class Ceramic {
  async composeDB() {
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

    const did = new DID({
      resolver: getResolver(),
      provider: new Ed25519Provider(privateKey),
    });
    await did.authenticate();

    // Replace by the URL of the Ceramic node you want to deploy the Models to
    const ceramic = new CeramicClient(process.env.CERAMIC_NODE_CONNECTION);
    // An authenticated DID with admin access must be set on the Ceramic instance
    ceramic.did = did;

    const compose = new ComposeClient({
      ceramic: ceramic,
      definition,
    });

    return compose;
  }
}
