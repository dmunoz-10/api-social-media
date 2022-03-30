import repl from 'repl'
import User from './models/user'

const replServer = repl.start({ prompt: 'Node > ' })

replServer.context.User = User
