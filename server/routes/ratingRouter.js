const router = require('express').Router()
const ratingCtrl = require('../controllers/ratingController')
const auth = require('../middleware/auth')

router.put('/ratings/user', auth, ratingCtrl.addUpdateCandidateRating)

router.put('/ratings/job', auth, ratingCtrl.addUpdatePostRating)

router.route('/ratings')
    .get(auth, ratingCtrl.getUserRating)
    .get(auth, ratingCtrl.getPostRating)


module.exports = router