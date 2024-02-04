document.addEventListener("DOMContentLoaded", function () {
    // 初始化家谱树
    initializeFamilyTree();
});

function initializeFamilyTree() {
    // 初始化树形结构
    const familyTree = document.getElementById("familyTree");
    familyTree.innerHTML = '<ul><li id="rootNode"><span>祖先姓名</span></li></ul>';
}

function addNode() {
    const nodeNameInput = document.getElementById("nodeName");
    const nodeName = nodeNameInput.value;

    if (nodeName.trim() !== "") {
        // 获取根节点
        const parentNode = document.getElementById("rootNode");
        const parentUl = parentNode.querySelector("ul");

        // 创建新的节点
        const newNode = document.createElement("li");
        const spanNode = document.createElement("span");
        spanNode.textContent = nodeName;

        // 将节点添加到家谱树中
        newNode.appendChild(spanNode);

        // 将新节点添加到父节点
        parentUl.appendChild(newNode);

        // 清空文本框
        nodeNameInput.value = "";
    } else {
        alert("请输入有效的节点名称！");
    }
}
