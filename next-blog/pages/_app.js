import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    //Since the layout is made and this component is in the middle it then becomes a child I believe
    //so then that component then becomes the child parameter which will then be rendered
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
