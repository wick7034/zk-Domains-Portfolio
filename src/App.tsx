import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import TypewriterComponent from 'typewriter-effect';
import Footer from './Footer';

const domains = [
  'zk-rollup.tech', 'zk-proof.io', 'zk-privacy.net', 'zk-scaling.com', 'zk-identity.org',
  'zk-layer2.io', 'zk-defi.net', 'zk-nft.org', 'zk-dao.tech', 'zk-smart-contracts.com',
  'zk-blockchain.io', 'zk-crypto.net', 'zk-security.tech', 'zk-privacy.com', 'zk-scaling.io',
  'zk-protocol.net', 'zk-dapp.org', 'zk-consensus.tech', 'zk-sharding.io', 'zk-bridge.net',
  'zk-wallet.org', 'zk-exchange.tech', 'zk-governance.io', 'zk-oracle.net', 'zk-staking.com',
  'zk-mining.tech', 'zk-token.io', 'zk-audit.net', 'zk-analytics.org', 'zk-compliance.tech',
  'zk-interop.io', 'zk-crosschain.net', 'zk-yield.org', 'zk-lending.tech', 'zk-borrowing.io',
  'zk-insurance.net', 'zk-derivatives.org', 'zk-synthetics.tech', 'zk-options.io', 'zk-futures.net',
  'zk-prediction.org', 'zk-gaming.tech', 'zk-metaverse.io', 'zk-social.net', 'zk-messaging.org',
  'zk-storage.tech', 'zk-compute.io', 'zk-ai.net', 'zk-iot.org', 'zk-quantum.tech'
];

const faqs = [
  { question: "What is Zero Knowledge technology?", answer: "Zero Knowledge (ZK) technology allows one party to prove to another that a statement is true without revealing any additional information." },
  { question: "Why invest in ZK domain names?", answer: "ZK domains are valuable assets in the growing field of blockchain and privacy tech, positioning you at the forefront of this innovative space." },
  { question: "How do I purchase a domain?", answer: "Click on any domain tile to visit its dedicated landing page, where you'll find contact information to inquire about purchasing." },
];

function App() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
      <header className="glass p-6 mb-8 w-full max-w-4xl">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold flex items-center">
            <Zap className="mr-2" /> zkNames
          </h1>
          <p className="text-xl">Zero Knowledge Domain Portfolio</p>
        </div>
      </header>

      <section className="glass p-8 mb-12 w-full max-w-4xl flex items-center justify-between">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">Discover the Future of Privacy and Scaling</h2>
          <div className="text-2xl text-purple-300">
            <TypewriterComponent
              options={{
                strings: ['Zero Knowledge Proofs', 'Blockchain Scaling', 'Privacy Solutions'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            alt="ZK Tech and Privacy"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>
      </section>

      <main className="w-full max-w-4xl mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {domains.map((domain) => (
            <Link
              key={domain}
              to={`/${domain}`}
              className="glass p-3 text-center transition-all duration-300 hover:scale-105 hover:bg-white hover:bg-opacity-20 cursor-pointer"
            >
              <h2 className="text-sm font-semibold">{domain}</h2>
            </Link>
          ))}
        </div>
      </main>

      <section className="glass p-8 mb-12 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="glass p-4">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;