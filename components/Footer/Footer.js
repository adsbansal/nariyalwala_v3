import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";

// const DATA = [
//     // {
//     //     title: "Template",
//     //     items: [
//     //         {
//     //             label: "Features",
//     //             href: "#features"
//     //         },
//     //         {
//     //             label: "Testimonials",
//     //             href: "#testimonials"
//     //         },
//     //         {
//     //             label: "FAQ",
//     //             href: "#faq"
//     //         }
//     //     ]
//     // },
//     {
//         title: "Company",
//         items: [
//             // {
//             //     label: "About",
//             //     href: "https://github.com/christian-luntok/",
//             //     target: "_blank"
//             // },
//             {
//                 label: "Twitter",
//                 href: "https://github.com/christian-luntok/",
//                 target: "_blank"
//             },
//             {
//                 label: "Instagram",
//                 href: "https://github.com/christian-luntok/",
//                 target: "_blank"
//             },
//             {
//                 label: "Facebook",
//                 href: "https://github.com/christian-luntok/",
//                 target: "_blank"
//             }
//         ]
//     }
// ];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-white">
            {/* Footer Links */}
            {/* <SectionContainer className="footer--container wrap wrap-px flex flex-row relative z-10 mt-10">
                {DATA.map((footerLinks) => (
                    <div
                        key={footerLinks.title}
                        className="footer-menu--container"
                    >
                        <ul className="footer-menu--list">
                            {footerLinks.items.map((footerItem) => (
                                <li
                                    key={footerItem.label}
                                    className="footer-menu--list-item gap-2"
                                >
                                    <a
                                        className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                        href={footerItem.href}
                                        target={footerItem.target}
                                    >
                                        {footerItem.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </SectionContainer> */}
            {/* Footer Credits */}
            <SectionContainer className="footer-credits relative z-10 text-center">
                <div className="wrap wrap-px py-6">
                    <p className="my-0">
                        <span className="font-normal">
                            <Link
                                className="transition-colors duration-300 hover:underline m-3"
                                href="https://cjluntok.com"
                                target="_blank"
                            >
                                Twitter
                            </Link>
                            |
                            <Link
                                className="transition-colors duration-300 hover:underline m-3"
                                href="https://cjluntok.com"
                                target="_blank"
                            >
                                Instagram
                            </Link>
                            |
                            <Link
                                className="transition-colors duration-300 hover:underline m-3"
                                href="https://cjluntok.com"
                                target="_blank"
                            >
                                Facebook
                            </Link>
                        </span>
                    </p>
                    <br></br>
                    <p className="my-0">© {year} Nariyalwala.</p>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
