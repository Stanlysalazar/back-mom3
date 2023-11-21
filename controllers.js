const { 
    Username,
    Name,
    Password,
    Role,
    Reserword,
    Platenumber,
    Brand,
    State,
    Dailyvalue,
    Rentnumber,
    Initialdate,
    Finaldate,
    Status,
    Returnumber,
    Returndate
  } = require("./models.js");

// Función para leer Usernames
exports.readUsernames = (req, res) =>
    Username.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer Names
exports.readNames = (req, res) =>
    Name.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer Passwords
exports.readPasswords = (req, res) =>
    Password.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer Roles
exports.readRoles = (req, res) =>
    Role.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
// Función para leer Reserwords
exports.readReserwords = (req, res) =>
    Reserword.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer Platenumbers
exports.readPlatenumbers = (req, res) =>
    Platenumber.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer Brands
exports.readBrands = (req, res) =>
    Brand.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer States
exports.readStates = (req, res) =>
    State.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer Dailyvalues
exports.readDailyvalues = (req, res) =>
    Dailyvalue.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer Rentnumbers
exports.readRentnumbers = (req, res) =>
    Rentnumber.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer Initialdates
exports.readInitialdates = (req, res) =>
    Initialdate.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer Finaldates
exports.readFinaldates = (req, res) =>
    Finaldate.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer Status
exports.readStatuses = (req, res) =>
    Status.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer Returnumbers
exports.readReturnumbers = (req, res) =>
    Returnumber.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer Returndates
exports.readReturndates = (req, res) =>
    Returndate.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Username por su _id
exports.readUsernameById = (req, res) =>
    Username.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Name por su _id
exports.readNameById = (req, res) =>
    Name.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Password por su _id
exports.readPasswordById = (req, res) =>
    Password.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Role por su _id
exports.readRoleById = (req, res) =>
    Role.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Reserword por su _id
exports.readReserwordById = (req, res) =>
    Reserword.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Platenumber por su _id
exports.readPlatenumberById = (req, res) =>
    Platenumber.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Brand por su _id
exports.readBrandById = (req, res) =>
    Brand.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un State por su _id
exports.readStateById = (req, res) =>
    State.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Dailyvalue por su _id
exports.readDailyvalueById = (req, res) =>
    Dailyvalue.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Rentnumber por su _id
exports.readRentnumberById = (req, res) =>
    Rentnumber.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Initialdate por su _id
exports.readInitialdateById = (req, res) =>
    Initialdate.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Finaldate por su _id
exports.readFinaldateById = (req, res) =>
    Finaldate.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Status por su _id
exports.readStatusById = (req, res) =>
    Status.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Returnumber por su _id
exports.readReturnumberById = (req, res) =>
    Returnumber.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Returndate por su _id
exports.readReturndateById = (req, res) =>
    Returndate.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
    
// Función para leer un Username por nombre
exports.readUsernameByName = (req, res) =>
    Username.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Name por nombre
exports.readNameByName = (req, res) =>
    Name.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Password por nombre
exports.readPasswordByName = (req, res) =>
    Password.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Role por nombre
exports.readRoleByName = (req, res) =>
    Role.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Reserword por nombre
exports.readReserwordByName = (req, res) =>
    Reserword.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Platenumber por nombre
exports.readPlatenumberByName = (req, res) =>
    Platenumber.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Brand por nombre
exports.readBrandByName = (req, res) =>
    Brand.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un State por nombre
exports.readStateByName = (req, res) =>
    State.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Dailyvalue por nombre
exports.readDailyvalueByName = (req, res) =>
    Dailyvalue.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Rentnumber por nombre
exports.readRentnumberByName = (req, res) =>
    Rentnumber.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Initialdate por nombre
exports.readInitialdateByName = (req, res) =>
    Initialdate.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Finaldate por nombre
exports.readFinaldateByName = (req, res) =>
    Finaldate.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Status por nombre
exports.readStatusByName = (req, res) =>
    Status.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Returnumber por nombre
exports.readReturnumberByName = (req, res) =>
    Returnumber.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

