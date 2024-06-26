import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My first site ig</title>
        <link rel="icon" href="/site_favicon.ico" />
      </Head>

      <main>
        <Header title="Test!" />
        <p className="description">
          Go to your Github page (Just-a-k) and go to the "First-Netlify-Site-Test", then <code>pages/index.js</code> to edit this content.
          <a href="second_page.html">Second Page</a>

        </p>
      </main>

      <Footer />
    </div>
  )
}
