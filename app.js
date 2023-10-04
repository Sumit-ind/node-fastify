const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose')

// Import routes
const userRoute = require('./routes/user.route')

const PORT = process.env.PORT || 5500;

// Register Routes
fastify.register(userRoute, { prefix: '/api/v1/users' })

// Connect DB
mongoose.connect('YOUR_MONGODB_STRING', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(_ => console.log('Connected DB...')).catch(err => console.log('err :>> ', err));

const app = async () => {
  await fastify.listen({ port: PORT })

  console.log(`Server running on the port ${PORT}`)
}

app()
