// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;
const COLLECTION_NAME = process.env.COLLECTION_NAME;

// Validate required environment variables
if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI environment variable is required');
    console.log('📝 Please create a .env file with your MongoDB connection string');
    console.log('📝 Example: MONGODB_URI=mongodb://localhost:27017/expressaid');
    process.exit(1);
}

if (!DB_NAME) {
    console.error('❌ DB_NAME environment variable is required');
    console.log('📝 Please create a .env file with your database name');
    console.log('📝 Example: DB_NAME=expressaid');
    process.exit(1);
}

if (!COLLECTION_NAME) {
    console.error('❌ COLLECTION_NAME environment variable is required');
    console.log('📝 Please create a .env file with your collection name');
    console.log('📝 Example: COLLECTION_NAME=users');
    process.exit(1);
}

let db;

// Connect to MongoDB
async function connectToMongoDB() {
    try {
        const client = new MongoClient(MONGODB_URI);
        await client.connect();
        db = client.db(DB_NAME);
        console.log('Connected to MongoDB database');
        
        // Try to create index on email for uniqueness, handle existing data
        try {
            await db.collection(COLLECTION_NAME).createIndex({ email: 1 }, { unique: true, sparse: true });
            console.log('MongoDB indexes created');
        } catch (indexError) {
            console.log('Index creation skipped (may already exist or have conflicting data)');
        }
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

// Middleware
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes

// Delete User
app.delete('/api/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        
        // Try to delete by ObjectId first (for MongoDB ObjectIds)
        let result;
        if (ObjectId.isValid(userId)) {
            result = await db.collection(COLLECTION_NAME).deleteOne({ _id: new ObjectId(userId) });
        }
        
        // If not found by ObjectId, try to delete by other fields
        if (!result || result.deletedCount === 0) {
            // Try to delete by userId field
            result = await db.collection(COLLECTION_NAME).deleteOne({ userId: userId });
        }
        
        if (!result || result.deletedCount === 0) {
            // Try to delete by email
            result = await db.collection(COLLECTION_NAME).deleteOne({ email: userId });
        }
        
        if (!result || result.deletedCount === 0) {
            // Try to delete by name
            result = await db.collection(COLLECTION_NAME).deleteOne({ name: userId });
        }
        
        if (!result || result.deletedCount === 0) {
            // Try to delete by phone number
            result = await db.collection(COLLECTION_NAME).deleteOne({ phoneNumber: userId });
        }
        
        if (!result || result.deletedCount === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        res.json({ message: 'User deleted successfully' });
        
    } catch (error) {
        console.error('Delete user error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Route handlers for specific pages
app.get('/terms-and-conditions', (req, res) => {
    res.sendFile(path.join(__dirname, 'terms-and-conditions.html'));
});

app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'privacy-policy.html'));
});

app.get('/about-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'about-us.html'));
});

app.get('/delete', (req, res) => {
    res.sendFile(path.join(__dirname, 'delete-user.html'));
});

// Catch-all route for SPA routing (similar to staticwebapp.config.json)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Initialize MongoDB connection and start server
async function startServer() {
    await connectToMongoDB();
    
    app.listen(PORT, () => {
        console.log(`🚀 ExpressAid server running on port ${PORT}`);
        console.log(`📱 Local: http://localhost:${PORT}`);
        console.log(`🌐 Network: http://0.0.0.0:${PORT}`);
        console.log(`🗄️  Connected to MongoDB: ${DB_NAME}`);
    });
}

startServer().catch(console.error);

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    process.exit(0);
}); 