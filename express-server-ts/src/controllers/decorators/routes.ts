import 'reflect-metadata';
import { Methods } from './Methods';
import { MetaDataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetaDataKeys.path, path, target, key);
      Reflect.defineMetadata(MetaDataKeys.method, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.get);
export const patch = routeBinder(Methods.patch);
export const post = routeBinder(Methods.post);
export const del = routeBinder(Methods.del);
export const put = routeBinder(Methods.put);
