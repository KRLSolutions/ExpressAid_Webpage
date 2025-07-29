import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI
const DB_NAME = process.env.DB_NAME
const COLLECTION_NAME = process.env.COLLECTION_NAME

export async function DELETE(request: NextRequest) {
  try {
    const { name, phoneNumber } = await request.json()
    
    console.log('🔍 Delete request received:', { name, phoneNumber })
    
    // Validate required fields
    if (!name || !phoneNumber) {
      return NextResponse.json({ error: 'Name and phone number are required' }, { status: 400 })
    }
    
    // Connect to MongoDB
    const client = new MongoClient(MONGODB_URI!)
    await client.connect()
    const db = client.db(DB_NAME)
    
    // First, let's search for the user to see what's in the database
    const user = await db.collection(COLLECTION_NAME!).findOne({ 
      name: name,
      phoneNumber: phoneNumber
    })
    
    console.log('🔍 User found in database:', user)
    
    if (!user) {
      // Let's also try to find any users with similar data to debug
      const allUsers = await db.collection(COLLECTION_NAME!).find({}).toArray()
      console.log('🔍 All users in database:', allUsers.map(u => ({ name: u.name, phoneNumber: u.phoneNumber })))
      
      await client.close()
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    
    // Find and delete user by name and phoneNumber
    const result = await db.collection(COLLECTION_NAME!).deleteOne({ 
      name: name,
      phoneNumber: phoneNumber
    })
    
    await client.close()
    
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    
    return NextResponse.json({ message: 'User deleted successfully' })
    
  } catch (error) {
    console.error('Delete user error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 