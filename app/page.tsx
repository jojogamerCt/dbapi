'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-b from-orange-500 to-orange-600">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/dragon-balls-pattern.png"
            alt="Dragon Balls Pattern"
            fill
            className="opacity-10 object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6">DBAPI</h1>
          <p className="text-xl mb-8">
            All the Dragon Ball data you'll ever need in one place, 
            easily accessible through a modern REST API.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/docs"
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-100 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">API Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Characters"
              description="Access detailed information about all Dragon Ball characters, including power levels and transformations."
              endpoint="/api/v1/characters"
            />
            <FeatureCard
              title="Sagas"
              description="Explore all the sagas from Dragon Ball, Dragon Ball Z, GT, and Super."
              endpoint="/api/v1/sagas"
            />
            <FeatureCard
              title="Techniques"
              description="Discover all fighting techniques and special moves from the series."
              endpoint="/api/v1/techniques"
            />
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Try it Live!</h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <LiveDemo />
          </div>
        </div>
      </section>

      {/* Example Usage Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Quick Start</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <CodeExample />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description, endpoint }: {
  title: string;
  description: string;
  endpoint: string;
}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <code className="bg-gray-100 dark:bg-gray-700 p-2 rounded block">
        GET {endpoint}
      </code>
    </div>
  );
}

function CodeExample() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Fetch a character</h3>
        <button className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
          Copy
        </button>
      </div>
      <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
        <code>{`fetch('${baseUrl}/characters/1')
  .then(response => response.json())
  .then(data => console.log(data));`}</code>
      </pre>
      <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
        <code>{`// Example Response
{
  "status": 200,
  "data": {
    "id": 1,
    "name": "Son Goku",
    "race": "Saiyan",
    "powerLevel": {
      "base": 10000,
      "transformations": {
        "Super Saiyan": 500000,
        // ...
      }
    },
    // ...
  }
}`}</code>
      </pre>
    </div>
  );
}

function LiveDemo() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '/api/v1';
  const [url, setUrl] = useState(`${baseUrl}/characters/1`);
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleUrlClick = async (newUrl: string) => {
    try {
      setLoading(true);
      setUrl(newUrl);
      
      // Costruisci l'URL completo se necessario
      const fullUrl = newUrl.startsWith('http') ? newUrl : `${window.location.origin}${newUrl}`;
      
      const res = await fetch(fullUrl);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse({ 
        status: 500, 
        error: 'Failed to fetch data. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="apiUrl" className="text-sm font-semibold">
            Try an endpoint URL:
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              id="apiUrl"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 p-2 rounded border dark:bg-gray-800 dark:border-gray-700 font-mono text-sm"
              placeholder="Enter API URL"
            />
            <button
              onClick={() => handleUrlClick(url)}
              disabled={loading}
              className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {loading ? 'Loading...' : 'Try it!'}
            </button>
          </div>
        </div>
        
        <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg space-y-2">
          <h4 className="font-semibold">Example URLs to try:</h4>
          <ul className="space-y-1 text-sm font-mono">
            {/* Characters */}
            <li>
              <button 
                onClick={() => handleUrlClick(`${baseUrl}/characters`)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-400"
              >
                {baseUrl}/characters
              </button>
              <span className="text-gray-600 dark:text-gray-400 ml-2">- Get all characters</span>
            </li>
            <li>
              <button 
                onClick={() => handleUrlClick(`${baseUrl}/characters/1`)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-400"
              >
                {baseUrl}/characters/1
              </button>
              <span className="text-gray-600 dark:text-gray-400 ml-2">- Get Base Goku</span>
            </li>
            <li>
              <button 
                onClick={() => handleUrlClick(`${baseUrl}/characters/2`)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-400"
              >
                {baseUrl}/characters/2
              </button>
              <span className="text-gray-600 dark:text-gray-400 ml-2">- Get Great Ape Goku</span>
            </li>
            <li>
              <button 
                onClick={() => handleUrlClick(`${baseUrl}/characters/3`)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-400"
              >
                {baseUrl}/characters/3
              </button>
              <span className="text-gray-600 dark:text-gray-400 ml-2">- Get Kaio-ken Goku</span>
            </li>
            <li>
              <button 
                onClick={() => handleUrlClick(`${baseUrl}/characters/4`)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-400"
              >
                {baseUrl}/characters/4
              </button>
              <span className="text-gray-600 dark:text-gray-400 ml-2">- Get Kaio-ken x2 Goku</span>
            </li>
            <li>
              <button 
                onClick={() => handleUrlClick(`${baseUrl}/characters/5`)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-400"
              >
                {baseUrl}/characters/5
              </button>
              <span className="text-gray-600 dark:text-gray-400 ml-2">- Get Kaio-ken x3 Goku</span>
            </li>
            <li>
              <button 
                onClick={() => handleUrlClick(`${baseUrl}/characters/6`)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-400"
              >
                {baseUrl}/characters/6
              </button>
              <span className="text-gray-600 dark:text-gray-400 ml-2">- Get Kaio-ken x4 Goku</span>
            </li>
            <li>
              <button 
                onClick={() => handleUrlClick(`${baseUrl}/characters/7`)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-400"
              >
                {baseUrl}/characters/7
              </button>
              <span className="text-gray-600 dark:text-gray-400 ml-2">- Get Kaio-ken x10 Goku</span>
            </li>
            <li>
              <button 
                onClick={() => handleUrlClick(`${baseUrl}/characters/8`)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-400"
              >
                {baseUrl}/characters/8
              </button>
              <span className="text-gray-600 dark:text-gray-400 ml-2">- Get Kaio-ken x20 Goku</span>
            </li>
            <li>
              <button 
                onClick={() => handleUrlClick(`${baseUrl}/characters/9`)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-400"
              >
                {baseUrl}/characters/9
              </button>
              <span className="text-gray-600 dark:text-gray-400 ml-2">- Get False Super Saiyan Goku</span>
            </li>
            <li>
              <button 
                onClick={() => handleUrlClick(`${baseUrl}/characters/10`)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-400"
              >
                {baseUrl}/characters/10
              </button>
              <span className="text-gray-600 dark:text-gray-400 ml-2">- Get Super Saiyan Goku</span>
            </li>

            {/* Field Filtering Examples */}
            <li>
              <button 
                onClick={() => handleUrlClick(`${baseUrl}/characters/1?fields=name,race,powerLevel.base`)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-400"
              >
                {baseUrl}/characters/1?fields=name,race,powerLevel.base
              </button>
              <span className="text-gray-600 dark:text-gray-400 ml-2">- Get specific fields</span>
            </li>
            <li>
              <button 
                onClick={() => handleUrlClick(`${baseUrl}/characters/7?fields=techniques,transformations`)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-400"
              >
                {baseUrl}/characters/7?fields=techniques,transformations
              </button>
              <span className="text-gray-600 dark:text-gray-400 ml-2">- Get Kaio-ken x10 techniques and transformations</span>
            </li>

            {/* Images */}
            <li>
              <button 
                onClick={() => handleUrlClick(`${baseUrl}/images/goku.jpg`)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-400"
              >
                {baseUrl}/images/goku.jpg
              </button>
              <span className="text-gray-600 dark:text-gray-400 ml-2">- Get image URL for embedding</span>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">URL Encoding Tips:</h4>
          <ul className="space-y-1 text-sm">
            <li>• Use <code>%20</code> for spaces</li>
            <li>• Use <code>%2D</code> for hyphens (optional)</li>
            <li>• JavaScript's <code>encodeURIComponent()</code> will handle this automatically</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <pre className="overflow-x-auto">
          <code>
            {response ? JSON.stringify(response, null, 2) : 'Click "Try it!" to see the response'}
          </code>
        </pre>
      </div>
    </div>
  );
}
