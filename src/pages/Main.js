import { useContext } from 'react';
import Content from '../components/pages/Main/Content';
import Header from '../components/pages/Main/Header';
import Nav from '../components/pages/Main/Nav';
import useFetch from '../hooks/useFetch';
import { apiBaseUrl, getSampleData, getSampleUser } from '../contexts/api';
import Footer from '../components/pages/Main/Footer';

function Main() {
  const baseUrl = useContext(apiBaseUrl);
  const sampleUser = useContext(getSampleUser);
  const userData = useFetch(baseUrl + sampleUser.url, sampleUser.method);

  const sampleData = useContext(getSampleData);
  const linkData = useFetch(baseUrl + sampleData.url, sampleData.method);

  const folderName = (!linkData.loading && linkData.error === null) ? linkData.data.folder.name : "";

  return (
    <>
      <Nav userData={userData}></Nav>
      <Header userData={userData} folderName={folderName}></Header>
      <Content linkData={linkData}></Content>
      <Footer></Footer>
    </>
  );
}

export default Main;