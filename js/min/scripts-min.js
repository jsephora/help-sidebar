$(document).ready(function(){$(".collapse").collapse()}),$(document).on("click",".accordion-toggle",function(a){a.stopPropagation();var o=$(this),c=o.data("parent"),l=c&&$(c).find(".collapse.in");l&&l.length&&(hasData=l.data("collapse"),l.collapse("hide"))});