homework.b()
//simulating a workload in this shell. after completing this homework, you can
//stop this shell with ctrl-c. let it run in the meantime...
//(you will want to open another mongo shell to do your work in.)
//
//note: this function changes the indexes on db.sensor_readings. so if you go
//      back to the previous homework, drop and recreate indexes (or run homework.init() again)
//
//
//info: 1 operations were in progress when homework.b() begins.
//      if you have a replica set more than zero is normal as the replicas will
//      query the primary.
//
//looping...

db.currentOp()
//{
//	"inprog" : [
//		{
//			"desc" : "conn5",
//			"threadId" : "139872758085376",
//			"connectionId" : 5,
//			"client" : "127.0.0.1:55971",
//			"active" : true,
//			"opid" : 23747,
//			"secs_running" : 66,
//			"microsecs_running" : NumberLong(66638267),
//			"op" : "update",
//			"ns" : "performance.sensor_readings",
//			"query" : {
//				"$where" : "function(){sleep(500);return false;}"
//			},
//			"numYields" : 133,
//			"locks" : {
//				"Global" : "w",
//				"Database" : "w",
//				"Collection" : "w"
//			},
//			"waitingForLock" : false,
//			"lockStats" : {
//				"Global" : {
//					"acquireCount" : {
//						"r" : NumberLong(138),
//						"w" : NumberLong(134)
//					}
//				},
//				"Database" : {
//					"acquireCount" : {
//						"r" : NumberLong(2),
//						"w" : NumberLong(134)
//					},
//					"acquireWaitCount" : {
//						"w" : NumberLong(3)
//					},
//					"timeAcquiringMicros" : {
//						"w" : NumberLong(4612)
//					}
//				},
//				"Collection" : {
//					"acquireCount" : {
//						"r" : NumberLong(2),
//						"w" : NumberLong(134)
//					}
//				}
//			}
//		},
//		{
//			"desc" : "conn3",
//			"threadId" : "139872760190720",
//			"connectionId" : 3,
//			"client" : "127.0.0.1:55969",
//			"active" : true,
//			"opid" : 23844,
//			"secs_running" : 0,
//			"microsecs_running" : NumberLong(48),
//			"op" : "command",
//			"ns" : "admin.$cmd",
//			"query" : {
//				"currentOp" : 1
//			},
//			"numYields" : 0,
//			"locks" : {

//			},
//			"waitingForLock" : false,
//			"lockStats" : {

//			}
//		}
//	],
//	"ok" : 1
//}
db.killOp(23747)
//{ "info" : "attempting to kill op", "ok" : 1 }
homework.c()
//12
