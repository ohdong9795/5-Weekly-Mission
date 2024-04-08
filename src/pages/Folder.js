import { API_INFO, putParams } from '../common/api';
import useFetch from '../hooks/useFetch';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import Content from '../components/pages/Folder/Content';
import Header from '../components/pages/Folder/Header';

function Folder() {
  const { url: getUserUrl, method: getUserMethod } = API_INFO.endpoints.getUser;
  const userData = useFetch(API_INFO.baseUrl + putParams(getUserUrl, '1'), getUserMethod);
  userData.data = userData.data?.data[0];

  return (
    <>
      <Nav userData={userData} isSample={false} />
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default Folder;
