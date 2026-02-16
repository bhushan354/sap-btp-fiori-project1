sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.App", {
        onInit: function () {

            var oData = {
                recipeint: {
                    name: "UI5"
                }
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onShowHello: function () {
            MessageToast.show("Hello from MessageToast");
        }
    });
});
