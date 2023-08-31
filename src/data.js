import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';


export const pageLinks = [
    {id: 1, href:'#home', text: 'Home'},
    {id: 2, href:'#about', text: 'About'},
    {id: 3, href:'#services', text: 'Services'},
    {id: 4, href:'#tours', text: 'Tours'}
];

export const socialMedia = [
    {id: 1, href:'https://www.facebook.com', icon: 'fab fa-facebook'},
    {id: 2, href:'https://www.squarespace.com', icon: 'fab fa-squarespace'},
    {id: 3, href:'https://www.twitter.com', icon: 'fab fa-twitter'},
];



export const services = [
    {id: 1, 
    icon: 'fas fa-wallet fa-fw', 
    title: 'Saving Money', 
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id: 2, icon: 'fas fa-tree fa-fw', title: 'Endless Hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id: 3, icon: 'fas fa-socks fa-fw', title: 'Amazing Comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'}
];


export const featuredTours = [
{
    id: 1, 
    title: 'Tibet Adventure', 
    img: tour1, 
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', 
    date: 'August 26th, 2020', 
    icon: 'fas fa-map', 
    conutry: 'China',
    days: '6 Days', 
    price: 'From $2100' 
},
{
    id: 2, 
    title: 'best of java', 
    img: tour2, 
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', 
    date: 'October 1th, 2020', 
    icon: 'fas fa-map', 
    conutry: 'Indonesia',
    days: '11 days', 
    price: 'from $1400' 
},
{
    id: 3, 
    title: 'explore hong kong', 
    img: tour3, 
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', 
    date: '8 days', 
    icon: 'fas fa-map', 
    conutry: 'hong kong',
    days: '8 Days', 
    price: 'from $5000' 
},
{
    id: 4, 
    title: 'kenya highlights', 
    img: tour4, 
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', 
    date: 'december 5th, 2019', 
    icon: 'fas fa-map', 
    conutry: 'kenya',
    days: '20 days', 
    price: 'from $3300' 
},
];




