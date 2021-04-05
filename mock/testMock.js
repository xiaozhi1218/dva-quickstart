module.exports = {
    "GET /api/mockdata": (req, res) => {
        console.log(req, res);
        res.send({
            name: 'xxxx'
        })
    }
}