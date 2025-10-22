// const menus = {
//   main: [
//     { label: "Home", href: "/" },
//     { label: "About", href: "#about" },
//     { label: "Features", href: "#features" },
//     { label: "Generic", href: "/generic" },
//     { label: "Elements", href: "/elements" },
//     { label: "Contact", href: "#contact", intent: "primary" },
//   ],
// };

// export default menus;

export type NavItem = { label: string; href: string };


// Single source of truth for all nav links (desktop + mobile)
export const mainNav: NavItem[] = [
{ label: "Home", href: "#home" },
{ label: "About", href: "#about" },
{ label: "Features", href: "#features" },
{ label: "Contact", href: "#contact" },
{ label: "Generic", href: "/generic" },
{ label: "Elements", href: "/elements" },
];