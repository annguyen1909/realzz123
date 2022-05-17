const router = require('express').Router()
const experienceCtrl = require('../../controllers/userFunction/experienceController')

const auth = require('../../middleware/auth')

router.post('/experience', auth, experienceCtrl.createExperience)

router.patch('/experience/:id', auth, experienceCtrl.updateExperience)

router.delete('/experience/:id', auth, experienceCtrl.deleteExperience)

module.exports = router