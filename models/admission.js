const mongoose = require("mongoose");

var admissionSchema = new mongoose.Schema({
    content: String
},
 { timestamps: true}
);

module.exports = mongoose.model("Admission", admissionSchema);