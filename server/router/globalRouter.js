const express = require('express')
const globalController = require('../controller/globalController')

const router = express.Router();

router.get('/daily',
    globalController.getDaily,
    (req, res) => {
        return res.status(200).send(res.locals.daily)
    }
);

router.get('/weekly',
    globalController.getWeekly,
    (req, res) => {
        return res.status(200).send(res.locals.weekly)
    }
);

router.get('/monthly',
    globalController.getMonthly,
    (req, res) => {
        return res.status(200).send(res.locals.monthly)
    }
);

router.get('/yearly',
    globalController.getYearly,
    (req, res) => {
        return res.status(200).send(res.locals.yearly)
    }
);

module.exports = router