import { __decorate, __extends, __param } from "tslib";
//import EWCSelectioncolumn from '../dist/ext-selectioncolumn.component.js';
//inputs: (new EWCSelectioncolumn()).properties,
//import EWCSelectioncolumn from '@sencha/ext-web-components-modern/dist/ext-selectioncolumn.component.js';
import { EWCSelectioncolumn } from '@sencha/ext-web-components-modern';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
var ExtSelectioncolumnComponent = /** @class */ (function (_super) {
    __extends(ExtSelectioncolumnComponent, _super);
    function ExtSelectioncolumnComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'align', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'cardSwitchAnimation', 'cell', 'centered', 'cls', 'columns', 'computedWidth', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'dataIndex', 'defaultColumnUI', 'defaultEditor', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultToolWeights', 'defaultType', 'defaultWidth', 'depends', 'disabled', 'displayed', 'docked', 'draggable', 'editable', 'editor', 'editorDefaults', 'undefined', 'undefined', 'undefined', 'exportRenderer', 'exportStyle', 'exportSummaryRenderer', 'filter', 'flex', 'floated', 'focusableContainer', 'focusCls', 'formatter', 'fullscreen', 'groupable', 'grouper', 'groupHeaderTpl', 'headerCheckbox', 'headerCheckboxAlign', 'height', 'hidden', 'hideable', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'hideShowMenuItem', 'html', 'id', 'ignore', 'ignoreExport', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'locked', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'menu', 'menuDisabled', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderer', 'renderTo', 'reserveScrollbar', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'scope', 'scratchCell', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sortable', 'sorter', 'stateful', 'statefulDefaults', 'stateId', 'stopSelection', 'style', 'summary', 'summaryCell', 'summaryDataIndex', 'summaryFormatter', 'summaryRenderer', 'undefined', 'tabIndex', 'text', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'verticalOverflow', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex',], (new EWCSelectioncolumn()).events, ['ready', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforecheckchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'checkchange', 'deactivate', 'destroy', 'disabledchange', 'dockedchange', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'orientationchange', 'painted', 'positionedchange', 'remove', 'removed', 'renderedchange', 'resize', 'rightchange', 'scrollablechange', 'show', 'tofront', 'topchange', 'updatedata', 'widthchange',], vc) || this;
        _this.xtype = 'selectioncolumn';
        return _this;
    }
    ExtSelectioncolumnComponent_1 = ExtSelectioncolumnComponent;
    ExtSelectioncolumnComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtSelectioncolumnComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtSelectioncolumnComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtSelectioncolumnComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtSelectioncolumnComponent_1;
    ExtSelectioncolumnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtSelectioncolumnComponent = ExtSelectioncolumnComponent_1 = __decorate([
        Component({
            selector: 'ExtSelectioncolumn',
            inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'align', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'cardSwitchAnimation', 'cell', 'centered', 'cls', 'columns', 'computedWidth', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'dataIndex', 'defaultColumnUI', 'defaultEditor', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultToolWeights', 'defaultType', 'defaultWidth', 'depends', 'disabled', 'displayed', 'docked', 'draggable', 'editable', 'editor', 'editorDefaults', 'undefined', 'undefined', 'undefined', 'exportRenderer', 'exportStyle', 'exportSummaryRenderer', 'filter', 'flex', 'floated', 'focusableContainer', 'focusCls', 'formatter', 'fullscreen', 'groupable', 'grouper', 'groupHeaderTpl', 'headerCheckbox', 'headerCheckboxAlign', 'height', 'hidden', 'hideable', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'hideShowMenuItem', 'html', 'id', 'ignore', 'ignoreExport', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'locked', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'menu', 'menuDisabled', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderer', 'renderTo', 'reserveScrollbar', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'scope', 'scratchCell', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sortable', 'sorter', 'stateful', 'statefulDefaults', 'stateId', 'stopSelection', 'style', 'summary', 'summaryCell', 'summaryDataIndex', 'summaryFormatter', 'summaryRenderer', 'undefined', 'tabIndex', 'text', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'verticalOverflow', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex',],
            outputs: ['ready', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforecheckchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'checkchange', 'deactivate', 'destroy', 'disabledchange', 'dockedchange', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'orientationchange', 'painted', 'positionedchange', 'remove', 'removed', 'renderedchange', 'resize', 'rightchange', 'scrollablechange', 'show', 'tofront', 'topchange', 'updatedata', 'widthchange',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtSelectioncolumnComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
    ], ExtSelectioncolumnComponent);
    return ExtSelectioncolumnComponent;
}(EngBase));
export { ExtSelectioncolumnComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCSelectioncolumn()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0U2VsZWN0aW9uY29sdW1uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4vIiwic291cmNlcyI6WyJzcmMvRXh0U2VsZWN0aW9uY29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0RUFBNEU7QUFDNUUsZ0RBQWdEO0FBQ2hELDJHQUEyRztBQUMzRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQ0gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTeEM7SUFBaUQsK0NBQU87SUFDcEQscUNBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0IsRUFDdEQsRUFBb0I7UUFIeEIsWUFLSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsRUFBQyxxQkFBcUIsRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQywrQkFBK0IsRUFBQyxhQUFhLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxxQkFBcUIsRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLFdBQVcsRUFBQyxTQUFT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SUFBRCxrQ0FBQztDQUFBLEFBaENELENBQWlELE9BQU8sR0FnQ3ZEO1NBaENZLDJCQUEyQjtBQW1DeEMsNkJBQTZCO0FBQzdCLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakMsaUZBQWlGO0FBQ2pGLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIsSUFBSTtBQUNKLHlDQUF5QztBQUV6QyxxREFBcUQ7QUFDckQseUJBQXlCO0FBQ3pCLDJDQUEyQztBQUMzQyxvQ0FBb0M7QUFDcEMsSUFBSTtBQUNKLDRDQUE0QztBQUM1QyxtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLEdBQUc7QUFDSCxrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBFV0NTZWxlY3Rpb25jb2x1bW4gZnJvbSAnLi4vZGlzdC9leHQtc2VsZWN0aW9uY29sdW1uLmNvbXBvbmVudC5qcyc7XG4vL2lucHV0czogKG5ldyBFV0NTZWxlY3Rpb25jb2x1bW4oKSkucHJvcGVydGllcyxcbi8vaW1wb3J0IEVXQ1NlbGVjdGlvbmNvbHVtbiBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1tb2Rlcm4vZGlzdC9leHQtc2VsZWN0aW9uY29sdW1uLmNvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBFV0NTZWxlY3Rpb25jb2x1bW4gfSBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1tb2Rlcm4nO1xuaW1wb3J0IHtcbiAgICBIb3N0LFxuICAgIE9wdGlvbmFsLFxuICAgIFNraXBTZWxmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIGZvcndhcmRSZWYsXG4gICAgVmlld0NvbnRhaW5lclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vYW5ndWxhcmJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ0V4dFNlbGVjdGlvbmNvbHVtbicsXG4gICAgaW5wdXRzOiBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLCdhY3RpdmVJdGVtJywnYWxpZ24nLCdhbGlnblNlbGYnLCdhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlbicsJ2Fsd2F5c09uVG9wJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9EZXN0cm95JywnYXV0b1NpemUnLCdheGlzTG9jaycsJ2JpbmQnLCdib2R5Q2xzJywnYm9yZGVyJywnYm90dG9tJywnY2FyZFN3aXRjaEFuaW1hdGlvbicsJ2NlbGwnLCdjZW50ZXJlZCcsJ2NscycsJ2NvbHVtbnMnLCdjb21wdXRlZFdpZHRoJywnY29uc3RyYWluQWxpZ24nLCdjb250ZW50RWwnLCdjb250cm9sJywnY29udHJvbGxlcicsJ2RhdGEnLCdkYXRhSW5kZXgnLCdkZWZhdWx0Q29sdW1uVUknLCdkZWZhdWx0RWRpdG9yJywnZGVmYXVsdEZvY3VzJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0cycsJ2RlZmF1bHRUb29sV2VpZ2h0cycsJ2RlZmF1bHRUeXBlJywnZGVmYXVsdFdpZHRoJywnZGVwZW5kcycsJ2Rpc2FibGVkJywnZGlzcGxheWVkJywnZG9ja2VkJywnZHJhZ2dhYmxlJywnZWRpdGFibGUnLCdlZGl0b3InLCdlZGl0b3JEZWZhdWx0cycsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ2V4cG9ydFJlbmRlcmVyJywnZXhwb3J0U3R5bGUnLCdleHBvcnRTdW1tYXJ5UmVuZGVyZXInLCdmaWx0ZXInLCdmbGV4JywnZmxvYXRlZCcsJ2ZvY3VzYWJsZUNvbnRhaW5lcicsJ2ZvY3VzQ2xzJywnZm9ybWF0dGVyJywnZnVsbHNjcmVlbicsJ2dyb3VwYWJsZScsJ2dyb3VwZXInLCdncm91cEhlYWRlclRwbCcsJ2hlYWRlckNoZWNrYm94JywnaGVhZGVyQ2hlY2tib3hBbGlnbicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVhYmxlJywnaGlkZUFuaW1hdGlvbicsJ2hpZGVNb2RlJywnaGlkZU9uTWFza1RhcCcsJ2hpZGVTaG93TWVudUl0ZW0nLCdodG1sJywnaWQnLCdpZ25vcmUnLCdpZ25vcmVFeHBvcnQnLCdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLCdpbm5lckNscycsJ2luc3RhbmNlQ2xzJywnaXRlbUlkJywnaXRlbXMnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGF5b3V0JywnbGVmdCcsJ2xpc3RlbmVycycsJ2xvY2tlZCcsJ21hbmFnZUJvcmRlcnMnLCdtYXJnaW4nLCdtYXNrZWQnLCdtYXhIZWlnaHQnLCdtYXhXaWR0aCcsJ21lbnUnLCdtZW51RGlzYWJsZWQnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbmFtZScsJ25hbWVhYmxlJywnbmFtZUhvbGRlcicsJ3BhZGRpbmcnLCdwbHVnaW5zJywncHVibGlzaGVzJywncmVjb3JkJywncmVmZXJlbmNlJywncmVmZXJlbmNlSG9sZGVyJywncmVsYXRpdmUnLCdyZW5kZXJlcicsJ3JlbmRlclRvJywncmVzZXJ2ZVNjcm9sbGJhcicsJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsJ3Jlc2l6YWJsZScsJ3JpZ2h0JywncmlwcGxlJywnc2NvcGUnLCdzY3JhdGNoQ2VsbCcsJ3Njcm9sbGFibGUnLCdzZXNzaW9uJywnc2hhZG93Jywnc2hhcmVhYmxlTmFtZScsJ3NoaW0nLCdzaG93QW5pbWF0aW9uJywnc29ydGFibGUnLCdzb3J0ZXInLCdzdGF0ZWZ1bCcsJ3N0YXRlZnVsRGVmYXVsdHMnLCdzdGF0ZUlkJywnc3RvcFNlbGVjdGlvbicsJ3N0eWxlJywnc3VtbWFyeScsJ3N1bW1hcnlDZWxsJywnc3VtbWFyeURhdGFJbmRleCcsJ3N1bW1hcnlGb3JtYXR0ZXInLCdzdW1tYXJ5UmVuZGVyZXInLCd1bmRlZmluZWQnLCd0YWJJbmRleCcsJ3RleHQnLCd0b0Zyb250T25TaG93JywndG9vbERlZmF1bHRzJywndG9vbHMnLCd0b29sdGlwJywndG9wJywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0cmFuc2xhdGFibGUnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndXNlckNscycsJ3VzZXJTZWxlY3RhYmxlJywndmVydGljYWxPdmVyZmxvdycsJ3ZpZXdNb2RlbCcsJ3dlaWdodCcsJ3dlaWdodGVkJywnd2lkdGgnLCd4JywneHR5cGUnLCd5JywnekluZGV4JyxdLFxuICAgIG91dHB1dHM6IFsncmVhZHknLCdhY3RpdmF0ZScsJ2FjdGl2ZUl0ZW1jaGFuZ2UnLCdhZGQnLCdhZGRlZCcsJ2JlZm9yZWFjdGl2ZUl0ZW1jaGFuZ2UnLCdiZWZvcmVib3R0b21jaGFuZ2UnLCdiZWZvcmVjZW50ZXJlZGNoYW5nZScsJ2JlZm9yZWNoZWNrY2hhbmdlJywnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLCdiZWZvcmVkb2NrZWRjaGFuZ2UnLCdiZWZvcmVoZWlnaHRjaGFuZ2UnLCdiZWZvcmVoaWRkZW5jaGFuZ2UnLCdiZWZvcmVoaWRlJywnYmVmb3JlbGVmdGNoYW5nZScsJ2JlZm9yZW1heEhlaWdodGNoYW5nZScsJ2JlZm9yZW1heFdpZHRoY2hhbmdlJywnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJywnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsJ2JlZm9yZXJpZ2h0Y2hhbmdlJywnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsJ2JlZm9yZXNob3cnLCdiZWZvcmV0b2Zyb250JywnYmVmb3JldG9wY2hhbmdlJywnYmVmb3Jld2lkdGhjaGFuZ2UnLCdibHVyJywnYm90dG9tY2hhbmdlJywnY2VudGVyZWRjaGFuZ2UnLCdjaGVja2NoYW5nZScsJ2RlYWN0aXZhdGUnLCdkZXN0cm95JywnZGlzYWJsZWRjaGFuZ2UnLCdkb2NrZWRjaGFuZ2UnLCdlcmFzZWQnLCdmbG9hdGluZ2NoYW5nZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdmdWxsc2NyZWVuJywnaGVpZ2h0Y2hhbmdlJywnaGlkZGVuY2hhbmdlJywnaGlkZScsJ2luaXRpYWxpemUnLCdsZWZ0Y2hhbmdlJywnbWF4SGVpZ2h0Y2hhbmdlJywnbWF4V2lkdGhjaGFuZ2UnLCdtaW5IZWlnaHRjaGFuZ2UnLCdtaW5XaWR0aGNoYW5nZScsJ21vdmUnLCdtb3ZlZCcsJ29yaWVudGF0aW9uY2hhbmdlJywncGFpbnRlZCcsJ3Bvc2l0aW9uZWRjaGFuZ2UnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyZWRjaGFuZ2UnLCdyZXNpemUnLCdyaWdodGNoYW5nZScsJ3Njcm9sbGFibGVjaGFuZ2UnLCdzaG93JywndG9mcm9udCcsJ3RvcGNoYW5nZScsJ3VwZGF0ZWRhdGEnLCd3aWR0aGNoYW5nZScsXSxcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0U2VsZWN0aW9uY29sdW1uQ29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRXh0U2VsZWN0aW9uY29sdW1uQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZSxcbiAgICAgICAgdmM6IFZpZXdDb250YWluZXJSZWZcbiAgICAgICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLCdhY3RpdmVJdGVtJywnYWxpZ24nLCdhbGlnblNlbGYnLCdhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlbicsJ2Fsd2F5c09uVG9wJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9EZXN0cm95JywnYXV0b1NpemUnLCdheGlzTG9jaycsJ2JpbmQnLCdib2R5Q2xzJywnYm9yZGVyJywnYm90dG9tJywnY2FyZFN3aXRjaEFuaW1hdGlvbicsJ2NlbGwnLCdjZW50ZXJlZCcsJ2NscycsJ2NvbHVtbnMnLCdjb21wdXRlZFdpZHRoJywnY29uc3RyYWluQWxpZ24nLCdjb250ZW50RWwnLCdjb250cm9sJywnY29udHJvbGxlcicsJ2RhdGEnLCdkYXRhSW5kZXgnLCdkZWZhdWx0Q29sdW1uVUknLCdkZWZhdWx0RWRpdG9yJywnZGVmYXVsdEZvY3VzJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0cycsJ2RlZmF1bHRUb29sV2VpZ2h0cycsJ2RlZmF1bHRUeXBlJywnZGVmYXVsdFdpZHRoJywnZGVwZW5kcycsJ2Rpc2FibGVkJywnZGlzcGxheWVkJywnZG9ja2VkJywnZHJhZ2dhYmxlJywnZWRpdGFibGUnLCdlZGl0b3InLCdlZGl0b3JEZWZhdWx0cycsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ2V4cG9ydFJlbmRlcmVyJywnZXhwb3J0U3R5bGUnLCdleHBvcnRTdW1tYXJ5UmVuZGVyZXInLCdmaWx0ZXInLCdmbGV4JywnZmxvYXRlZCcsJ2ZvY3VzYWJsZUNvbnRhaW5lcicsJ2ZvY3VzQ2xzJywnZm9ybWF0dGVyJywnZnVsbHNjcmVlbicsJ2dyb3VwYWJsZScsJ2dyb3VwZXInLCdncm91cEhlYWRlclRwbCcsJ2hlYWRlckNoZWNrYm94JywnaGVhZGVyQ2hlY2tib3hBbGlnbicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVhYmxlJywnaGlkZUFuaW1hdGlvbicsJ2hpZGVNb2RlJywnaGlkZU9uTWFza1RhcCcsJ2hpZGVTaG93TWVudUl0ZW0nLCdodG1sJywnaWQnLCdpZ25vcmUnLCdpZ25vcmVFeHBvcnQnLCdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLCdpbm5lckNscycsJ2luc3RhbmNlQ2xzJywnaXRlbUlkJywnaXRlbXMnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGF5b3V0JywnbGVmdCcsJ2xpc3RlbmVycycsJ2xvY2tlZCcsJ21hbmFnZUJvcmRlcnMnLCdtYXJnaW4nLCdtYXNrZWQnLCdtYXhIZWlnaHQnLCdtYXhXaWR0aCcsJ21lbnUnLCdtZW51RGlzYWJsZWQnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbmFtZScsJ25hbWVhYmxlJywnbmFtZUhvbGRlcicsJ3BhZGRpbmcnLCdwbHVnaW5zJywncHVibGlzaGVzJywncmVjb3JkJywncmVmZXJlbmNlJywncmVmZXJlbmNlSG9sZGVyJywncmVsYXRpdmUnLCdyZW5kZXJlcicsJ3JlbmRlclRvJywncmVzZXJ2ZVNjcm9sbGJhcicsJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsJ3Jlc2l6YWJsZScsJ3JpZ2h0JywncmlwcGxlJywnc2NvcGUnLCdzY3JhdGNoQ2VsbCcsJ3Njcm9sbGFibGUnLCdzZXNzaW9uJywnc2hhZG93Jywnc2hhcmVhYmxlTmFtZScsJ3NoaW0nLCdzaG93QW5pbWF0aW9uJywnc29ydGFibGUnLCdzb3J0ZXInLCdzdGF0ZWZ1bCcsJ3N0YXRlZnVsRGVmYXVsdHMnLCdzdGF0ZUlkJywnc3RvcFNlbGVjdGlvbicsJ3N0eWxlJywnc3VtbWFyeScsJ3N1bW1hcnlDZWxsJywnc3VtbWFyeURhdGFJbmRleCcsJ3N1bW1hcnlGb3JtYXR0ZXInLCdzdW1tYXJ5UmVuZGVyZXInLCd1bmRlZmluZWQnLCd0YWJJbmRleCcsJ3RleHQnLCd0b0Zyb250T25TaG93JywndG9vbERlZmF1bHRzJywndG9vbHMnLCd0b29sdGlwJywndG9wJywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0cmFuc2xhdGFibGUnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndXNlckNscycsJ3VzZXJTZWxlY3RhYmxlJywndmVydGljYWxPdmVyZmxvdycsJ3ZpZXdNb2RlbCcsJ3dlaWdodCcsJ3dlaWdodGVkJywnd2lkdGgnLCd4JywneHR5cGUnLCd5JywnekluZGV4JyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NTZWxlY3Rpb25jb2x1bW4oKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2FjdGl2YXRlJywnYWN0aXZlSXRlbWNoYW5nZScsJ2FkZCcsJ2FkZGVkJywnYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScsJ2JlZm9yZWJvdHRvbWNoYW5nZScsJ2JlZm9yZWNlbnRlcmVkY2hhbmdlJywnYmVmb3JlY2hlY2tjaGFuZ2UnLCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsJ2JlZm9yZWRvY2tlZGNoYW5nZScsJ2JlZm9yZWhlaWdodGNoYW5nZScsJ2JlZm9yZWhpZGRlbmNoYW5nZScsJ2JlZm9yZWhpZGUnLCdiZWZvcmVsZWZ0Y2hhbmdlJywnYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJywnYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLCdiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLCdiZWZvcmVtaW5XaWR0aGNoYW5nZScsJ2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJywnYmVmb3JlcmlnaHRjaGFuZ2UnLCdiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJywnYmVmb3Jlc2hvdycsJ2JlZm9yZXRvZnJvbnQnLCdiZWZvcmV0b3BjaGFuZ2UnLCdiZWZvcmV3aWR0aGNoYW5nZScsJ2JsdXInLCdib3R0b21jaGFuZ2UnLCdjZW50ZXJlZGNoYW5nZScsJ2NoZWNrY2hhbmdlJywnZGVhY3RpdmF0ZScsJ2Rlc3Ryb3knLCdkaXNhYmxlZGNoYW5nZScsJ2RvY2tlZGNoYW5nZScsJ2VyYXNlZCcsJ2Zsb2F0aW5nY2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2Z1bGxzY3JlZW4nLCdoZWlnaHRjaGFuZ2UnLCdoaWRkZW5jaGFuZ2UnLCdoaWRlJywnaW5pdGlhbGl6ZScsJ2xlZnRjaGFuZ2UnLCdtYXhIZWlnaHRjaGFuZ2UnLCdtYXhXaWR0aGNoYW5nZScsJ21pbkhlaWdodGNoYW5nZScsJ21pbldpZHRoY2hhbmdlJywnbW92ZScsJ21vdmVkJywnb3JpZW50YXRpb25jaGFuZ2UnLCdwYWludGVkJywncG9zaXRpb25lZGNoYW5nZScsJ3JlbW92ZScsJ3JlbW92ZWQnLCdyZW5kZXJlZGNoYW5nZScsJ3Jlc2l6ZScsJ3JpZ2h0Y2hhbmdlJywnc2Nyb2xsYWJsZWNoYW5nZScsJ3Nob3cnLCd0b2Zyb250JywndG9wY2hhbmdlJywndXBkYXRlZGF0YScsJ3dpZHRoY2hhbmdlJyxdLFxuICAgICAgICAgICAgdmNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ3NlbGVjdGlvbmNvbHVtbidcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cblxuXG4vLyBmdW5jdGlvbiB0b1Bhc2NhbENhc2Uocykge1xuLy8gICAgIHJldHVybiBzLm1hdGNoKC9bYS16XSsvZ2kpXG4vLyAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuam9pbignJylcbi8vIH1cbi8vIHZhciBwYXNjYWxOYW1lID0gdG9QYXNjYWxDYXNlKHRhZ05hbWUpXG5cbi8vdmFyIGV2ZW50cyA9IChuZXcgRVdDU2VsZWN0aW9uY29sdW1uKCkpLmV2ZW50bmFtZXM7XG4vL3ZhciBldmVudG5hbWVzYWxsID0gW107XG4vL2V2ZW50cy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4vLyAgICBldmVudG5hbWVzYWxsLnB1c2goZXZlbnQubmFtZSlcbi8vfSlcbi8vY29uc3QgZGlzdGluY3QgPSAodmFsdWUsIGluZGV4LCBzZWxmKSA9PiB7XG4vLyAgICAvL3JldHVybiB0cnVlXG4vLyAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4vL31cbi8vdmFyIGV2ZW50bmFtZXMgPSBldmVudG5hbWVzYWxsLmZpbHRlcihkaXN0aW5jdCk7XG4iXX0=