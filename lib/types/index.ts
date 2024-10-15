import { NextResponse } from 'next/server';

export type USER_TYPE = {
  id: number;
  name: string;
  experiences: number;
  country: string;
  avatar: string;
  roles: string;
};

export type BENEFIT_TYPE = {
  id: number;
  title: string;
  description: string;
};

export type HIGHLIGHT_TYPE = {
  id: number;
  name: string;
  experiences: string;
  roles: string;
};

export type API_RESPONSE<T> = NextResponse<T> | NextResponse<{ error: string }>;
