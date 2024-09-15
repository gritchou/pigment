import React from 'react';
import type { AppProps } from 'next/app'
import './globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-center text-2xl font-bold">Weather Dashboard</h1>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Weather App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
