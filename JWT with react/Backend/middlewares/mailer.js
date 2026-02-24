const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    service : "gmail",
    auth:{
        user :"heetbhesdadia1912@gmail.com",
        pass : "mdpvdjqaekpmjoqx"
    }
})


module.exports.sendOtp = (email,otp)=>{
    let mailoptions = {
        to : email,
        from : "heetbhesdadia1912@gmail.com",
        subject : "Password Reset OTP",
        text : `Your password reset otp is ${otp}`
    }

    transport.sendMail(mailoptions)
}