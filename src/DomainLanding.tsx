import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';

const similarDomains = [
  'zk-smart-contracts.com',
  'zk-layer2.io',
  'zk-defi.net',
  'zk-nft.org',
  'zk-dao.tech',
];

function DomainLanding() {
  const { domain } = useParams();

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
      <Link to="/" className="self-start glass p-2 mb-8 flex items-center hover:bg-white hover:bg-opacity-20">
        <ArrowLeft className="mr-2" /> Back to Portfolio
      </Link>

      <main className="w-full max-w-4xl">
        <h1 className="text-6xl font-bold mb-8 text-center">{domain}</h1>

        <section className="glass p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Interested in this domain?</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 bg-white bg-opacity-10 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 bg-white bg-opacity-10 rounded"
            />
            <input
              type="tel"
              placeholder="Your Mobile"
              className="w-full p-2 bg-white bg-opacity-10 rounded"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-2 bg-white bg-opacity-10 rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full p-2 bg-purple-600 rounded hover:bg-purple-700 transition-colors"
            >
              Send Inquiry
            </button>
          </form>
        </section>

        <section className="glass p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Or Checkout With</h2>
          <div className="flex justify-center space-x-4">
            <a
              href={`https://www.godaddy.com/domainsearch/find?domainToCheck=${domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              GoDaddy
            </a>
            <a
              href={`https://sedo.com/search/details/?domain=${domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Sedo
            </a>
          </div>
        </section>

        <section className="glass p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Similar Domains</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {similarDomains.map((domain) => (
              <Link
                key={domain}
                to={`/${domain}`}
                className="glass p-3 text-center transition-all duration-300 hover:scale-105 hover:bg-white hover:bg-opacity-20 cursor-pointer"
              >
                <h2 className="text-sm font-semibold">{domain}</h2>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default DomainLanding;