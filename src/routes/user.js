let express= require("express")
const router = express.Router();
const User= require("../models/user")
router.get("/signup",(req,res)=>
{
  res.render("signup");
})
router.get("/login",(req,res)=>
{
  res.render("login");
})


router.post("/login",auth,(req,res)=>
{
  const temp= req.body;
})

router.post("/signup",authi,(req,res)=>
{
    console.log(req.body)
    const user= new User(req.body)
    user.save()
    res.redirect("/")
})

module.exports= router