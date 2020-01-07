/**
 * The PackageBuilderMenu class manages the behaviour of the
 * Sidebar menu
 */
class Menu {

    /**
     * The constructor needs the section element, the 
     * "package-builder-section" to have control of all 
     * it's submenu element.
     * 
     * "Package Builder" is the parent element of the sub-menu
     * requiring extra controls.
     * 
     * @param {*} pbElement
     */
    constructor(pbElement) {
        this.selectedItem = "";
        this.hoverItem = "";
        this.packageBuilder = pbElement;
        this.subMenuItems = [];

        /* Dynamically get array of submenu anchors */
        var sectionsArray = Array.prototype.slice.call(document.getElementById("package-builder-section").children)
        for (var child of sectionsArray) {
            var childId = child.children[0].hash.replace("#", "");
            this.subMenuItems.push([childId, childId+"-link", childId+"-title"]);
        }
        
    }

    toggleMenu() {
        this.packageBuilder.style.display = 
        (this.packageBuilder.style.display === "" || this.packageBuilder.style.display === "none") ? 
        "initial" : (this.packageBuilder.style.display === "initial") ? "none" : "none";
    }

    isSubItem(elementId) {
        var subSection = false;
        this.subMenuItems.forEach(lst => (lst.includes(elementId)) ? subSection = true : null);
        return subSection;
    }

    cleanElementId(elementId) {
        return elementId.replace("-link", "").replace("-title", "");
    }

    selectSection(elementId) {
        this.reset();

        this.selectedItem = this.cleanElementId(elementId);

        if (this.isSubItem(this.selectedItem)) {
            this.showMenu();
            document.getElementById(this.selectedItem+"-link").style.color = "#B0383C";
            document.getElementById(this.selectedItem+"-title").style.color = "#B0383C";
        } else {
            this.hideMenu(this.selectedItem);
            document.getElementById(this.selectedItem+"-link").style.color = "#B0383C";
            document.getElementById(this.selectedItem+"-title").style.color = "#B0383C";
        }
    }

    reset() {
        if (this.selectedItem !== "") {
            document.getElementById(this.selectedItem+"-link").style.color = "#2854A0";
            document.getElementById(this.selectedItem+"-title").style.color = "#2854A0";
        }
        this.selectedItem = "";

        // reset submenu items color
        this.subMenuItems.forEach(item => document.getElementById(item[1]).style.color = "#2854A0");

        // reset subsection title color
        this.subMenuItems.forEach(item => document.getElementById(item[2]).style.color = "#2854A0");
    }

   // Temp
    showMenu() {
        this.packageBuilder.style.display = "initial";
    }

    hideMenu(elementId) {
        var link = false;
        this.subMenuItems.forEach(item => item.includes(elementId) ? true : null);

        if (!link) {
            this.packageBuilder.style.display = "none";
        }   
    }
}