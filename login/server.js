const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const User = require('./models/user')
const LocalStrategy = require('passport-local').Strategy
require('dotenv').config()

// DB
mongoose.connect(
    process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((res) => console.log("mongo db connection created"));

const db = mongoose.connection;
db.on("error", err=> console.log(err));


// passport
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { 
        return done(err)
      }
      if (user == null) { 
        return done(null, false, { message: 'No user with that name!' })
      }
      try{
        console.log("傳入的 " + password)
        console.log("加密的 " + user.password)
        bcrypt.compare(password, user.password).then((result)=>{
          if(result){
            return done(null, user)
          } else {
            return done(null, false, { message: 'Password incorrect' }) 
          }
        })
        .catch((err)=>console.error(err))
      }
      catch (e){
        return done(e)
      }
    })
  }
))
passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user)
  })
})

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.ejs', { name: req.user.username })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs')
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const userName = req.body.username
    const pwd = req.body.password
    var newUser = new User({username: userName, password: hashedPassword})
    await newUser.save()
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
  console.log(newUser)
})

app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/register')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}
app.listen(4000)