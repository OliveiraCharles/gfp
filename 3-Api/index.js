require("dotenv").config();
require("module-alias/register");

const boot = require("@services/boot");
const dbConnect = require("@db/dbConnect");

dbConnect();
boot();