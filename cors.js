const allowedCores = ['*',
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'http://localhost:3000'
]

const cors = (req, res, next) => {
    const { origin } = req.headers;
    if (allowedCores.includes(origin)); {
        res.header('Access-Control-Allow-Origin', 'origin')
    }
    next();
}

module.exports = cors;