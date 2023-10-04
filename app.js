const fastify = require('fastify')({ logger: true });

const PORT = process.env.PORT || 5500;

fastify.get('/', (req, reply) => {
  const query = req.query;
  console.log('query :>> ', query);
  reply.code(200).send("Hello world!")
})

fastify.post("/", (req, reply) => {
  const body = req.body;
  console.log('body :>> ', body);
  reply.code(400).send([{ msg: "This is post" }])
})

fastify.put('/:id/:category', (req, reply) => {
  const params = req.params;

  console.log('params :>> ', params);
  reply.send({ msg: "This is put" })
})

fastify.delete('/', (req, reply) => {
  const query = req.query;
  console.log('query :>> ', query);
  reply.send({ msg: "This is delete" })
})

const app = async () => {
  await fastify.listen({ port: PORT })

  console.log(`Server running on the port ${PORT}`)
}

app()