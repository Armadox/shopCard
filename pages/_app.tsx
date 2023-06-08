import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import React from 'react';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div>
        <img src="/gm_background.png" alt="Background Image" height={5000} width={5000} style={{objectFit:"cover"}} className="background-image"/>
      </div>
      <Component {...pageProps} />
    </div>
  )
}
