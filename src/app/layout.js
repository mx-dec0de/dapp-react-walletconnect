'use client';  // Оставляем директиву для клиентского компонента

import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";  // Импортируем Head для добавления мета-тегов

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="frame-ancestors 'self' https://*.ngrok-free.app https://*.ngrok.io https://*.walletconnect.com https://verify.walletconnect.com https://*.wtfeggs.com https://wtfeggs.com https://localhost:* http://localhost:* https://*.localhost:* http://*.localhost:* https://127.0.0.1:* http://127.0.0.1:*;"
        />
        <title>Create Next App</title>  {/* Указываем заголовок страницы прямо в Head */}
        <meta name="description" content="Generated by create next app" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
