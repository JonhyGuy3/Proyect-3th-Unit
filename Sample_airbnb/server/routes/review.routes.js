const express = require('express');
const router = express.Router();

const review = require('../controllers/review.controller');

router.get('/getall',review.getReviews);
router.get('/part6',review.getReview);
router.get('/part7',review.getReview2);
router.get('/part8',review.getReview3);
router.get('/part9',review.getReview4);



module.exports = router;