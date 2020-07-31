import { Request, Response } from 'express';
import { TDebug } from '../lib/log';

const debug = new TDebug('app:src:controllers:getHelloWorld');

export async function getHelloWorldGet(req: Request, res: Response): Promise<any> {
    const greeting = req.query && req.query.greeting ? req.query.greeting : 'World';
    debug.info('Greeting: ', { greeting: "test", "test": "fsd" });
    res.status(200).send({ 'msg': `hello ${greeting}`, status: 'OK' });
}

export async function getHelloWorldPost(req: Request, res: Response): Promise<any> {
    const greeting = req.body && req.body.greeting ? req.body.greeting : 'World';
    debug.info('Greeting: ', greeting);
    // debug.info('Greeting: ', { greeting: "test", "test": "fsd" });
    res.status(200).send({ 'msg': 'hello ' + greeting, 'status': 'OK' });
}
