/**
 * Created by Manu on 12/10/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResumeSchema = new Schema({
    "resumename" : String,
    "title" : String,
    "firstname" : String,
    "lastname" : String,
    "city" : String,
    "state" : String,
    "profile" : String,
    "contact" : {
        "info0" : {
            "kind" : String,
            "detail" : Number
        },
        "info1" : {
            "kind" : String,
            "detail" : Number
        },
        "info2" : {
            "kind" : String,
            "detail" : Number
        }
    },
    "personalSkill" : {
        "skill0" : {
            "kind" : String,
            "detail" : Number
        },
        "skill1" : {
            "kind" : String,
            "detail" : Number
        },
        "skill2" : {
            "kind" : String,
            "detail" : Number
        },
        "skill3" : {
            "kind" : String,
            "detail" : Number
        }
    },
    "education" : {
        "entry0" : {
            "name" : String,
            "degree" : String,
            "start" : String,
            "end" : String,
            "blurb" : String
        },
        "entry1" : {
            "name" : String,
            "degree" : String,
            "start" : String,
            "end" : String,
            "blurb" : String
        },
        "entry2" : {
            "name" : String,
            "degree" : String,
            "start" : String,
            "end" : String,
            "blurb" : String
        }
    },
    "employer" : {
        "entry0" : {
            "name" : String,
            "title" : String,
            "start" : String,
            "end" : String,
            "duties" : String
        },
        "entry1" : {
            "name" : String,
            "title" : String,
            "start" : String,
            "end" : String,
            "duties" : String
        },
        "entry2" : {
            "name" : String,
            "title" : String,
            "start" : String,
            "end" : String,
            "duties" : String
        }
    },
    "professionalSkill" : {
        "skill0" : {
            "name" : String,
            "value" : String
        },
        "skill1" : {
            "name" : String,
            "value" : String
        },
        "skill2" : {
            "name" : String,
            "value" : String
        },
        "skill3" : {
            "name" : String,
            "value" : String
        },
        "skill4" : {
            "name" : String,
            "value" : String
        },
        "skill5" : {
            "name" : String,
            "value" : String
        }
    }
});

module.exports = mongoose.model("Resume", ResumeSchema);






//var thingSchema = new Schema({..}, { strict: false });
//var thing = new Thing({ iAmNotInTheSchema: true });
//thing.save() // iAmNotInTheSchema is now saved to the db!!

//var ResumeSchema = new Schema({ any: {} });
//var ResumeSchema = new Schema({ any: Schema.Types.Mixed });