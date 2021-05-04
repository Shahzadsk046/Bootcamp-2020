console.log("Fetch API")

    async function getAPI() {
        let api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        console.log(api, "API")

        const json = await api.json()

        console.log(json, "json")

    }

    // getAPI()

    async function postAPI() {
        const api = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify({
                title: 'Bootcamp',
                body: 'Javascript',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        console.log(api, "API")

        const json = await api.json()

        console.log(json, "json")
    }


postAPI()