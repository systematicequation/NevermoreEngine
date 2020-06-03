---
-- @module RxValueBaseUtils
-- @author Quenty

local require = require(game:GetService("ReplicatedStorage"):WaitForChild("Nevermore"))

local RxInstanceUtils = require("RxInstanceUtils")
local RxBrioUtils = require("RxBrioUtils")

local RxValueBaseUtils = {}

function RxValueBaseUtils.observeValue(parent, className, name)
	return RxInstanceUtils.observeLastNamedChildBrio(parent, className, name)
		:Pipe({
			RxBrioUtils.switchMap(function(child)
				return RxInstanceUtils.observeProperty(child, "Value")
			end)
		})
end

return RxValueBaseUtils