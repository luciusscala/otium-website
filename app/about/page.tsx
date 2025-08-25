"use client";

import { redirect } from 'next/navigation';

export default function About() {
  redirect('/features');
  return null;
}