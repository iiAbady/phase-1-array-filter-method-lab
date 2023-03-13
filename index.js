// Code your solution here


function findMatching(arr, exact) {
return arr.filter(ele => ele.toLowerCase() == exact.toLowerCase());
}

function fuzzyMatch(arr, apprx) {
	return arr.filter(ele => ele.startsWith(apprx));
}

function matchName(objs, exact) {
	return objs.filter(ele => ele.name == exact);
}