import { API_INFO, putParams } from '../../common/api';
import useFetch from '../../hooks/useFetch';
import Footer from '../../components/common/Footer';
import Nav from '../../components/common/Nav';
import Content from './Content';
import Header from './Header';

function Folder() {
  const { url: getUserUrl, method: getUserMethod } = API_INFO.endpoints.getUser;
  const userData = useFetch(API_INFO.baseUrl + putParams(getUserUrl, '1'), getUserMethod);
  userData.data = userData.data?.data[0];

  const { url: getFolderUrl, method: getFolderMethod } = API_INFO.endpoints.getFolder;

  const folderData = useFetch(API_INFO.baseUrl + putParams(getFolderUrl, '1'), getFolderMethod);
  folderData.data = folderData.data?.data;

  return (
    <>
      <Nav userData={userData} isSample={false} />
      <Header folderData={folderData} />
      <Content folderData={folderData} />
      <Footer />
    </>
  );
}

export default Folder;
