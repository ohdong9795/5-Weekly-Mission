import Content from './Content';
import Header from './Header';
import Nav from '../../components/common/Nav';
import useFetch from '../../hooks/useFetch';
import Footer from '../../components/common/Footer';
import { API_INFO, LinkSample, UserData } from '../../common/api';

function Shared() {
  const baseUrl = API_INFO.baseUrl;
  const { url: sampleUserUrl, method: sampleUserMethod } = API_INFO.endpoints.sampleUser;
  const userData = useFetch<UserData>({ url: baseUrl + sampleUserUrl, method: sampleUserMethod, immediate: true });

  const { url: sampleDataUrl, method: sampleDataMethod } = API_INFO.endpoints.sampleData;
  const linkData = useFetch<LinkSample>({ url: baseUrl + sampleDataUrl, method: sampleDataMethod, immediate: true });

  const folderName = !linkData.loading && linkData.error === null ? linkData.data?.folder?.name : '';

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
