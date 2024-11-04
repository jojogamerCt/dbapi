import { Character, ApiResponse } from '@/app/types';
import { NextResponse } from 'next/server';
import { characters } from '@/app/data/characters';

export async function GET() {
  const response: ApiResponse<Character[]> = {
    status: 200,
    data: characters
  };
  
  return NextResponse.json(response);
} 