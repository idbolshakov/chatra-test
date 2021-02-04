import fetch from 'node-fetch';
import sendApiRequest from 'common/utils/sendApiRequest';

export default (url: string) => sendApiRequest({ fetch }, url);
