import { environment } from 'environment/environment.prod';

export const API_URL = environment.API_URL || 'http://localhost:8080/api/v1';
