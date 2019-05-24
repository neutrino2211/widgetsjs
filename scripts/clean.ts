import { join } from "path";
import * as rimraf from "rimraf";

const cleanType = process.argv[2]

const cleaners = {
    "test-dist": function(){
        rimraf.sync(join(process.cwd(),"test","dist"))
    },

    "test-cache": function(){
        rimraf.sync(join(process.cwd(),"test",".cache"))
    },

    tests: function(){
        this["test-dist"]()
        this["test-cache"]()
    },

    all: function(){
        this["tests"]();
    },

    artifacts: function(){
        this["tests"]();
        rimraf.sync(join(process.cwd(), ".cache"))
        rimraf.sync(join(process.cwd(),"dist"))
    }
}

if(cleaners[cleanType]){
    cleaners[cleanType]();
} else {
    console.log(`No function for cleaning '${cleanType}'`)
}