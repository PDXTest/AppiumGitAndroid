import { config } from './test/wdio.shared.conf';

   
    // ====================
    // Runner Configuration
    // ====================
   
   config.port= 4723,
     
   config.specs= [
        './test/features/*.feature'
    ],

    // ============
    // Capabilities
    // ============    
    config.capabilities = [{
        "appium:platformName": "Android",
        "appium:platformVersion": "11",
        "appium:deviceName": "HONOR",
        "appium:automationName": "UiAutomator2",
        "appium:app": "D:\\Dummy\\ApiDemos-debug.apk"
      
    }]

    
    exports.config = config;