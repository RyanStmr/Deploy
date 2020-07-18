require("dotenv").config();

const { Pool } = require("pg");
const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  connectionString:
    "postgres://uxddqfbuijtvjf:05f10e8bdf4dec99b13be1569c928999d9a045a5d8474c9c40a6fd6df30bd692@ec2-54-228-209-117.eu-west-1.compute.amazonaws.com:5432/d583aie9npjfma",
  ssl: isProduction,
});

module.exports = { pool };
