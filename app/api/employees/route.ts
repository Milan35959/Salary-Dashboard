// app/api/employees/route.ts
import { NextResponse } from 'next/server';

const employees = [
  { name: 'Harry Bender', role: 'Head of Design', progress: 60, image: '/assets/user.png' },
  { name: 'Katy Fuller', role: 'Fullstack Engineer', progress: 45, image: '/assets/user2.png' },
  { name: 'Jonathan Kelly', role: 'Mobile Lead', progress: 85, image: '/assets/user1.png' },
  { name: 'Sarah Page', role: 'Network Engineer', progress: 65, image: '/assets/user4.png' },
  { name: 'Erica Wyatt', role: 'Head of Design', progress: 30, image: '/assets/user6.png' },
  { name: 'Michael Johnson', role: 'Backend Developer', progress: 75, image: '/assets/user3.png' },
  { name: 'Emma Wilson', role: 'UI Designer', progress: 55, image: '/assets/user7.png' },
  { name: 'David Chen', role: 'DevOps Engineer', progress: 40, image: '/assets/user5.png' },
];

export async function GET() {
  return NextResponse.json(employees);
}