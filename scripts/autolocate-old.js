"use strict";

window.onload = function() {
	let blatt = elem("img", {
		src: "images/blatt.gif",
		alt: "Sie befinden Sich hier",
		class: "blatt"
	});
	let links = document
		.getElementById("js-autolocate")
		.getElementsByTagName("a");
	let filename = location.pathname.substring(
		location.pathname.lastIndexOf("/") + 1
	);
	for (let link of links) {
		if (link.getAttribute("href") === filename) {
			link.parentNode.appendChild(blatt);
			link.classList.add("active");
			break;
		}
	}
}

function elem(name, attribs = {}, childs = []) {
	let node = document.createElement(name);
	if (Object.keys(attribs).length) {
		for (let [key, value] of Object.entries(attribs)) {
			let attrib = document.createAttribute(key);
			attrib.nodeValue = value;
			node.setAttributeNode(attrib);
		}
	}
	if (childs.length) {
		for (let child of childs) {
			node.appendChild(child);
		}
	}
	return node;
}
