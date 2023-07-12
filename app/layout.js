import '@/styles/globals.css';
import Head from './head';
import Header from './header/page';
import Footer from './footer/page';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head title='Nested routes' icons='./favicon.ico'/>
      <body>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
