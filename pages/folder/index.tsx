import { API_INFO, Data, FolderData, UserData, putParams } from '@/common/api';
import useFetch from '@/hooks/useFetch';
import Footer from '@/components/common/Footer';
import Nav from '@/components/common/Nav';
import Content from '@/components/folder/Content';
import Header from '@/components/folder/Header';
import Head from 'next/head';

function Folder() {
  // 샘플 유저 데이터 막음 (탬플릿 코드 참고하였더니 로그인 풀려있음)
  // const { url: getUserUrl, method: getUserMethod } = API_INFO.endpoints.getUser;
  // const userData = useFetch<Data<UserData>>({
  //   url: API_INFO.baseUrl + putParams(getUserUrl, '1'),
  //   method: getUserMethod,
  //   immediate: true,
  // });

  const { url: getFolderUrl, method: getFolderMethod } = API_INFO.endpoints.getFolder;

  const folderData = useFetch<Data<FolderData>>({
    url: API_INFO.baseUrl + putParams(getFolderUrl, '1'),
    method: getFolderMethod,
    immediate: true,
  });

  return (
    <>
      <Head>
        <title>folder</title>
      </Head>
      <Nav
        //userData={{ data: userData.data?.data[0], loading: userData.loading, error: userData.error }}
        isSample={false}
      />
      <Header
        folderData={{
          data: folderData.data ? folderData.data.data : null,
          loading: folderData.loading,
          error: folderData.error,
        }}
      />
      <Content
        folderData={{
          data: folderData.data ? folderData.data.data : null,
          loading: folderData.loading,
          error: folderData.error,
        }}
      />
      <Footer />
    </>
  );
}

export default Folder;
