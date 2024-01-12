import express from "express";
import Helper from "../utility/Helper.js";
import Usercontroller from "../controller/Usercontroller.js";
import Admincontroller from "../controller/Admincontroller.js";
import policecontroler from "../controller/policecontroler.js";
const app = express.Router();
import token from "../middlewares/Middlewares.js"
import header from "../middlewares/Headermiddewares.js"

//<-----------------------------------helper file ----------------------->
app.post("/fileuploade", Helper.uploadFile)


//<---------------------------------users api----------------------------->
app.post("/usercreate", Usercontroller.Usercreate)
app.get("/getalluser",header.authenticateHeader,token.authenticateToken, async(req, res)=>{ await Usercontroller.Usergetall(req, res)})
app.get("/getidbyuser/:id",header.authenticateHeader,token.authenticateToken, async(req, res)=>{await Usercontroller.Usergetidby(req, res)})
app.put("/updateuser/:id", Usercontroller.Userupdate)
app.put("/userstatus/:id" ,header.authenticateHeader,token.authenticateToken, async(req, res)=>{await Usercontroller.statusupdate(req, res)})
app.delete("/userdelete/:id" ,header.authenticateHeader,token.authenticateToken, async(req, res)=>{await Usercontroller.userdelete(req, res)})



//<---------------------------Admin all api ------------------------------->
app.get('/adminget', header.authenticateHeader,token.authenticateToken, async (req, res) => {await Admincontroller.Adminget(req, res)})
app.put("/adminupdate/:id",header.authenticateHeader,token.authenticateToken,async(req, res)=>{await Admincontroller.Adminupdate(req, res)})
app.post("/changepassword/:id",header.authenticateHeader,token.authenticateToken, async(req, res)=>{await Admincontroller.changepassword(req, res)})


//<-------------------------login and logout------------------------->
app.post("/loginsignup",header.authenticateHeader, async (req, res) => { await Admincontroller.Adminlogin(req, res);});
app.put("/adminlogout", header.authenticateHeader,token.authenticateToken,  async(req, res) => {await Admincontroller.Adminlogout(req, res)})


//<--------------------------police--------------------------------------->
app.post("/addpolicestation",header.authenticateHeader,token.authenticateToken, async(req, res)=>{await policecontroler.policeycreate(req, res)})
app.get("/getallabouts",header.authenticateHeader,token.authenticateToken, async(req, res)=>{await policecontroler.aboutsget(req, res)})
app.put("/aboutsupdate",header.authenticateHeader,token.authenticateToken, async(req, res)=>{await policecontroler.aboutsupdate(req, res)})
app.get("/privacypoliceyget",header.authenticateHeader,token.authenticateToken, async(req, res)=>{await policecontroler.privacypoliceyget(req, res)})
app.put("/privacypoliceyupdate",header.authenticateHeader,token.authenticateToken, async(req, res)=>{await policecontroler.privacypoliceyupdate(req, res)})
app.get("/termsconditionsget",header.authenticateHeader,token.authenticateToken, async(req, res)=>{await policecontroler.termsconditionsget(req, res)})
app.put("/termsconditionsupdate",header.authenticateHeader,token.authenticateToken, async(req, res)=>{await policecontroler.Termconditionsupdate(req, res)})



export default app;
