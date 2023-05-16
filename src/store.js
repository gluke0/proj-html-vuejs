import { reactive } from "vue";

export const store = reactive({

    newEmail: '',

    navbar: [
        {
            menu: 'Courses',
            new: false,
            active: false,
        },
        {
            menu: 'Courses Formats',
            new: false,
            active: false,
        },
        {
            menu: 'Add Course',
            new: true,
            active: false,
        },
        {
            menu: 'Pages',
            new: false,
            active: false,
        },
        {
            menu: 'Demos',
            new: false,
            active: true,
        },
    ],

    listO: [
        {
            menu: 'Blog',
        },
        {
            menu: 'Home',
        },
        {
            menu: 'Shortcodes',
        },
    ],

    listT: [
        {   
            menu: 'Courses',
        },
        {
            menu: 'Membership A...',
        },
        {
            menu: 'Typography',
        },
    ],
    
    courses: [
        {
            img: 'photo-1496307042754-b4aa456c4a2d-370x200.jpeg',
            special: 'special',
            price: '$56',
            name: 'How to be a DJ? Make Electronic Music',
            genre: 'Electronic',
            lvl: 'Advanced',
            lect: '8 Lectures',
            time: '6 hours',
        },
        {
            img: '12345-1-370x200.png',
            special: 'special',
            price: '$67',
            name: 'Nvidia and EU4 Technologies Practice',
            genre: 'Nvidia',
            lvl: 'Advanced',
            lect: '8 Lectures',
            time: '6 hours',
        },
        {
            img: 'photo-1491897554428-130a60dd4757-370x200.jpeg',
            special: 'special',
            price: '$32',
            name: 'Fashion Photography from professional',
            genre: 'Fashion',
            lvl: 'Advanced',
            lect: '6 Lectures',
            time: '8 hours',
        },
        {
            img: 'photo-1416339134316-0e91dc9ded92-370x200.jpeg',
            special: '',
            price: '$88',
            name: 'Design Instruments for Communication',
            genre: 'Communication',
            lvl: 'Intermediate',
            lect: '6 Lectures',
            time: '6 hours',
        },
        {
            img: 'cathryn-lavery-67852-unsplash-370x200.jpg',
            special: '',
            price: '$12',
            name: 'Make your Concept Right and Beautiful',
            genre: 'Art',
            lvl: 'Intermediate',
            lect: '6 Lectures',
            time: '6 hours',
        },
        {
            img: 'photo-1475452779376-caebfb988090-370x200.jpeg',
            special: '',
            price: '$77',
            name: 'Road Bike Manual or How to Be a Champion.',
            genre: 'Bicycling',
            lvl: 'Beginner',
            lect: '6 Lectures',
            time: '6 hours',
        },
    ],
})
