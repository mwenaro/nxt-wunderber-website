export const DASHBOARD_LINKS: { label: string, href: string, Icon?: any | string }[] = [

    { label: 'Dashboard', href: "/dashboard" },
    { label: 'Tours', href: "/dashboard/tours" },
    { label: 'Guests', href: "/dashboard/guests" },
    { label: 'Emails', href: "/dashboard/emails" },
    { label: 'Employees', href: "/dashboard/employees" },
    { label: 'Settings', href: "/dashboard/settings" },
    { label: 'Home', href: "/" },


]


export const API_END = (process.env.NODE_ENV ?? 'development') === 'production' ? process.env.NEXT_PUBLIC_PROD_API : process.env.NEXT_PUBLIC_DEV_API