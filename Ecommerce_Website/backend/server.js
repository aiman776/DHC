const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config(); 


const authRouter = require("./routes/auth_router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const product = require('./routes/productRoutes');
const order = require('./routes/orderRoutes');
const contactroute = require("./routes/contact_router");

app.use(cors());

const corsOptions = {
  origin: "http://localhost:5173", 
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

// ✅ Middleware
app.use(cors(corsOptions));
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRouter);
app.use('/api/products', product);
app.use('/api/orders', order);
app.use("/api/form", contactroute);
// Static folder serve

// ✅ Error middleware
app.use(errorMiddleware);

const PORT = 2000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});