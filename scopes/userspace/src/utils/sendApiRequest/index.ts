import sendApiRequest from 'common/utils/sendApiRequest';

const sendApiRequestFactory = (url: string) => sendApiRequest({ fetch: fetch.bind(window) }, url);

export default sendApiRequestFactory;
