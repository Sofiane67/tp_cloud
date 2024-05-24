const db = require("../utils/database")

exports.findAll = async () => {
    try{
        const result = await db.execute("SELECT * FROM clients");
        return result[0]
    }
    catch(error){
        return {
            sqlError: error.message
        }
    }
}

exports.findById = async (id) => {
    try{
        const result = await db.execute(`SELECT * FROM clients WHERE id=${id}`);
        console.log(result[0][0])
        return result[0][0]
    }
    catch(error){
        return {
            sqlError: error.message
        }
    }
}

