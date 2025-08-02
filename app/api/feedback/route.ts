import { NextRequest, NextResponse } from 'next/server'
import { saveFeedback, getFeedback, updateFeedbackStatus, deleteFeedback } from '@/utils/database'

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

    // Save feedback to database
    const feedback = await saveFeedback({
      name,
      type,
      subject,
      description,
      priority,
      images: images || []
    })

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
  try {
    const feedback = await getFeedback()
    return NextResponse.json(feedback, { status: 200 })
  } catch (error) {
    console.error('Error fetching feedback:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, status } = body

    if (!id || !status) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    await updateFeedbackStatus(id, status)
    return NextResponse.json(
      { message: 'Feedback status updated successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error updating feedback:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Missing feedback ID' },
        { status: 400 }
      )
    }

    await deleteFeedback(id)
    return NextResponse.json(
      { message: 'Feedback deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting feedback:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 