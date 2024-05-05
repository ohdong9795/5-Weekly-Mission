import { API_INFO, Data, FolderData, UserData, putParams } from '../../common/api';
import useFetch from '../../hooks/useFetch';
import Footer from '../../components/common/Footer';
import Nav from '../../components/common/Nav';
import Content from './Content';
import Header from './Header';

function Folder() {
  const { url: getUserUrl, method: getUserMethod } = API_INFO.endpoints.getUser;
  const userData = useFetch<Data<UserData>>({
    url: API_INFO.baseUrl + putParams(getUserUrl, '1'),
    method: getUserMethod,
    immediate: true,
  });

  const { url: getFolderUrl, method: getFolderMethod } = API_INFO.endpoints.getFolder;

  const folderData = useFetch<Data<FolderData>>({
    url: API_INFO.baseUrl + putParams(getFolderUrl, '1'),
    method: getFolderMethod,
    immediate: true,
  });

  return (
    <>
      <Nav
        userData={{ data: userData.data?.data[0], loading: userData.loading, error: userData.error }}
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
