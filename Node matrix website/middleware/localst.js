const passport = require("passport")
const localst = require("passport-local").Strategy
const schema = require("../models/Schema")

passport.use("localst" , new localst(
    {usernameField: "email"},
    async (email, password, done) => {
        let admin = await schema.findOne({email: email})
        if(admin){
            if(admin.password == password){
                return done(null, admin);
            }else{
                return done(null, false);
            }
        }else{
            return done(null, false);
        }
    }
))

passport.serializeUser((admin, done) => {
    done(null, admin.id);
})

passport.deserializeUser(async (id, done) => {
    let admin = await schema.findById(id)
    if(admin){
        done(null, admin);
    }else{
        console.log("admin not found");
    }
})

module.exports = passport;