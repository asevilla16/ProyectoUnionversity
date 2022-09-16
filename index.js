"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var courses_1 = require("./courses");
var studyGroups_1 = require("./studyGroups");
var enrolledEvents = [];
var anotherArray = [];
function searchEvents(options) {
    var events = options.eventType === 'courses' ? courses_1["default"] : studyGroups_1["default"];
    return events.filter(function (event) {
        if (typeof options.parameter === 'number') {
            return event.id === options.parameter;
        }
        if (typeof options.parameter === 'string') {
            return event.keywords.indexOf(options.parameter) > -1;
        }
    });
}
function enroll(event) {
    enrolledEvents = __spreadArray(__spreadArray([], enrolledEvents, true), [event], false); // spread operator
}
var searchResults = searchEvents({ parameter: 'art', eventType: 'courses' });
// enroll(searchResults[0]);
searchResults.forEach(function (x) { return [
    enroll(x)
]; });
console.log(enrolledEvents);
