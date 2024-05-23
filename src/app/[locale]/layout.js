
import '@/styles/global.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: 'Pandas Labs',
  description: 'Tech and AI',
}

export default async function RootLayout({ children, params: {locale}}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/assets/favicon1.png" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
    </html>
  )
}
