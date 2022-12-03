const oracledb = require('oracledb');

const getAllCompany = (req, res) => {
    const fetchData = async () => {
        try {
            const conn = await oracledb.getConnection({
                user: 'phuc',
                password: 'zxcvbnm',
                connectionString: 'localhost/xe'
            })
            const result = await conn.execute('select company.cnumber,company.name from company');
            return result
        } catch (err) {
            console.log(err);
        }
    }
    fetchData().then(data => res.json(data.rows));
}

module.exports = {
    getAllCompany
}