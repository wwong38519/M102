use local
db.oplog.rs.find()
db.oplog.rs.stats()
db.oplog.rs.find( { } ).sort( { $natural : 1 } ).limit( 1 ).next( ).o.msg[0]
//R