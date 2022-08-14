"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1658],{40447:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new DataStoreWriter. In general, you will not use this API directly.","params":[],"returns":[{"desc":"","lua_type":"DataStoreWriter"}],"function_type":"static","source":{"line":21,"path":"src/datastore/src/Server/Modules/DataStoreWriter.lua"}},{"name":"SetRawData","desc":"Sets the ray data to write","params":[{"name":"data","desc":"","lua_type":"table"}],"returns":[],"function_type":"method","source":{"line":34,"path":"src/datastore/src/Server/Modules/DataStoreWriter.lua"}},{"name":"AddWriter","desc":"Adds a recursive child writer to use at the key `name`","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"writer","desc":"","lua_type":"DataStoreWriter"}],"returns":[],"function_type":"method","source":{"line":43,"path":"src/datastore/src/Server/Modules/DataStoreWriter.lua"}},{"name":"WriteMerge","desc":"Merges the new data into the original value","params":[{"name":"original","desc":"","lua_type":"table?"}],"returns":[{"desc":"The original table","lua_type":"table"}],"function_type":"method","source":{"line":57,"path":"src/datastore/src/Server/Modules/DataStoreWriter.lua"}}],"properties":[],"types":[],"name":"DataStoreWriter","desc":"Captures a snapshot of data to write and then merges it with the original.","realm":["Server"],"source":{"line":6,"path":"src/datastore/src/Server/Modules/DataStoreWriter.lua"}}')}}]);