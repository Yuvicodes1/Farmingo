const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcryptjs");

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://yuvicodes:Yuvi%401107@cluster0.3yel6sh.mongodb.net/FarminGo");

app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Image storage
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

app.use('/images', express.static('upload/images'));

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Product schema
const Product = mongoose.model("Product", {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    new_price: { type: Number, required: true },
    old_price: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    available: { type: Boolean, default: true },
});

// Add product route
app.post('/addproduct', async (req, res) => {
    try {
        let products = await Product.find({});
        let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

        const product = new Product({
            id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price
        });

        await product.save();
        res.json({ success: true, name: req.body.name });
    } catch (err) {
        res.status(500).json({ success: false, error: "Failed to add product" });
    }
});

// Remove product
app.post('/removeproduct', async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id });
        res.json({ success: true, name: req.body.name });
    } catch (err) {
        res.status(500).json({ success: false, error: "Failed to remove product" });
    }
});

// Get all products
app.get('/allproducts', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({ success: true, products });
    } catch (err) {
        res.status(500).json({ success: false, error: "Failed to fetch products" });
    }
});

// User schema
const User = mongoose.model("User", {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Cart schema
const Cart = mongoose.model("Cart", {
    userEmail: { type: String, required: true, unique: true },
    items: { type: Object, required: true },
    lastUpdated: { type: Date, default: Date.now }
});

// Helper function to get default cart
const getDefaultCart = () => {
    let cart = {};
    // You might want to initialize this with actual product IDs from your database
    return cart;
};

// Signup route
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, error: "All fields are required" });
        }

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, error: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({ 
            name, 
            email, 
            password: hashedPassword 
        });
        await user.save();

        // Create empty cart for new user
        const cart = new Cart({
            userEmail: email,
            items: getDefaultCart()
        });
        await cart.save();

        // Generate token
        const token = jwt.sign({ email }, "secret123", { expiresIn: "1h" });

        res.json({ 
            success: true, 
            token, 
            user: { 
                name: user.name, 
                email: user.email 
            } 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Signup failed" });
    }
});

// Login route
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Validate input
        if (!email || !password) {
            return res.status(400).json({ success: false, error: "Email and password are required" });
        }

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, error: "Invalid credentials" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, error: "Invalid credentials" });
        }

        // Generate token
        const token = jwt.sign({ email }, "secret123", { expiresIn: "1h" });

        res.json({ 
            success: true,
            token, 
            user: { 
                name: user.name, 
                email: user.email 
            } 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Login failed" });
    }
});

// Get user's cart
app.get("/getcart", async (req, res) => {
    try {
        const { email } = req.query;
        
        if (!email) {
            return res.status(400).json({ success: false, error: "Email is required" });
        }

        let cart = await Cart.findOne({ userEmail: email });
        
        if (!cart) {
            // Create new cart if not exists
            cart = new Cart({ 
                userEmail: email, 
                items: getDefaultCart() 
            });
            await cart.save();
        }

        res.json({ success: true, items: cart.items });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Failed to get cart" });
    }
});

// Update user's cart
app.post("/updatecart", async (req, res) => {
    try {
        const { email, items } = req.body;
        
        if (!email || !items) {
            return res.status(400).json({ success: false, error: "Email and items are required" });
        }

        const cart = await Cart.findOneAndUpdate(
            { userEmail: email },
            { items, lastUpdated: Date.now() },
            { upsert: true, new: true }
        );
        
        res.json({ success: true, items: cart.items });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Failed to update cart" });
    }
});

// Protected route example
app.get("/profile", async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ success: false, error: "Unauthorized" });
        }

        const decoded = jwt.verify(token, "secret123");
        const user = await User.findOne({ email: decoded.email }).select("-password");
        
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }

        res.json({ success: true, user });
    } catch (err) {
        console.error(err);
        res.status(401).json({ success: false, error: "Unauthorized" });
    }
});

// Start server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server running on port " + port);
    } else {
        console.log("Error: " + error);
    }
});
