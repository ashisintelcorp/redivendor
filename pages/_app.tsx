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

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {() => (
        <Component {...pageProps} />
      )}
    </PersistGate>
  </Provider>
}