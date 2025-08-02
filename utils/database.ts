import { MongoClient, Db } from 'mongodb'

const MONGODB_URI = 'mongodb+srv://admin:LHONNmuaD6FzhAGO@cluster0.hibzkks.mongodb.net/'
const DB_NAME = 'expressaid'

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export interface Feedback {
  id: string
  name: string
  type: 'bug' | 'feature' | 'improvement' | 'general'
  subject: string
  description: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  timestamp: string
  status: 'new' | 'in-progress' | 'resolved'
  images?: string[]
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = new MongoClient(MONGODB_URI)
  await client.connect()
  
  const db = client.db(DB_NAME)
  
  cachedClient = client
  cachedDb = db
  
  return { client, db }
}

export async function saveFeedback(feedback: Omit<Feedback, 'id' | 'timestamp' | 'status'>): Promise<Feedback> {
  const { db } = await connectToDatabase()
  
  const newFeedback: Feedback = {
    ...feedback,
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    status: 'new'
  }
  
  await db.collection('feedback').insertOne(newFeedback)
  return newFeedback
}

export async function getFeedback(): Promise<Feedback[]> {
  const { db } = await connectToDatabase()
  
  const feedback = await db.collection('feedback')
    .find({})
    .sort({ timestamp: -1 })
    .toArray()
  
  return feedback.map(doc => ({
    id: doc.id,
    name: doc.name,
    type: doc.type,
    subject: doc.subject,
    description: doc.description,
    priority: doc.priority,
    timestamp: doc.timestamp,
    status: doc.status,
    images: doc.images || []
  })) as Feedback[]
}

export async function updateFeedbackStatus(id: string, status: Feedback['status']): Promise<void> {
  const { db } = await connectToDatabase()
  
  await db.collection('feedback').updateOne(
    { id },
    { $set: { status } }
  )
}

export async function deleteFeedback(id: string): Promise<void> {
  const { db } = await connectToDatabase()
  
  await db.collection('feedback').deleteOne({ id })
} 