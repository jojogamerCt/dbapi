import { Character, ApiResponse } from '@/app/types';
import { NextRequest, NextResponse } from 'next/server';
import { characters } from '@/app/data/characters';

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { searchParams } = new URL(request.url);
  const fields = searchParams.get('fields')?.split(',').map(field => decodeURIComponent(field));
  const id = parseInt(context.params.id);
  
  const character = characters.find(char => char.id === id);
  
  if (character) {
    if (fields) {
      const filteredData: Partial<Character> = {};
      fields.forEach(field => {
        if (field.includes('.')) {
          // Handle nested fields (e.g., powerLevel.base)
          const [parent, child] = field.split('.');
          if (!filteredData[parent as keyof Character]) {
            filteredData[parent as keyof Character] = {} as any;
          }
          const parentObj = character[parent as keyof Character] as any;
          if (parentObj && child in parentObj) {
            (filteredData[parent as keyof Character] as any)[child] = parentObj[child];
          }
        } else {
          // Handle top-level fields
          if (field in character) {
            filteredData[field as keyof Character] = character[field as keyof Character];
          }
        }
      });

      return NextResponse.json({
        status: 200,
        data: filteredData
      });
    }

    return NextResponse.json({
      status: 200,
      data: character
    });
  }

  return NextResponse.json(
    { status: 404, error: "Character not found" },
    { status: 404 }
  );
} 