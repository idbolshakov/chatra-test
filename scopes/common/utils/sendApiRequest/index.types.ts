export type TSendApiRequestDependencies = {
  fetch: TFetch;
};
type TFetch = (url: string) => Promise<TFetchResponse>;
type TFetchResponse = {
  status: number;
  statusText: string;
  json: () => Promise<unknown>;
};

export type TApiRequestResponse = {
  json: TApiRequestResponseJson;
  status: number;
  statusText: string;
};

export type TApiRequestResponseJson = unknown | null;
