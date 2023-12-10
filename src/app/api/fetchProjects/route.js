import { NextResponse } from 'next/server'
import project from '@/app/api/fetchProjects/projects.json'

export async function GET() {

    return NextResponse.json({project}, {status: 200})

}