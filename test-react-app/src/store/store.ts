import img1 from '../assets/img/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg'
import img2 from '../assets/img/people/portrait-british-woman.jpeg'
import img3 from '../assets/img/people/beautiful-woman-face-portrait-brown-background.jpeg'
import messenger from '../assets/img/icons/messenger.png'
import youtube from '../assets/img/icons/youtube.png'
import instagram from '../assets/img/icons/instagram.png'
import whatsapp from '../assets/img/icons/whatsapp.png'
import { FaqItem, MemberType, SocialProps } from '../types/types'


type StoreType = {
    teamMembers: Array<MemberType>
    faqItems: 
        {
            generalInfo: Array<FaqItem>
            products: Array<FaqItem>
        }
    socials: Array<SocialProps>
}

export const store: StoreType = {
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
    ],
    faqItems: {
        generalInfo: [
            {
                id: '1',
                title: 'What is this Little Fashion?',
                text: 'Little Fashion is free Bootstrap 5 website template for everyone. There are 8 HTML pages included in this template and you can expand more pages as you need. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                id: '2',
                title: ' What is Tooplate website?',
                text: ' website to download free HTML website templates for your business or personal use. Tooplate website has been online for almost 8 years now. Thank you for visiting our website more pages as you need. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                id: '3',
                title: 'How do I support your website?',
                text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        ],
        products: [
            {
                id: '1',
                title: 'What is this Little Fashion?',
                text: 'Little Fashion is free Bootstrap 5 website template for everyone. There are 8 HTML pages included in this template and you can expand more pages as you need. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                id: '2',
                title: ' What is Tooplate website?',
                text: ' website to download free HTML website templates for your business or personal use. Tooplate website has been online for almost 8 years now. Thank you for visiting our website more pages as you need. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                id: '3',
                title: 'How do I support your website?',
                text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        ]
    },
    socials: [
        {
            link: '#messenger',
            icon: messenger
        },
        {
            link: '#youtube',
            icon: youtube
        },
        {
            link: '#instagram',
            icon: instagram
        },
        {
            link: '#whatsapp',
            icon: whatsapp
        }
    ]
}
