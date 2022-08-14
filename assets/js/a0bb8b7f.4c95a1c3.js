"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81231],{41413:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new PlayerDataStoreManager.","params":[{"name":"robloxDataStore","desc":"","lua_type":"DataStore"},{"name":"keyGenerator","desc":"Function that takes in a player, and outputs a key","lua_type":"(player) -> string"}],"returns":[{"desc":"","lua_type":"PlayerDataStoreManager"}],"function_type":"static","source":{"line":30,"path":"src/datastore/src/Server/PlayerDataStoreManager.lua"}},{"name":"DisableSaveOnCloseStudio","desc":"For if you want to disable saving in studio for faster close time!","params":[],"returns":[],"function_type":"method","source":{"line":65,"path":"src/datastore/src/Server/PlayerDataStoreManager.lua"}},{"name":"AddRemovingCallback","desc":"Adds a callback to be called before save on removal","params":[{"name":"callback","desc":"May return a promise","lua_type":"function"}],"returns":[],"function_type":"method","source":{"line":75,"path":"src/datastore/src/Server/PlayerDataStoreManager.lua"}},{"name":"RemovePlayerDataStore","desc":"Callable to allow manual GC so things can properly clean up.\\nThis can be used to pre-emptively cleanup players.","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[],"function_type":"method","source":{"line":85,"path":"src/datastore/src/Server/PlayerDataStoreManager.lua"}},{"name":"GetDataStore","desc":"","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[{"desc":"","lua_type":"DataStore"}],"function_type":"method","source":{"line":93,"path":"src/datastore/src/Server/PlayerDataStoreManager.lua"}},{"name":"PromiseAllSaves","desc":"Removes all player data stores, and returns a promise that\\nresolves when all pending saves are saved.","params":[],"returns":[{"desc":"","lua_type":"Promise"}],"function_type":"method","source":{"line":114,"path":"src/datastore/src/Server/PlayerDataStoreManager.lua"}}],"properties":[],"types":[],"name":"PlayerDataStoreManager","desc":"DataStore manager for player that automatically saves on player leave and game close.","realm":["Server"],"source":{"line":7,"path":"src/datastore/src/Server/PlayerDataStoreManager.lua"}}')}}]);