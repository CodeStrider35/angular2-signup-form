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
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.submitted = new core_1.EventEmitter();
                }
                InputComponent.prototype.onKeyup = function () {
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
                InputComponent.prototype.onSubmit = function () {
                    this.submitted.emit(this.myself);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n        <h1>Your Details Please</h1>\n            <form class=\"form-inline\">\n            <div>\n                <h3>\n                <label \n                class=\"label label-primary\" \n                for=\"name\">Your Name\n                </label>\n                <input \n                class=\"form-control\" \n                type=\"text\" \n                id=\"name\" \n                [(ngModel)]=\"myself.name\"\n                (keyup)=\"onKeyup()\">\n                </h3>\n            </div>\n            <div class=\"div-style\">\n                <h3>\n                <label \n                for=\"age\" \n                class=\"label label-primary\">Your Age\n                </label>\n                <input \n                class=\"form-control\" \n                type=\"text\" \n                id=\"age\" \n                [(ngModel)]=\"myself.age\"\n                (keyup)=\"onKeyup()\">\n                </h3>\n            </div>\n            </form>\n        <br>\n        <div>\n            Filled out: {{isFilled ? 'Yes' : 'No'}}\n        </div>\n        <div>\n            Valid: {{isValid ? 'Yes' : 'No'}}\n        </div>\n        <br>\n        <button \n        class=\"btn btn-primary\" \n        [disabled]=\"!isValid\"\n        (click)=\"onSubmit()\">Submit\n        </button>\n    ",
                        inputs: ['myself'],
                        outputs: ['submitted']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFEQTtnQkFBQTtvQkFDSSxXQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDN0IsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFDaEIsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBK0IsQ0FBQztnQkFtQmhFLENBQUM7Z0JBakJHLGdDQUFPLEdBQVA7b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN6QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUMxQixDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDeEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDekIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELGlDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQXpFTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsb3pDQTZDVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBQ2xCLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztxQkFDekIsQ0FBQzs7a0NBQUE7Z0JBd0JGLHFCQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCwyQ0F1QkMsQ0FBQSIsImZpbGUiOiJiaW5kaW5ncy9pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWlucHV0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGgxPllvdXIgRGV0YWlscyBQbGVhc2U8L2gxPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0taW5saW5lXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImxhYmVsIGxhYmVsLXByaW1hcnlcIiBcclxuICAgICAgICAgICAgICAgIGZvcj1cIm5hbWVcIj5Zb3VyIE5hbWVcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJteXNlbGYubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAoa2V5dXApPVwib25LZXl1cCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdi1zdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgZm9yPVwiYWdlXCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImxhYmVsIGxhYmVsLXByaW1hcnlcIj5Zb3VyIEFnZVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJhZ2VcIiBcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibXlzZWxmLmFnZVwiXHJcbiAgICAgICAgICAgICAgICAoa2V5dXApPVwib25LZXl1cCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxicj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBGaWxsZWQgb3V0OiB7e2lzRmlsbGVkID8gJ1llcycgOiAnTm8nfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBWYWxpZDoge3tpc1ZhbGlkID8gJ1llcycgOiAnTm8nfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIFxyXG4gICAgICAgIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiXHJcbiAgICAgICAgKGNsaWNrKT1cIm9uU3VibWl0KClcIj5TdWJtaXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIGAsXHJcbiAgICBpbnB1dHM6IFsnbXlzZWxmJ10sXHJcbiAgICBvdXRwdXRzOiBbJ3N1Ym1pdHRlZCddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCB7XHJcbiAgICBteXNlbGYgPSB7bmFtZTogJycsIGFnZTogJyd9O1xyXG4gICAgaXNGaWxsZWQgPSBmYWxzZTtcclxuICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgIHN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e25hbWU6IHN0cmluZywgYWdlOiBzdHJpbmd9PigpO1xyXG5cclxuICAgIG9uS2V5dXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgdGhpcy5teXNlbGYuYWdlICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm15c2VsZi5uYW1lICE9ICcnICYmIC9eXFxkKyQvLnRlc3QodGhpcy5teXNlbGYuYWdlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZC5lbWl0KHRoaXMubXlzZWxmKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
