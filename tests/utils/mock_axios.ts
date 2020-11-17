import axios from 'axios';

export const mockedAxios = axios as jest.Mocked<typeof axios>;
