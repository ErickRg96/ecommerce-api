const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");
const db = admin.firestore();

// Get all products
router.get("/api/products", async (req, res) => {
    try {
        let query = db.collection("products");
        const querySnapshot = await query.get();
        let docs = querySnapshot.docs;

        const response = docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            price: doc.data().price,
        }));

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = router;
