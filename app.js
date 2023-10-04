const fastify = require('fastify')({ logger: true });

const PORT = process.env.PORT || 5500;

const app = async () => {
  await fastify.listen({ port: PORT })

  console.log(`Server running on the port ${PORT}`)
}

app()