import { Given } from "@wdio/cucumber-framework";



Given('find elements by Xpath',async () => {

    //xpath - (//tagname[@attribute=value])

    const app = await $('~App');
    app.click();


    const Xpath = '//android.widget.TextView[@content-desc="Alert Dialogs"]'
    await $(Xpath).click();

     
})