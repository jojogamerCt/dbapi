# DBAPI - Dragon Ball REST API

<div align="center">
  <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#FF6B00" stroke="#FFA500" strokeWidth="2"/>
    <path
      d="M35 35 L45 45 M55 35 L65 45 M45 55 L35 65 M65 55 L55 65"
      stroke="#FFD700"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <text
      x="50"
      y="54"
      fontSize="16"
      fontWeight="bold"
      fill="white"
      textAnchor="middle"
      fontFamily="monospace"
    >
      API
    </text>
    <text
      x="50"
      y="42"
      fontSize="16"
      fontWeight="bold"
      fill="white"
      textAnchor="middle"
      fontFamily="monospace"
    >
      DB
    </text>
  </svg>
  <br />
  <strong>The Ultimate Dragon Ball REST API</strong>
  <p>A comprehensive REST API providing detailed information about the Dragon Ball universe</p>
</div>

<div align="center">
  <a href="https://dbapi.vercel.app/docs">Documentation</a> •
  <a href="https://dbapi.vercel.app/explore">Try it Live</a> •
  <a href="#features">Features</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#endpoints">Endpoints</a>
</div>

## Overview

DBAPI is a modern REST API that provides detailed information about Dragon Ball characters, their transformations, techniques, and power levels. Built with Next.js and TypeScript, it offers a robust and type-safe way to access Dragon Ball data for your applications.

## Target Audience

- 🎮 Game Developers creating Dragon Ball games or applications
- 🌐 Web Developers building Dragon Ball fan sites
- 📱 Mobile App Developers working on Dragon Ball-related apps
- 🤖 Discord Bot Developers needing Dragon Ball data
- 🎨 Content Creators requiring accurate Dragon Ball information

## Features

- 🔥 **Detailed Character Data**: Comprehensive information about characters including power levels, techniques, and transformations
- 🎯 **Field Filtering**: Request only the specific data you need
- 🖼️ **Image Support**: Get embeddable URLs for character images
- 📚 **Rich Documentation**: Clear, detailed documentation with examples
- ⚡ **Fast & Reliable**: Built on modern technology stack for optimal performance
- 🔒 **Type Safe**: Full TypeScript support with type definitions

## Getting Started

```bash
# Clone the repository
git clone https://github.com/jojogamerCt/dbapi.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run the development server
npm run dev
```

## Endpoints

### Characters

```http
GET /api/v1/characters
GET /api/v1/characters/:id
```

### Field Filtering

```http
GET /api/v1/characters/1?fields=name,race,powerLevel.base
GET /api/v1/characters/1?fields=transformations.Super%20Saiyan
```

### Images

```http
GET /api/v1/images/:filename
```

## Example Usage

```javascript
// Fetch a character
fetch('https://localhost:3000/api/v1/characters/1')
  .then(response => response.json())
  .then(data => console.log(data));

// Get specific fields
fetch('https://localhost:3000/api/v1/characters/1?fields=name,powerLevel.base')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Available Characters

1. Son Goku (Base Form)
2. Great Ape Goku
3. Kaio-ken Goku
4. Kaio-ken x2 Goku
5. Kaio-ken x3 Goku
6. Kaio-ken x4 Goku
7. Kaio-ken x10 Goku
8. Kaio-ken x20 Goku
9. False Super Saiyan Goku
10. Super Saiyan Goku

## Response Format

```json
{
  "status": 200,
  "data": {
    "id": 1,
    "name": "Son Goku",
    "race": "Saiyan",
    "powerLevel": {
      "base": 10000,
      "transformations": {
        "Super Saiyan": 500000
      }
    }
    // ... more fields
  }
}
```

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Data sourced from official Dragon Ball media
- Built with [Next.js](https://nextjs.org/)
- Deployed on [Vercel](https://vercel.com)

---

<div align="center">
  Made with ❤️ by Dragon Ball fans, for Dragon Ball fans
</div>