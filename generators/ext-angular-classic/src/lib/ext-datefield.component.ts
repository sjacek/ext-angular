import {
  Output,
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class datefieldMetaData {
  public static XTYPE: string = 'datefield';
  public static PROPERTIESOBJECT: any = {
    "activeCounter": "Number",
    "activeError": "String",
    "activeErrorsTpl": "String/String[]/Ext.XTemplate",
    "afterBodyEl": "String/Array/Ext.XTemplate",
    "afterLabelTextTpl": "String/Array/Ext.XTemplate",
    "afterLabelTpl": "String/Array/Ext.XTemplate",
    "afterSubTpl": "String/Array/Ext.XTemplate",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "allowBlank": "Boolean",
    "allowOnlyWhitespace": "Boolean",
    "altFormats": "String",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "animateShadow": "Boolean",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaDisabledDatesText": "String",
    "ariaDisabledDaysText": "String",
    "ariaErrorText": "String",
    "ariaFormat": "String",
    "ariaHelp": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "ariaMaxText": "String",
    "ariaMinText": "String",
    "autoEl": "String/Object",
    "autoFitErrors": "Boolean",
    "autoHideInputMask": "Boolean",
    "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
    "autoScroll": "Boolean",
    "autoShow": "Boolean",
    "baseBodyCls": "String",
    "baseCls": "String",
    "beforeBodyEl": "String/Array/Ext.XTemplate",
    "beforeLabelTextTpl": "String/Array/Ext.XTemplate",
    "beforeLabelTpl": "String/Array/Ext.XTemplate",
    "beforeSubTpl": "String/Array/Ext.XTemplate",
    "bind": "Object/String",
    "blankText": "String",
    "border": "Number/String/Boolean",
    "checkChangeBuffer": "Number",
    "checkChangeEvents": "String[]",
    "childEls": "Object/String[]/Object[]",
    "cls": "String/String[]",
    "columnWidth": "Number",
    "componentCls": "String",
    "componentLayout": "String/Object",
    "constrain": "Boolean",
    "constraintInsets": "Object/String",
    "constrainTo": "Ext.util.Region/Ext.dom.Element",
    "contentEl": "String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultAlign": "String",
    "defaultListenerScope": "Boolean",
    "dirtyCls": "String",
    "disabled": "Boolean",
    "disabledCls": "String",
    "disabledDates": "String[]",
    "disabledDatesText": "String",
    "disabledDays": "Number[]",
    "disabledDaysText": "String",
    "disableKeyFilter": "Boolean",
    "dock": "'top'/'bottom'/'left'/'right'",
    "draggable": "Boolean/Object",
    "editable": "Boolean",
    "emptyCls": "String",
    "emptyText": "String",
    "enableKeyEvents": "Boolean",
    "enforceMaxLength": "Boolean",
    "errorMsgCls": "String",
    "fieldBodyCls": "String",
    "fieldCls": "String",
    "fieldLabel": "String",
    "fieldStyle": "String",
    "fieldSubTpl": "Ext.XTemplate",
    "fixed": "Boolean",
    "flex": "Number",
    "floating": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "format": "String",
    "formatText": "String",
    "formBind": "Boolean",
    "formItemCls": "String",
    "frame": "Boolean",
    "grow": "Boolean",
    "growMax": "Number",
    "growMin": "Number",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideEmptyLabel": "Boolean",
    "hideLabel": "Boolean",
    "hideMode": "String",
    "hideTrigger": "Boolean",
    "html": "String/Object",
    "id": "String",
    "inputAttrTpl": "String/Array/Ext.XTemplate",
    "inputId": "String",
    "inputMask": "String/Ext.field.InputMask",
    "inputType": "String",
    "inputWrapCls": "String",
    "invalidCls": "String",
    "invalidText": "String",
    "isTextInput": "Boolean",
    "itemId": "String",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "labelableRenderTpl": "String/String[]/Ext.XTemplate",
    "labelAlign": "String",
    "labelAttrTpl": "String/Array/Ext.XTemplate",
    "labelCls": "String",
    "labelClsExtra": "String",
    "labelPad": "Number",
    "labelSeparator": "String",
    "labelStyle": "String",
    "labelWidth": "Number",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "margin": "Number/String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maskRe": "RegExp",
    "matchFieldWidth": "Boolean",
    "maxHeight": "Number",
    "maxLength": "Number",
    "maxLengthText": "String",
    "maxText": "String",
    "maxValue": "Date/String",
    "maxWidth": "Number",
    "minHeight": "Number",
    "minLength": "Number",
    "minLengthText": "String",
    "minText": "String",
    "minValue": "Date/String",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "msgTarget": "String",
    "name": "String",
    "nameable": "Boolean",
    "openCls": "String",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "padding": "Number/String",
    "pickerAlign": "String",
    "pickerOffset": "Number[]",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "preventMark": "Boolean",
    "publishes": "String/String[]/Object",
    "readOnly": "Boolean",
    "readOnlyCls": "String",
    "reference": "String",
    "regex": "RegExp",
    "regexText": "String",
    "region": "'north'/'south'/'east'/'west'/'center'",
    "renderConfig": "Object",
    "renderData": "Object",
    "renderSelectors": "Object",
    "renderTo": "String/HTMLElement/Ext.dom.Element",
    "renderTpl": "Ext.XTemplate/String/String[]",
    "repeatTriggerClick": "Boolean",
    "requiredCls": "String",
    "resizable": "Boolean/Object",
    "resizeHandles": "String",
    "saveDelay": "Number",
    "scrollable": "Boolean/String/Object",
    "selectOnFocus": "Boolean",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "showToday": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "size": "Number",
    "startDay": "Number",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "stripCharsRe": "RegExp",
    "style": "String/Object",
    "submitFormat": "String",
    "submitValue": "Boolean",
    "tabIndex": "Number",
    "toFrontOnShow": "Boolean",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "triggerCls": "String",
    "triggers": "Object",
    "triggerWrapCls": "String",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "userCls": "String/String[]",
    "useStrict": "Boolean",
    "validateBlank": "Boolean",
    "validateOnBlur": "Boolean",
    "validateOnChange": "Boolean",
    "validateOnFocusLeave": "Boolean",
    "validation": "Boolean/String",
    "validationField": "Ext.data.Field",
    "validator": "Function",
    "value": "Object",
    "valuePublishEvent": "String[]/String",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "vtype": "String",
    "vtypeText": "String",
    "weight": "Number",
    "width": "Number|String",
    "xtype": "Ext.enums.Widget",
    "platformConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'activeCounter',
    'activeError',
    'activeErrorsTpl',
    'afterBodyEl',
    'afterLabelTextTpl',
    'afterLabelTpl',
    'afterSubTpl',
    'alignOnScroll',
    'alignTarget',
    'allowBlank',
    'allowOnlyWhitespace',
    'altFormats',
    'alwaysOnTop',
    'anchor',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaDisabledDatesText',
    'ariaDisabledDaysText',
    'ariaErrorText',
    'ariaFormat',
    'ariaHelp',
    'ariaLabel',
    'ariaLabelledBy',
    'ariaMaxText',
    'ariaMinText',
    'autoEl',
    'autoFitErrors',
    'autoHideInputMask',
    'autoRender',
    'autoScroll',
    'autoShow',
    'baseBodyCls',
    'baseCls',
    'beforeBodyEl',
    'beforeLabelTextTpl',
    'beforeLabelTpl',
    'beforeSubTpl',
    'bind',
    'blankText',
    'border',
    'checkChangeBuffer',
    'checkChangeEvents',
    'childEls',
    'cls',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultListenerScope',
    'dirtyCls',
    'disabled',
    'disabledCls',
    'disabledDates',
    'disabledDatesText',
    'disabledDays',
    'disabledDaysText',
    'disableKeyFilter',
    'dock',
    'draggable',
    'editable',
    'emptyCls',
    'emptyText',
    'enableKeyEvents',
    'enforceMaxLength',
    'errorMsgCls',
    'fieldBodyCls',
    'fieldCls',
    'fieldLabel',
    'fieldStyle',
    'fieldSubTpl',
    'fixed',
    'flex',
    'floating',
    'focusCls',
    'focusOnToFront',
    'format',
    'formatText',
    'formBind',
    'formItemCls',
    'frame',
    'grow',
    'growMax',
    'growMin',
    'height',
    'hidden',
    'hideEmptyLabel',
    'hideLabel',
    'hideMode',
    'hideTrigger',
    'html',
    'id',
    'inputAttrTpl',
    'inputId',
    'inputMask',
    'inputType',
    'inputWrapCls',
    'invalidCls',
    'invalidText',
    'isTextInput',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'labelableRenderTpl',
    'labelAlign',
    'labelAttrTpl',
    'labelCls',
    'labelClsExtra',
    'labelPad',
    'labelSeparator',
    'labelStyle',
    'labelWidth',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maskRe',
    'matchFieldWidth',
    'maxHeight',
    'maxLength',
    'maxLengthText',
    'maxText',
    'maxValue',
    'maxWidth',
    'minHeight',
    'minLength',
    'minLengthText',
    'minText',
    'minValue',
    'minWidth',
    'modal',
    'modelValidation',
    'msgTarget',
    'name',
    'nameable',
    'openCls',
    'overCls',
    'overflowX',
    'overflowY',
    'padding',
    'pickerAlign',
    'pickerOffset',
    'plugins',
    'preventMark',
    'publishes',
    'readOnly',
    'readOnlyCls',
    'reference',
    'regex',
    'regexText',
    'region',
    'renderConfig',
    'renderData',
    'renderSelectors',
    'renderTo',
    'renderTpl',
    'repeatTriggerClick',
    'requiredCls',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'selectOnFocus',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'showToday',
    'shrinkWrap',
    'size',
    'startDay',
    'stateEvents',
    'stateful',
    'stateId',
    'stripCharsRe',
    'style',
    'submitFormat',
    'submitValue',
    'tabIndex',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'triggerCls',
    'triggers',
    'triggerWrapCls',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'useStrict',
    'validateBlank',
    'validateOnBlur',
    'validateOnChange',
    'validateOnFocusLeave',
    'validation',
    'validationField',
    'validator',
    'value',
    'valuePublishEvent',
    'viewModel',
    'vtype',
    'vtypeText',
    'weight',
    'width',
    'xtype',
    'platformConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'datefield'},
		{name:'added',parameters:'datefield,container,pos'},
		{name:'afterlayoutanimation',parameters:'datefield'},
		{name:'afterrender',parameters:'datefield'},
		{name:'autosize',parameters:'datefield,width'},
		{name:'beforeactivate',parameters:'datefield'},
		{name:'beforedeactivate',parameters:'datefield'},
		{name:'beforedestroy',parameters:'datefield'},
		{name:'beforehide',parameters:'datefield'},
		{name:'beforerender',parameters:'datefield'},
		{name:'beforeshow',parameters:'datefield'},
		{name:'beforestaterestore',parameters:'datefield,state'},
		{name:'beforestatesave',parameters:'datefield,state'},
		{name:'blur',parameters:'datefield,event'},
		{name:'boxready',parameters:'datefield,width,height'},
		{name:'change',parameters:'datefield,newValue,oldValue'},
		{name:'collapse',parameters:'field'},
		{name:'deactivate',parameters:'datefield'},
		{name:'destroy',parameters:'datefield'},
		{name:'dirtychange',parameters:'datefield,isDirty'},
		{name:'disable',parameters:'datefield'},
		{name:'enable',parameters:'datefield'},
		{name:'errorchange',parameters:'datefield,error'},
		{name:'expand',parameters:'field'},
		{name:'focus',parameters:'datefield,event'},
		{name:'focusenter',parameters:'datefield,event'},
		{name:'focusleave',parameters:'datefield,event'},
		{name:'hide',parameters:'datefield'},
		{name:'keydown',parameters:'datefield,e'},
		{name:'keypress',parameters:'datefield,e'},
		{name:'keyup',parameters:'datefield,e'},
		{name:'move',parameters:'datefield,x,y'},
		{name:'paste',parameters:'datefield,e'},
		{name:'removed',parameters:'datefield,ownerCt'},
		{name:'render',parameters:'datefield'},
		{name:'resize',parameters:'datefield,width,height,oldWidth,oldHeight'},
		{name:'select',parameters:'field,value'},
		{name:'show',parameters:'datefield'},
		{name:'specialkey',parameters:'datefield,e'},
		{name:'staterestore',parameters:'datefield,state'},
		{name:'statesave',parameters:'datefield,state'},
		{name:'validitychange',parameters:'datefield,isValid'},
		{name:'writeablechange',parameters:'datefield,Read'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'autosize',
		'beforeactivate',
		'beforedeactivate',
		'beforedestroy',
		'beforehide',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'change',
		'collapse',
		'deactivate',
		'destroy',
		'dirtychange',
		'disable',
		'enable',
		'errorchange',
		'expand',
		'focus',
		'focusenter',
		'focusleave',
		'hide',
		'keydown',
		'keypress',
		'keyup',
		'move',
		'paste',
		'removed',
		'render',
		'resize',
		'select',
		'show',
		'specialkey',
		'staterestore',
		'statesave',
		'validitychange',
		'writeablechange',
		'ready'
];
}
@Component({
  selector: 'datefield', 
  inputs: datefieldMetaData.PROPERTIES,
  outputs: datefieldMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtDatefieldComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtDatefieldComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,datefieldMetaData)}
  public ngOnInit() {this.baseOnInit(datefieldMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}