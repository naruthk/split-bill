import Head from 'next/head'

import Layout from "../components/layout";

export default function Settings() {
  return (
    <Layout pageTitle="Settings">
      <div>
        <Head>
          <title>Settings | Split Bill</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <button>Reset</button>
          <button>Save</button>

          <section>
            <h2>Currency</h2>
            <p>Mode:</p>
            <select>
              <option>USD</option>
              <option>THB</option>
            </select>
          </section>

          <section>
            <h2>Tax</h2>
            <p>Mode:</p>
            <select>
              <option>%</option>
              <option>Amount</option>
              <option>+ Vat</option>
              <option>Net</option>
            </select>
            <p>Percentage: <input type="number" placeholder="0.00" /></p>
          </section>

          <section>
            <h2>Service Charge</h2>
            <p>Mode:</p>
            <select>
              <option>%</option>
              <option>Amount</option>
            </select>
            <p>Percentage: <input type="number" placeholder="0.00" /></p>
          </section>
        </main>
      </div>
    </Layout>
  )
}
