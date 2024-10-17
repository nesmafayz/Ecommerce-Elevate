export interface IProduct {
        id: number;
        title: string;
        price:  number;
        description:  string;
        category:  string;
        image:  string;
        rating: {
            rate: 3.9,
            count: number;      
}
}


export class Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };

    constructor() {
        this.id = 0;
        this.title = '';
        this.price = 0;
        this.description = '';
        this.category = '';
        this.image = '';
        this.rating = {
            rate: 0,
            count: 0
        };
    }
}
