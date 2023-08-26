const { Router } = require('express')
const router = Router()
const Post = require('../Models/Post');
const { ethers } = require('hardhat');
const { abi } = require('../../artifacts/contracts/CarRegistry.sol/CarRegistry.json');

const provider = new ethers.providers.JsonRpcProvider(process.env.API_URL);
const contractInstance = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, provider);


router.use((req, res, next) => {
        
    if(req.session.user){ 
        next();
    }else {
        res.redirect('/api/v1/auth/userlogin')
    }
  })


router.get('/postList', async(req, res) => {
    const user = req.session.user

    if (user.isAdmin) {
      try {
        var cars = await contractInstance.getAllCarsByReviewedBy(user.email)
        res.render('index', {cars, user, searchParameter:null})
      } catch (error){
        console.error(error);
        res.status(500).json({ message: "Failed to fetch cars" });
      }
    } else {
      try {
        var cars = await contractInstance.getAllCars();
        res.render('index', {cars, user, searchParameter:null})
      } catch (error){
        console.error(error);
        res.status(500).json({ message: "Failed to fetch cars" });
      }
    }
})

router.post('/postSearch', async(req, res) => {
  const user = req.session.user
  const searchParameter = req.body.search

  try {
    var cars = await contractInstance.getAllCarsByVin(searchParameter);
    res.render('index', { cars, user, searchParameter });
  } catch (error){
    console.error(error);
    res.status(500).json({ message: "Failed to fetch cars" });
  }

})


  module.exports = router