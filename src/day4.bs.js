// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List     = require("bs-platform/lib/js/list.js");
var $$Array  = require("bs-platform/lib/js/array.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");

function loop(_parts) {
  while(true) {
    var parts = _parts;
    if (parts) {
      var rest = parts[1];
      var head = parts[0];
      var match = List.exists((function(head){
          return function (cur) {
            return Caml_obj.caml_equal(cur, head);
          }
          }(head)), rest);
      if (match !== 0) {
        return /* false */0;
      } else {
        _parts = rest;
        continue ;
        
      }
    } else {
      return /* true */1;
    }
  };
}

function isValidPassphrase(passphrase) {
  var parts = $$Array.to_list(passphrase.split(" "));
  if (parts && parts[1]) {
    return loop(parts);
  } else {
    return /* false */0;
  }
}

exports.loop              = loop;
exports.isValidPassphrase = isValidPassphrase;
/* No side effect */