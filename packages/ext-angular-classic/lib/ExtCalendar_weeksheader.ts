//import EWCCalendar_weeksheader from '../dist/ext-calendar-weeksheader.component.js';
//inputs: (new EWCCalendar_weeksheader()).properties,
import EWCCalendar_weeksheader from '@sencha/ext-web-components-classic/dist/ext-calendar-weeksheader.component.js';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './angularbase';

@Component({
    selector: 'ExtCalendar_weeksheader',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','cellCls','cls','compact','compactOptions','controller','defaultListenerScope','disabled','undefined','focusCls','format','height','hidden','hideMode','instanceCls','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','plugins','publishes','reference','renderTo','ripple','session','shareableName','style','touchAction','twoWayBindable','ui','userCls','value','viewModel','visibleDays','width',],
    outputs: ['ready','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_weeksheaderComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtCalendar_weeksheaderComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','cellCls','cls','compact','compactOptions','controller','defaultListenerScope','disabled','undefined','focusCls','format','height','hidden','hideMode','instanceCls','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','plugins','publishes','reference','renderTo','ripple','session','shareableName','style','touchAction','twoWayBindable','ui','userCls','value','viewModel','visibleDays','width',],
            (new EWCCalendar_weeksheader()).events,
            ['ready','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
            vc
        )
        this.xtype = 'calendar-weeksheader'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}


// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)

//var events = (new EWCCalendar_weeksheader()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);