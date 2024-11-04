import { Character } from '@/app/types';
import { characters } from '@/app/data/characters';

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function GET(
  request: Request,
  pageProps: PageProps
) {
  try {
    const { searchParams } = new URL(request.url);
    const fields = searchParams.get('fields')?.split(',').map(field => decodeURIComponent(field));
    const id = parseInt(pageProps.params.id);
    
    const character = characters.find(char => char.id === id);
    
    if (!character) {
      return new Response(JSON.stringify({
        status: 404,
        error: "Character not found"
      }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
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

      return new Response(JSON.stringify({
        status: 200,
        data: filteredData
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify({
      status: 200,
      data: character
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