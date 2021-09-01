import * as http from 'http';
import { IncomingHttpHeaders, ClientRequestArgs } from 'http';

import { IHttp } from '../interfaces';

export class Http implements IHttp {
    hostname: string;
    port: number | undefined;

    constructor(hostname: string, port?: number) {
        this.hostname = hostname;
        this.port = port;
    }

    getList<T>(path: string, headers: IncomingHttpHeaders): Promise<T> {
        return new Promise((resolve, reject) => {
            let responseBody: string[] = [];

            const options: ClientRequestArgs = {
                hostname: this.hostname,
                path,
                method: 'GET'
            }

            if (this.port) options.port = this.port;
            if (headers) options.headers = headers;

            const req = http.request(options, (res) => {
                res.setEncoding('utf8');

                res.on('data', (chunk) => {
                    responseBody.push(chunk)
                });

                res.on('end', () => {
                    const list: T = JSON.parse(responseBody.join('')).data.list;
                    resolve(list);
                });
            });
            req.on('error', (e) => {
                console.error(`problem with request: ${JSON.stringify(e)}`)
                reject(e.message)
            });

            req.end();
        });
    }
}