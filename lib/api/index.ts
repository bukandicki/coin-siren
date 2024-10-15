import { BENEFIT_TYPE, HIGHLIGHT_TYPE, USER_TYPE } from '../types';

export async function getUsers(): Promise<USER_TYPE[]> {
  const res = await fetch('http://localhost:3000/api/users');
  if (!res.ok) throw new Error('Failed to fetch users data');

  return res.json();
}

export async function getHighlights(): Promise<HIGHLIGHT_TYPE[]> {
  const res = await fetch('http://localhost:3000/api/highlights');
  if (!res.ok) throw new Error('Failed to fetch highlights data');

  return res.json();
}

export async function getBenefits(): Promise<BENEFIT_TYPE[]> {
  const res = await fetch('http://localhost:3000/api/benefits');
  if (!res.ok) throw new Error('Failed to fetch benefits data');

  return res.json();
}
