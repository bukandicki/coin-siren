import { NextResponse } from 'next/server';
import { USER_TYPE } from '@/lib/types';

import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'lib/json', 'users.json');
    const fileContents = await fs.promises.readFile(filePath, 'utf8');

    const data: USER_TYPE[] = JSON.parse(fileContents);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
