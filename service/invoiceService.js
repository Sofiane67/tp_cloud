const db = require("../utils/database")

exports.findAll = async () => {
    try{
        const result = await db.execute("SELECT invoices.id as id, invoiceNumber,title,createdAt,paymentDate,status,amount,clientId,lastName,firstName,email FROM invoices INNER JOIN clients ON invoices.clientId = clients.id");
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
        const result = await db.execute("SELECT invoices.id as id, invoiceNumber,title,createdAt,paymentDate,status,amount,clientId,lastName,firstName,email FROM invoices INNER JOIN clients ON invoices.clientId = clients.id WHERE invoices.id = ?", [id]);

       if(result[0].length == 0){
            throw {
                status: 404,
                message: "la ressource est introuvable"
            }
       }
   
        return result[0][0]
    }
    catch(error){
        return {
            status: error.status? error.status : 500,
            error: error.message
        }
    }
}

exports.create = async (invoice) => {
    try{
        const {
            invoiceNumber,
            title,
            amount,
            clientId
        } = invoice;

        const result = await db.execute(
            "INSERT INTO invoices (invoiceNumber, title, amount, clientId) VALUES (?,?,?,?)",
            [invoiceNumber, title, amount, clientId]
            );

        return result
    }
    catch(error){
        return {
            sqlError: error.message
        }
    }
}

exports.update = async (id, invoice) => {
    try{
        let query = "UPDATE invoices SET ";
        const values = [];
    
        for (const field in invoice) {
            if (Object.hasOwnProperty.call(invoice, field)) {
                const value = invoice[field];
                query += `${field} = ?,`;
                values.push(value)
            }
        }
    
        query = query.substring(0,query.length-1);
        query += ` WHERE id = ?`

        values.push(id);
    
        const result = await db.execute(query, values);
        return result
    }
    catch(error){

        return {
            sqlError: error.message
        }
    }
}

exports.remove = async (id) => {
    try{
        const result = await db.execute(
            "DELETE FROM invoices WHERE id = ?",
            [id]
            );
        return result
    }
    catch(error){
        return {
            sqlError: error.message
        }
    }
}
