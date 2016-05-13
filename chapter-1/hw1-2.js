use pcat

db.products.findOne()
//{
//	"_id" : "ac3",
//	"name" : "AC3 Phone",
//	"brand" : "ACME",
//	"type" : "phone",
//	"price" : 200,
//	"warranty_years" : 1,
//	"available" : true
//}

db.products.find( { type : "case" })
//{ "_id" : ObjectId("507d95d5719dbef170f15bfa"), "name" : "AC3 Case Green", "type" : [ "accessory", "case" ], "color" : "green", "price" : 12, "warranty_years" : 0 }
//{ "_id" : ObjectId("507d95d5719dbef170f15bfc"), "name" : "AC3 Case Black", "type" : [ "accessory", "case" ], "color" : "black", "price" : 12.5, "warranty_years" : 0.25, "available" : false, "for" : "ac3" }
//{ "_id" : ObjectId("507d95d5719dbef170f15bfd"), "name" : "AC3 Case Red", "type" : [ "accessory", "case" ], "color" : "red", "price" : 12, "warranty_years" : 0.25, "available" : true, "for" : "ac3" }

db.products.find( { type : "case" }).count()
//3
