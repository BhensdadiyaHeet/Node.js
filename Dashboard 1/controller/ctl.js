const schema = require("../model/firstSchema")

module.exports.login = (req,res) => {
    res.render("login")
}

module.exports.loginAdmin = async (req, res) => {
    res.redirect("/dashboard")
   
}

module.exports.logout = (req,res) => {
    res.clearCookie("local")
    res.redirect("/")
}

module.exports.dashboard = (req,res) => {
 
        res.render("dashboard")
    
}

module.exports.addAdmin = (req,res) => {
        res.render("addAdmin")
    
}

module.exports.addAdminData = async (req,res) => {
    await schema.create(req.body).then((data) => {
        console.log(req.body)
        res.redirect("/viewAdmin")
    })
}

module.exports.viewAdmin = async (req,res) => {
    let data = await schema.find({})
    res.render("viewAdmin", {data})
}

module.exports.deleteData = async (req, res) => {
    await schema.findByIdAndDelete(req.query.id);
    res.redirect("/viewAdmin");
};

// EDIT PAGE
module.exports.editData = async (req, res) => {
    let singleData = await schema.findById(req.query.id);
    res.render("edit", { singleData });
};

// UPDATE DATA
module.exports.updateData = async (req, res) => {
    await schema.findByIdAndUpdate(req.body.id, req.body);
    res.redirect("/viewAdmin");
};
