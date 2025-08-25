"use client";

import { redirect } from 'next/navigation';

export default function Demo() {
  redirect('/features');
  return null;
}