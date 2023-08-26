
const { Router } = require('express')
const router = Router()
const User = require('../Models/User')
const { hashPassword, comparePassword } = require('../Helpers/helpers')



router.get('/userlogin', (req,res) => {
    res.render("login", {msg: req.session.errorMessage})
})

router.get('/userregister', (req,res) => {
    res.render("register")
})



router.post('/login', async (req, res) => {
    
    const{email, password} = req.body
    
    console.log(req.body)
    if (!email || !password) return res.send(400);
      const userDB = await User.findOne({ email });
      if (!userDB){
        //return res.send(401);
        req.session.errorMessage = "Incorrect username or password."
        res.render("login", {msg: req.session.errorMessage})
      }else{ 
      const isValid = comparePassword(password, userDB.password);
      if (isValid) {
        console.log('Authenticated Successfully!');
        req.session.errorMessage = ""
        req.session.user = userDB;
        res.redirect('/api/v1/post/postList')
      } else {
        console.log('Failed to Authenticate');
        req.session.errorMessage = "Incorrect username or password."
        res.render("login", {msg: req.session.errorMessage})
      }}
})

router.post('/register', async (req, res) => {
    const { email, password} = req.body;
    const userDB = await User.findOne({email})

    if(userDB) {
        //res.status(400).send({msg: 'User alreday exists!'})
        res.redirect('/api/v1/auth/userlogin')
    }else{
        const password = hashPassword(req.body.password)
        const isAdmin = false
        console.log(password);
        const newUser = await User.create({email, password, isAdmin})
        newUser.save()
        res.redirect('/api/v1/auth/userlogin')
    }
})


router.get('/logout', (req, res) => {
    // Uništavanje sesije ili brisanje kolačića ovisno o vašoj implementaciji
    req.session.destroy((err) => {
      if (err) {
        console.error('Greška prilikom odjave:', err);
        res.status(500).send('Greška prilikom odjave.');
      } else {
        // Uspješna odjava, preusmjeravanje na željenu stranicu
        res.redirect('/api/v1/auth/userlogin');
      }
    });
  });


module.exports = router