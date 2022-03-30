import { Application } from 'express'

import v1Routes from './v1_routes'

const routes = (app: Application): void => {
  app.use('/api/v1', v1Routes)
}

export default routes
