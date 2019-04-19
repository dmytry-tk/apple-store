export default class Service {

    phones = [
        {
            id: 101,
            model: "Iphone 7",
            price: 600,
            img: "https://apple-mania.com.ua/image/cache/catalog/iphone7plus/smartfon-apple-iphone-7-plus-128-gb-ram-3-gb-jet-black-500x500.jpg"
        },
        {
            id: 102,
            model: "Iphone 8",
            price: 800,
            img: "https://apple-mania.com.ua/image/cache/catalog/iphone8/smartfon-apple-iphone-8-red-500x500.jpg"
        }
    ]

    getPhones = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.9) {
                    reject(new Error("Something bad happened"))
                } else {
                    resolve(this.phones)
                }
            }, 700)
        })
    }
}