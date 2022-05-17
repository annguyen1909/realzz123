const router = require('express').Router()
const educationCtrl = require('../../controllers/userFunction/educationController')

const auth = require('../../middleware/auth')

router.post('/education', auth, educationCtrl.createEducation)

router.patch('/education/:id', auth, educationCtrl.updateEducation)

router.delete('/education/:id', auth, educationCtrl.deleteEducation)

module.exports = router