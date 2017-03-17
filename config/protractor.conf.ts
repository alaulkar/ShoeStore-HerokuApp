import { browser, Config } from 'protractor';
require('ts-node/register');
var helpers = require('./helpers');

export let config: Config =  {

    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    baseUrl: 'https://rb-shoe-store.herokuapp.com',

    capabilities: {
        browserName: 'chrome'
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        '../../features/*.feature'
    ],

    onPrepare: () => {

        browser.ignoreSynchronization = true;
        //browser.manage().window().maximize();

    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['pretty'],
        require: ['../../stepdefinitions/*.ts', '../../support/*.ts'],
        tags: '@EmailScenario or @MonthScenario'
    }
};