require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");

const authRouter = require("./routes/auth_router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const product = require('./routes/productRoutes');
const order = require('./routes/orderRoutes');
const contactroute = require("./routes/contact_router");

const corsOptions = {
  origin: "https://dhc-ecommerce-website.vercel.app",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use('/api/products', product);
app.use('/api/orders', order);
app.use("/api/form", contactroute);

app.use(errorMiddleware);

const PORT = process.env.PORT || 2000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});