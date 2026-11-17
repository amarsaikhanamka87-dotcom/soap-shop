import { siteConfig } from "@/config/site";

// Text and photo for the About page. Replace the TODO parts with the real story.

export const aboutContent = {
  nameLines: ["Bazarsuran", siteConfig.name], // TODO: confirm the name spelling (line 2 is the brand name)
  intro: [
    // TODO: replace with the maker's own words
    "Сайн байна уу, намайг Базарсүрэн гэдэг.",
    "Би Монголын тал нутгийн ургамал, байгалийн орцоор савангаа хүйтэн аргаар, гар аргаар бага багаар хийдэг.",
    "Саван бүрт химийн үнэртэн, хадгалалтын бодис нэмэлгүй, арьсанд зөөлөн, цэвэр байхыг эрхэмлэдэг.",
  ],
  photo: {
    src: "/images/about-steppe.jpg", // TODO: swap for a photo of the maker or the workshop
    alt: "Уулын бэлд буусан гэрүүд, Монголын тал нутаг",
    width: 736,
    height: 414,
  },
} as const;
