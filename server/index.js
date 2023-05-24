require("dotenv").config();
require("module-alias/register");

const boot = require("@services/boot");
const dbConnect = require("@services/dbConnect");

dbConnect();
boot();