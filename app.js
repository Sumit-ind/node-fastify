// Loading env
require('dotenv').config()

const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose')

// Import routes
const userRoute = require('./routes/user.route');
const { verifyToken } = require('./middleware/auth');

const PORT = process.env.PORT || 5500;

// Register Routes
fastify.register(userRoute, { prefix: '/api/v1/users' })

// Auth at the app level
// fastify.addHook('preHandler', verifyToken)

// Connect DB
mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(_ => console.log('Connected DB...')).catch(err => console.log('err :>> ', err));

const app = async () => {
  await fastify.listen({ port: PORT })

  console.log(`Server running on the port ${PORT}`)
}

app()
