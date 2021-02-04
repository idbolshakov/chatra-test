import { TApiRequestResponse, TSendApiRequestDependencies, TApiRequestResponseJson } from './index.types';

export default async function sendApiRequest(
  { fetch }: TSendApiRequestDependencies,
  url: string
): Promise<TApiRequestResponse> {

  let json: TApiRequestResponseJson;
  const response = await fetch(url);

  try {
    json = await response.json();
  } catch (error) {
    json = null;
  };

  return {
    json,
    status: response.status,
    statusText: response.statusText,
  };
};
