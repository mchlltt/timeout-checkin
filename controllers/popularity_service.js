// service for getting resource category popularity
// this returns percentage (represented in decimal) of popularity of resource categories
module.exports = function(req, res, db) {
    var feelingId = parseInt(req.params.feeling_id);
    var feelingIdsCategoryLevel;
    var feelingIdsSuperCategoryLevel;
    db.Feeling.findOne({
        where: {
            id: feelingId
        },
        include: [
            { model: db.FeelingCategory }
        ]
    }).then(function(result) {
        db.Feeling.findAll({
            where: {
                FeelingCategoryId: result.FeelingCategory.id
            }
        }).then(function(result) {
            feelingIdsCategoryLevel = result.map(function(feeling) {
                return feeling.id;
            });
        });
        var superFeelingCategoryId = result.FeelingCategory.FeelingSuperCategoryId;
        return db.FeelingCategory.findAll({
            where: {
                FeelingSuperCategoryId: superFeelingCategoryId
            },
            include: [
                { model: db.Feeling }
            ]
        });
    }).then(function(result) {
        feelingIdsSuperCategoryLevel = result.map(function(category) {
            return category.Feelings.map(function(feeling) {
                return feeling.id;
            });
        }).reduce(function(a, b) {
            return a.concat(b);
        }, []);
        return;
    }).then(function() {
        var lowLevel, midLevel, highLevel;
        db.Transaction.findAll({
            where: {
                FeelingId: feelingId
            }
        }).then(function(result) {
            return lowLevel = result.map(function(r) {
                return r.ResourceId;
            });
        }).then(function() {
            return db.Transaction.findAll({
                where: {
                    FeelingId: feelingIdsCategoryLevel
                }
            }).then(function(result) {
                return midLevel = result.map(function(r) {
                    return r.ResourceId;
                });
            });
        }).then(function() {
            return db.Transaction.findAll({
                where: {
                    FeelingId: feelingIdsSuperCategoryLevel
                }
            }).then(function(result) {
                return highLevel = result.map(function(r) {
                    return r.ResourceId;
                });
            });
        }).then(function() {
            // res.json([lowLevel, midLevel, highLevel]);
            if (lowLevel.length >= 4) {
                return lowLevel;
            } else if (midLevel.length >= 4) {
                return midLevel;
            } else {
                return highLevel;
            }
        }).then(function(result) {
            return Promise.all(
                result.map(function(r) {
                    return db.Resource.findOne({
                        where: {
                            id: r
                        }
                    }).then(function(result) {
                        return result.ResourceCategoryId;
                    });
                })
            );
        }).then(function(result) {
            var totalCount = result.length;
            var counts = {};
            result.map(function(r) {
                counts[r] = (counts[r] || 0) + 1;
            });
            for (var key in counts) {
                if (counts.hasOwnProperty(key)) {
                    counts[key] = counts[key] / totalCount;
                }
            }
            res.json(counts);
        });
    });
};