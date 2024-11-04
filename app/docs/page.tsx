import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation - DBAPI',
  description: 'Learn how to use the Dragon Ball API',
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-3">
            <nav className="sticky top-24 space-y-4">
              <a href="#introduction" className="block hover:text-orange-500">Introduction</a>
              <a href="#authentication" className="block hover:text-orange-500">Authentication</a>
              <a href="#characters" className="block hover:text-orange-500">Characters</a>
              <a href="#images" className="block hover:text-orange-500">Images</a>
              <a href="#filtering" className="block hover:text-orange-500">Filtering</a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="col-span-9 space-y-12">
            <section id="introduction">
              <h2 className="text-3xl font-bold mb-6">Introduction</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Welcome to the Dragon Ball API! This API provides detailed information about the Dragon Ball universe,
                including characters and their transformations.
              </p>
              <div className="mt-4 p-4 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <h4 className="font-bold">Base URL</h4>
                <code className="block mt-2">
                  {process.env.NEXT_PUBLIC_API_URL}
                </code>
              </div>
            </section>

            <section id="authentication">
              <h2 className="text-3xl font-bold mb-6">Authentication</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Currently, the API is free to use without authentication.
              </p>
            </section>

            <section id="characters">
              <h2 className="text-3xl font-bold mb-6">Characters</h2>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Get All Characters</h3>
              <EndpointExample
                method="GET"
                endpoint="/characters"
                description="Returns a list of all available characters"
              />

              <h3 className="text-xl font-bold mt-8 mb-4">Get Character by ID</h3>
              <EndpointExample
                method="GET"
                endpoint="/characters/1"
                description="Returns detailed information about a specific character"
              />
              
              <div className="mt-4">
                <h4 className="font-bold mb-2">Available Characters:</h4>
                <ul className="list-disc list-inside">
                  <li>ID 1: Son Goku</li>
                  <li>ID 2: Great Ape Goku</li>
                  <li>ID 3: Kaio-ken Goku</li>
                  <li>ID 4: Kaio-ken x2 Goku</li>
                  <li>ID 5: Kaio-ken x3 Goku</li>
                  <li>ID 6: Kaio-ken x4 Goku</li>
                  <li>ID 7: Kaio-ken x10 Goku</li>
                  <li>ID 8: Kaio-ken x20 Goku</li>
                  <li>ID 9: False Super Saiyan Goku</li>
                  <li>ID 10: Super Saiyan Goku</li>
                </ul>
              </div>
            </section>

            <section id="images">
              <h2 className="text-3xl font-bold mb-6">Images</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get embeddable URLs for character images.
              </p>
              <EndpointExample
                method="GET"
                endpoint="/images/goku.jpg"
                description="Returns an embeddable URL for the specified image"
              />
            </section>

            <section id="filtering">
              <h2 className="text-3xl font-bold mb-6">Field Filtering</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You can request specific fields using the fields query parameter.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Examples:</h3>
              <div className="space-y-4">
                <EndpointExample
                  method="GET"
                  endpoint="/characters/1?fields=name,race,powerLevel.base"
                  description="Get only specific fields"
                />
                
                <EndpointExample
                  method="GET"
                  endpoint="/characters/1?fields=transformations.Super%20Saiyan"
                  description="Get specific transformation data"
                />
                
                <EndpointExample
                  method="GET"
                  endpoint="/characters/1?fields=techniques.Kamehameha"
                  description="Get specific technique data"
                />
              </div>

              <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                <h4 className="font-bold mb-2">URL Encoding Tips:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Use <code>%20</code> for spaces</li>
                  <li>Use <code>%2D</code> for hyphens (optional)</li>
                  <li>Use JavaScript's <code>encodeURIComponent()</code> for automatic encoding</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function EndpointExample({ method, endpoint, description }: {
  method: string;
  endpoint: string;
  description: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  
  return (
    <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
      <div className="bg-gray-50 dark:bg-gray-800 p-4 border-b dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <div className="p-4 font-mono text-sm">
        <span className="text-green-600 dark:text-green-400">{method}</span>{' '}
        <span>{baseUrl}{endpoint}</span>
      </div>
    </div>
  );
} 