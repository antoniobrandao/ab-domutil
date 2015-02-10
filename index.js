// 'use strict';

// window shortcuts
window.getid = function(id) { return document.getElementById(id)};

module.exports = 
{
    /* 
        Add & remove CSS rules directly to existing stylesheets
        Example:

        addCSSRule(document.styleSheets[0], "header", "float: left");
    */
    addCSSRule: function(sheet, selector, rules, index) 
    {
        if(sheet.insertRule) {
            sheet.insertRule(selector + "{" + rules + "}", index);
        }
        else {
            sheet.addRule(selector, rules, index);
        }
    },

    // Get the value of :before rule by property name
    getCSSBeforeValue: function(element, property)
    {
        return window.getComputedStyle( element, ':before' ).getPropertyValue(property);    
    },

    // shorthand to check if element is empty / has no child nodes
    isEmpty: function (el) 
    {
        return el.hasChildNodes();
    }
}