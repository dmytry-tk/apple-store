export default class Service {

    getIphones = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 1) {
                    reject(new Error("Something bad happened"))
                } else {
                    resolve(this.iphones)
                }
            }, 1)
        })
    }

    getIpads = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 1) {
                    reject(new Error("Something bad happened"))
                } else {
                    resolve(this.ipads)
                }
            }, 0)
        })
    }


    iphones = [
        {
            class: 'iphones',
            id: 101,
            model: "Iphone 7",
            price: 600,
            img: "https://apple-mania.com.ua/image/cache/catalog/iphone7plus/smartfon-apple-iphone-7-plus-128-gb-ram-3-gb-jet-black-500x500.jpg"
        },
        {
            class: 'iphones',
            id: 102,
            model: "Iphone 8",
            price: 800,
            img: "https://apple-mania.com.ua/image/cache/catalog/iphone8/smartfon-apple-iphone-8-red-500x500.jpg"
        },
        {
            class: 'iphones',
            id: 103,
            model: "Iphone 7",
            price: 600,
            img: "https://apple-mania.com.ua/image/cache/catalog/iphone7plus/smartfon-apple-iphone-7-plus-128-gb-ram-3-gb-jet-black-500x500.jpg"
        },
        {
            class: 'iphones',
            id: 104,
            model: "Iphone 8",
            price: 800,
            img: "https://apple-mania.com.ua/image/cache/catalog/iphone8/smartfon-apple-iphone-8-red-500x500.jpg"
        }
    ]

    ipads = [
        {
            class: 'ipads',
            id: 201,
            model: "Apple iPad Pro 10.5 Wi-F + LTE 256GB Space Gray 2017",
            price: 700,
            img: "https://ishop-apple.com.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/w/l/wlpj0petrpfsce0_77ee5e8d_2_1_3.jpg"
        },
        {
            class: 'ipads',
            id: 202,
            model: "Apple iPad Pro 10.5 Wi-F + LTE 256GB Rose Gold 2017",
            price: 900,
            img: "https://ishop-apple.com.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/4/4/44_1_9_3.jpg"
        },
        {
            class: 'ipads',
            id: 203,
            model: "Apple iPad Pro 10.5 Wi-F + LTE 256GB Space Gray 2017",
            price: 700,
            img: "https://ishop-apple.com.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/w/l/wlpj0petrpfsce0_77ee5e8d_2_1_3.jpg"
        },
        {
            class: 'ipads',
            id: 204,
            model: "Apple iPad Pro 10.5 Wi-F + LTE 256GB Rose Gold 2017",
            price: 900,
            img: "https://ishop-apple.com.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/4/4/44_1_9_3.jpg"
        },
    ]
}

