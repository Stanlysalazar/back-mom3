const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD
router.get("/usernames", cors(), controller.readUsernames);
router.get("/names", cors(), controller.readNames);
router.get("/passwords", cors(), controller.readPasswords);
router.get("/roles", cors(), controller.readRoles);
router.get("/reserwords", cors(), controller.readReserwords);
router.get("/platenumbers", cors(), controller.readPlatenumbers);
router.get("/brands", cors(), controller.readBrands);
router.get("/states", cors(), controller.readStates);
router.get("/dailyvalues", cors(), controller.readDailyvalues);
router.get("/rentnumbers", cors(), controller.readRentnumbers);
router.get("/initialdates", cors(), controller.readInitialdates);
router.get("/finaldates", cors(), controller.readFinaldates);
router.get("/statuses", cors(), controller.readStatuses);
router.get("/returnumbers", cors(), controller.readReturnumbers);
router.get("/returndates", cors(), controller.readReturndates);


router.get("/usernames/:id", cors(), controller.readUsernameById);
router.get("/names/:id", cors(), controller.readNameById);
router.get("/passwords/:id", cors(), controller.readPasswordById);
router.get("/roles/:id", cors(), controller.readRoleById);
router.get("/reserwords/:id", cors(), controller.readReserwordById);
router.get("/platenumbers/:id", cors(), controller.readPlatenumberById);
router.get("/brands/:id", cors(), controller.readBrandById);
router.get("/states/:id", cors(), controller.readStateById);
router.get("/dailyvalues/:id", cors(), controller.readDailyvalueById);
router.get("/rentnumbers/:id", cors(), controller.readRentnumberById);
router.get("/initialdates/:id", cors(), controller.readInitialdateById);
router.get("/finaldates/:id", cors(), controller.readFinaldateById);
router.get("/statuses/:id", cors(), controller.readStatusById);
router.get("/returnumbers/:id", cors(), controller.readReturnumberById);
router.get("/returndates/:id", cors(), controller.readReturndateById);



// Read by id
router.get("/usernames/byName/:nombre", cors(), controller.readUsernameByName);
router.get("/names/byName/:nombre", cors(), controller.readNameByName);
router.get("/passwords/byName/:nombre", cors(), controller.readPasswordByName);
router.get("/roles/byName/:nombre", cors(), controller.readRoleByName);
router.get("/reserwords/byName/:nombre", cors(), controller.readReserwordByName);
router.get("/platenumbers/byName/:nombre", cors(), controller.readPlatenumberByName);
router.get("/brands/byName/:nombre", cors(), controller.readBrandByName);
router.get("/states/byName/:nombre", cors(), controller.readStateByName);
router.get("/dailyvalues/byName/:nombre", cors(), controller.readDailyvalueByName);
router.get("/rentnumbers/byName/:nombre", cors(), controller.readRentnumberByName);
router.get("/initialdates/byName/:nombre", cors(), controller.readInitialdateByName);
router.get("/finaldates/byName/:nombre", cors(), controller.readFinaldateByName);
router.get("/statuses/byName/:nombre", cors(), controller.readStatusByName);
router.get("/returnumbers/byName/:nombre", cors(), controller.readReturnumberByName);
router.get("/returndates/byName/:nombre", cors(), controller.readReturndateByName);





router.post("/usernames", cors(), controller.createUsername);
router.post("/names", cors(), controller.createName);
router.post("/passwords", cors(), controller.createPassword);
router.post("/roles", cors(), controller.createRole);
router.post("/reserwords", cors(), controller.createReserword);
router.post("/platenumbers", cors(), controller.createPlatenumber);
router.post("/brands", cors(), controller.createBrand);
router.post("/states", cors(), controller.createState);
router.post("/dailyvalues", cors(), controller.createDailyvalue);
router.post("/rentnumbers", cors(), controller.createRentnumber);
router.post("/initialdates", cors(), controller.createInitialdate);
router.post("/finaldates", cors(), controller.createFinaldate);
router.post("/statuses", cors(), controller.createStatus);
router.post("/returnumbers", cors(), controller.createReturnumber);
router.post("/returndates", cors(), controller.createReturndate);




module.exports = router;
