const jwt = require('jsonwebtoken')

const verifyToken = async (req, reply) => {
  try {
    const bearerToken = req.headers['authorization'];
    if (!bearerToken) {
      return reply.code(401).send({ error: "No token provided" })
    }
    // Remove Bearer word
    const token = bearerToken.split(' ')[1]
    // Verify token
    const user = jwt.verify(token, 'SECRET')
    if (!user) {
      return reply.code(401).send({ error: "Unauthorized" })
    }

    return req.user = user
  } catch (error) {
    console.log('error :>> ', error);
    reply.code(401).send({ error: error?.message || "Unauthorized" })
  }
}

module.exports = { verifyToken }