import { Ext_d3_svg_Svg } from '../../../Ext/d3/svg/Svg';

export class Ext_d3_hierarchy_Hierarchy extends Ext_d3_svg_Svg {
    public static PROPERTIES: string[] = [
'alignSelf',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'axisLock',
'bind',
'border',
'bottom',
'centered',
'clipScene',
'cls',
'colorAxis',
'componentCls',
'constrainAlign',
'contentEl',
'controller',
'data',
'defaultListenerScope',
'disabled',
'displayed',
'docked',
'draggable',
'expandEventName',
'flex',
'floated',
'focusCls',
'fullscreen',
'height',
'hidden',
'hideAnimation',
'hideMode',
'hideOnMaskTap',
'hierarchyCls',
'html',
'id',
'instanceCls',
'interactions',
'itemId',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'layout',
'left',
'linkKey',
'listeners',
'margin',
'maxHeight',
'maxWidth',
'minHeight',
'minWidth',
'modal',
'modelValidation',
'name',
'nameable',
'nodeChildren',
'nodeClass',
'nodeKey',
'nodeText',
'nodeTransform',
'nodeValue',
'noParentValue',
'noSizeLayout',
'padding',
'plugins',
'publishes',
'record',
'reference',
'relative',
'renderLinks',
'renderTo',
'right',
'ripple',
'rootVisible',
'scrollable',
'selectEventName',
'selection',
'session',
'shadow',
'shareableName',
'shim',
'showAnimation',
'size',
'sorter',
'stateful',
'statefulDefaults',
'stateId',
'store',
'style',
'tabIndex',
'toFrontOnShow',
'tooltip',
'top',
'touchAction',
'tpl',
'tplWriteMode',
'transitions',
'translatable',
'twoWayBindable',
'ui',
'userCls',
'userSelectable',
'viewModel',
'weight',
'width',
'x',
'xtype',
'y',
'zIndex',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'added',parameters:'sender,container,index'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'undefined'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'undefined,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'undefined,event'},
{name:'focusenter',parameters:'undefined,event'},
{name:'focusleave',parameters:'undefined,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'layout',parameters:'component'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'removed',parameters:'sender,container,index'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'sceneresize',parameters:'component,scene,size'},
{name:'scenesetup',parameters:'component,scene'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'undefined'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_d3_hierarchy_Hierarchy.PROPERTIES);
        return Ext_d3_svg_Svg.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_d3_hierarchy_Hierarchy.EVENTS);
        return Ext_d3_svg_Svg.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [
'added',
'beforebottomchange',
'beforecenteredchange',
'beforedisabledchange',
'beforedockedchange',
'beforeheightchange',
'beforehiddenchange',
'beforehide',
'beforeleftchange',
'beforemaxHeightchange',
'beforemaxWidthchange',
'beforeminHeightchange',
'beforeminWidthchange',
'beforeorientationchange',
'beforerightchange',
'beforescrollablechange',
'beforeshow',
'beforetofront',
'beforetopchange',
'beforewidthchange',
'blur',
'bottomchange',
'centeredchange',
'destroy',
'disabledchange',
'dockedchange',
'erased',
'floatingchange',
'focus',
'focusenter',
'focusleave',
'fullscreen',
'heightchange',
'hiddenchange',
'hide',
'initialize',
'layout',
'leftchange',
'maxHeightchange',
'maxWidthchange',
'minHeightchange',
'minWidthchange',
'moved',
'orientationchange',
'painted',
'positionedchange',
'removed',
'resize',
'rightchange',
'sceneresize',
'scenesetup',
'scrollablechange',
'show',
'tofront',
'topchange',
'updatedata',
'widthchange',
'ready'
];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_d3_hierarchy_Hierarchy.EVENTNAMES);
    //    return Ext_d3_svg_Svg.getEventNames(eventnames);
    //}