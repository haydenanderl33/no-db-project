const express = require('express');
app = express();
ctrl = require('./controller.js');
port = 4040;

app.use(express.json())


app.get("/api/maininfo", ctrl.showAll)
app.post("/api/maininfo", ctrl.createNew)
app.put("/api/maininfo/:id", ctrl.changePassword)
app.delete("/api/maininfo/:id", ctrl.deletePassword)



app.listen(port, () => console.log(`Server listening on port ${port}`)) 