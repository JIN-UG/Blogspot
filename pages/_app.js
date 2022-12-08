import Nav from '../Components/sections/Header'
import Footer from '../components/sections/Footer'
function MyApp({ Component, pageProps }) {
  return <>
       <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
  <Nav/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
