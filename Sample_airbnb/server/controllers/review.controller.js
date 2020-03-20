const Review = require('../models/listenandreviews');
const Customer = require('../models/customer');
const reviewCtrl = {};

reviewCtrl.getReview = async (req,res) => {
    const reviews = await Customer.aggregate([{
        $lookup:{
            from: "listenandreviews",
            localField:"_id",
            foreignField:"idcustomer",
            as: "part6"
        }},
    {$unwind:"$part6"},
    {$project:{
        "_id":1,
        "Address":1,
        "City":1,
        "Country":1,
        "District":1,
        "FirstName":1,
        "LastName":1,
        "part6.name":1,
        "part6.price":1,
        "part6.property_type":1,
        "part6.id_customer":1
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