const { Router } = require('express');
const router = Router();

const { login } = require('../controllers/Auth/login')

const botsetting = require('../controllers/bot/setting')
const supervisor = require('../controllers/bot/supervisor')
const ceo = require('../controllers/ceo/user')



const job = require('../controllers/job/date')

const { authCheck, isAdmin, isCeo } = require('../middlewares/auth')

router.get('/', (req, res) => {
    res.json({ success: "ok" })
})

router.post('/login', login)

router.post('/bot/job/create', authCheck, isCeo, job.create)
router.get('/bot/setting', authCheck, isAdmin, botsetting.GetSetting)
router.patch('/bot/setting', authCheck, isCeo, botsetting.update)
router.put('/bot/chatId', authCheck, isCeo, botsetting.updateChatID)
router.get('/bot/left/:chatId', authCheck, isCeo, supervisor.left_Supervisor)

router.post('/supervisor/create', authCheck, isCeo, supervisor.createSupervisor)
router.get('/getAllSupervisor', authCheck, isAdmin, supervisor.GetSupervisor)

router.get('/byDate', authCheck, isAdmin, job.byDate)
router.get('/byDateSupervisor/:id', authCheck, isAdmin, job.byDateSupervisor)
router.get('/byMonth', authCheck, isCeo, job.byMonth)

router.get('/user', authCheck, isCeo, ceo.AllUser)
router.post('/user', authCheck, isCeo, ceo.addUser)
router.put('/editUser/:id', authCheck, isCeo, ceo.editUser)
router.delete('/user/deleteUser/:id', authCheck, isCeo, ceo.destoryUser)


module.exports = router;