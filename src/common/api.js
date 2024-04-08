export const API_INFO = {
  baseUrl: 'https://bootcamp-api.codeit.kr',
  endpoints: {
    sampleUser: { url: '/api/sample/user', method: 'GET' },
    sampleData: { url: '/api/sample/folder', method: 'GET' },
    getUser: { url: '/api/users/{param1}', method: 'GET' },
    getFolder: { url: '/api/users/{param1}/folders', method: 'GET' },
    getData: { url: '/api/users/{param1}/links', method: 'GET' },
  },
};

export function putParams(url, ...args) {
  args.forEach((item, idx) => {
    url = url.replace(`{param${idx + 1}}`, item);
  });

  return url;
}
