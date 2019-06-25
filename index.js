const express = require("express");
const parser = require("body-parser");
const passport = require("./config/passport")();
const cors = require("cors");

const MovieRouter = require('./routes/MovieRouter');
const GenreRouter = require('./routes/GenreRouter');
const UserRouter = require("./routes/UserRouter");

const app = express();

app.use(parser.json());
app.use(cors());
app.use(express.json())

app.use('/api/movies/', MovieRouter);
app.use('/api/genre/', GenreRouter);
app.use("/api/user/", UserRouter);
app.use(passport.initialize());

app.use("/api/movies/", MovieRouter);

// app.set("port", process.env.PORT || 8080);

// app.listen(app.get("port"), () => {
//   console.log(`✅ PORT: ${app.get("port")} 🌟`);
// });

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
