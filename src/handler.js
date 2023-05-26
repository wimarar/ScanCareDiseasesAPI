const diseases = require('./diseases');
import('nanoid');

const getDiseasById = (request, h) => {
  const {id} = request.params;
  
  const diseas = diseases.filter((p) => p.id === id)[0];

  return diseas;
};

module.exports = {getDiseasById};