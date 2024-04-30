const products = [
    {
        title: "Guitar",
        category: "guitar",
        price: 499.99,
        image: "guitar.jfif",
        _id: "gu1t4r"
    },
    {
        title: "Drum Set",
        category: "drum",
        price: 999.99,
        image: "drums.jfif",
        _id: "drum$"
    },
    {
        title: "Microphone",
        category: "mic",
        price: 149.99,
        image: "mic.jfif",
        _id: "m1cr0ph0n3"
    },
    {
        title: "Piano",
        category: "piano",
        price: 1499.99,
        image: "piano.jfif",
        _id: "p1an0"
    },
];

class DataService {

    getProducts() {

        return products;
    }

    getCategories() {

        return (
        ['guitar', 'drum', 'mic', 'piano']
        )
    }

    saveProduct() {

    }

}

export default new DataService();