export const nav = [
    {
        text: "home",
        path: "/",
    },
    {
        text: "about",
        path: "/about",
    },
    {
        text: "services",
        path: "/services",
    },
    {
        text: "contact",
        path: "/pricing"
    }


]

export const list = [
    {
        id: 1,
        cover: "./images/home1.jpg",
        name: "Red Carpet Real Estate",
        location: "210 Zirak Road, Canada",
        category: "For Rent",
        price: 3700,
        type: "Apartment",
    },
    {
        id: 2,
        cover: "./images/home2.jpg",
        name: "Fairmount Properties",
        location: "5698 Zirak Road, NewYork",
        category: "For Sale",
        price: 9750,
        type: "Condos",
    },
    {
        id: 3,
        cover: "./images/home3.jpg",
        name: "The Real Estate Corner",
        location: "5624 Mooker Market, USA",
        category: "For Rent",
        price: 5860,
        type: "Offices",
    },
    {
        id: 4,
        cover: "./images/home4.jpg",
        name: "Herringbone Realty",
        location: "5621 Liverpool, London",
        category: "For Sale",
        price: 7540,
        type: "Homes & Villas",
    },
    {
        id: 5,
        cover: "./images/home5.jpg",
        name: "Brick Lane Realty",
        location: "210 Montreal Road, Canada",
        category: "For Rent",
        price: 4850,
        type: "Commercial",
    },
    {
        id: 6,
        cover: "./images/home3.jpg",
        name: "Banyon Tree Realty",
        location: "210 Zirak Road, Canada",
        category: "For Sale",
        price: 2742,
        type: "Apartment",
    },
]

export const location = [
    {
        id: 1,
        name: "New Orleans, Louisiana",
        Villas: "12 Villas",
        Apartments: "10 Apartments",
        Offices: "07 Offices",
        cover: "./images/home1.jpg",
    },
    {
        id: 2,
        name: "Jerrsy, United State",
        Villas: "12 Villas",
        Apartments: "10 Apartments",
        Offices: "07 Offices",
        cover: "./images/home2.jpg",
    },
    {
        id: 3,
        name: "Liverpool, London",
        Villas: "12 Villas",
        Apartments: " 10 Apartments",
        Offices: "07 Offices",
        cover: "./images/home3.jpg",
    },
    {
        id: 4,
        name: "NewYork, United States",
        Villas: "12 Villas",
        Apartments: " 10 Apartments",
        Offices: "07 Offices",
        cover: "./images/home4.jpg",
    },
    {
        id: 5,
        name: "Montreal, Canada",
        Villas: "12 Villas",
        Apartments: " 10 Apartments",
        Offices: "07 Offices",
        cover: "./images/home5.jpg",
    },
    {
        id: 6,
        name: "California, USA",
        Villas: "12 Villas",
        Apartments: " 10 Apartments",
        Offices: "07 Offices",
        cover: "./images/home2.jpg",
    },
]

export const price = [
    {
        plan: "Basic",
        price: "29",
        ptext: "per user, per month",
        list: [
            {
                icon: <i class='fa-solid fa-check'></i>,
                text: "99.5% Uptime Guarantee",
            },
            {
                icon: <i class='fa-solid fa-check'></i>,
                text: "120GB CDN Bandwidth",
            },
            {
                icon: <i class='fa-solid fa-check'></i>,
                text: "5GB Cloud Storage",
            },
            { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Personal Help Support" },
            { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Enterprise SLA" },
        ],
    },
    {
        best: "Best Value",
        plan: "Standard",
        price: "49",
        ptext: "per user, per month",
        list: [
            {
                icon: <i class='fa-solid fa-check'></i>,
                text: "99.5% Uptime Guarantee",
            },
            {
                icon: <i class='fa-solid fa-check'></i>,
                text: "150GB CDN Bandwidth",
            },
            {
                icon: <i class='fa-solid fa-check'></i>,
                text: "10GB Cloud Storage",
            },
            {
                icon: <i class='fa-solid fa-check'></i>,
                text: "Personal Help Support",
            },
            {
                change: "color",
                icon: <i class='fa-solid fa-x'></i>,
                text: "Enterprise SLA",
            },
        ],
    },
    {
        plan: "Platinum",
        price: "79",
        ptext: "2 user, per month",
        list: [
            {
                icon: <i class='fa-solid fa-check'></i>,
                text: "100% Uptime Guarantee",
            },
            {
                icon: <i class='fa-solid fa-check'></i>,
                text: "200GB CDN Bandwidth",
            },
            {
                icon: <i class='fa-solid fa-check'></i>,
                text: "20GB Cloud Storage",
            },
            {
                icon: <i class='fa-solid fa-check'></i>,
                text: "Personal Help Support",
            },
            {
                icon: <i class='fa-solid fa-check'></i>,
                text: "Enterprise SLA",
            },
        ],
    },
]

export const footer = [
    {
        title: "LAYOUTS",
        text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
    },
    {
        title: "ALL SECTIONS",
        text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testimonials" }, { list: "Videos" }, { list: "Footers" }],
    },
    {
        title: "COMPANY",
        text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Changelog" }],
    },
]
