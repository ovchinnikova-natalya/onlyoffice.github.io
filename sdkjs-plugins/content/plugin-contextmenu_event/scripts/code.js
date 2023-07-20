/**
 *
 * (c) Copyright Ascensio System SIA 2020
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function(window, undefined){

	console.log('work');
	window.Asc.plugin.init = function()
	{
	};

	window.Asc.plugin.button = function(id)
	{
		this.executeCommand("close", "");
	};

	window.Asc.plugin.event_onContextMenuShow = function(options) {
		switch (options.type)
		{
			case "Target":
			{
				this.executeMethod("AddContextMenuItem", [{
					guid : this.guid,
					items : [
						{
							id : "onClickItem1",
							text : { en : "Item 1", de : "Menü 1" },
							items : [
								{
									id : "onClickItem1Sub1",
									text : { en : "Subitem 1", de : "Untermenü 1" },
									disabled : true
								},
								{
									id : "onClickItem1Sub2",
									text : { en : "Subitem 2", de : "Untermenü 2" },
									separator: true
								}
							]
						},
						{
							id : "onClickItem2",
							text : { en : "Item 2", de : "Menü 2" }
						}
					]
				}]);
				break;
			}
			case "Selection":
			{
				this.executeMethod("AddContextMenuItem", [{
					guid : this.guid,
					items : [
						{
							id : "onClickItem3",
							text : { en : "Item 3", de : "Menü 3" }
						}
					]
				}]);
				break;
			}
			case 'Image':
			case 'Shape':
			{
				this.executeMethod("AddContextMenuItem", [{
					guid : this.guid,
					items : [
						{
							id : "onClickItem4",
							text : { en : "Item 4", de : "Menü 4" }
						}
					]
				}]);
				break;
			}
			default:
				break;
		}
	};

	window.Asc.plugin.attachContextMenuClickEvent("onClickItem1Sub1", function(){
		window.Asc.plugin.executeMethod("InputText", ["clicked: onClickItem1Sub1"]);
	});

	window.Asc.plugin.attachContextMenuClickEvent("onClickItem1Sub2", function(){
		window.Asc.plugin.executeMethod("InputText", ["clicked: onClickItem1Sub2"]);
	});

	window.Asc.plugin.attachContextMenuClickEvent("onClickItem2", function(){
		window.Asc.plugin.executeMethod("InputText", ["clicked: onClickItem2"]);
	});

	window.Asc.plugin.attachContextMenuClickEvent("onClickItem3", function(){
		window.Asc.plugin.executeMethod("InputText", ["clicked: onClickItem3"]);
	});

	window.Asc.plugin.attachContextMenuClickEvent("onClickItem4", function(){
		console.log("clicked: onClickItem4");
	});
	
	window.Asc.plugin.event_onTargetPositionChanged = function()
	{
		console.log("event: onTargetPositionChanged");

	};

})(window, undefined);
