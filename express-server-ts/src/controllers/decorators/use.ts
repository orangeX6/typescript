import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetaDataKeys } from './MetadataKeys';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetaDataKeys.middleware, target, key) || [];

    Reflect.defineMetadata(
      MetaDataKeys.middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
