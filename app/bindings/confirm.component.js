System.register(["@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ConfirmComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfirmComponent = (function () {
                function ConfirmComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.confirmed = new core_1.EventEmitter();
                }
                ConfirmComponent.prototype.onKeyup = function () {
                    if (this.myself.name != '' && this.myself.age != '') {
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                    if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                ConfirmComponent.prototype.onConfirm = function () {
                    this.confirmed.emit(this.myself);
                };
                ConfirmComponent = __decorate([
                    core_1.Component({
                        selector: 'my-confirm',
                        template: "\n        <h1>You submitted the following details. Is this correct?</h1>\n        <p>\n        your name is \n        <span class=\"highlight\">{{myself.name}}</span>\n        and you're\n        <span class=\"highlight\">{{myself.age}}</span>\n        years old. Please click on 'Confirm' if you have made any changes to this information.\n        </p>\n        <form class=\"form-inline\">\n            <div>\n                <h3>\n                <label \n                class=\"label label-primary\" \n                for=\"name\">Your Name\n                </label>\n                <input \n                class=\"form-control\" \n                type=\"text\" \n                id=\"name\" \n                [(ngModel)]=\"myself.name\"\n                (keyup)=\"onKeyup()\">\n                </h3>\n            </div>\n            <div class=\"div-style\">\n                <h3>\n                <label \n                for=\"age\" \n                class=\"label label-primary\">Your Age\n                </label>\n                <input \n                class=\"form-control\" \n                type=\"text\" \n                id=\"age\" \n                [(ngModel)]=\"myself.age\"\n                (keyup)=\"onKeyup()\">\n                </h3>\n            </div>\n            </form>\n        <br>\n        <div>\n            Filled out: {{isFilled ? 'Yes' : 'No'}}\n        </div>\n        <div>\n            Valid: {{isValid ? 'Yes' : 'No'}}\n        </div>\n        <br>\n        <button \n        class=\"btn btn-primary\" \n        [disabled]=\"!isValid\"\n        (click)=\"onConfirm()\">Confirm\n        </button>\n    ",
                        inputs: ['myself'],
                        outputs: ['confirmed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfirmComponent);
                return ConfirmComponent;
            }());
            exports_1("ConfirmComponent", ConfirmComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNERBO2dCQUFBO29CQUNJLFdBQU0sR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUM3QixhQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNoQixjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUErQixDQUFDO2dCQW1CaEUsQ0FBQztnQkFqQkcsa0NBQU8sR0FBUDtvQkFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3pCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQzFCLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUN4QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUN6QixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsb0NBQVMsR0FBVDtvQkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBaEZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSw2bURBb0RUO3dCQUNELE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFDbEIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUN6QixDQUFDOztvQ0FBQTtnQkF3QkYsdUJBQUM7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELCtDQXVCQyxDQUFBIiwiZmlsZSI6ImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1jb25maXJtJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGgxPllvdSBzdWJtaXR0ZWQgdGhlIGZvbGxvd2luZyBkZXRhaWxzLiBJcyB0aGlzIGNvcnJlY3Q/PC9oMT5cclxuICAgICAgICA8cD5cclxuICAgICAgICB5b3VyIG5hbWUgaXMgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj57e215c2VsZi5uYW1lfX08L3NwYW4+XHJcbiAgICAgICAgYW5kIHlvdSdyZVxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+e3tteXNlbGYuYWdlfX08L3NwYW4+XHJcbiAgICAgICAgeWVhcnMgb2xkLiBQbGVhc2UgY2xpY2sgb24gJ0NvbmZpcm0nIGlmIHlvdSBoYXZlIG1hZGUgYW55IGNoYW5nZXMgdG8gdGhpcyBpbmZvcm1hdGlvbi5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJsYWJlbCBsYWJlbC1wcmltYXJ5XCIgXHJcbiAgICAgICAgICAgICAgICBmb3I9XCJuYW1lXCI+WW91ciBOYW1lXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIiBcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibXlzZWxmLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXYtc3R5bGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgIGZvcj1cImFnZVwiIFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJsYWJlbCBsYWJlbC1wcmltYXJ5XCI+WW91ciBBZ2VcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIGlkPVwiYWdlXCIgXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm15c2VsZi5hZ2VcIlxyXG4gICAgICAgICAgICAgICAgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgRmlsbGVkIG91dDoge3tpc0ZpbGxlZCA/ICdZZXMnIDogJ05vJ319XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgVmFsaWQ6IHt7aXNWYWxpZCA/ICdZZXMnIDogJ05vJ319XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBcclxuICAgICAgICBbZGlzYWJsZWRdPVwiIWlzVmFsaWRcIlxyXG4gICAgICAgIChjbGljayk9XCJvbkNvbmZpcm0oKVwiPkNvbmZpcm1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIGAsXHJcbiAgICBpbnB1dHM6IFsnbXlzZWxmJ10sXHJcbiAgICBvdXRwdXRzOiBbJ2NvbmZpcm1lZCddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtQ29tcG9uZW50IHtcclxuICAgIG15c2VsZiA9IHtuYW1lOiAnJywgYWdlOiAnJ307XHJcbiAgICBpc0ZpbGxlZCA9IGZhbHNlO1xyXG4gICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgY29uZmlybWVkID0gbmV3IEV2ZW50RW1pdHRlcjx7bmFtZTogc3RyaW5nLCBhZ2U6IHN0cmluZ30+KCk7XHJcblxyXG4gICAgb25LZXl1cCgpIHtcclxuICAgICAgICBpZiAodGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiB0aGlzLm15c2VsZi5hZ2UgIT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgL15cXGQrJC8udGVzdCh0aGlzLm15c2VsZi5hZ2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ29uZmlybSgpIHtcclxuICAgICAgICB0aGlzLmNvbmZpcm1lZC5lbWl0KHRoaXMubXlzZWxmKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
