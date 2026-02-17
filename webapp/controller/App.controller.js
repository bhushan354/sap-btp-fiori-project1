sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"    
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("project1.controller.App", {
        // this onInit event is the event that happens when the app loads
        onInit: function () {

            var oData = {
                recipeint: {
                    name: "UI5"
                }
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            //set i18n model on views
            var i18nModel = new ResourceModel({
                bundleName: "project1.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });

            this.getView().setModel(i18nModel, "i18n");// we are giving it "i18n" alias just for referring it as i18n
        },

        onShowHello: function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name")
            var sMsg = oBundle.getText("helloMsg", [sRecipient])
            //show Message
            MessageToast.show(sMsg);


            //MessageToast.show("Hello from MessageToast");
        }
    });
});
