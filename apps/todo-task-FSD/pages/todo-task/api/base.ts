import { API_URL } from '../../../shared/config';
import axios from 'libs/axios';

export const apiInstance = axios.create({
  baseURL: API_URL,
});
