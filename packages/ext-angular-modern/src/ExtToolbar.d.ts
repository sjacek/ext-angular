import { ElementRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
import * as ɵngcc0 from '@angular/core';
export declare class ExtToolbarComponent extends EngBase {
    constructor(eRef: ElementRef, hostComponent: EngBase, vc: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExtToolbarComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ExtToolbarComponent, "ExtToolbar", never, {
    "aMe": "aMe";
    "header": "header";
    "renderer": "renderer";
    "label": "label";
    "fitToParent": "fitToParent";
    "tab": "tab";
    "config": "config";
    "platformConfig": "platformConfig";
    "extname": "extname";
    "viewport": "viewport";
    "align": "align";
    "plugins": "plugins";
    "responsiveConfig": "responsiveConfig";
    "responsiveFormulas": "responsiveFormulas";
    "activeChildTabIndex": "activeChildTabIndex";
    "activeItem": "activeItem";
    "alignSelf": "alignSelf";
    "allowFocusingDisabledChildren": "allowFocusingDisabledChildren";
    "alwaysOnTop": "alwaysOnTop";
    "ariaAttributes": "ariaAttributes";
    "ariaDescribedBy": "ariaDescribedBy";
    "ariaLabel": "ariaLabel";
    "ariaLabelledBy": "ariaLabelledBy";
    "autoDestroy": "autoDestroy";
    "autoSize": "autoSize";
    "axisLock": "axisLock";
    "bind": "bind";
    "bodyCls": "bodyCls";
    "border": "border";
    "bottom": "bottom";
    "cardSwitchAnimation": "cardSwitchAnimation";
    "centered": "centered";
    "cls": "cls";
    "constrainAlign": "constrainAlign";
    "contentEl": "contentEl";
    "control": "control";
    "controller": "controller";
    "data": "data";
    "defaultButtonUI": "defaultButtonUI";
    "defaultFocus": "defaultFocus";
    "defaultListenerScope": "defaultListenerScope";
    "defaults": "defaults";
    "defaultType": "defaultType";
    "disabled": "disabled";
    "displayed": "displayed";
    "docked": "docked";
    "draggable": "draggable";
    "undefined": "undefined";
    "flex": "flex";
    "floated": "floated";
    "focusableContainer": "focusableContainer";
    "focusCls": "focusCls";
    "fullscreen": "fullscreen";
    "height": "height";
    "hidden": "hidden";
    "hideAnimation": "hideAnimation";
    "hideMode": "hideMode";
    "hideOnMaskTap": "hideOnMaskTap";
    "html": "html";
    "id": "id";
    "inactiveChildTabIndex": "inactiveChildTabIndex";
    "innerCls": "innerCls";
    "instanceCls": "instanceCls";
    "itemId": "itemId";
    "items": "items";
    "keyMap": "keyMap";
    "keyMapEnabled": "keyMapEnabled";
    "keyMapTarget": "keyMapTarget";
    "layout": "layout";
    "left": "left";
    "listeners": "listeners";
    "manageBorders": "manageBorders";
    "margin": "margin";
    "masked": "masked";
    "maxHeight": "maxHeight";
    "maxWidth": "maxWidth";
    "minHeight": "minHeight";
    "minWidth": "minWidth";
    "modal": "modal";
    "modelValidation": "modelValidation";
    "name": "name";
    "nameable": "nameable";
    "nameHolder": "nameHolder";
    "padding": "padding";
    "publishes": "publishes";
    "record": "record";
    "reference": "reference";
    "referenceHolder": "referenceHolder";
    "relative": "relative";
    "renderTo": "renderTo";
    "resetFocusPosition": "resetFocusPosition";
    "right": "right";
    "ripple": "ripple";
    "scrollable": "scrollable";
    "session": "session";
    "shadow": "shadow";
    "shareableName": "shareableName";
    "shim": "shim";
    "showAnimation": "showAnimation";
    "stateful": "stateful";
    "statefulDefaults": "statefulDefaults";
    "stateId": "stateId";
    "style": "style";
    "tabIndex": "tabIndex";
    "title": "title";
    "toFrontOnShow": "toFrontOnShow";
    "tooltip": "tooltip";
    "top": "top";
    "touchAction": "touchAction";
    "tpl": "tpl";
    "tplWriteMode": "tplWriteMode";
    "translatable": "translatable";
    "twoWayBindable": "twoWayBindable";
    "ui": "ui";
    "userCls": "userCls";
    "userSelectable": "userSelectable";
    "viewModel": "viewModel";
    "weight": "weight";
    "weighted": "weighted";
    "width": "width";
    "x": "x";
    "xtype": "xtype";
    "y": "y";
    "zIndex": "zIndex";
}, {
    "ready": "ready";
    "activate": "activate";
    "activeItemchange": "activeItemchange";
    "add": "add";
    "added": "added";
    "beforeactiveItemchange": "beforeactiveItemchange";
    "beforebottomchange": "beforebottomchange";
    "beforecenteredchange": "beforecenteredchange";
    "beforedisabledchange": "beforedisabledchange";
    "beforedockedchange": "beforedockedchange";
    "beforeheightchange": "beforeheightchange";
    "beforehiddenchange": "beforehiddenchange";
    "beforehide": "beforehide";
    "beforeleftchange": "beforeleftchange";
    "beforemaxHeightchange": "beforemaxHeightchange";
    "beforemaxWidthchange": "beforemaxWidthchange";
    "beforeminHeightchange": "beforeminHeightchange";
    "beforeminWidthchange": "beforeminWidthchange";
    "beforeorientationchange": "beforeorientationchange";
    "beforerightchange": "beforerightchange";
    "beforescrollablechange": "beforescrollablechange";
    "beforeshow": "beforeshow";
    "beforetofront": "beforetofront";
    "beforetopchange": "beforetopchange";
    "beforewidthchange": "beforewidthchange";
    "blur": "blur";
    "bottomchange": "bottomchange";
    "centeredchange": "centeredchange";
    "deactivate": "deactivate";
    "destroy": "destroy";
    "disabledchange": "disabledchange";
    "dockedchange": "dockedchange";
    "erased": "erased";
    "floatingchange": "floatingchange";
    "focus": "focus";
    "focusenter": "focusenter";
    "focusleave": "focusleave";
    "fullscreen": "fullscreen";
    "heightchange": "heightchange";
    "hiddenchange": "hiddenchange";
    "hide": "hide";
    "initialize": "initialize";
    "leftchange": "leftchange";
    "maxHeightchange": "maxHeightchange";
    "maxWidthchange": "maxWidthchange";
    "minHeightchange": "minHeightchange";
    "minWidthchange": "minWidthchange";
    "move": "move";
    "moved": "moved";
    "orientationchange": "orientationchange";
    "painted": "painted";
    "positionedchange": "positionedchange";
    "remove": "remove";
    "removed": "removed";
    "renderedchange": "renderedchange";
    "resize": "resize";
    "rightchange": "rightchange";
    "scrollablechange": "scrollablechange";
    "show": "show";
    "tofront": "tofront";
    "topchange": "topchange";
    "updatedata": "updatedata";
    "widthchange": "widthchange";
}, never>;
}

//# sourceMappingURL=ExtToolbar.d.ts.map