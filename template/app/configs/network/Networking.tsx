import HttpClient from './HttpClient';
import {CancelToken} from 'axios';

export interface BaseMeta {
  page?: number;
  size?: number;
  totalData?: number;
  totalPage?: number;
}

export interface BaseModel<T> {
  success?: boolean;
  message?: string;
  code?: number;
  data?: T;
  meta?: BaseMeta;
}

export function get<Params, Result>({
  path,
  params,
  cancelToken,
  headers,
}: {
  path: string;
  params?: Params;
  cancelToken?: CancelToken;
  headers?: any;
}): Promise<Result> {
  return HttpClient.get(path, {params, headers, cancelToken}).then(
    response => response.data,
  );
}

export function post<Params, Body, Result>({
  path,
  body,
  params,
  cancelToken,
  headers,
}: {
  path: string;
  params?: Params;
  body?: Body;
  cancelToken?: CancelToken;
  headers?: any;
}): Promise<Result> {
  return HttpClient.post(path, body, {headers, params, cancelToken}).then(
    response => response.data,
  );
}

export function put<Params, Body, Result>({
  path,
  body,
  params,
  cancelToken,
  headers,
}: {
  path: string;
  params?: Params;
  body?: Body;
  cancelToken?: CancelToken;
  headers?: any;
}): Promise<Result> {
  return HttpClient.put(path, body, {headers, params, cancelToken}).then(
    response => response.data,
  );
}

export function remove<Params, Result>({
  path,
  params,
  headers,
  cancelToken,
}: {
  path: string;
  params: Params;
  cancelToken?: CancelToken;
  headers?: any;
}) {
  return HttpClient.delete(path, {headers, params, cancelToken}).then(
    response => response.data,
  );
}
