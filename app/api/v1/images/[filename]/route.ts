import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

export default async function GET(
  request: NextRequest,
  params: Promise<{ params: { filename: string } }>
) {
  try {
    // Await the params
    const { params: resolvedParams } = await params;
    const filename = resolvedParams.filename;
    const imagePath = path.join(process.cwd(), 'public', 'images', filename);

    // Check if file exists
    if (!fs.existsSync(imagePath)) {
      return new Response(JSON.stringify({
        status: 404,
        error: "Image not found"
      }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Get the host from the request
    const host = request.headers.get('host');
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

    // Construct the full URL
    const imageUrl = `${protocol}://${host}/images/${filename}`;

    return new Response(JSON.stringify({
      status: 200,
      data: {
        url: imageUrl
      }
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({
      status: 500,
      error: "Internal server error"
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 