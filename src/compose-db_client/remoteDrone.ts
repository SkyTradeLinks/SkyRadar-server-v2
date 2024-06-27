// This is an auto-generated file, do not edit manually
import type { RuntimeCompositeDefinition } from '@composedb/types'
export const definition: RuntimeCompositeDefinition = {"models":{"RemoteData":{"interface":false,"implements":[],"id":"kjzl6hvfrbw6c8bckuenjm8nt8x6xetr50zzy51fdgn5mx3bzrwp22losejy8x4","accountRelation":{"type":"list"}}},"objects":{"RemoteData":{"uasId":{"type":"string","required":true,"immutable":false},"idType":{"type":"string","required":true,"immutable":false},"status":{"type":"reference","refType":"enum","refName":"Status","required":false,"immutable":false,"indexed":true},"uaType":{"type":"string","required":true,"immutable":false},"created":{"type":"datetime","required":true,"immutable":false},"lastSeen":{"type":"string","required":true,"immutable":false,"indexed":true},"latitude":{"type":"float","required":true,"immutable":false,"indexed":true},"firstSeen":{"type":"string","required":true,"immutable":false,"indexed":true},"longitude":{"type":"float","required":true,"immutable":false,"indexed":true},"macAddress":{"type":"string","required":true,"immutable":false},"operatorId":{"type":"string","required":true,"immutable":false},"transportType":{"type":"string","required":true,"immutable":false}}},"enums":{"Status":["AIRBORNE","STATIONARY"]},"accountData":{"remoteDataList":{"type":"connection","name":"RemoteData"}}}