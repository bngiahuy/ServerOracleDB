const oracledb = require('oracledb');

const getAllSeason = (req, res) => {
    const fetchData = async () => {
        try {
            const conn = await oracledb.getConnection({
                user: 'phuc',
                password: 'zxcvbnm',
                connectionString: 'localhost/xe'
            })
            const result = await conn.execute('select year from season');
            return result
        } catch (err) {
            console.log(err);
        }
    }
    fetchData().then(data => res.json(data.rows));
}

module.exports = {
    getAllSeason
}