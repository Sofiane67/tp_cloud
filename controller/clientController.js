const clientService = require("../service/clientService");

exports.fetchAll = async (req, res) => {
    try{
        const clients = await clientService.findAll();

        if(clients.sqlError){
            throw  {
                status: "error",
                errors: {
                    status: 500,
                    message: clients.sqlError
                }  
            }
        }

        const response = {
            status: "success",
            data: clients
        }
    
        res.status(200).json(response)
    }
    catch(error){
        res.status(500).json(error)
    }
}

exports.fetchOne = async (req, res) => {
    try{
        const {id} = req.params;
        const client = await clientService.findById(id);

        if(client.sqlError){
            throw  {
                status: "error",
                errors: {
                    status: 500,
                    message: client.sqlError
                }  
            }
        }

        const response = {
            status: "success",
            data: client
        }
    
        res.status(200).json(response)
    }
    catch(error){
        res.status(500).json(error)
    }
}
