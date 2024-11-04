import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: { filename: string } }
) {
  const filename = params.filename;
  const imagePath = path.join(process.cwd(), 'public', 'images', filename);

  // Check if file exists
  if (!fs.existsSync(imagePath)) {
    return NextResponse.json(
      { status: 404, error: "Image not found" },
      { status: 404 }
    );
  }

  // Get the host from the request
  const host = request.headers.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

  // Construct the full URL
  const imageUrl = `${protocol}://${host}/images/${filename}`;

  return NextResponse.json({
    status: 200,
    data: {
      url: imageUrl
    }
  });
} 