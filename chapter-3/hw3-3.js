db.products.findOne({'for': {$exists: 1}})
//{
//	"_id" : ObjectId("507d95d5719dbef170f15bf9"),
//	"for" : [
//		"ac3",
//		"ac7",
//		"ac9"
//	],
//	"name" : "AC3 Series Charger",
//	"price" : 19,
//	"type" : [
//		"accessory",
//		"charger"
//	],
//	"warranty_years" : 0.25
//}

db.products.createIndex({for:1})
//{
//	"createdCollectionAutomatically" : false,
//	"numIndexesBefore" : 1,
//	"numIndexesAfter" : 2,
//	"ok" : 1
//}
db.products.find({'for': 'ac3'})
//{ "_id" : ObjectId("507d95d5719dbef170f15bf9"), "for" : [ "ac3", "ac7", "ac9" ], "name" : "AC3 Series Charger", "price" : 19, "type" : [ "accessory", "charger" ], "warranty_years" : 0.25 }
//{ "_id" : ObjectId("507d95d5719dbef170f15bfb"), "for" : [ "ac3", "ac7", "ac9", "qp7", "qp8", "qp9" ], "name" : "Phone Extended Warranty", "price" : 38, "type" : "warranty", "warranty_years" : 2 }
//{ "_id" : ObjectId("507d95d5719dbef170f15bfc"), "available" : false, "color" : "black", "for" : "ac3", "name" : "AC3 Case Black", "price" : 12.5, "type" : [ "accessory", "case" ], "warranty_years" : 0.25 }
//{ "_id" : ObjectId("507d95d5719dbef170f15bfd"), "available" : true, "color" : "red", "for" : "ac3", "name" : "AC3 Case Red", "price" : 12, "type" : [ "accessory", "case" ], "warranty_years" : 0.25 }

db.products.find({'for': 'ac3'}).count()
//4

db.products.explain('executionStats').find({'for': 'ac3'})
//{
//	"queryPlanner" : {
//		"plannerVersion" : 1,
//		"namespace" : "pcat.products",
//		"indexFilterSet" : false,
//		"parsedQuery" : {
//			"for" : {
//				"$eq" : "ac3"
//			}
//		},
//		"winningPlan" : {
//			"stage" : "FETCH",
//			"inputStage" : {
//				"stage" : "IXSCAN",
//				"keyPattern" : {
//					"for" : 1
//				},
//				"indexName" : "for_1",
//				"isMultiKey" : true,
//				"isUnique" : false,
//				"isSparse" : false,
//				"isPartial" : false,
//				"indexVersion" : 1,
//				"direction" : "forward",
//				"indexBounds" : {
//					"for" : [
//						"[\"ac3\", \"ac3\"]"
//					]
//				}
//			}
//		},
//		"rejectedPlans" : [ ]
//	},
//	"executionStats" : {
//		"executionSuccess" : true,
//		"nReturned" : 4,
//		"executionTimeMillis" : 0,
//		"totalKeysExamined" : 4,
//		"totalDocsExamined" : 4,
//		"executionStages" : {
//			"stage" : "FETCH",
//			"nReturned" : 4,
//			"executionTimeMillisEstimate" : 0,
//			"works" : 5,
//			"advanced" : 4,
//			"needTime" : 0,
//			"needYield" : 0,
//			"saveState" : 0,
//			"restoreState" : 0,
//			"isEOF" : 1,
//			"invalidates" : 0,
//			"docsExamined" : 4,
//			"alreadyHasObj" : 0,
//			"inputStage" : {
//				"stage" : "IXSCAN",
//				"nReturned" : 4,
//				"executionTimeMillisEstimate" : 0,
//				"works" : 5,
//				"advanced" : 4,
//				"needTime" : 0,
//				"needYield" : 0,
//				"saveState" : 0,
//				"restoreState" : 0,
//				"isEOF" : 1,
//				"invalidates" : 0,
//				"keyPattern" : {
//					"for" : 1
//				},
//				"indexName" : "for_1",
//				"isMultiKey" : true,
//				"isUnique" : false
//				"isSparse" : false,
//				"isPartial" : false,
//				"indexVersion" : 1,
//				"direction" : "forward",
//				"indexBounds" : {
//					"for" : [
//						"[\"ac3\", \"ac3\"]"
//					]
//				},
//				"keysExamined" : 4,
//				"dupsTested" : 4,
//				"dupsDropped" : 0,
//				"seenInvalidated" : 0
//			}
//		}
//	},
//	"serverInfo" : {
//		"host" : "vagrant",
//		"port" : 27017,
//		"version" : "3.2.4",
//		"gitVersion" : "e2ee9ffcf9f5a94fad76802e28cc978718bb7a30"
//	},
//	"ok" : 1
//}
