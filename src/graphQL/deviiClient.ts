import axios from 'axios';

interface loginData {
  login: string;
  password: string;
  tenantid: string;
}

export class DeviiClient {
  private query_url: string;
  private accessToken: string;
  constructor(private deviiAuthUrl: string) {
    this.deviiAuthUrl = deviiAuthUrl;
  }

  async login(data: loginData) {
    const res = await axios.post(this.deviiAuthUrl, data);
    this.query_url = res.data.routes.query;
    this.accessToken = res.data.access_token;
    // console.log(res);
  }

  async getDroneData(query): Promise<any> {
    const queryConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
      },
    };
    // let query = '{\n  device {\n    id\n    remoteData\n  }\n}';
    const data = new FormData();
    data.append('query', query);
    data.append('variables', `{}`);

    const result = await axios.post(this.query_url, data, queryConfig);
    console.log('Result', result.data);
    return result.data;
  }
}
