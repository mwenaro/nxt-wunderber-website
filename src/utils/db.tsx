const Datastore = require('nedb-promises')
const path = require('path')
const dbDir = path.join(dirname(__filename), '../db');

export const datastore = Datastore.create(path.join(dbDir,'datastore.db'));
export const guestDb = Datastore.create(path.join(dbDir,'guetsdb.db'));
import { IGuest } from "@/types";
import Nedb from "nedb-promises-ts";
import { dirname } from "path";

// export const Database = (table:string ='guetsdb')=>Datastore.create(path.join(dbDir,`${table}.db`))
export const Database = (table:string ='guetsdb')=>new  Datastore(path.join(dbDir,`${table}.db`), {autoload:true})

export const GuestDb = new Nedb<IGuest[]|[]>({autoload: true})





// export default {db:datastore}
