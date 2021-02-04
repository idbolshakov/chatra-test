export type TFetchData = (facade: { url: string, cacheKey: string }) => Promise<[null | string, unknown]>;