// Función para leer un Returndate por nombre
exports.readReturndateByName = (req, res) =>
    Returndate.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

   
    // Función para actualizar un Username por su _id
    exports.updateUsernameById = (req, res) =>
        Username.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { nombre: req.body.nombre } },
            { new: true }, // Para obtener el documento actualizado
            (err, data) => {
                if (err) res.json({ error: err });
                else res.json(data);
            }
        );
    
    // Función para actualizar un Name por su _id
    exports.updateNameById = (req, res) =>
        Name.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { nombre: req.body.nombre } },
            { new: true },
            (err, data) => {
                if (err) res.json({ error: err });
                else res.json(data);
            }
        );
    
    // Función para actualizar un Password por su _id
    exports.updatePasswordById = (req, res) =>
        Password.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { nombre: req.body.nombre } },
            { new: true },
            (err, data) => {
                if (err) res.json({ error: err });
                else res.json(data);
            }
        );
    
    // Función para actualizar un Role por su _id
    exports.updateRoleById = (req, res) =>
        Role.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { nombre: req.body.nombre } },
            { new: true },
            (err, data) => {
                if (err) res.json({ error: err });
                else res.json(data);
            }
        );
    
    // Función para actualizar un Reserword por su _id
    exports.updateReserwordById = (req, res) =>
        Reserword.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { nombre: req.body.nombre } },
            { new: true },
            (err, data) => {
                if (err) res.json({ error: err });
                else res.json(data);
            }
        );
    
    // Función para actualizar un Platenumber por su _id
    exports.updatePlatenumberById = (req, res) =>
        Platenumber.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { nombre: req.body.nombre } },
            { new: true },
            (err, data) => {
                if (err) res.json({ error: err });
                else res.json(data);
            }
        );
    
    // Función para actualizar un Brand por su _id
    exports.updateBrandById = (req, res) =>
        Brand.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { nombre: req.body.nombre } },
            { new: true },
            (err, data) => {
                if (err) res.json({ error: err });
                else res.json(data);
            }
        );
    
    // Función para actualizar un State por su _id
    exports.updateStateById = (req, res) =>
        State.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { nombre: req.body.nombre } },
            { new: true },
            (err, data) => {
                if (err) res.json({ error: err });
                else res.json(data);
            }
        );
    
    // Función para actualizar un Dailyvalue por su _id
    exports.updateDailyvalueById = (req, res) =>
        Dailyvalue.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { nombre: req.body.nombre } },
            { new: true },
            (err, data) => {
                if (err) res.json({ error: err });
                else res.json(data);
            }
        );
    
    // Función para actualizar un Rentnumber por su _id
    exports.updateRentnumberById = (req, res) =>
        Rentnumber.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { nombre: req.body.nombre } },
            { new: true },
            (err, data) => {
                if (err) res.json({ error: err });
                else res.json(data);
            }
        );
    
    // Función para actualizar un Initialdate por su _id
    exports.updateInitialdateById = (req, res) =>
        Initialdate.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { nombre: req.body.nombre } },
            { new: true },
            (err, data) => {
                if (err) res.json({ error: err });
                else res.json(data);
            }
        );
    
    // Función para actualizar un Finaldate por su _id
    exports.updateFinaldateById = (req, res) =>
        Finaldate.findOneAndUpdate  

// Función para crear un nuevo Username
exports.createUsername = (req, res) => {
    new Username({ nombre: req.body.nombre })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
};

// Función para crear un nuevo Name
exports.createName = (req, res) => {
    new Name({ nombre: req.body.nombre })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
};

// Función para crear una nueva Password
exports.createPassword = (req, res) => {
    new Password({ nombre: req.body.nombre })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
};

// Función para crear un nuevo Role
exports.createRole = (req, res) => {
    new Role({ nombre: req.body.nombre })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
};

// Función para crear una nueva Reserword
exports.createReserword = (req, res) => {
    new Reserword({ nombre: req.body.nombre })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
};

// Función para crear un nuevo Platenumber
exports.createPlatenumber = (req, res) => {
    new Platenumber({ nombre: req.body.nombre })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
};

// Función para crear una nueva Brand
exports.createBrand = (req, res) => {
    new Brand({ nombre: req.body.nombre })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
};

// Función para crear un nuevo State
exports.createState = (req, res) => {
    new State({ nombre: req.body.nombre })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
};

// Función para crear un nuevo Dailyvalue
exports.createDailyvalue = (req, res) => {
    new Dailyvalue({ nombre: req.body.nombre })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
};

// Función para crear un nuevo Rentnumber
exports.createRentnumber = (req, res) => {
    new Rentnumber({ nombre: req.body.nombre })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
};

// Función para crear un nuevo Initialdate
exports.createInitialdate = (req, res) => {
    new Initialdate({ nombre: req.body.nombre })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
};

// Función para crear un nuevo Finaldate
exports.createFinaldate = (req, res) => {
    new Finaldate({ nombre: req.body.nombre })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
};

// Función para crear un nuevo Status
exports.createStatus = (req, res) => {
    new Status({ nombre: req.body.nombre })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
};

// Función para crear un nuevo Returnumber
exports.createReturnumber = (req, res) => {
    new Returnumber({ nombre: req.body.nombre })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
};

// Función para crear un nuevo Returndate
exports.createReturndate = (req, res) => {
    new Returndate({ nombre: req.body.nombre })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
};








