import '../styles/globals.scss'
import '../styles/home.scss'
import '../styles/common.scss'
import '../styles/add-list.scss'
import '../styles/uiComponents/dashboard.scss'
import '../styles/search-page.scss'
import '../styles/about.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/uiComponents/Accordion.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { store } from "../state/store";
import { ToastContainer } from 'react-toastify'
import MainLayout from 'components/frontend/MainLayout'

const persistor = persistStore(store, {}, function () {
  persistor.persist()
})

export default function MyApp({ Component, pageProps }: AppProps) {

  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {() => (
        <>
          <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </>
      )}
    </PersistGate>
  </Provider>
}