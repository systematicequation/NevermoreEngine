"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74196],{49895:function(e){e.exports=JSON.parse('{"functions":[{"name":"Init","desc":"Initializes the idle service on the client. Should be done via [ServiceBag].","params":[{"name":"serviceBag","desc":"","lua_type":"ServiceBag"}],"returns":[],"function_type":"method","source":{"line":30,"path":"src/idleservice/src/Client/IdleServiceClient.lua"}},{"name":"Start","desc":"Starts idle service on the client. Should be done via [ServiceBag].","params":[],"returns":[],"function_type":"method","source":{"line":63,"path":"src/idleservice/src/Client/IdleServiceClient.lua"}},{"name":"ObserveHumanoidMoveFromCurrentPosition","desc":"Observes a humanoid moving from the current position after a set amount of time. Can be used\\nto close a UI when the humanoid wanders too far.","params":[{"name":"minimumTimeVisible","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Observable"}],"function_type":"method","source":{"line":90,"path":"src/idleservice/src/Client/IdleServiceClient.lua"}},{"name":"IsHumanoidIdle","desc":"Returns whether the humanoid is idle.","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":117,"path":"src/idleservice/src/Client/IdleServiceClient.lua"}},{"name":"ObserveHumanoidIdle","desc":"observes if the humanoid is idle.","params":[],"returns":[{"desc":"","lua_type":"Observable<boolean>"}],"function_type":"method","source":{"line":125,"path":"src/idleservice/src/Client/IdleServiceClient.lua"}},{"name":"DoShowIdleUI","desc":"Returns whether UI should be shown (if the humanoid is idle)","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":133,"path":"src/idleservice/src/Client/IdleServiceClient.lua"}},{"name":"ObserveShowIdleUI","desc":"Observes whether to show the the idle UI","params":[],"returns":[{"desc":"","lua_type":"Observable<boolean>"}],"function_type":"method","source":{"line":141,"path":"src/idleservice/src/Client/IdleServiceClient.lua"}},{"name":"GetShowIdleUIBoolValue","desc":"Returns a show idle bool value.","params":[],"returns":[{"desc":"","lua_type":"BoolValue"}],"function_type":"method","source":{"line":149,"path":"src/idleservice/src/Client/IdleServiceClient.lua"}},{"name":"PushDisable","desc":"Pushes a disabling function that disables idle UI","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":159,"path":"src/idleservice/src/Client/IdleServiceClient.lua"}}],"properties":[],"types":[],"name":"IdleServiceClient","desc":"Helps track whether or not a player is idle and if so, then can show UI or other cute things.","realm":["Client"],"source":{"line":7,"path":"src/idleservice/src/Client/IdleServiceClient.lua"}}')}}]);