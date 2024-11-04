import { Character } from '@/app/types';
import { characters } from '@/app/data/characters';
import { NextResponse } from 'next/server';

interface RouteParams {
  params: {
    id: string;
  };
}

export const GET = async (request: Request, { params }: RouteParams) => {
  try {
    const { searchParams } = new URL(request.url);
    const fields = searchParams.get('fields')?.split(',').map(field => decodeURIComponent(field));
    const id = parseInt(params.id);
    
    const character = characters.find(char => char.id === id);
    
    if (!character) {
      return NextResponse.json(
        { status: 404, error: "Character not found" },
        { status: 404 }
      );
    }

    if (fields) {
      const filteredData = {} as Record<keyof Character, any>;
      
      for (const field of fields) {
        if (field.includes('.')) {
          const [parent, child] = field.split('.');
          const parentKey = parent as keyof Character;
          
          if (!(parentKey in character)) continue;
          
          if (!(parentKey in filteredData)) {
            filteredData[parentKey] = {};
          }
          
          const parentObj = character[parentKey] as Record<string, any>;
          if (child in parentObj) {
            filteredData[parentKey][child] = parentObj[child];
          }
        } else {
          const key = field as keyof Character;
          if (key in character) {
            filteredData[key] = character[key];
          }
        }
      }

      return NextResponse.json({
        status: 200,
        data: filteredData
      });
    }

    return NextResponse.json({
      status: 200,
      data: character
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { status: 500, error: "Internal server error" },
      { status: 500 }
    );
  }
};