/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
//import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
import { base } from './base';
var pivotgridgroupcellMetaData = /** @class */ (function () {
    function pivotgridgroupcellMetaData() {
    }
    pivotgridgroupcellMetaData.XTYPE = 'pivotgridgroupcell';
    pivotgridgroupcellMetaData.PROPERTIESOBJECT = {
        "align": "'left'/'center'/'right'",
        "alwaysOnTop": "Boolean/Number",
        "ariaAttributes": "Object",
        "ariaDescribedBy": "String",
        "ariaLabel": "String",
        "ariaLabelledBy": "String",
        "bind": "Object/String",
        "bodyCls": "String",
        "bodyStyle": "String/Object",
        "border": "Boolean",
        "cellCls": "String",
        "cls": "String",
        "column": "Ext.grid.column.Column",
        "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
        "controller": "String/Object/Ext.app.ViewController",
        "defaultListenerScope": "Boolean",
        "defaultToolWeights": "Object",
        "disabled": "Boolean",
        "encodeHtml": "Boolean",
        "eventHandlers": "Object",
        "flex": "Number/String/Object",
        "floated": "Boolean",
        "focusCls": "String",
        "formatter": "String",
        "height": "Number/String",
        "hidden": "Boolean",
        "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
        "id": "String",
        "instanceCls": "String/String[]",
        "itemId": "String",
        "keyMap": "Object",
        "keyMapEnabled": "Boolean",
        "keyMapTarget": "String",
        "listeners": "Object",
        "name": "String",
        "nameable": "Boolean",
        "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
        "publishes": "String/String[]/Object",
        "rawValue": "String",
        "record": "Ext.data.Model",
        "reference": "String",
        "relative": "Boolean",
        "renderer": "Function/String",
        "renderTo": "Ext.dom.Element",
        "ripple": "Boolean/Object/String",
        "scope": "Object",
        "selectable": "Boolean",
        "selfAlign": "String",
        "session": "Boolean/Object/Ext.data.Session",
        "shadow": "Boolean",
        "shareableName": "Boolean",
        "shim": "Boolean",
        "style": "String/Object",
        "toFrontOnShow": "Boolean",
        "toolDefaults": "Object",
        "tools": "Ext.Tool[]/Object/Object[]",
        "touchAction": "Object",
        "tpl": "String/String[]/Ext.XTemplate",
        "translatable": "Object",
        "twoWayBindable": "String/String[]/Object",
        "ui": "String/String[]",
        "userCls": "String/String[]",
        "value": "Mixed",
        "viewModel": "String/Object/Ext.app.ViewModel",
        "width": "Number/String",
        "x": "Number",
        "y": "Number",
        "zeroValue": "String",
        "platformConfig": "Object",
        "responsiveConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    pivotgridgroupcellMetaData.PROPERTIES = [
        'align',
        'alwaysOnTop',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'bind',
        'bodyCls',
        'bodyStyle',
        'border',
        'cellCls',
        'cls',
        'column',
        'constrainAlign',
        'controller',
        'defaultListenerScope',
        'defaultToolWeights',
        'disabled',
        'encodeHtml',
        'eventHandlers',
        'flex',
        'floated',
        'focusCls',
        'formatter',
        'height',
        'hidden',
        'hideMode',
        'id',
        'instanceCls',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'listeners',
        'name',
        'nameable',
        'plugins',
        'publishes',
        'rawValue',
        'record',
        'reference',
        'relative',
        'renderer',
        'renderTo',
        'ripple',
        'scope',
        'selectable',
        'selfAlign',
        'session',
        'shadow',
        'shareableName',
        'shim',
        'style',
        'toFrontOnShow',
        'toolDefaults',
        'tools',
        'touchAction',
        'tpl',
        'translatable',
        'twoWayBindable',
        'ui',
        'userCls',
        'value',
        'viewModel',
        'width',
        'x',
        'y',
        'zeroValue',
        'platformConfig',
        'responsiveConfig',
        'align',
        'fitToParent',
        'config'
    ];
    pivotgridgroupcellMetaData.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforetofront', parameters: 'pivotgridgroupcell' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'pivotgridgroupcell,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'focus', parameters: 'pivotgridgroupcell,event' },
        { name: 'focusenter', parameters: 'pivotgridgroupcell,event' },
        { name: 'focusleave', parameters: 'pivotgridgroupcell,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'tofront', parameters: 'pivotgridgroupcell' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    pivotgridgroupcellMetaData.EVENTNAMES = [
        'beforedisabledchange',
        'beforeheightchange',
        'beforehiddenchange',
        'beforetofront',
        'beforewidthchange',
        'blur',
        'disabledchange',
        'focus',
        'focusenter',
        'focusleave',
        'heightchange',
        'hiddenchange',
        'tofront',
        'widthchange',
        'ready'
    ];
    return pivotgridgroupcellMetaData;
}());
export { pivotgridgroupcellMetaData };
if (false) {
    /** @type {?} */
    pivotgridgroupcellMetaData.XTYPE;
    /** @type {?} */
    pivotgridgroupcellMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    pivotgridgroupcellMetaData.PROPERTIES;
    /** @type {?} */
    pivotgridgroupcellMetaData.EVENTS;
    /** @type {?} */
    pivotgridgroupcellMetaData.EVENTNAMES;
}
var ExtPivotgridgroupcellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPivotgridgroupcellComponent, _super);
    function ExtPivotgridgroupcellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, pivotgridgroupcellMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,pivotgridgroupcellMetaData,hostComponent)}
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,pivotgridgroupcellMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ExtPivotgridgroupcellComponent.prototype.ngOnInit = 
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,pivotgridgroupcellMetaData,hostComponent)}
    /**
     * @return {?}
     */
    function () { this.baseOnInit(pivotgridgroupcellMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtPivotgridgroupcellComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtPivotgridgroupcellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pivotgridgroupcell',
                    inputs: pivotgridgroupcellMetaData.PROPERTIES,
                    outputs: pivotgridgroupcellMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtPivotgridgroupcellComponent; }) }],
                    template: '<ng-template></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtPivotgridgroupcellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    return ExtPivotgridgroupcellComponent;
}(base));
export { ExtPivotgridgroupcellComponent };
if (false) {
    /** @type {?} */
    ExtPivotgridgroupcellComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpdm90Z3JpZGdyb3VwY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1waXZvdGdyaWRncm91cGNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDOztBQUV2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0lBQUE7SUF5TEEsQ0FBQztJQXhMZSxnQ0FBSyxHQUFXLG9CQUFvQixDQUFDO0lBQ3JDLDJDQUFnQixHQUFRO1FBQ3BDLE9BQU8sRUFBRSx5QkFBeUI7UUFDbEMsYUFBYSxFQUFFLGdCQUFnQjtRQUMvQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGlCQUFpQixFQUFFLFFBQVE7UUFDM0IsV0FBVyxFQUFFLFFBQVE7UUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixNQUFNLEVBQUUsZUFBZTtRQUN2QixTQUFTLEVBQUUsUUFBUTtRQUNuQixXQUFXLEVBQUUsZUFBZTtRQUM1QixRQUFRLEVBQUUsU0FBUztRQUNuQixTQUFTLEVBQUUsUUFBUTtRQUNuQixLQUFLLEVBQUUsUUFBUTtRQUNmLFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsZ0JBQWdCLEVBQUUsd0NBQXdDO1FBQzFELFlBQVksRUFBRSxzQ0FBc0M7UUFDcEQsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyxvQkFBb0IsRUFBRSxRQUFRO1FBQzlCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFlBQVksRUFBRSxTQUFTO1FBQ3ZCLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLE1BQU0sRUFBRSxzQkFBc0I7UUFDOUIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsV0FBVyxF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aUJBQ3hDOzs7O2dCQXJNQyxVQUFVO2dCQUlILElBQUksdUJBb01TLElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFVbEQscUNBQUM7Q0FBQSxBQW5CRCxDQU9vRCxJQUFJLEdBWXZEO1NBWlksOEJBQThCOzs7SUFFdEIsdURBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IFJvdXRlck91dGxldCwgQ2hpbGRyZW5PdXRsZXRDb250ZXh0cyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIHBpdm90Z3JpZGdyb3VwY2VsbE1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ3Bpdm90Z3JpZGdyb3VwY2VsbCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWxpZ25cIjogXCInbGVmdCcvJ2NlbnRlcicvJ3JpZ2h0J1wiLFxuICAgIFwiYWx3YXlzT25Ub3BcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYmluZFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImJvZHlDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImJvZHlTdHlsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImJvcmRlclwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNlbGxDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImNsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29sdW1uXCI6IFwiRXh0LmdyaWQuY29sdW1uLkNvbHVtblwiLFxuICAgIFwiY29uc3RyYWluQWxpZ25cIjogXCJTdHJpbmcvRXh0LnV0aWwuUmVnaW9uL0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkZWZhdWx0VG9vbFdlaWdodHNcIjogXCJPYmplY3RcIixcbiAgICBcImRpc2FibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZW5jb2RlSHRtbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImV2ZW50SGFuZGxlcnNcIjogXCJPYmplY3RcIixcbiAgICBcImZsZXhcIjogXCJOdW1iZXIvU3RyaW5nL09iamVjdFwiLFxuICAgIFwiZmxvYXRlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJmb3JtYXR0ZXJcIjogXCJTdHJpbmdcIixcbiAgICBcImhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVNb2RlXCI6IFwiJ2NsaXAnLydkaXNwbGF5Jy8nb2Zmc2V0cycvJ29wYWNpdHknLyd2aXNpYmlsaXR5J1wiLFxuICAgIFwiaWRcIjogXCJTdHJpbmdcIixcbiAgICBcImluc3RhbmNlQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJpdGVtSWRcIjogXCJTdHJpbmdcIixcbiAgICBcImtleU1hcFwiOiBcIk9iamVjdFwiLFxuICAgIFwia2V5TWFwRW5hYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImtleU1hcFRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJuYW1lXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJuYW1lYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInBsdWdpbnNcIjogXCJBcnJheS9FeHQuZW51bXMuUGx1Z2luL09iamVjdC9FeHQucGx1Z2luLkFic3RyYWN0XCIsXG4gICAgXCJwdWJsaXNoZXNcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJyYXdWYWx1ZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVjb3JkXCI6IFwiRXh0LmRhdGEuTW9kZWxcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVsYXRpdmVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyZW5kZXJlclwiOiBcIkZ1bmN0aW9uL1N0cmluZ1wiLFxuICAgIFwicmVuZGVyVG9cIjogXCJFeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcInJpcHBsZVwiOiBcIkJvb2xlYW4vT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwic2NvcGVcIjogXCJPYmplY3RcIixcbiAgICBcInNlbGVjdGFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzZWxmQWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFkb3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hpbVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidG9Gcm9udE9uU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInRvb2xEZWZhdWx0c1wiOiBcIk9iamVjdFwiLFxuICAgIFwidG9vbHNcIjogXCJFeHQuVG9vbFtdL09iamVjdC9PYmplY3RbXVwiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRwbFwiOiBcIlN0cmluZy9TdHJpbmdbXS9FeHQuWFRlbXBsYXRlXCIsXG4gICAgXCJ0cmFuc2xhdGFibGVcIjogXCJPYmplY3RcIixcbiAgICBcInR3b1dheUJpbmRhYmxlXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwidWlcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInVzZXJDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInZhbHVlXCI6IFwiTWl4ZWRcIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcIndpZHRoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwieFwiOiBcIk51bWJlclwiLFxuICAgIFwieVwiOiBcIk51bWJlclwiLFxuICAgIFwiemVyb1ZhbHVlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FsaWduJyxcbiAgICAnYWx3YXlzT25Ub3AnLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYmluZCcsXG4gICAgJ2JvZHlDbHMnLFxuICAgICdib2R5U3R5bGUnLFxuICAgICdib3JkZXInLFxuICAgICdjZWxsQ2xzJyxcbiAgICAnY2xzJyxcbiAgICAnY29sdW1uJyxcbiAgICAnY29uc3RyYWluQWxpZ24nLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkZWZhdWx0VG9vbFdlaWdodHMnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2VuY29kZUh0bWwnLFxuICAgICdldmVudEhhbmRsZXJzJyxcbiAgICAnZmxleCcsXG4gICAgJ2Zsb2F0ZWQnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2Zvcm1hdHRlcicsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaWQnLFxuICAgICdpbnN0YW5jZUNscycsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICduYW1lJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmF3VmFsdWUnLFxuICAgICdyZWNvcmQnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZWxhdGl2ZScsXG4gICAgJ3JlbmRlcmVyJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyaXBwbGUnLFxuICAgICdzY29wZScsXG4gICAgJ3NlbGVjdGFibGUnLFxuICAgICdzZWxmQWxpZ24nLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzdHlsZScsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sRGVmYXVsdHMnLFxuICAgICd0b29scycsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2YWx1ZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3knLFxuICAgICd6ZXJvVmFsdWUnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdhbGlnbicsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J3Bpdm90Z3JpZGdyb3VwY2VsbCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidwaXZvdGdyaWRncm91cGNlbGwsZXZlbnQnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczoncGl2b3RncmlkZ3JvdXBjZWxsLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J3Bpdm90Z3JpZGdyb3VwY2VsbCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidwaXZvdGdyaWRncm91cGNlbGwsZXZlbnQnfSxcblx0XHR7bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTondG9mcm9udCcscGFyYW1ldGVyczoncGl2b3RncmlkZ3JvdXBjZWxsJ30sXG5cdFx0e25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZXRvZnJvbnQnLFxuXHRcdCdiZWZvcmV3aWR0aGNoYW5nZScsXG5cdFx0J2JsdXInLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdoZWlnaHRjaGFuZ2UnLFxuXHRcdCdoaWRkZW5jaGFuZ2UnLFxuXHRcdCd0b2Zyb250Jyxcblx0XHQnd2lkdGhjaGFuZ2UnLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwaXZvdGdyaWRncm91cGNlbGwnLCBcbiAgaW5wdXRzOiBwaXZvdGdyaWRncm91cGNlbGxNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBwaXZvdGdyaWRncm91cGNlbGxNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0UGl2b3RncmlkZ3JvdXBjZWxsQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0UGl2b3RncmlkZ3JvdXBjZWxsQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtcbiAgICAgIHN1cGVyKGVSZWYubmF0aXZlRWxlbWVudCxwaXZvdGdyaWRncm91cGNlbGxNZXRhRGF0YSxob3N0Q29tcG9uZW50KVxuICAgIH1cbiAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihob3N0Q29tcG9uZW50LHBpdm90Z3JpZGdyb3VwY2VsbE1ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KHBpdm90Z3JpZGdyb3VwY2VsbE1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19