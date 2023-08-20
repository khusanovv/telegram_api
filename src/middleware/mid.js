
import jwt from "jsonwebtoken";
let secretKey = process.env.secretKey
export function checkToken(req,res,next) {
    let {token} = req.headers
    if (token) {
        jwt.verify(token,secretKey ,(err, user) => {
            if (err) {
                return res.status(403).json({
                    message:"Please register or sign"
                });
            }
            console.log(user);
            req.user = user;
            return next();
            })
    }
    else{
        return res.status(403).json({message:"please register or sign "})
    }

}