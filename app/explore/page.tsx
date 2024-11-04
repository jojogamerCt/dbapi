'use client';

import { useState } from 'react';
import { Character } from '../types';

export default function ExplorePage() {
  const [endpoint, setEndpoint] = useState('/api/v1/characters');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">API Explorer</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Request</h2>
              <select
                className="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:border-gray-600"
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
              >
                <option value="/api/v1/characters">Get all characters</option>
                <option value="/api/v1/characters/1">Get character by ID</option>
                <option value="/api/v1/sagas">Get all sagas</option>
                <option value="/api/v1/techniques">Get all techniques</option>
              </select>
              
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
                onClick={fetchData}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Send Request'}
              </button>
            </div>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Response</h2>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>
                  {response ? JSON.stringify(response, null, 2) : 'No response yet'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 