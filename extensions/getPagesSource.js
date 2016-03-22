function DOMtoString(document_root) {
console.log(document_root);
Frame = document_root.getElementByName['topFrame'];
console.log(Frame);
    return 1;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});