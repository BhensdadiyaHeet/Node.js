const express = require("express")
const ctl = require("../controller/ctl")
const passport = require("../middleware/localSt")

const route = express.Router()

route.get("/" , ctl.login)
route.post("/login" ,passport.authenticate("localSt",{failureRedirect:"/"}), ctl.loginAdmin)

route.get("/logout" , ctl.logout)

route.get("/dashboard" ,passport.checkAuth, ctl.dashboard)

route.get("/addAdmin" ,passport.checkAuth, ctl.addAdmin)
route.post("/addAdmin" ,passport.checkAuth, ctl.addAdminData)

route.get("/viewAdmin" ,passport.checkAuth, ctl.viewAdmin)

route.get("/deleteData" ,passport.checkAuth, ctl.deleteData)

// open edit page
route.get("/editAdmin",passport.checkAuth, ctl.editData);

// update data (FORM → POST)
route.post("/updateData",passport.checkAuth, ctl.updateData);



module.exports = route