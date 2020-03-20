const Review = require('../models/listenandreviews');
const Customer = require('../models/customer');
const reviewCtrl = {};

reviewCtrl.getReviews = async (req,res) => {
    const reviews = await Review.find();
    res.json(reviews);
};

reviewCtrl.getReview = async (req,res) => {
    const reviews = await Customer.aggregate([{
        $lookup:{
            from: "listenandreviews",
            localField:"_id",
            foreignField:"idcustomer",
            as: "part6"
        }}
    ]);
    res.json(reviews);
};

reviewCtrl.getReview2 = async (req,res) => {
    const reviews = await Review.find({"idcustomer":{$gt:0}
    });
    res.json(reviews);
}

reviewCtrl.getReview3 = async (req,res) => {
    const reviews = await Review.find({"property_type":"House"});
    res.json(reviews);
}

reviewCtrl.getReview4 = async (req,res) => {
    const reviews = await Review.find({"price":{$gte:100,$lte:1000}});
    res.json(reviews);
}

module.exports = reviewCtrl;