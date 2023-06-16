
import express from 'express';

import TourRoute from './TourRoute'
import UserRoute from './UserRoute'
import ContactRoute from './ContactRoute'
import AppAdminRoute from './AppAdminRoute'


const router = express.Router();




router.use('/tours', TourRoute)
router.use('/users', UserRoute)
router.use('/contact', ContactRoute)
router.use('/appadmin', AppAdminRoute)

// export *  as v0Routes from './v0'
// export * as v1Routes from  './v1'

export default router;