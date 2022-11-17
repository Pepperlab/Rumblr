const express = require('express')
const searchController = require('../controller/searchController')

const router = express.Router()

router.post('/',
    searchController.getSearch,
    (req, res) => {
        return res.status(200).send(res.locals.search)
    }
)

module.exports = router;