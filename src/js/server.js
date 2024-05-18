"use strict";

const express = require("express");
const pg = require("pg");
const PORT = 3000;

const app = express();
app.use(express.json());

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "pupsiki",
  password: "X9Ufmy335C",
  port: 5432,
});
db.connect();

app.get("/", (req, res) => {
  res.json("Connected to server");
});

app.post("/user", async (req, res) => {
  const { email, isBanned, password, username } = req.body;
  try {
    const user = await db.query(
      "INSERT INTO pupsiki.user (email, isBanned, password, username) values ($1, $2, $3, $4) RETURNING *",
      [email, isBanned, password, username]
    );
    res.json(user.rows[0]);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.get("/user", async (req, res) => {
  try {
    const users = await db.query("SELECT * FROM pupsiki.user");
    res.json(users.rows);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await db.query("SELECT * FROM pupsiki.user WHERE id = $1", [id]);

    if (!user.rows.length) throw new Error("Record is not found");

    res.json(user.rows[0]);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.patch("/user/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  if (data.id) delete data.id;

  try {
    for (const [key, value] of Object.entries(data)) {
      await db.query(`UPDATE pupsiki.user SET ${key} = $1 WHERE id = $2`, [
        value,
        id,
      ]);
    }

    const user = await db.query("SELECT * FROM pupsiki.user WHERE id = $1", [id]);

    res.json(user.rows[0]);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.delete("/user/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await db.query("SELECT * FROM pupsiki.user WHERE id = $1", [id]);

    if (!user.rows.length) throw new Error("Record is not found");

    await db.query("DELETE FROM pupsiki.user WHERE id = $1", [id]);
    res.json(user.rows[0]);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
