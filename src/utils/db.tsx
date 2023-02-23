const Datastore = require('nedb-promises')
const path = require('path')
export const datastore = Datastore.create(path.join(__dirname,'../db/guetsdb.db'));
import { IGuest } from "@/types";
import Nedb from "nedb-promises-ts";


export const GuestDb = new Nedb<IGuest[]|[]>({autoload: true})





// export default {db:datastore}
