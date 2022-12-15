import '../styles/globals.css'
import {UiProvider} from '../context/ui_context'
import {NewsProvider} from '../context/news_context'

function MyApp({ Component, pageProps }) {
  return (
    <UiProvider>
      <NewsProvider>
        <Component {...pageProps} />
      </NewsProvider>
    </UiProvider>
  )
}

export default MyApp
