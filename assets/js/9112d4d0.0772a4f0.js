"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50647],{43703:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new Octree.","params":[],"returns":[{"desc":"","lua_type":"Octree<T>"}],"function_type":"static","source":{"line":59,"path":"src/octree/src/Shared/Octree.lua"}},{"name":"GetAllNodes","desc":"Returns all octree nodes stored in the octree!\\n\\n```lua\\nlocal octree = Octree.new()\\noctree:CreateNode(Vector3.new(0, 0, 0), \\"Hi\\")\\noctree:CreateNode(Vector3.new(0, 0, 0), \\"Bob\\")\\nprint(octree:GetAllNodes()) --\x3e { \\"Hi\\", \\"Bob\\" }\\n```\\n\\nOrder is not guaranteed.\\n\\n:::warning\\nIf you have 100,000 nodes in your octree, this is going to be very slow.\\n:::","params":[],"returns":[{"desc":"","lua_type":"{ OctreeNode<T> }"}],"function_type":"method","source":{"line":87,"path":"src/octree/src/Shared/Octree.lua"}},{"name":"CreateNode","desc":"Creates a new OctreeNode at the given position which can be retrieved\\n\\n:::tip\\nBe sure to call :Destroy() on a node if the data becomes stale. Note that\\nthis is not necessary if the whole octree is removed from memory.\\n:::\\n\\n```lua\\nlocal octree = Octree.new()\\noctree:CreateNode(Vector3.new(0, 0, 0), \\"A\\")\\noctree:CreateNode(Vector3.new(0, 0, 0), \\"B\\")\\n```","params":[{"name":"position","desc":"","lua_type":"Vector3"},{"name":"object","desc":"","lua_type":"T"}],"returns":[{"desc":"","lua_type":"OctreeNode<T>"}],"function_type":"method","source":{"line":119,"path":"src/octree/src/Shared/Octree.lua"}},{"name":"RadiusSearch","desc":"Searches at the position and radius for any objects that may be within\\nthis radius.\\n\\n```lua\\nlocal octree = Octree.new()\\noctree:CreateNode(Vector3.new(0, 0, 0), \\"A\\")\\noctree:CreateNode(Vector3.new(0, 0, 0), \\"B\\")\\noctree:CreateNode(Vector3.new(0, 0, 1000), \\"C\\")\\nprint(octree:RadiusSearch(Vector3.new(0, 0, 0), 100)) --\x3e { \\"A\\", \\"B\\" }\\n```","params":[{"name":"position","desc":"","lua_type":"Vector3"},{"name":"radius","desc":"","lua_type":"number"}],"returns":[{"desc":"Objects found","lua_type":"{ T }"},{"desc":"Distances squared","lua_type":"{ number }"}],"function_type":"method","source":{"line":147,"path":"src/octree/src/Shared/Octree.lua"}},{"name":"KNearestNeighborsSearch","desc":"Searches at the position and radius for any objects that may be within\\nthis radius. Returns the knearest entries.\\n\\nThe closest entities will be first in the list.","params":[{"name":"position","desc":"","lua_type":"Vector3"},{"name":"k","desc":"Number of objects to find","lua_type":"number"},{"name":"radius","desc":"","lua_type":"number"}],"returns":[{"desc":"Objects found","lua_type":"{ any }"},{"desc":"Distances squared","lua_type":"{ number }"}],"function_type":"method","source":{"line":167,"path":"src/octree/src/Shared/Octree.lua"}},{"name":"GetOrCreateLowestSubRegion","desc":"Internal API to create lowest subregion","params":[{"name":"px","desc":"","lua_type":"number"},{"name":"py","desc":"","lua_type":"number"},{"name":"pz","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"OctreeSubregion"}],"function_type":"method","private":true,"source":{"line":206,"path":"src/octree/src/Shared/Octree.lua"}}],"properties":[],"types":[],"name":"Octree","desc":"Octree implementation. An octree is a data structure that allows for quick spatial\\ndata queries of static objects. For example, trees can be stored in an octree, and\\nnearby trees could be found near the player.\\n\\nOctrees exists as a grid of nodes, which are subdivided in half in each axis, which\\nresults in 8 different regions. This recursively happens to a set depth.\\n\\nThis allows for O(n) data storage and log(n) retrieval of nearby objects. With a large\\nquantity of items in the octree, this can make data retrieval significantly faster.\\n\\nSee also: https://en.wikipedia.org/wiki/Octree\\n\\n```lua\\nlocal octree = Octree.new()\\noctree:CreateNode(Vector3.new(0, 0, 0), \\"A\\")\\noctree:CreateNode(Vector3.new(0, 0, 0), \\"B\\")\\noctree:CreateNode(Vector3.new(0, 0, 0), workspace)\\noctree:CreateNode(Vector3.new(0, 0, 1000), \\"C\\")\\nprint(octree:RadiusSearch(Vector3.new(0, 0, 0), 100)) --\x3e { \\"A\\", \\"B\\", workspace }\\n```\\n\\n:::tip\\nOctrees are best for static objects in the world, and not objects moving around, since then\\ndata can be statically cached.\\n\\nSometimes using Roblox\'s spatial hash using the region API is faster than using an octree. However,\\nfor data that is centralized, or static, an octree can be a very efficient spatial query mechanism.\\n\\nThat said, it is totally fine to track the objects that DO move around using octree, as long as you \\napply proper optimizations. The main performance cost of doing this comes down to tracking and \\nupating the position of the objects, which is fine if: \\n\\t1) You have a way to detect the movement without having to loop through all the moving \\n\\tobjects to update the position\\n\\t2) You can tolerate some inaccuracy with positions and smear this update\\n\\t3) You have less than 1000 objects to track, in this case looping through everything \\n\\tshouldn\'t be too costly. \\n:::","source":{"line":42,"path":"src/octree/src/Shared/Octree.lua"}}')}}]);