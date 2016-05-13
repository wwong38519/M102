db.sensor_readings.getIndexes()
//[
//	{
//		"v" : 1,
//		"key" : {
//			"_id" : 1
//		},
//		"name" : "_id_",
//		"ns" : "performance.sensor_readings"
//	}
//]
homework.a()
//quite a few keys or documents were scanned, need a better index try something else / try again.
db.sensor_readings.createIndex({active:1})
//{
//	"createdCollectionAutomatically" : false,
//	"numIndexesBefore" : 1,
//	"numIndexesAfter" : 2,
//	"ok" : 1
//}
db.sensor_readings.createIndex({tstamp:1})
//{
//	"createdCollectionAutomatically" : false,
//	"numIndexesBefore" : 2,
//	"numIndexesAfter" : 3,
//	"ok" : 1
//}


db.sensor_readings.getIndexes()
//[
//	{
//		"v" : 1,
//		"key" : {
//			"_id" : 1
//		},
//		"name" : "_id_",
//		"ns" : "performance.sensor_readings"
//	},
//	{
//		"v" : 1,
//		"key" : {
//			"active" : 1
//		},
//		"name" : "active_1",
//		"ns" : "performance.sensor_readings"
//	},
//	{
//		"v" : 1,
//		"key" : {
//			"tstamp" : 1
//		},
//		"name" : "tstamp_1",
//		"ns" : "performance.sensor_readings"
//	}
//]
homework.a()
//that's a big improvement over table scan -- 36 documents examined,
//but we can do better, try something else / try again.

db.sensor_readings.createIndex({tstamp:1, active:1})
//{
//	"createdCollectionAutomatically" : false,
//	"numIndexesBefore" : 3,
//	"numIndexesAfter" : 4,
//	"ok" : 1
//}


db.sensor_readings.getIndexes()
//[
//	{
//		"v" : 1,
//		"key" : {
//			"_id" : 1
//		},
//		"name" : "_id_",
//		"ns" : "performance.sensor_readings"
//	},
//	{
//		"v" : 1,
//		"key" : {
//			"active" : 1
//		},
//		"name" : "active_1",
//		"ns" : "performance.sensor_readings"
//	},
//	{
//		"v" : 1,
//		"key" : {
//			"tstamp" : 1
//		},
//		"name" : "tstamp_1",
//		"ns" : "performance.sensor_readings"
//	},
//	{
//		"v" : 1,
//		"key" : {
//			"tstamp" : 1,
//			"active" : 1
//		},
//		"name" : "tstamp_1_active_1",
//		"ns" : "performance.sensor_readings"
//	}
//]
homework.a()
//6
