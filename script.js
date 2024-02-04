document.addEventListener("DOMContentLoaded", function () {
    // 初始化家谱树
    initializeFamilyTree();

    // 初始化下拉菜单
    initializeParentSelect();
});

function initializeFamilyTree() {
    // 初始化树形结构
    const familyTree = document.getElementById("familyTree");
    familyTree.innerHTML = '<ul><li id="rootNode"><span>祖先姓名</span></li></ul>';
}

function initializeParentSelect() {
    // 初始化下拉菜单
    const parentSelect = document.getElementById("parentSelect");
    const rootNodeOption = document.createElement("option");
    rootNodeOption.value = "rootNode";
    rootNodeOption.textContent = "祖先姓名";
    parentSelect.appendChild(rootNodeOption);

    // 示例：动态添加选项（可以根据需要调整）
    // addOption(parentSelect, "父亲姓名");
    // addOption(parentSelect, "母亲姓名");
}

function addOption(parentSelect, optionText) {
    // 动态添加选项到下拉菜单
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    parentSelect.appendChild(option);
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

        // 添加节点后，更新下拉菜单
        const parentSelect = document.getElementById("parentSelect");
        addOption(parentSelect, nodeName);
    } else {
        alert("请输入有效的节点名称！");
    }
}

function addChildNode() {
    const parentSelect = document.getElementById("parentSelect");
    const selectedParent = parentSelect.value;
    const childNameInput = document.getElementById("childName");
    const childName = childNameInput.value;

    if (childName.trim() !== "") {
        const parentNode = document.getElementById(selectedParent);
        const parentUl = parentNode.querySelector("ul");

        // 创建新的子节点
        const newNode = document.createElement("li");
        const spanNode = document.createElement("span");
        spanNode.textContent = childName;

        // 将子节点添加到家谱树中
        newNode.appendChild(spanNode);

        // 将新子节点添加到父节点
        parentUl.appendChild(newNode);

        // 清空文本框
        childNameInput.value = "";
    } else {
        alert("请输入有效的子节点名称！");
    }
}
