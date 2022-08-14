"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90596],{76017:e=>{e.exports=JSON.parse('{"functions":[{"name":"animating","desc":"Utility function that returns whether or not a spring is animating based upon\\nvelocity and closeness to target, and as the second value, the value that should be\\nused.","params":[{"name":"spring","desc":"","lua_type":"Spring<T>"},{"name":"epsilon","desc":"Optional epsilon","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"boolean, T"}],"function_type":"static","source":{"line":22,"path":"src/spring/src/Shared/SpringUtils.lua"}},{"name":"getVelocityAdjustment","desc":"Add to spring position to adjust for velocity of target. May have to set clock to time().","params":[{"name":"velocity","desc":"","lua_type":"T"},{"name":"dampen","desc":"","lua_type":"number"},{"name":"speed","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"T"}],"function_type":"static","source":{"line":58,"path":"src/spring/src/Shared/SpringUtils.lua"}},{"name":"toLinearIfNeeded","desc":"Converts an arbitrary value to a LinearValue if Roblox has not defined this value\\nfor multiplication and addition.","params":[{"name":"value","desc":"","lua_type":"T"}],"returns":[{"desc":"","lua_type":"LinearValue<T> | T"}],"function_type":"static","source":{"line":73,"path":"src/spring/src/Shared/SpringUtils.lua"}},{"name":"fromLinearIfNeeded","desc":"Extracts the base value out of a packed linear value if needed.","params":[{"name":"value","desc":"","lua_type":"LinearValue<T> | any"}],"returns":[{"desc":"","lua_type":"T | any"}],"function_type":"static","source":{"line":91,"path":"src/spring/src/Shared/SpringUtils.lua"}}],"properties":[],"types":[],"name":"SpringUtils","desc":"Utility functions that are related to the Spring object","source":{"line":5,"path":"src/spring/src/Shared/SpringUtils.lua"}}')}}]);