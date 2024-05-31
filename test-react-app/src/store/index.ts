import img1 from '../assets/img/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg'
import img2 from '../assets/img/people/portrait-british-woman.jpeg'
import img3 from '../assets/img/people/beautiful-woman-face-portrait-brown-background.jpeg'
import product1 from "../assets/img/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg"
import product2 from "../assets/img/product/quokkabottles-kFc1_G1GvKA-unsplash.jpeg"
import product3 from "../assets/img/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg"


export type MemberType = {
    id: number
    name: string
    lastName: string
    position: string
    textMain: string
    textFirst: string
    textSecond: string
    twit: string
    linkedIn: string
    email: string
    image: string
}

// export type ProductType = {
//     id: number
//     title: string
//     desc: string
//     price: string
//     image: string
//     alert: string | null
// }

export type ProductType = {
    id: number
    name: string
    product_type: string
    price: string
    image_link: string
    brand: string
    description: string
}

type StoreType = {
    // products: Array<ProductType>,
    teamMembers: Array<MemberType>
}


export const store: StoreType = {
    // products: [
    //     {
    //         id: 1,
    //         title: 'Tree pot',
    //         desc: 'Original package design from house',
    //         price: '$25',
    //         image: product1,
    //         alert: 'New Arrival'
    //     },
    //     {
    //         id: 2,
    //         title: 'Fashion Set',
    //         desc: 'Costume Package',
    //         price: '$35',
    //         image: product2,
    //         alert: 'Low Price'
    //     },
    //     {
    //         id: 3,
    //         title: 'Juice Drinks',
    //         desc: 'Nature made another world',
    //         price: '$45',
    //         image: product3,
    //         alert: null
    //     },
    // ],
    teamMembers: [
        {
            id: 1,
            name: 'Don',
            lastName: 'Haruko',
            position: 'Product, VP',
            textMain: 'Over three years in business had the chance to work on variety of projects, with companies',
            textFirst: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            textSecond: 'Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra.',
            twit: '#',
            linkedIn: '#',
            email: 'test@test.com',
            image: img1
        },
        {
            id: 2,
            name: 'Kelly',
            lastName: 'Lisa',
            position: 'Global, Head of Marketing',
            textMain: 'Over three years in business had the chance to work on variety of projects, with companies',
            textFirst: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            textSecond: 'Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra.',
            twit: '#',
            linkedIn: '#',
            email: 'test@test.com',
            image: img2
        },
        {
            id: 3,
            name: 'Marie',
            lastName: 'Sam',
            position: 'Founder & CEO',
            textMain: 'Over three years in business had the chance to work on variety of projects, with companies',
            textFirst: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            textSecond: 'Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra.',
            twit: '#',
            linkedIn: '#',
            email: 'test@test.com',
            image: img3
        }
    ]
}
