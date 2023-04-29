export const DASHBOARD_LINKS:{label:string, href:string, Icon?:any|string}[] =[
    
    {label:'Dashboard',href:"/dashboard"},
    {label:'Orders',href:"/dashboard/orders"},
    {label:'Guests',href:"/dashboard/guests"},
    {label:'Emails',href:"/dashboard/emails"},
    {label:'Employees',href:"/dashboard/employees"},
    {label:'Settings',href:"/dashboard/settings"},
    {label:'Home',href:"/"},
   
   
]


export const API_END = process.env.NODE_ENV === 'production' ?'https://dev2.wunderber.com/api/':'htpp://localhost:3000/api/'