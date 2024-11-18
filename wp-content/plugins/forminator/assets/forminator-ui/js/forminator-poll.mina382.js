/*!
 * WPMU DEV Forminator UI
 * Copyright 2019 Incsub (https://incsub.com)
 * Licensed under GPL v3 (http://www.gnu.org/licenses/gpl-3.0.html)
 */
/*!
 * WPMU DEV Forminator UI
 * Copyright 2019 Incsub (https://incsub.com)
 * Licensed under GPL v3 (http://www.gnu.org/licenses/gpl-3.0.html)
 */
function _createForOfIteratorHelper(t,o){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=_unsupportedIterableToArray(t))||o&&t&&"number"==typeof t.length){r&&(t=r);var n=0,e=function(){};return{s:e,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){l=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw i}}}}function _unsupportedIterableToArray(t,o){if(t){if("string"==typeof t)return _arrayLikeToArray(t,o);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,o):void 0}}function _arrayLikeToArray(t,o){(null==o||o>t.length)&&(o=t.length);for(var r=0,n=Array(o);r<o;r++)n[r]=t[r];return n}function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}!function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.inputStates=function(o){var r=t(o),n=r.closest("form");if(r.is("input")||n.is(".forminator-poll")&&(n.is(".forminator-ui")||n.is(".forminator-custom-form")))return r.each((function(){var o,r;o=t(this),r=o.closest(".forminator-field"),o.mouseover((function(t){r.addClass("forminator-is_hover"),t.stopPropagation()})).mouseout((function(t){r.removeClass("forminator-is_hover"),t.stopPropagation()})),function(o){var r=t(o),n=r.closest(".forminator-field");r.focus((function(t){n.addClass("forminator-is_active"),t.stopPropagation()})).blur((function(t){n.removeClass("forminator-is_active"),t.stopPropagation()}))}(this),function(o){var r=t(o),n=r.closest(".forminator-field");""!==r.val().trim()&&n.addClass("forminator-is_filled"),r.on("change",(function(){""!==r.val().trim()?n.addClass("forminator-is_filled"):n.removeClass("forminator-is_filled")}))}(this)})),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.inputMaterial=function(o){var r=t(o),n=r.closest(".forminator-field"),e=n.find(".forminator-label"),i=r.closest("form");if(r.is("input")||i.is(".forminator-poll")&&(i.is(".forminator-ui")||i.is(".forminator-custom-form")))return r.parent().hasClass("forminator-input--wrap")||r.wrap('<div class="forminator-input--wrap"></div>'),e.length&&(e.addClass("forminator-floating--input"),n.find(".forminator-input-with-icon").length&&e.addClass("forminator-has_icon"),n.find(".forminator-input-with-phone").length&&(e.addClass("forminator-has_phone"),n.find(".intl-tel-input").hasClass("allow-dropdown")&&e.addClass("allow-dropdown"))),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.radioStates=function(o){var r=t(o),n=r.find("input");if(r.is("label")&&"radio"===n.prop("type"))return n.each((function(){t(this).on("click",(function(){var o=t(this),r=o.parent(),n=r.closest(".forminator-field").find(".forminator-radio");n.find("input").prop("checked",!1),n.removeClass("forminator-is_checked"),o.prop("checked","checked"),r.addClass("forminator-is_checked")}))})),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.pollChart=function(o,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"horizontalBar",e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=t(o);if("bar"===n&&(n="horizontalBar"),void 0!==r&&0!==r.length)return function(){var o,l=[],s=[],f=[],c=_createForOfIteratorHelper(r);try{for(c.s();!(o=c.n()).done;){var u=o.value;"pie"===n?l.push(u[0]):l.push(a(u[0],20)),s.push(u[1]),f.push(u[2])}}catch(t){c.e(t)}finally{c.f()}var d={votesLabel:"vote(s)",votesOnPoll:!1,basicColors:["#E5E5E5","#777771","#333333"],tooltipsBasic:["#333333","#FFFFFF"]};""===e&&(e=[d.votesLabel,d.votesOnPoll,d.basicColors,d.tooltipsBasic]);var p={labels:l,datasets:[{data:s,backgroundColor:f,borderWidth:0}]},h={legend:{display:!1},tooltips:{callbacks:{title:function(t,o){var r="";return"pie"!==n&&(r=t[0].yLabel),r},label:function(t,o){var r=o.datasets[t.datasetIndex].label||"";return"pie"===n?(r=o.labels[t.index],!0===e[1]&&(r+=": "+o.datasets[0].data[t.index])):!0===e[1]&&(r+=Math.round(100*t.xLabel)/100),!0===e[1]&&(r+=" "+e[0]),r}},backgroundColor:e[3][0],titleFontColor:e[3][1],titleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",titleFontSize:13,titleFontStyle:"bold",titleMarginBottom:10,bodyFontColor:e[3][1],bodyFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",bodyFontSize:12,bodyFontStyle:"normal"},scales:{xAxes:[{display:"pie"!==n,ticks:{fontColor:e[2][1],beginAtZero:!0},gridLines:{color:e[2][0]}}],yAxes:[{display:"pie"!==n,ticks:{fontColor:e[2][1],beginAtZero:!0},gridLines:{color:e[2][0]}}]},plugins:{datalabels:{display:"pie"!==n&&e[1],align:"end",anchor:"start",textAlign:"center",color:e[2][2],formatter:function(t){return t+" "+e[0]}}}};i.each((function(){i=t(this),new Chart(i,{type:n,data:p,plugins:[ChartDataLabels],options:h}),"pie"===n&&(i.wrap('<div class="forminator-chart-wrapper" aria-hidden="true" />'),i.parent().prepend('<ul class="forminator-chart-legend"></ul>'),r.forEach((function(t){!0===e[1]?i.parent().find(".forminator-chart-legend").append('<li><span class="forminator-chart-legend--color" style="background-color: '+t[2]+'" aria-hidden="true"></span><strong>'+t[0]+":</strong> "+t[1]+" "+e[0]+"</li>"):i.parent().find(".forminator-chart-legend").append('<li><span class="forminator-chart-legend--color" style="background-color: '+t[2]+'" aria-hidden="true"></span><strong>'+t[0]+"</strong></li>")})))}))}(),this;function a(t,o){var r=[],n=t.split(" "),e="";return n.forEach((function(t,i){if(0<e.length){var a=e+" "+t;if(!(a.length>o))return i==n.length-1?void r.push(a):void(e=a);r.push(e),e=""}i!=n.length-1&&t.length<o?e=t:r.push(t)})),r}}}(jQuery);