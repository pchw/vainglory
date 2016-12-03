Vainglory = require("./lib");

vainglory = new Vainglory();

vainglory.meta.status()
.then((body)=>{console.log(body)})
.catch((err)=>{console.log(err)});