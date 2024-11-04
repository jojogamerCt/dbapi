import { Character, ApiResponse } from '@/app/types';
import { NextRequest } from 'next/server';
import { characters } from '@/app/data/characters';

interface Params {
  id: string;
}

type CharacterKey = keyof Character;
type NestedObject = { [key: string]: any };

export async function GET(
  req: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { searchParams } = new URL(req.url);
    const fields = searchParams.get('fields')?.split(',').map(field => decodeURIComponent(field));
    const id = parseInt(params.id);
    
    const character = characters.find(char => char.id === id);
    
    if (!character) {
      return Response.json(
        { status: 404, error: "Character not found" },
        { status: 404 }
      );
    }

    if (fields) {
      const filteredData = {} as Record<CharacterKey, any>;
      
      for (const field of fields) {
        if (field.includes('.')) {
          const [parent, child] = field.split('.') as [CharacterKey, string];
          
          if (!(parent in character)) continue;
          
          if (!(parent in filteredData)) {
            filteredData[parent] = {} as NestedObject;
          }
          
          const parentObj = character[parent] as NestedObject;
          if (child in parentObj) {
            filteredData[parent][child] = parentObj[child];
          }
        } else {
          const key = field as CharacterKey;
          if (key in character) {
            filteredData[key] = character[key];
          }
        }
      }

      return Response.json({
        status: 200,
        data: filteredData
      });
    }

    return Response.json({
      status: 200,
      data: character
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return Response.json(
      { status: 500, error: "Internal server error" },
      { status: 500 }
    );
  }
} 