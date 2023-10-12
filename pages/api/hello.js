// See https://github.com/typicode/json-server#module

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
// Export the Server API
module.exports = server
