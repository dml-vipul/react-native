import instance from './instance';

export const http = {
  post: (url: string, params: any = {}, headers?: string) =>
    instance({
      method: 'POST',
      url,
      data: params,
      headers: {
        'Content-Type': headers || 'application/json',
      },
      transformResponse: [data => JSON.parse(data)],
    }),
};
