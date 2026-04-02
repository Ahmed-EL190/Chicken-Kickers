import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import MealCard from "../../components/UI/MealCard";
import { CartContext } from "../../context/CartContextValue";
import { FaUtensils, FaChevronRight } from "react-icons/fa";

// 🔥 Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ✅ DATA
const mealData = {
  categories: [
    {
      name: "Kickers Eating",
      items: [
        { id: 1, name: "Zinger Sandwich", price: 55, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/511314753_759868636372633_605459186485612267_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH81r8k9WDfVcMyrkCcCauUSojOHQ206CFKiM4dDbToIboR9JqJgz5WAML3zf26rwGka5-I3KUuNky_pP90ldqB&_nc_ohc=-LHlZI-AuHwQ7kNvwHyD5k5&_nc_oc=AdrDgODJ2PKUStgBv6eRi3MLM011FH9VrCaUy6JryVlKC49Kwmhg5nyNEBso1Pm4_-0&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=DPLZHgHTbY3R5chJgkRjOA&_nc_ss=7a3a8&oh=00_AfwRVO0Pi5R555fGUeSIXbH0zecwNMivp1RVFsza72euKA&oe=69D172F8" },
        { id: 2, name: "Mushroom Sandwich", price: 60, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/511314753_759868636372633_605459186485612267_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH81r8k9WDfVcMyrkCcCauUSojOHQ206CFKiM4dDbToIboR9JqJgz5WAML3zf26rwGka5-I3KUuNky_pP90ldqB&_nc_ohc=-LHlZI-AuHwQ7kNvwHyD5k5&_nc_oc=AdrDgODJ2PKUStgBv6eRi3MLM011FH9VrCaUy6JryVlKC49Kwmhg5nyNEBso1Pm4_-0&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=DPLZHgHTbY3R5chJgkRjOA&_nc_ss=7a3a8&oh=00_AfwRVO0Pi5R555fGUeSIXbH0zecwNMivp1RVFsza72euKA&oe=69D172F8" },
        { id: 3, name: "Chicken Fillet", price: 65, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/511314753_759868636372633_605459186485612267_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH81r8k9WDfVcMyrkCcCauUSojOHQ206CFKiM4dDbToIboR9JqJgz5WAML3zf26rwGka5-I3KUuNky_pP90ldqB&_nc_ohc=-LHlZI-AuHwQ7kNvwHyD5k5&_nc_oc=AdrDgODJ2PKUStgBv6eRi3MLM011FH9VrCaUy6JryVlKC49Kwmhg5nyNEBso1Pm4_-0&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=DPLZHgHTbY3R5chJgkRjOA&_nc_ss=7a3a8&oh=00_AfwRVO0Pi5R555fGUeSIXbH0zecwNMivp1RVFsza72euKA&oe=69D172F8" },
      ],
    },

    {
      name: "Wraps",
      items: [
        {
          id: 10,
          name: "Chicken Wrap",
          description: "Spicy / Regular",
          price: 95,
          image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/597397835_891585583200937_8884053005752075880_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=n_pseYt-lVYQ7kNvwE6s9fZ&_nc_oc=Ado3MO9VjDvuI3RSTTErmBjgJ8YYBIYtuSlm7dOs5I8VYDijmsC_DKS2OzbmjagxTvA&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=qDqa57a8vMyLYLVhnmKxUQ&_nc_ss=7a3a8&oh=00_Af3kZa6CDfPrMjmJHyvHhqaHzZ85iHdR_axqr9sasyWxqA&oe=69D3FEB9",
        },
        {
          id: 11,
          name: "Loaded Wrap",
          price: 130,
          image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/597397835_891585583200937_8884053005752075880_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=n_pseYt-lVYQ7kNvwE6s9fZ&_nc_oc=Ado3MO9VjDvuI3RSTTErmBjgJ8YYBIYtuSlm7dOs5I8VYDijmsC_DKS2OzbmjagxTvA&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=qDqa57a8vMyLYLVhnmKxUQ&_nc_ss=7a3a8&oh=00_Af3kZa6CDfPrMjmJHyvHhqaHzZ85iHdR_axqr9sasyWxqA&oe=69D3FEB9",
        },
      ],
    },

    {
      name: "Sandwiches",
      items: [
        { id: 20, name: "Classic Kickers", price: 145, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/511314753_759868636372633_605459186485612267_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH81r8k9WDfVcMyrkCcCauUSojOHQ206CFKiM4dDbToIboR9JqJgz5WAML3zf26rwGka5-I3KUuNky_pP90ldqB&_nc_ohc=-LHlZI-AuHwQ7kNvwHyD5k5&_nc_oc=AdrDgODJ2PKUStgBv6eRi3MLM011FH9VrCaUy6JryVlKC49Kwmhg5nyNEBso1Pm4_-0&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=DPLZHgHTbY3R5chJgkRjOA&_nc_ss=7a3a8&oh=00_AfwRVO0Pi5R555fGUeSIXbH0zecwNMivp1RVFsza72euKA&oe=69D172F8" },
        { id: 21, name: "Honey Mustard", price: 125, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/511314753_759868636372633_605459186485612267_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH81r8k9WDfVcMyrkCcCauUSojOHQ206CFKiM4dDbToIboR9JqJgz5WAML3zf26rwGka5-I3KUuNky_pP90ldqB&_nc_ohc=-LHlZI-AuHwQ7kNvwHyD5k5&_nc_oc=AdrDgODJ2PKUStgBv6eRi3MLM011FH9VrCaUy6JryVlKC49Kwmhg5nyNEBso1Pm4_-0&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=DPLZHgHTbY3R5chJgkRjOA&_nc_ss=7a3a8&oh=00_AfwRVO0Pi5R555fGUeSIXbH0zecwNMivp1RVFsza72euKA&oe=69D172F8" },
        { id: 22, name: "Sweet Chilli", price: 125, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/511314753_759868636372633_605459186485612267_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH81r8k9WDfVcMyrkCcCauUSojOHQ206CFKiM4dDbToIboR9JqJgz5WAML3zf26rwGka5-I3KUuNky_pP90ldqB&_nc_ohc=-LHlZI-AuHwQ7kNvwHyD5k5&_nc_oc=AdrDgODJ2PKUStgBv6eRi3MLM011FH9VrCaUy6JryVlKC49Kwmhg5nyNEBso1Pm4_-0&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=DPLZHgHTbY3R5chJgkRjOA&_nc_ss=7a3a8&oh=00_AfwRVO0Pi5R555fGUeSIXbH0zecwNMivp1RVFsza72euKA&oe=69D172F8" },
        { id: 23, name: "Mexican Doritos", price: 135, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/511314753_759868636372633_605459186485612267_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH81r8k9WDfVcMyrkCcCauUSojOHQ206CFKiM4dDbToIboR9JqJgz5WAML3zf26rwGka5-I3KUuNky_pP90ldqB&_nc_ohc=-LHlZI-AuHwQ7kNvwHyD5k5&_nc_oc=AdrDgODJ2PKUStgBv6eRi3MLM011FH9VrCaUy6JryVlKC49Kwmhg5nyNEBso1Pm4_-0&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=DPLZHgHTbY3R5chJgkRjOA&_nc_ss=7a3a8&oh=00_AfwRVO0Pi5R555fGUeSIXbH0zecwNMivp1RVFsza72euKA&oe=69D172F8" },
        { id: 24, name: "Blue Cheese", price: 130, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/511314753_759868636372633_605459186485612267_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH81r8k9WDfVcMyrkCcCauUSojOHQ206CFKiM4dDbToIboR9JqJgz5WAML3zf26rwGka5-I3KUuNky_pP90ldqB&_nc_ohc=-LHlZI-AuHwQ7kNvwHyD5k5&_nc_oc=AdrDgODJ2PKUStgBv6eRi3MLM011FH9VrCaUy6JryVlKC49Kwmhg5nyNEBso1Pm4_-0&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=DPLZHgHTbY3R5chJgkRjOA&_nc_ss=7a3a8&oh=00_AfwRVO0Pi5R555fGUeSIXbH0zecwNMivp1RVFsza72euKA&oe=69D172F8" },
        { id: 25, name: "BBQ Lovers", price: 130, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/511314753_759868636372633_605459186485612267_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH81r8k9WDfVcMyrkCcCauUSojOHQ206CFKiM4dDbToIboR9JqJgz5WAML3zf26rwGka5-I3KUuNky_pP90ldqB&_nc_ohc=-LHlZI-AuHwQ7kNvwHyD5k5&_nc_oc=AdrDgODJ2PKUStgBv6eRi3MLM011FH9VrCaUy6JryVlKC49Kwmhg5nyNEBso1Pm4_-0&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=DPLZHgHTbY3R5chJgkRjOA&_nc_ss=7a3a8&oh=00_AfwRVO0Pi5R555fGUeSIXbH0zecwNMivp1RVFsza72euKA&oe=69D172F8" },
      ],
    },

    {
      name: "Meals",
      items: [
        {
          id: 30,
          name: "Doppio Meal",
          description: "2 Sandwich + Fries + Drink",
          price: 160,
          image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/486262786_689979340028230_439641249236890444_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=046jECadNeEQ7kNvwFTI4Zv&_nc_oc=AdpnRikIecga1IXOY8Hc9aRLKGnaDQsIg8aC7gLK6P2-lg-NYX7DIp1ZwVv7kTojxpc&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=oVF6Uc8BNP1BacTQj9rIkw&_nc_ss=7a3a8&oh=00_Af2L6GHi9RLvzah4O0JqU93RXhQhKvHbRjCpITk42kECjw&oe=69D3FFE0",
        },
        { id: 31, name: "Cheesy Lovers Meal", price: 200, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/511314753_759868636372633_605459186485612267_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH81r8k9WDfVcMyrkCcCauUSojOHQ206CFKiM4dDbToIboR9JqJgz5WAML3zf26rwGka5-I3KUuNky_pP90ldqB&_nc_ohc=-LHlZI-AuHwQ7kNvwHyD5k5&_nc_oc=AdrDgODJ2PKUStgBv6eRi3MLM011FH9VrCaUy6JryVlKC49Kwmhg5nyNEBso1Pm4_-0&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=DPLZHgHTbY3R5chJgkRjOA&_nc_ss=7a3a8&oh=00_AfwRVO0Pi5R555fGUeSIXbH0zecwNMivp1RVFsza72euKA&oe=69D172F8" },
        { id: 32, name: "Kickers Madness", price: 200, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/511314753_759868636372633_605459186485612267_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH81r8k9WDfVcMyrkCcCauUSojOHQ206CFKiM4dDbToIboR9JqJgz5WAML3zf26rwGka5-I3KUuNky_pP90ldqB&_nc_ohc=-LHlZI-AuHwQ7kNvwHyD5k5&_nc_oc=AdrDgODJ2PKUStgBv6eRi3MLM011FH9VrCaUy6JryVlKC49Kwmhg5nyNEBso1Pm4_-0&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=DPLZHgHTbY3R5chJgkRjOA&_nc_ss=7a3a8&oh=00_AfwRVO0Pi5R555fGUeSIXbH0zecwNMivp1RVFsza72euKA&oe=69D172F8" },
      ],
    },

    {
      name: "Appetizers",
      items: [
        { id: 40, name: "Fire Fries", price: 80, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/657172481_977850204574474_8637482823818003840_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFjceAACrncMw4C2qPLHLICpEMgv0UI8xikQyC_RQjzGIgrawdyRoqf-HGHzhm0o12zSu1-sKnhr31MwBxFnRq8&_nc_ohc=99i-3vwnTCIQ7kNvwHEg8pY&_nc_oc=AdqDLHHNJJT1GEJNc8zSx3mc1FnWfUY5jSHOPdhxo_zb-FVCX-jtDWMPaG2y6mjED4I&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=bnm41xdHMN90u262QfIXZg&_nc_ss=7a3a8&oh=00_AfwcyprBZVFlmAb209XceehaOvGi-UQDq4cF0ihIFf0ENA&oe=69D1550D" },
        { id: 41, name: "Kickers Plate", price: 175, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/657172481_977850204574474_8637482823818003840_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFjceAACrncMw4C2qPLHLICpEMgv0UI8xikQyC_RQjzGIgrawdyRoqf-HGHzhm0o12zSu1-sKnhr31MwBxFnRq8&_nc_ohc=99i-3vwnTCIQ7kNvwHEg8pY&_nc_oc=AdqDLHHNJJT1GEJNc8zSx3mc1FnWfUY5jSHOPdhxo_zb-FVCX-jtDWMPaG2y6mjED4I&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=bnm41xdHMN90u262QfIXZg&_nc_ss=7a3a8&oh=00_AfwcyprBZVFlmAb209XceehaOvGi-UQDq4cF0ihIFf0ENA&oe=69D1550D" },
        { id: 42, name: "Ranch Fries", price: 75, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/481986466_677063934653104_2615563807526592824_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG5BGx1u89Ebs3FYU7u5nxvID2ZCLMjLVogPZkIsyMtWqIyW9bxxD9PnDOnFFB1zpQPaXar3MqFA9eX3jkPdcv0&_nc_ohc=Tf5wcHT4bdcQ7kNvwGBMa04&_nc_oc=AdrZhtTozsvGoql7mXGZ9SG9gfW0hlUXkCd_jLV1R3KWz3Yuxq5eqkBzxo5TCqNkjhY&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=f9StgRDP-USatGIqyiGCVw&_nc_ss=7a3a8&oh=00_Afw-YhaMYriu0XRwBgwQG29U1hg7fnDmJWavXmEFmkjkjQ&oe=69D15966" },
        { id: 43, name: "Cold Fries", price: 75, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/657172481_977850204574474_8637482823818003840_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFjceAACrncMw4C2qPLHLICpEMgv0UI8xikQyC_RQjzGIgrawdyRoqf-HGHzhm0o12zSu1-sKnhr31MwBxFnRq8&_nc_ohc=99i-3vwnTCIQ7kNvwHEg8pY&_nc_oc=AdqDLHHNJJT1GEJNc8zSx3mc1FnWfUY5jSHOPdhxo_zb-FVCX-jtDWMPaG2y6mjED4I&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=bnm41xdHMN90u262QfIXZg&_nc_ss=7a3a8&oh=00_AfwcyprBZVFlmAb209XceehaOvGi-UQDq4cF0ihIFf0ENA&oe=69D1550D" },
        { id: 44, name: "Kickers Waffle", price: 75, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/657172481_977850204574474_8637482823818003840_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFjceAACrncMw4C2qPLHLICpEMgv0UI8xikQyC_RQjzGIgrawdyRoqf-HGHzhm0o12zSu1-sKnhr31MwBxFnRq8&_nc_ohc=99i-3vwnTCIQ7kNvwHEg8pY&_nc_oc=AdqDLHHNJJT1GEJNc8zSx3mc1FnWfUY5jSHOPdhxo_zb-FVCX-jtDWMPaG2y6mjED4I&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=bnm41xdHMN90u262QfIXZg&_nc_ss=7a3a8&oh=00_AfwcyprBZVFlmAb209XceehaOvGi-UQDq4cF0ihIFf0ENA&oe=69D1550D" },
      ],
    },

    {
      name: "Chicken",
      items: [
        { id: 50, name: "Kickers Dinner", price: 180, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/482056866_677420331284131_6987965959603750324_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHfknKKClErvH3EBig1jnNfor45RvprNhSivjlG-ms2FJLgIf6RRZV0DkfpM4UA9B1P_QJgrxcSZNWgajmZZjOd&_nc_ohc=d33ixvxjfVkQ7kNvwF96ffH&_nc_oc=Adp7hghL_5Bhwg5w7LumhRUylRtjvdwq4BsN2bh8yzuTcfLQ1gju5OU5Xwf4fMrlH-8&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=FzcvL7XvqxClkaPVDYNOcw&_nc_ss=7a3a8&oh=00_AfwoWj0MRcsyQL4vns0DmVXlsfA8NiPQqKcFedW4EMOCHg&oe=69D145C9" },
        { id: 51, name: "Kickers Strips", price: 180, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/482056866_677420331284131_6987965959603750324_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHfknKKClErvH3EBig1jnNfor45RvprNhSivjlG-ms2FJLgIf6RRZV0DkfpM4UA9B1P_QJgrxcSZNWgajmZZjOd&_nc_ohc=d33ixvxjfVkQ7kNvwF96ffH&_nc_oc=Adp7hghL_5Bhwg5w7LumhRUylRtjvdwq4BsN2bh8yzuTcfLQ1gju5OU5Xwf4fMrlH-8&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=FzcvL7XvqxClkaPVDYNOcw&_nc_ss=7a3a8&oh=00_AfwoWj0MRcsyQL4vns0DmVXlsfA8NiPQqKcFedW4EMOCHg&oe=69D145C9" },
        { id: 52, name: "Kickers Mix", price: 190, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/482056866_677420331284131_6987965959603750324_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHfknKKClErvH3EBig1jnNfor45RvprNhSivjlG-ms2FJLgIf6RRZV0DkfpM4UA9B1P_QJgrxcSZNWgajmZZjOd&_nc_ohc=d33ixvxjfVkQ7kNvwF96ffH&_nc_oc=Adp7hghL_5Bhwg5w7LumhRUylRtjvdwq4BsN2bh8yzuTcfLQ1gju5OU5Xwf4fMrlH-8&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=FzcvL7XvqxClkaPVDYNOcw&_nc_ss=7a3a8&oh=00_AfwoWj0MRcsyQL4vns0DmVXlsfA8NiPQqKcFedW4EMOCHg&oe=69D145C9" },
      ],
    },

    {
      name: "Family Box",
      items: [
        { id: 60, name: "8 Broast", price: 490, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/632193623_941663341526494_2384566793354122694_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=w5YIGSO3GMAQ7kNvwH12fDM&_nc_oc=AdrZdk3VKJkp3s09WSLERJWvlF-WpKp7-gief5ky7fH-On3nw0DRVM8-i2xgs6vi3-o&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=HVsP7bP23mZz4i063mUn8g&_nc_ss=7a3a8&oh=00_Af3maImviJmhtuK2hQiRpy_YAhGocAkhlbWCtdcY9BqF0Q&oe=69D3F064" },
        { id: 61, name: "12 Broast", price: 640, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/632193623_941663341526494_2384566793354122694_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=w5YIGSO3GMAQ7kNvwH12fDM&_nc_oc=AdrZdk3VKJkp3s09WSLERJWvlF-WpKp7-gief5ky7fH-On3nw0DRVM8-i2xgs6vi3-o&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=HVsP7bP23mZz4i063mUn8g&_nc_ss=7a3a8&oh=00_Af3maImviJmhtuK2hQiRpy_YAhGocAkhlbWCtdcY9BqF0Q&oe=69D3F064" },
        { id: 62, name: "16 Broast", price: 790, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/632193623_941663341526494_2384566793354122694_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=w5YIGSO3GMAQ7kNvwH12fDM&_nc_oc=AdrZdk3VKJkp3s09WSLERJWvlF-WpKp7-gief5ky7fH-On3nw0DRVM8-i2xgs6vi3-o&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=HVsP7bP23mZz4i063mUn8g&_nc_ss=7a3a8&oh=00_Af3maImviJmhtuK2hQiRpy_YAhGocAkhlbWCtdcY9BqF0Q&oe=69D3F064" },
        { id: 63, name: "21 Broast", price: 990, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/632193623_941663341526494_2384566793354122694_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=w5YIGSO3GMAQ7kNvwH12fDM&_nc_oc=AdrZdk3VKJkp3s09WSLERJWvlF-WpKp7-gief5ky7fH-On3nw0DRVM8-i2xgs6vi3-o&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=HVsP7bP23mZz4i063mUn8g&_nc_ss=7a3a8&oh=00_Af3maImviJmhtuK2hQiRpy_YAhGocAkhlbWCtdcY9BqF0Q&oe=69D3F064" },
        { id: 64, name: "12 Strips", price: 590, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/632193623_941663341526494_2384566793354122694_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=w5YIGSO3GMAQ7kNvwH12fDM&_nc_oc=AdrZdk3VKJkp3s09WSLERJWvlF-WpKp7-gief5ky7fH-On3nw0DRVM8-i2xgs6vi3-o&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=HVsP7bP23mZz4i063mUn8g&_nc_ss=7a3a8&oh=00_Af3maImviJmhtuK2hQiRpy_YAhGocAkhlbWCtdcY9BqF0Q&oe=69D3F064" },
        { id: 65, name: "16 Mix", price: 760, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/632193623_941663341526494_2384566793354122694_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=w5YIGSO3GMAQ7kNvwH12fDM&_nc_oc=AdrZdk3VKJkp3s09WSLERJWvlF-WpKp7-gief5ky7fH-On3nw0DRVM8-i2xgs6vi3-o&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=HVsP7bP23mZz4i063mUn8g&_nc_ss=7a3a8&oh=00_Af3maImviJmhtuK2hQiRpy_YAhGocAkhlbWCtdcY9BqF0Q&oe=69D3F064" },
      ],
    },

    {
      name: "Desserts",
      items: [
        {
          id: 70,
          name: "Ice Cream",
          description: "Vanilla / Chocolate",
          price: 50,
          image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/596245551_893124436380385_5512842544454126032_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=WuzFRNr8yy4Q7kNvwGh10tH&_nc_oc=AdpME9bu1a3W1zH0csEpWTyLhSP40r8BlVDoRxrBxh7AIfYK7GNycyvI_GXDXuAuYU0&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=FOereKdt19CfVdJBhkFG8g&_nc_ss=7a3a8&oh=00_Af1iXfCu5ShcjXJGE5-P_PU-3S7FHAMeXVPtuD4cvG2ylQ&oe=69D4106D",
        },
      ],
    },

    {
      name: "Kids Meals",
      items: [
        { id: 80, name: "Kids Meal", price: 95, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/482056866_677420331284131_6987965959603750324_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHfknKKClErvH3EBig1jnNfor45RvprNhSivjlG-ms2FJLgIf6RRZV0DkfpM4UA9B1P_QJgrxcSZNWgajmZZjOd&_nc_ohc=d33ixvxjfVkQ7kNvwF96ffH&_nc_oc=Adp7hghL_5Bhwg5w7LumhRUylRtjvdwq4BsN2bh8yzuTcfLQ1gju5OU5Xwf4fMrlH-8&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=FzcvL7XvqxClkaPVDYNOcw&_nc_ss=7a3a8&oh=00_AfwoWj0MRcsyQL4vns0DmVXlsfA8NiPQqKcFedW4EMOCHg&oe=69D145C9" },
      ],
    },

    {
      name: "Drinks",
      items: [
        { id: 90, name: "Water", price: 10, image: "https://images.pexels.com/photos/15205154/pexels-photo-15205154.jpeg" },
        { id: 91, name: "Soft Drink", price: 20, image: "https://images.pexels.com/photos/15205154/pexels-photo-15205154.jpeg" },
      ],
    },
  ],
};

export default function Menu() {
  const { addToCart } = useContext(CartContext);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCategories =
    activeCategory === "All"
      ? mealData.categories
      : mealData.categories.filter((cat) => cat.name === activeCategory);

  return (
    <motion.main
      className="min-h-screen bg-[#050505] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-red-600 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        {/* 🔥 Hero */}
        <motion.section 
          className="text-center mb-20" 
          initial={{ y: -30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
        >
          {/* Elegant Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="h-px w-16 bg-linear-to-r from-red-600 to-transparent" />
            <div className="inline-flex items-center px-4 py-2 border border-red-600/30 text-red-500 tracking-[0.3em] text-xs uppercase">
              <FaUtensils className="mr-2" />
              Our Delicious Menu
            </div>
            <div className="h-px w-16 bg-linear-to-l from-red-600 to-transparent" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Explore <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-700">Menu</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-xl mx-auto font-light text-lg"
          >
            Choose your favorite meals and enjoy the best fried chicken in Mansoura
          </motion.p>
        </motion.section>

        {/* 🔥 FILTER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-8 py-3 border transition-all duration-300 tracking-widest uppercase text-sm ${
              activeCategory === "All"
                ? "bg-red-600 border-red-600 text-white"
                : "border-white/10 text-gray-400 hover:border-red-600/50 hover:text-white"
            }`}
          >
            All
          </button>

          {mealData.categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-8 py-3 border transition-all duration-300 tracking-widest uppercase text-sm ${
                activeCategory === cat.name
                  ? "bg-red-600 border-red-600 text-white"
                  : "border-white/10 text-gray-400 hover:border-red-600/50 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* 🔥 MENU */}
        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCategories.map((category) => (
            <motion.section
              key={category.name}
              variants={itemVariants}
              className="relative"
            >
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
                  {category.name}
                </h2>
                <div className="w-24 h-px bg-linear-to-r from-transparent via-red-600 to-transparent mx-auto" />
              </div>

              {/* Items Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((meal, index) => (
                  <motion.div
                    key={meal.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <MealCard meal={meal} onAdd={addToCart} />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>

        {/* 🔥 CTA */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 relative"
        >
          <div className="border border-white/10 p-12 md:p-16 relative">
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-red-600 -translate-x-px -translate-y-px" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-red-600 translate-x-px translate-y-px" />
            
            <div className="text-center relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                Hungry? <span className="text-red-600">🔥</span>
              </h3>
              <p className="text-gray-400 mb-10 font-light text-lg max-w-md mx-auto">
                Order now and experience the perfect blend of crispy perfection
              </p>

              <div className="flex gap-6 justify-center flex-wrap">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="group relative px-10 py-4 bg-red-600 text-white font-medium tracking-widest uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Back to Top
                    <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-red-700 to-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>

                <Link
                  to="/contact"
                  className="px-10 py-4 border border-white/20 text-white font-medium tracking-widest uppercase text-sm hover:border-red-600 hover:text-red-500 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.main>
  );
}