const API = "http://localhost:8080/api";
var items = [];
export default {
    "breadCrumbList": [
        { name: "首页", path: "/"},
        { name: "选项2", path: "/tab2"},
        { name: "选项3", path: "/tab3"}
    ],
    getItems() {
        return new Promise(function executor(resolve) {
            if (items.length)
                resolve(items);
            resolve(
                fetch(`${API}/mock/`).then(
                    response => {
                        items = response.json();
                        return items;
                    }
                ).catch(err => {
                    console.log("err", err);
                })
            );
        });
    },
    fetchData(api) {
        return fetch(api)
    }
};
