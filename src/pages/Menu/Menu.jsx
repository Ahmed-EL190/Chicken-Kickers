import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MealCard from "../../components/UI/MealCard";
import { CartContext } from "../../context/CartContextValue";
import { FaUtensils } from "react-icons/fa";

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
      name: "🍗 Chicken Pieces",
      items: [
        { id: 1, name: "Crispy Original Pieces", price: 95, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/482056866_677420331284131_6987965959603750324_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHfknKKClErvH3EBig1jnNfor45RvprNhSivjlG-ms2FJLgIf6RRZV0DkfpM4UA9B1P_QJgrxcSZNWgajmZZjOd&_nc_ohc=d33ixvxjfVkQ7kNvwF96ffH&_nc_oc=Adp7hghL_5Bhwg5w7LumhRUylRtjvdwq4BsN2bh8yzuTcfLQ1gju5OU5Xwf4fMrlH-8&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=FzcvL7XvqxClkaPVDYNOcw&_nc_ss=7a3a8&oh=00_AfwoWj0MRcsyQL4vns0DmVXlsfA8NiPQqKcFedW4EMOCHg&oe=69D145C9" },
        { id: 2, name: "Spicy Hot Pieces", price: 105, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/595067755_891585723200923_6974864303123820266_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEUY6m2v9eonPaj2XZYVcSord0eghkwtGWt3R6CGTC0ZT9E2QXHBoHYnVqQukcZf7GnSSeqllwyAyTnzNAXgsFr&_nc_ohc=VzbOdHw5JpoQ7kNvwGOmAYM&_nc_oc=AdpCTEmiMylKddppVZMMW71CiVJNF8lGpnhigq1ZNzflXoEuJYQi2qahHfz72AISLEo&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=1ugHwGzGwQ2wy14XDA8IIA&_nc_ss=7a3a8&oh=00_Afzn7Sd9XuoPPnKF4A46OoCOOsXP1ccSI2_I6Z72OPTxdA&oe=69D158A5" },
        { id: 3, name: "Spicy Hot 18 Pieces", price: 75, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/632193623_941663341526494_2384566793354122694_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHNqEFzXJ83XxNqFiyR_PBbnXobC6iaWHydehsLqJpYfN5Dl0Rvch54hJ_vobuRabdFTz7Yi10YV2SrKplWapp8&_nc_ohc=nggMUibV1tIQ7kNvwFMrSJ6&_nc_oc=AdrS7aEKPIl1FgR6HgMLxXcaBuoPWIw6AXKF4JTw2ZixRxKhXA4RUEi8qe44rOHIX7E&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=xPslqfW3yhSsJ79Fm2GHrQ&_nc_ss=7a3a8&oh=00_AfyAnbcj8JJWv0SdVKtXk7OkUOGflxMdA0H-0ou-B3QF8Q&oe=69D14D64" },
      ],
    },
    {
      name: "🍔 Burgers",
      items: [
        { id: 3, name: "Classic Chicken Burger", price: 75, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/511314753_759868636372633_605459186485612267_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH81r8k9WDfVcMyrkCcCauUSojOHQ206CFKiM4dDbToIboR9JqJgz5WAML3zf26rwGka5-I3KUuNky_pP90ldqB&_nc_ohc=-LHlZI-AuHwQ7kNvwHyD5k5&_nc_oc=AdrDgODJ2PKUStgBv6eRi3MLM011FH9VrCaUy6JryVlKC49Kwmhg5nyNEBso1Pm4_-0&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=DPLZHgHTbY3R5chJgkRjOA&_nc_ss=7a3a8&oh=00_AfwRVO0Pi5R555fGUeSIXbH0zecwNMivp1RVFsza72euKA&oe=69D172F8" },
        { id: 4, name: "Ranchi Mushroom Burger", price: 95, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/481911775_677068137986017_3792105105628536715_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeF7ZlGBO3rcFUHqB9of_ALuoRigWEbs7v-hGKBYRuzu_5fU_kSkly8MGMHQo12U2TbWSeXTFkvxu2H4x5v_Nltz&_nc_ohc=nDj5Qdn39NkQ7kNvwHwhiO4&_nc_oc=AdqNCOjsUecBPqL0Tj01BO56s1KEmKhL1ms270CEaqUInPujdugBvFX5vFSwILcuxGk&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=_iNyXZiZ0o7LsMazTZ_2HQ&_nc_ss=7a3a8&oh=00_Afzyr176KLWJ39xprKEzsGybpfsrsECxmZZKGB740kiibA&oe=69D140AC" },
        { id: 5, name: "Caesar Kickers Burger", price: 95, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/595770963_891585693200926_3727594857871403957_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEvbFyePhhFortfvmr0GQ3uHKRHQMAE3aIcpEdAwATdonHDvGSgQrklJ_AmWMNs83RvtzutOVJZGiSaOruFHgtz&_nc_ohc=DnijI1QV_SkQ7kNvwHbD6p3&_nc_oc=AdrOZb_etm-xlJkR_4G-iED_xvw_y4dXqWOlXgdR_ZlQ5opPWx9L5EzJr_QLZ_n4AmM&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=UoFRFXnjeNspjly5-7_JlQ&_nc_ss=7a3a8&oh=00_AfyPVBDmsQvsT-lkdWuepRwJS28WrxfAdKzdFwpmYFI0cg&oe=69D145F2" },
        { id: 6, name: "Ranchi Mushroom Burger", price: 95, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/481452646_677074591318705_7053182319867273440_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFLKw8i7kTKUIMcIRGcK4DkjN6xlX-aP5SM3rGVf5o_lCTHNw1JogUl7Jb_8EgFDqd5uZmWUn3O3-Zr79hpnbOY&_nc_ohc=zDCAiz9oXngQ7kNvwGuWkA1&_nc_oc=AdqwxyfuV8u9PN80BbqUSz06MXyZ-hb-exPk7_3f6GjiTQPIhpmzkBap7av6T0P-LDo&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=WOHvmMaBQAhIaFqzOGrwPQ&_nc_ss=7a3a8&oh=00_Afyf6MXB5dcqk7-AjVPI1XddvRu65M6MI-lwVk9CQnZqYQ&oe=69D17806" },
      ],
    },
    {
      name: "🍟 Fries",
      items: [
        { id: 7, name: "Fire Fries", price: 35, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/657172481_977850204574474_8637482823818003840_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFjceAACrncMw4C2qPLHLICpEMgv0UI8xikQyC_RQjzGIgrawdyRoqf-HGHzhm0o12zSu1-sKnhr31MwBxFnRq8&_nc_ohc=99i-3vwnTCIQ7kNvwHEg8pY&_nc_oc=AdqDLHHNJJT1GEJNc8zSx3mc1FnWfUY5jSHOPdhxo_zb-FVCX-jtDWMPaG2y6mjED4I&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=bnm41xdHMN90u262QfIXZg&_nc_ss=7a3a8&oh=00_AfwcyprBZVFlmAb209XceehaOvGi-UQDq4cF0ihIFf0ENA&oe=69D1550D" },
        { id: 8, name: "Ranchi Fries", price: 45, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/481986466_677063934653104_2615563807526592824_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG5BGx1u89Ebs3FYU7u5nxvID2ZCLMjLVogPZkIsyMtWqIyW9bxxD9PnDOnFFB1zpQPaXar3MqFA9eX3jkPdcv0&_nc_ohc=Tf5wcHT4bdcQ7kNvwGBMa04&_nc_oc=AdrZhtTozsvGoql7mXGZ9SG9gfW0hlUXkCd_jLV1R3KWz3Yuxq5eqkBzxo5TCqNkjhY&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=f9StgRDP-USatGIqyiGCVw&_nc_ss=7a3a8&oh=00_Afw-YhaMYriu0XRwBgwQG29U1hg7fnDmJWavXmEFmkjkjQ&oe=69D15966" },
        { id: 9, name: "Cold Fries", price: 45, image: "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/481238923_676523208040510_2230144444613205972_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFDtUKsSRGOnP6kMmki91eALnzNz7rj-_YufM3PuuP79tLL6dX-42dgLUqA-zFLPdRqQARr5LzWV5H6L1x6RTt4&_nc_ohc=acSUTUtzqW0Q7kNvwGOCUmZ&_nc_oc=AdpZWDIE1zraJ2kMgbtfurWMnKNb-rq4VeThRRSKWQc7-9VWCCm8nPBLF_IkqBXUoJQ&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=zrJIlmh2MqqRFNofHh6YeQ&_nc_ss=7a3a8&oh=00_AfzIfGhjn2f26HK2d7V2vNbsXqoDU6smUs-X7m-zypC8Rg&oe=69D16FE4" },
      ],
    },
    {
      name: "🥤 Drinks",
      items: [
        { id: 7, name: "Coca Cola", price: 15, image: "https://images.pexels.com/photos/15205154/pexels-photo-15205154.jpeg" },
        { id: 8, name: "Pepsi", price: 15, image: "https://images.pexels.com/photos/30554816/pexels-photo-30554816.jpeg" },
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
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">

        {/* 🔥 Hero */}
        <motion.section className="text-center mb-16" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-400 rounded-full mb-6">
            <FaUtensils className="mr-2" />
            Our Delicious Menu
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Explore <span className="text-red-500">Menu</span>
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto">
            Choose your favorite meals and enjoy the best fried chicken in Mansoura 🔥
          </p>
        </motion.section>

        {/* 🔥 FILTER */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-5 py-2 rounded-full transition ${
              activeCategory === "All"
                ? "bg-red-600 text-white"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            All
          </button>

          {mealData.categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-5 py-2 rounded-full transition ${
                activeCategory === cat.name
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 🔥 MENU */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCategories.map((category) => (
            <motion.section
              key={category.name}
              variants={itemVariants}
              className="bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-800"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-red-500">
                {category.name}
              </h2>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((meal) => (
                  <MealCard
                    key={meal.id}
                    meal={meal}
                    onAdd={addToCart}
                  />
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>

        {/* 🔥 CTA */}
        <section className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-800 p-12 rounded-3xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Hungry? 🔥</h3>
            <p className="text-red-100 mb-6">
              Order now and get your food fast!
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-6 py-3 bg-white text-red-600 rounded-xl font-bold"
              >
                Back to Top
              </button>

              <Link
                to="/contact"
                className="px-6 py-3 border border-white rounded-xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </div>
    </motion.main>
  );
}