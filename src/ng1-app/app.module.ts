import * as angular from 'angular';

let appModule = angular.module('phonecatApp', []);

 class AppComponent implements ng.IComponentOptions{
    public template: string = `
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#/">My app</a>
                </div>
            </div>
        </nav>
        <div ng-view></div>`;
}

debugger;
appModule.component('app', new AppComponent())

// Define the `phonecatApp` Angular 1 module
export default appModule;


