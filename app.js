const express = require("express");

//Mongo connection
const connection = require("./connection");

//Mongo Model
const postModel = require("./models/postModel.js");

var hbs = require('express-hbs');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
  }));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get("/", (req, res)=>{
    res.render("form.hbs")
})

app.post("/add", async (req, res) => {
    const { title, content } = req.body;
    try {
      const newPost = await postModel.create({
        title,
        content,
      });
      res.json(newPost);
    } catch (e) {
      res.status(500).send(e);
    }
  });

  app.get("/view", async (req, res) => {
    try {
      const posts = await postModel.find();
      res.json(posts);
    } catch (e) {
      console.log(e);
    }
  });

  app.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const post = await postModel.findById(id);
      res.json(post);
    } catch (e) {
      res.status(500).send(e);
    }
  });

  /*app.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
      const post = await postModel.findByIdAndUpdate(id, { title, content });
      res.json(post);
    } catch (e) {
      res.status(500).send(e);
    }
  });

  app.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const post = await postModel.findById(id);
      await post.remove();
      res.json("deleted");
    } catch (e) {
      res.status(500).send(e);
    }
  });*/

app.listen(3000, () => {
  console.log("Listening at port 3000");
});