import { request } from '@/utils';
import { AxiosRequestConfig } from 'axios';

export async function getTemplate(data: any, options?: AxiosRequestConfig) {
  return request<{ result: any }>(
    'https://danieljcafonso.builtwithdark.com/react-query-paginated?page=1&results=10',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      // params: { ...data },
      ...(options || {})
    }
  );
}
