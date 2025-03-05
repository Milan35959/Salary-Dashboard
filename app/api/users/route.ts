// app/api/user/route.ts
import { NextResponse } from 'next/server';

const user = {
  name: "Amélie Laurent",
  role: "UX Designer",
  birthday: "26 September 1998",
  phone: "+33 1 70 36 39 50",
  email: "amelielaurent88@gmail.com",
  citizenship: "France",
  city: "Paris",
  address: "95700 Roissy-en-France",
};

export async function GET() {
  return NextResponse.json(user);
}