const http = require('k6/http');
const { sleep, check } = require('k6');

const options = {
    scenarios: {
      ramping_load: {
        executor: 'ramping-arrival-rate',
        startRate: 50, // Débit initial de 5 requêtes par seconde
        timeUnit: '1s', // par seconde
        preAllocatedVUs: 300, // Nombre d'utilisateurs virtuels à pré-allouer
        maxVUs: 2000, // Nombre maximal d'utilisateurs virtuels
        stages: [
          { duration: '30s', target: 200 }, // Augmentation du débit à 50 requêtes par seconde pendant 30 secondes
          { duration: '1m', target: 500 }, // Augmentation du débit à 100 requêtes par seconde pendant 1 minute
        ],
      },
    },
  };

module.exports.options = options;

module.exports.default = function () {
    // Test fetchAll route
    let res = http.get('http://localhost:5600/api/invoices');
    check(res, { 'status is 200': (r) => r.status === 200 });
    sleep(1);
}
