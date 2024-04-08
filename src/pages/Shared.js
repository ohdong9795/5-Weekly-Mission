import Content from '../components/pages/Shared/Content';
import Header from '../components/pages/Shared/Header';
import Nav from '../components/common/Nav';
import useFetch from '../hooks/useFetch';
import Footer from '../components/common/Footer';
import { API_INFO } from '../common/api';

function Shared() {
  const baseUrl = API_INFO.baseUrl;
  const { url: sampleUserUrl, method: sampleUserMethod } = API_INFO.endpoints.sampleUser;
  const userData = useFetch(baseUrl + sampleUserUrl, sampleUserMethod);

  const { url: sampleDataUrl, method: sampleDataMethod } = API_INFO.endpoints.sampleData;
  const linkData = useFetch(baseUrl + sampleDataUrl, sampleDataMethod);

  const folderName = (!linkData.loading && linkData.error === null) ? linkData.data.folder.name : "";

  return (
    <>
      <Nav userData={userData} isSample={true}></Nav>
      <Header userData={userData} folderName={folderName}></Header>
      <Content linkData={linkData}></Content>
      <Footer></Footer>
    </>
  );
}

export default Shared;