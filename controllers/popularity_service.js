// service for getting resource category popularity
// this returns percentage (represented in decimal) of popularity of resource categories

var database, request, response, feelingId, feelingIdsCategoryLevel,
    feelingIdsSuperCategoryLevel, lowLevel, midLevel, highLevel;

module.exports = function(req, res, db) {
    database = db;
    request = req;
    response = res;
    startResponding();
};

function startResponding() {
    feelingId = parseInt(request.params.feeling_id);
    getFeelingCategories()
        .then(function(result) {
            getFeelingsForFeelingCategory(result);
            return getFeelingsForSuperFeelingCategory(result);
        }).then(function(result) {
            return setSuperCategoryLevel(result);
        }).then(function() {
            return findResponse();
        });
}

function getFeelingCategories() {
    return database.Feeling.findOne({
        where: { id: feelingId },
        include: [{ model: database.FeelingCategory }]
    });
}

function getFeelingsForFeelingCategory(result) {
    database.Feeling.findAll({
        where: { FeelingCategoryId: result.FeelingCategory.id }
    }).then(function(result) {
        feelingIdsCategoryLevel = result.map(function(feeling) {
            return feeling.id;
        });
    });
}

function getFeelingsForSuperFeelingCategory(result) {
    var superFeelingCategoryId = result.FeelingCategory.FeelingSuperCategoryId;
    return database.FeelingCategory.findAll({
        where: { FeelingSuperCategoryId: superFeelingCategoryId },
        include: [{ model: database.Feeling }]
    });
}

function setSuperCategoryLevel(result) {
    feelingIdsSuperCategoryLevel = result.map(function(category) {
        return category.Feelings.map(function(feeling) {
            return feeling.id;
        });
    }).reduce(function(a, b) {
        return a.concat(b);
    }, []);
    return;
}

function findResponse() {
    findTransactionByFeelingId()
        .then(function(result) {
            return setLowLevel(result);
        }).then(function(result) {
            return setMidLevel(result);
        }).then(function(result) {
            return setHighLevel(result);
        }).then(function() {
            return whichLevel();
        }).then(function(result) {
            return setResponse(result);
        });
}

function findTransactionByFeelingId() {
    return database.Transaction.findAll({
        where: { FeelingId: feelingId }
    });
}

function setLowLevel(result) {
    lowLevel = result.map(function(r) {
        return r.ResourceCategoryId;
    });
    return;
}

function setMidLevel(result) {
    return database.Transaction.findAll({
        where: { FeelingId: feelingIdsCategoryLevel }
    }).then(function(result) {
        midLevel = result.map(function(r) {
            return r.ResourceCategoryId;
        });
        return;
    });
}

function setHighLevel(result) {
    return database.Transaction.findAll({
        where: { FeelingId: feelingIdsSuperCategoryLevel }
    }).then(function(result) {
        highLevel = result.map(function(r) {
            return r.ResourceCategoryId;
        });
        return;
    });
}

function whichLevel() {
    if (lowLevel.length >= 4) {
        return lowLevel;
    } else if (midLevel.length >= 4) {
        return midLevel;
    } else {
        return highLevel;
    }
}

function setResponse(result) {
    var totalCount = result.length;
    var counts = {};
    result.map(function(r) {
        counts[r] = (counts[r] || 0) + 1;
    });
    for (var key in counts) {
        if (counts.hasOwnProperty(key)) {
            counts[key] /= totalCount;
        }
    }
    response.json(counts);
}