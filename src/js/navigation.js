class Navigation {
    constructor() {}

    navigate(page) {
        const iframe = parent.document.getElementById("intern-navigation");
        iframe.src = page;
    }
}

const navigation = new Navigation();
export default navigation;