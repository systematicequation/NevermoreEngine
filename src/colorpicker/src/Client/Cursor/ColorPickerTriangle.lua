--[=[
	@class ColorPickerTriangle
]=]

local require = require(script.Parent.loader).load(script)

local BaseObject = require("BaseObject")
local Blend = require("Blend")
local ColorPickerUtils = require("ColorPickerUtils")

local ColorPickerTriangle = setmetatable({}, BaseObject)
ColorPickerTriangle.ClassName = "ColorPickerTriangle"
ColorPickerTriangle.__index = ColorPickerTriangle

function ColorPickerTriangle.new()
	local self = setmetatable(BaseObject.new(), ColorPickerTriangle)

	self._transparency = Instance.new("NumberValue")
	self._transparency.Value = 0
	self._maid:GiveTask(self._transparency)

	self._backgroundColorHint = Instance.new("Color3Value")
	self._backgroundColorHint.Value = Color3.new(0, 0, 0)
	self._maid:GiveTask(self._backgroundColorHint)

	self._color = Instance.new("Color3Value")
	self._color.Value = Color3.new(1, 1, 1)
	self._maid:GiveTask(self._color)

	self._sizeValue = Instance.new("Vector3Value")
	self._sizeValue.Value = Vector3.new(0.05, 0.1, 0)
	self._maid:GiveTask(self._sizeValue)

	self._maid:GiveTask(self:_render():Subscribe(function(gui)
		self.Gui = gui
	end))

	return self
end

function ColorPickerTriangle:HintBackgroundColor(color)
	self._backgroundColorHint.Value = color
end

function ColorPickerTriangle:GetSizeValue()
	return self._sizeValue
end

function ColorPickerTriangle:SetColor(color)
	self._color.Value = color
end

function ColorPickerTriangle:SetTransparency(transparency)
	assert(type(transparency) == "number", "Bad transparency")

	self._transparency.Value = transparency
end

function ColorPickerTriangle:_render()
	return Blend.New "Frame" {
		Name = "ColorPickerTriangle";
		Size = UDim2.new(1, 0, 1, 0);
		BackgroundTransparency = 1;
		[Blend.Children] = {
			Blend.New "ImageLabel" {
				BackgroundTransparency = 1;
				Size = UDim2.new(1, 0, 1, 0);
				ImageColor3 = Blend.Computed(self._color, self._backgroundColorHint, function(color, backingColor)
					return ColorPickerUtils.getOutlineWithContrast(color, backingColor)
				end);
				ImageTransparency = self._transparency;
				Image = "rbxassetid://9291514809";
			};
			Blend.New "UIAspectRatioConstraint" {
				AspectRatio = Blend.Computed(self._sizeValue, function(size)
					if size.x <= 0 or size.y <= 0 then
						return 1
					else
						return size.x/size.y
					end
				end);
			};
		}
	}
end


return ColorPickerTriangle