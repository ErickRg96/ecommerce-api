const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");
const db = admin.firestore();

// Get product by id
router.get("/api/product/:product_id", async (req, res) => {
    try {
        const doc = db.collection("products").doc(req.params.product_id);
        const item = await doc.get();
        const response = item.data();
        response.id = item.id;
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).send(error);
    }
});

module.exports = router;
