const mongoose = require('mongoose');
const dbpassword = process.env.MONGOPASSWORD

const uri1 = 'mongodb+srv://alpha2244:'+dbpassword+'@cluster0.trsdg.mongodb.net/date-db';
const uri2 = 'mongodb+srv://alpha2244:'+dbpassword+'@cluster0.trsdg.mongodb.net/work-db';
const uri3 = 'mongodb+srv://alpha2244:'+dbpassword+'@cluster0.trsdg.mongodb.net/opinion-db';

const db1 = mongoose.createConnection(uri1, { useNewUrlParser: true, useUnifiedTopology: true });
const db2 = mongoose.createConnection(uri2, { useNewUrlParser: true, useUnifiedTopology: true });
const db3 = mongoose.createConnection(uri3, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = { db1, db2, db3 };
