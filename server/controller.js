const infodata = require('./intialdata.json')

let id = 3;


module.exports = {
    showAll: (req,res) => {
        res.status(200).send(infodata)
    },
    createNew: (req,res) => {
        const {website, username, password} = req.body
        const newWebInfo = {
            id: id,
            website: website,
            username: username,
            password: password
        }
        infodata.push(newWebInfo)
        id++;
        res.status(200).send(infodata)
    },
    changePassword: (req,res) => {
        const {id} = req.params
        let index = infodata.findIndex(e => e.id === +id)
        infodata[index] = {
            id: infodata[index].id,
            website: infodata[index].website,
            username: infodata[index].username,
            password: req.body.password || infodata[index].password,
        }
        res.status(200).send(infodata) 
    },
    deletePassword: (req, res) => {
        const {id} = req.params
        let index = infodata.findIndex(e => e.id === +id)
        infodata.splice(index,1);
        res.status(200).send(infodata)
    }
}
