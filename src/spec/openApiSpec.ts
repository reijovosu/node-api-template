import * as swaggerJSDoc from 'swagger-jsdoc';
import { TDebug } from '../lib/log';
import { writeFile } from 'fs';
const log = require('debug-level').log('app:src:spec');

const debug = new TDebug('app:src:spec');

const serverPort = process.env.PORT || 8001;
const serverAddr = process.env.SERVER_ADDR || 'http://localhost';

const options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Hello World',
            version: '1.0.0',
        },
        servers: [{
            url: `${serverAddr}:${serverPort}`,
            description: 'Local Env Server'
        }]
    },
    apis: ['../**/*.ts']
};

const genSpec = async () => {
    return new Promise(function (resolve, reject) {
        writeFile('./swagger.json', JSON.stringify(swaggerJSDoc(options)), 'utf8', function (err) {
            if (err) {
                log.error('Unable to save swagger.json');
                reject(err);
            } else {
                log.info('Specs saved to: swagger.json');
                resolve();
            }
        });
    });
}

export default genSpec;