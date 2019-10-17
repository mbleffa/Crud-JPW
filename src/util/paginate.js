const mongoosePaginate = require('mongoose-paginate');
 
mongoosePaginate.paginate.options = { 
    lean:  true,
    limit: 2
};

module.exports = mongoosePaginate