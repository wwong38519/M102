homework.b();

db.products.insert(
{
	"_id" : "ac9",
	"name" : "AC9 Phone",
	"brand" : "ACME",
	"type" : "phone",
	"price" : 333,
	"warranty_years" : 0.25,
	"available" : true
}
);

var query = {_id: ObjectId("507d95d5719dbef170f15c00")};
db.products.find(query);

var o = db.products.findOne(query);
o.term_years = 3;
o.limits.sms.over_rate = 0.01;
db.products.update(query, o);
db.products.find(query);

homework.b();

//0509020
//WriteResult({ "nInserted" : 1 })
//{ "_id" : ObjectId("507d95d5719dbef170f15c00"), "name" : "Phone Service Family Plan", "type" : "service", "monthly_price" : 90, "limits" : { "voice" : { "units" : "#minutes", "n" : 1200, "over_rate" : 0.05 }, "data" : { "n" : "unlimited", "over_rate" : 0 }, "sms" : { "n" : "unlimited", "over_rate" : 0 } }, "sales_tax" : true, "term_years" : 2 }
//3
//0.01
//WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
//{ "_id" : ObjectId("507d95d5719dbef170f15c00"), "name" : "Phone Service Family Plan", "type" : "service", "monthly_price" : 90, "limits" : { "voice" : { "units" : "#minutes", "n" : 1200, "over_rate" : 0.05 }, "data" : { "n" : "unlimited", "over_rate" : 0 }, "sms" : { "n" : "unlimited", "over_rate" : 0.01 } }, "sales_tax" : true, "term_years" : 3 }
//0.050.019031
