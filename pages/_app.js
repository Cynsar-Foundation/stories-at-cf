
import {WebsiteConfigProvider}  from '../components/websiteConfigProvider';
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
  
    <WebsiteConfigProvider>
      <Component {...pageProps} />
    </WebsiteConfigProvider>
   
  );
}

export default MyApp
