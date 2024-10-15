import { NextResponse } from 'next/server';
import { API_RESPONSE, HIGHLIGHT_TYPE } from '@/lib/types';

import fs from 'fs';
import path from 'path';

export async function GET(): Promise<API_RESPONSE<HIGHLIGHT_TYPE>> {
  try {
    const filePath = path.join(process.cwd(), 'lib/json', 'highlights.json');

    const fileContents = await fs.promises.readFile(filePath, 'utf8');

    const data = JSON.parse(fileContents);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
