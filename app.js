const express = require('express');
const bodyParser = require('body-parser');
const vhost = require('vhost');
const cors = require('cors')
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(vhost('domain1.com', require('./admin-nodes/n1.js')));
// app.use(vhost('domain2.com', require('./admin-nodes/n2.js')));
// app.use(vhost('domain3.com', require('./admin-nodes/n3.js')));


app.use(vhost('admin.dateze.in', require('./admin-nodes/n1.js')));
app.use(vhost('admin.workoso.in', require('./admin-nodes/n2.js')));
app.use(vhost('admin.rawopinion.in', require('./admin-nodes/n3.js')));


app.listen(3000, () => { console.log('Server is running on port 3000'); });
