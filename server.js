const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

//routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


