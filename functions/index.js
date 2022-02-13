const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

const app = express();
const serviceAccount = require("./permissions.json");

app.use(cors({ origin: true }));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Routes
app.use(require("./routes/product.routes"));
app.use(require("./routes/products.routes"));

exports.app = functions.https.onRequest(app);
