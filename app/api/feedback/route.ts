import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, type, subject, description, priority, images } = body

    // Validate required fields
    if (!name || !type || !subject || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create feedback object with timestamp
    const feedback = {
      id: Date.now().toString(),
      name,
      type,
      subject,
      description,
      priority,
      images: images || [],
      timestamp: new Date().toISOString(),
      status: 'new'
    }

    // In a real application, you would save this to a database
    // For now, we'll just log it and return success
    console.log('Feedback received:', feedback)

    // You could also send an email notification here
    // await sendFeedbackNotification(feedback)

    return NextResponse.json(
      { 
        message: 'Feedback submitted successfully',
        feedbackId: feedback.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing feedback:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // In a real application, this would fetch feedback from a database
  // For now, return a simple response
  return NextResponse.json(
    { message: 'Feedback endpoint is working' },
    { status: 200 }
  )
} 