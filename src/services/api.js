import axios from 'axios';
import { settings } from '../brandSettings';
import logger from '../utils/logger';
import { endPoints } from './endPoints';

const api = axios.create({
  baseURL: settings.baseUrl
});

export const genericGetMethod = async (endPoint) => {
  try {
    logger.info({
        "endPoint":endPoint,
        "type":"genericGetMethod"
    })
    const response = await api.get('/'+endPoint);
    return response.data;
  } catch (error) {
    logger.error({
        "endPoint":endPoint,
        "type":"genericGetMethod",
        "error":error
    })
    return null;
  }
};

export const genericPostMethod = async (endPoint,postData) => {
  try {
    logger.info({
        "endPoint":endPoint,
        "type":"genericPostMethod"
    })
    const response = await api.post('/'+endPoint, postData);
    return response.data;
  } catch (error) {
    logger.error({
        "endPoint":endPoint,
        "type":"genericPostMethod",
        "error":error
    })
    return null;
  }
};

 

export { endPoints };