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

export function putParams(url: string, ...args: string[]) {
  args.forEach((item, idx) => {
    url = url.replace(`{param${idx + 1}}`, item);
  });

  return url;
}

export interface UserData {
  id: number;
  created_at?: string;
  name: string;
  image_source?: string;
  profileImageSource?: string;
  email: string;
  auth_id?: string;
}

export interface FolderData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: { count: number };
}

export interface LinkData {
  created_at: string;
  description: string;
  folder_id: number;
  id: number;
  image_source: string;
  title: string;
  updated_at: string | null;
  url: string;
}

export interface LinkSample {
  folder: {
    count: number;
    id: number;
    links: { createdAt: string; description: string; id: number; imageSource: string; title: string; url: string }[];
    name: string;
    owner: { id: number; name: string; profileImageSource: string };
  };
}

export interface Data<T> {
  data: T[];
}

export interface FetchData<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}
