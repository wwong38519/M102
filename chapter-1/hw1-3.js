use pcat
//switched to db pcat

db.products.count()
//11

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

db.products.find( { 'brand' : 'ACME' })
//{ "_id" : "ac3", "name" : "AC3 Phone", "brand" : "ACME", "type" : "phone", "price" : 200, "warranty_years" : 1, "available" : true }
//{ "_id" : "ac7", "name" : "AC7 Phone", "brand" : "ACME", "type" : "phone", "price" : 320, "warranty_years" : 1, "available" : false }
