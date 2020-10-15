const users = require('./users'); // Users [register, login]
const category = require('./category'); // category  yg berupa file yg berisi file [ di dalam filenya berisi addCategory  ]
const news = require('./news');
const routers = [ //users untuk membuat banyak // routers adalah kumpulan data yg berisi array
    ...users, 
    ...category,
    ...news
];

//  fungsi titik 3 mengcopy semua data yg ada di lama users masuk ke routers

const router = (app) => { //merubah yang tadinya bertulisan app.post menjadi router.post, router.get dan   
    app.use(routers);
};

module.exports = router; // fungsi dari module.exports agar file bisa diakses dari luar 