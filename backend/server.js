const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
require('dotenv').config();

const app = express();
const signup = require('./routes/signup');
const login = require('./routes/login');
const UserModel = require('./models/UserModel');

app.use(cors());
app.use(express.json());

const dbConnectionString = process.env.DB_CONNECTION_STRING;

mongoose.connect(dbConnectionString);

app.use(
	session({
		secret: process.env.SECRET_KEY,
		resave: false,
		saveUninitialized: false,
	})
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
	new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
		try {
			const user = await UserModel.findOne({ email: email });

			if (!user) {
				return done(null, false, { message: 'User not found' });
			}

			const passwordMatch = await user.comparePassword(password); // Implement a method in your UserModel to compare passwords

			if (!passwordMatch) {
				return done(null, false, { message: 'Incorrect password' });
			}

			return done(null, user);
		} catch (err) {
			return done(err);
		}
	})
);

// Serialize and deserialize user for sessions
passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	const user = await UserModel.findById(id);
	done(null, user);
});

app.use('/signup', signup);
app.use('/login', login);

app.listen(5000, () => {
	console.log('server started');
});
