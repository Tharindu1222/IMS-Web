import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import bridge from "../../assets/market/bridge.jpg";
import oil from "../../assets/market/OIL & GAS UPSTREAM.jpg";
import commercial from "../../assets/market/COMMERCIAL & ARCHITECTURAL.jpg";
import oilgas from "../../assets/market/Oil & Gas Midstream.jpg";
import marine from "../../assets/market/COMMERCIAL MARINE.jpg";
import petrolium from "../../assets/market/PETROCHEMICAL.jpg";
import fireproof from "../../assets/market/fireproof.jpg";
import powers from "../../assets/market/POWER.jpg";
import food from "../../assets/market/FOOD & BEVERAGE.jpg";
import pulp from "../../assets/market/PULP & PAPER.jpg";
import metal from "../../assets/market/METALS & MINING.jpg";
import rail from "../../assets/market/RAIL.jpg";
import oem from "../../assets/market/OEM.jpg";
import water from "../../assets/market/pexels-pok-rie-33563-4742023.jpg";

const Markets = [
  { icon: bridge, title: "Bridge & Highway", about: "Bridge and highway coating systems have been a cornerstone of Carboline’s business for decades. We offer a wide range of products for bridge maintenance, overcoating, and refurbishment. From coast to coast, our products continue to be the first choice in coatings for owners, specifiers, fabricators, and painters for both new construction and maintenance painting of bridges." },
  { icon: oil, title: "Oil & Gas Midstream", about: "Carboline has provided solutions to the pipeline and terminals industry since our beginning. In fact, back in 1947, our first product was a tank lining. Today, we offer the widest array of coatings that provide proven protection for your company’s assets. We have products for steel tank exteriors that can handle various corrosive environments (coastal and others) and tank linings with a proven history designed for the petroleum industry. We offer pipeline coatings that are easy to apply, both in the field and the shop.Carboline has provided solutions to the pipeline and terminals industry since our beginning. In fact, back in 1947, our first product was a tank lining. Today, we offer the widest array of coatings that provide proven protection for your company’s assets. We have products for steel tank exteriors that can handle various corrosive environments (coastal and others) and tank linings with a proven history designed for the petroleum industry. We offer pipeline coatings that are easy to apply, both in the field and the shop." },
  { icon: commercial, title: "Commercial & Architectural", about: "Carboline can meet specifications for all building types, project requirements, and conditions with multiple product choices. We offer coatings, flooring, and fireproofing systems designed for every type of architectural construction, and can provide you with products that meet aesthetic requirements while inherently adding value, longevity, design flexibility, and corrosion protection.Carboline can meet specifications for all building types, project requirements, and conditions with multiple product choices. We offer coatings, flooring, and fireproofing systems designed for every type of architectural construction, and can provide you with products that meet aesthetic requirements while inherently adding value, longevity, design flexibility, and corrosion protection." },
  { icon: oilgas, title: "Oil & Gas Upstream", about: "Carboline knows that owners and operators are under continuous pressure to reduce capital costs while meeting strict regulatory requirements. Offshore facilities, where maintenance is extremely difficult and costly, are expected to last 20 to 30 years. We offer proven high performance coatings, linings, and fireproofing products that stand the test of time in the harshest environments. In addition, Carboline has numerous NORSOK-approved systems" },
  { icon: marine, title: "Commercial Marine", about: "Carboline offers a comprehensive line of zinc primers, epoxy anticorrosives, high performance topcoats, IMO-approved ballast tank linings, and antifoulings that will provide service for up to 60 months. Our high-temperature coatings, interior primers and finishes, surface-tolerant coatings, and chemically resistant tank linings show the range of our ability to provide high-quality coatings for virtually any marine service requirement." },
  { icon: petrolium, title: "Petrochemical", about: "Petrochemical facilities are continuously assaulted by corrosion and chemical attack, costing the industry billions of dollars annually. Carboline offers a wide selection of products to protect these assets, including; high-temperature coatings, tank linings, tank bottom repair, maintenance coatings, and industrial fireproofing." },
  { icon: fireproof, title: "Fireproofing", about: "Carboline’s complete line of commercial and industrial fireproofing products offers a level of unparalleled performance in several markets. With various types of intumescent and cementitious technologies designed for industrial or architectural applications, we can meet any project specification. All of our fireproofing products have been rigorously tested and have a proven track record of performance when subjected to the harshest environmental conditions and the extreme heat of fire exposure." },
  { icon: powers, title: "Power", about: "Carboline offers coatings for conventional power, nuclear, and the renewable energy market. Carboline’s coatings for new construction provide long-term protection against chemical, abrasive, high-temperature, and extreme atmospheric environments. Carboline has a full line of maintenance coatings that provide aesthetic value and extended corrosion protection for the aggressive in-service conditions present in the power market." },
  { icon: food, title: "Food & Beverage", about: "Carboline high-performance coatings have proven their performance against corrosion at every process level of the food and beverage plant. From wet storage and processing to wet packaging and refrigeration, Carboline coatings protect against solvent sprays, oil and fat spillage, heat resistance and many other food processing chemicals and byproducts." },
  { icon: pulp, title: "Pulp & Paper", about: "Paper factories are one of the most corrosive environments, downtimes need to be kept short, and long-term coating and lining solutions are important. Our ultra-durable high performance coatings and system solutions have a proven record of corrosion protection. We have systems that cater to constructability needs and project requirements, such as Class B slip coefficient, low-odor, zero VOC, and single-coat systems. Quick cure coatings are also available when shortened downtimes are required." },
  { icon: metal, title: "Metals & Mining", about: "Carboline is a proven supplier of chemical-resistant coatings for steel structures and equipment that must withstand aggressive chemicals, physical abuse, and abrasion. Our reputation is built on providing a complete range of high performance and ultra-durable maintenance coatings that meet the demands of the metals and mining industry." },
  { icon: rail, title: "Rail", about: "Carboline offers a complete line of epoxies, urethanes, and waterborne coatings for the exterior protection of all types of rail cars. This offering includes high solids and 100% solids DTM (Direct to Metal) epoxies, DTM (Direct to Metal) urethanes, water based coatings, and multi-coat epoxy/urethane systems. Carboline's hopper car and tank car lining selection is the most complete product offering in the industry." },
  { icon: oem, title: "OEM", about: "Carboline has an extensive line of coatings that provide cost-effective alternatives for protecting and finishing OEM products, tanks, and equipment. Our broad selection of products is designed to help minimize VOC and HAP emissions as well as waste disposal. Our direct-to-metal formulations reduce labor costs, improve safety, increase production, and positively impact your bottom line. Our ability to offer high performance protection, corrosion resistance, and aesthetic value sets us apart from the competition." },
  { icon: water, title: "Water & Wastewater", about: "Carboline can protect concrete and steel, from collection to treatment to storage. We are recognized as a leader in the coatings industries for providing proven systems that defend against corrosion caused by microbes and hydrogen sulfide. Our proven tank linings, secondary containment products, and concrete protection coatings stand up against the numerous challenges facing treatment facilities." },
];

const MarketsSection: React.FC = () => {
  return (
    <div id="markets" className="w-full bg-white py-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          Markets
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-black uppercase text-[40px] font-bold text-center"
        >
          Markets We Serve
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="lg:w-full w-[90%] grid lg:grid-cols-2 grid-cols-1 justify-center items-start gap-8 mt-[30px]"
        >
          {Markets.map((market, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="flex flex-col justify-center items-center border-2 border-gray-200 shadow-lg rounded-lg hover:bg-yellow-500 p-6 hover:shadow-xl"
            >
              <img
                src={market.icon}
                alt={market.title}
                className="w-full h-[200px] object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h2 className="text-black text-2xl font-bold text-center hover:text-white">
                {market.title}
              </h2>
              <p className="text-gray-600 text-center hover:text-black">
                {market.about}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MarketsSection;
