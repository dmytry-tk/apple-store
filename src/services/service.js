export default class Service {

    getIphones = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 1) {
                    reject(new Error("Something bad happened"))
                } else {
                    resolve(this.data.iphone)
                }
            }, 0)
        })
    }

    getIpads = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 1) {
                    reject(new Error("Something bad happened"))
                } else {
                    resolve(this.data.ipad)
                }
            }, 0)
        })
    }

    getDevice = (deviceClass, deviceId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 1) {
                    reject(new Error("Something bad happened"))
                } else {
                    const device = this.data[deviceClass].find((item) => +item.deviceId === +deviceId)
                    resolve(device)
                }
            }, 0)
        })
    }

    description = "Screen 5.5 Retina (1920x1080, capacitive touch, 3D Touch) / monoblock / Apple 10/12 megapixel camera + front 7 megapixel / Bluetooth 4.2 / Wi-Fi 802.11 a / b / g / n / ac / 3 GB RAM / 128 GB internal memory / NFC / 3G / LTE / GPS / GLONASS / iOS 10 / 158.2 x 77.9 x 7.3 mm, 192 g / Black Glossy"

    data = {
        iphone: [
            {
                deviceClass: 'iphone',
                description: this.description,
                deviceId: 101,
                model: "Iphone 7",
                price: 600,
                img: "https://apple-mania.com.ua/image/cache/catalog/iphone7plus/smartfon-apple-iphone-7-plus-128-gb-ram-3-gb-jet-black-500x500.jpg"
            },
            {
                deviceClass: 'iphone',
                description: this.description,
                deviceId: 102,
                model: "Iphone 8",
                price: 800,
                img: "https://apple-mania.com.ua/image/cache/catalog/iphone8/smartfon-apple-iphone-8-red-500x500.jpg"
            },
            {
                deviceClass: 'iphone',
                description: this.description,
                deviceId: 103,
                model: "Iphone 7",
                price: 600,
                img: "https://apple-mania.com.ua/image/cache/catalog/iphone7plus/smartfon-apple-iphone-7-plus-128-gb-ram-3-gb-jet-black-500x500.jpg"
            },
            {
                deviceClass: 'iphone',
                description: this.description,
                deviceId: 104,
                model: "Iphone 8",
                price: 800,
                img: "https://apple-mania.com.ua/image/cache/catalog/iphone8/smartfon-apple-iphone-8-red-500x500.jpg"
            }
        ],

        ipad: [
            {
                deviceClass: 'ipad',
                description: this.description,
                deviceId: 201,
                model: "Apple iPad Pro 10.5 Wi-F + LTE 256GB Space Gray 2017",
                price: 700,
                img: "https://ishop-apple.com.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/w/l/wlpj0petrpfsce0_77ee5e8d_2_1_3.jpg"
            },
            {
                deviceClass: 'ipad',
                description: this.description,
                deviceId: 202,
                model: "Apple iPad Pro 10.5 Wi-F + LTE 256GB Rose Gold 2017",
                price: 900,
                img: "https://ishop-apple.com.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/4/4/44_1_9_3.jpg"
            },
            {
                deviceClass: 'ipad',
                description: this.description,
                deviceId: 203,
                model: "Apple iPad Pro 10.5 Wi-F + LTE 256GB Space Gray 2017",
                price: 700,
                img: "https://ishop-apple.com.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/w/l/wlpj0petrpfsce0_77ee5e8d_2_1_3.jpg"
            },
            {
                deviceClass: 'ipad',
                description: this.description,
                deviceId: 204,
                model: "Apple iPad Pro 10.5 Wi-F + LTE 256GB Rose Gold 2017",
                price: 900,
                img: "https://ishop-apple.com.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/4/4/44_1_9_3.jpg"
            },
        ]
    }
}

