import '../styles/globals.scss'
import '../styles/home.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { store } from "../state/store";

const persistor = persistStore(store, {}, function () {
  persistor.persist()
})

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return <>
    <Provider store={store}>
      <AnyComponent {...pageProps} />;
      {/* <PersistGate loading={null} persistor={persistor}>
        {() => (
          <Component {...pageProps} />
        )}
      </PersistGate> */}
    </Provider>
  </>
}

export default MyApp
