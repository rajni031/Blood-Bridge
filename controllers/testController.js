 const testController= (req,res)=>{
    res.status(200).send({
        message: "it is test route ",
        success: true
    });
};
module.exports={testController}