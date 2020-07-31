import * as express from 'express';
import { OpenApiValidator } from 'express-openapi-validator';
import * as swaggerUI from 'swagger-ui-express';
import { readFileSync } from 'fs';

declare module 'express' {
    interface Request {
        requestId: string;
    }
}
// const isProd = (process.env.NODE_ENV === 'production');
function loadDocumentSync(file: string): any {
    return JSON.parse(readFileSync(file, 'utf8'));
}
export const initSwaggerMiddlware = async function (app: express.Express, basePath: string, cb: any) {
    const swaggerDoc = loadDocumentSync('./swagger.json');
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
    await new OpenApiValidator({
        apiSpec: swaggerDoc,
        operationHandlers: basePath + '/routes',
        validateRequests: true, // (default)
        validateResponses: true, // false by default,
        validateFormats: 'full'
    }).install(app);
    cb();
};
