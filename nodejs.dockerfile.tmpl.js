var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nodejs.dockerfile.tmpl'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "FROM node:14-alpine\r\n\r\nWORKDIR /usr/src/app\r\nCOPY package*.json ./\r\nRUN npm install --only=production\r\nCOPY "
    + alias4(((helper = (helper = lookupProperty(helpers,"SOURCE_DIR") || (depth0 != null ? lookupProperty(depth0,"SOURCE_DIR") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"SOURCE_DIR","hash":{},"data":data,"loc":{"start":{"line":6,"column":5},"end":{"line":6,"column":19}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"SOURCE_DIR") || (depth0 != null ? lookupProperty(depth0,"SOURCE_DIR") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"SOURCE_DIR","hash":{},"data":data,"loc":{"start":{"line":6,"column":20},"end":{"line":6,"column":34}}}) : helper)))
    + "\r\n\r\nCMD npm start   ";
},"useData":true});
