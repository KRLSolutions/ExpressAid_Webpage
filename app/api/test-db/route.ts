import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/utils/database'

export async function GET() {
  try {
    const { db } = await connectToDatabase()
    
    // Test the connection by listing collections
    const collections = await db.listCollections().toArray()
    
    return NextResponse.json({
      message: 'Database connection successful',
      collections: collections.map(col => col.name),
      database: db.databaseName
    }, { status: 200 })
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json({
      error: 'Database connection failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 