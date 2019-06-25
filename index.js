
const express = require("express");
const cors = require("cors");

const MovieRouter = require('./routes/MovieRouter');
const GenreRouter = require('./routes/GenreRouter');


const app = express();

app.use(cors());
app.use(express.json())

app.use('/api/movies/', MovieRouter);
app.use('/api/genre/', GenreRouter);


// app.set("port", process.env.PORT || 8080);

// app.listen(app.get("port"), () => {
//   console.log(`✅ PORT: ${app.get("port")} 🌟`);
// });

app.listen(3000, () => {
    console.log("app listening on port 3000");
});
