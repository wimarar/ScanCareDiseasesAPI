const {getDiseasById} = require('./handler');
const routes = [
    {
    method: 'GET',
    path: '/diseases/{id}',
    handler: getDiseasById
    },
];

module.exports = routes;