const mongoose = require('mongoose');

const Username = mongoose.model('Username',
  new mongoose.Schema({ nombre: String })
);

const Name = mongoose.model('Name',
  new mongoose.Schema({ nombre: String })
);

const Password = mongoose.model('Password',
  new mongoose.Schema({ nombre: String })
);

const Role = mongoose.model('Role',
  new mongoose.Schema({ nombre: String })
);

const Reserword = mongoose.model('Reserword',
  new mongoose.Schema({ nombre: String })
);

const Platenumber = mongoose.model('Platenumber',
  new mongoose.Schema({ nombre: String })
);

const Brand = mongoose.model('Brand',
  new mongoose.Schema({ nombre: String })
);

const State = mongoose.model('State',
  new mongoose.Schema({ nombre: String })
);

const Dailyvalue = mongoose.model('Dailyvalue',
  new mongoose.Schema({ nombre: String })
);

const Rentnumber = mongoose.model('Rentnumber',
  new mongoose.Schema({ nombre: String })
);

const Initialdate = mongoose.model('Initialdate',
  new mongoose.Schema({ nombre: String })
);

const Finaldate = mongoose.model('Finaldate',
  new mongoose.Schema({ nombre: String })
);

const Status = mongoose.model('Status',
  new mongoose.Schema({ nombre: String })
);

const Returnumber = mongoose.model('Returnumber',
  new mongoose.Schema({ nombre: String })
);

const Returndate = mongoose.model('Returndate',
  new mongoose.Schema({ nombre: String })
);


module.exports = {
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
};


