import express, { Application } from 'express'

// Initialize the app
const app: Application = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes

// Start the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})
