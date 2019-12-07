/**
 * The PackageBuilderMenu class manages the behaviour of the
 * Sidebar menu
 */
class Menu {

    /**
     * The constructor needs the "Package Builder" element 
     * to have control of all it's submenu element.
     * 
     * "Package Builder" is the parent element of the sub-menu
     * requiring extra controls.
     * 
     * @param {*} pbElement
     */
    constructor(pbElement) {
        this.packageBuilder = pbElement;
    }

    /**
     * Highlights menu items being browsed.
     * 
     * Changes CSS style.color value to "#B0383C" for the 
     * element with the provided id.
     * 
     * Only triggered when browsing over the main content
     * 
     * @param {*} elementId 
     */
    selectMenuItem(elementId) {
        var menuItem = document.getElementById(elementId + "-link");
        menuItem.style.color = "#B0383C";
        menuItem.scrollIntoView();
    }

    /**
     * Un-highlights menu items being browsed.
     * 
     * Changes CSS style.color value to "#2854A0" for the 
     * element with the provided id.
     * 
     * Only triggered when browsing over the main content
     * 
     * @param {*} elementId 
     */
    unselectMenuItem(elementId) {
        var menuItem = document.getElementById(elementId + "-link");
        menuItem.style.color = "#2854A0";
    }

    /**
     * Displays the submenu under "Package Builder" when browsing away
     * from it's section within the main content.
     * 
     * Changes CSS style.display value to "initial" when the user 
     * scrolls over the section (id="package-builder-section") 
     * area.
     */
    showMenu() {
        if (this.packageBuilder.style.display === "" || this.packageBuilder.style.display === "none") {
            this.packageBuilder.style.display = "initial";
        }
    }
    
    /**
     * Hides the submenu under "Package Builder" when browsing away
     * from it's section within the main content.
     * 
     * Changes CSS style.display value to "none" when the user 
     * scrolls out of the section (id="package-builder-section") 
     * area.
     */
    hideMenu() {
        if (this.packageBuilder.style.display === "initial") {
            this.packageBuilder.style.display = "none";
        }
    }

    /**
     * Opens and closes the "Package Builder sub menu onclick;
     * When a user clicks the menu item "Package Builder"
     * 
     * If the menu item "Package Builder" has its style
     * display set to "inital", change it's value to "none"
     * 
     * Else if it's value is "none", change it to "initial".
     */
    openMenu() {
        this.packageBuilder.style.display = 
        (this.packageBuilder.style.display === "" || this.packageBuilder.style.display === "none") ? 
        "initial" : (this.packageBuilder.style.display === "initial") ? "none" : "none";
    }

    /**
     * Scrolls to top of Menu to see the logo when the user
     * has moved their cursor above the top section of content.
     * 
     * Because using element.scrollToView() when browsing over
     * content to push menu to the corresponding menu item,
     * when you go the top section of content you scroll to 
     * top menu item and never see the logo again after
     * the initial page load, so added an empty section at
     * the top of the page and then scrolls to the logo when
     * browsing over this top most section.
     * 
     * @param {*} elementId 
     */
    topOfMenu(elementId) {
        var menuTop = document.getElementById(elementId);
        menuTop.scrollIntoView();
    }
}