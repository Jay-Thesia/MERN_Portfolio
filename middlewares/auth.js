const jwt=require('jsonwebtoken');


const auth=(req,res,next)=>{
    try {

        const token= req.headers['authorization'];

    
        //when token header is not written
        if(!token){
            return res.status(400).json({msg:"Invalid Authorization"});
        }

        jwt.verify(token,process.env.TOKEN_SECRET,(err,user)=>{

            //when token is not matching with db
            if(err){
                return res.status(400).json({msg:"Authorizaiton is not valid"})
            }

            req.user=user;
            next();
        })
        
    } catch (error) {
        return res.status(500).json({msg:error.message});
    }
}


module.exports=auth;