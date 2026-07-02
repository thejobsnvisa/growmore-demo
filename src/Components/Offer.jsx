// import { useState } from "react";
// import { Gift } from "lucide-react";

// export default function OfferPopup() {
//   const [open, setOpen] = useState(false);

//   const FORM_LINK = "https://case.growmore.one/add/company-website";

//   return (
//     <div className="fixed bottom-24 right-5 z-[999]">
//       {!open ? (
//         // Small Floating Button
//         <button
//           onClick={() => setOpen(true)}
//           className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#59C4E6] to-[#34C8C6] px-4 py-3 text-white shadow-xl animate-bounce hover:scale-105 transition"
//         >
//           <Gift size={20} />
//           <span className="font-semibold text-sm">Offers</span>

//           <span className="absolute -top-1 -right-1 flex h-3 w-3">
//             <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping"></span>
//             <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
//           </span>
//         </button>
//       ) : (
//         // Expanded Popup
//         <div className="relative w-80 overflow-hidden rounded-2xl border border-cyan-200 bg-white shadow-2xl">

//           <button
//             onClick={() => setOpen(false)}
//             className="absolute right-3 top-3 text-gray-500 hover:text-black"
//           >
//             ✕
//           </button>

//           <div className="bg-gradient-to-r from-[#59C4E6] to-[#34C8C6] p-5 text-white">
//             <h3 className="text-lg font-bold">
//               🎉 Exclusive Discount Just for You!
//             </h3>

//             <p className="mt-2 text-sm opacity-95">
//               Submit the form to unlock your special offer.
//             </p>
//           </div>

//           <div className="p-5">
//             <button
//               onClick={() => window.open(FORM_LINK, "_blank")}
//               className="w-full rounded-xl bg-gradient-to-r from-[#59C4E6] to-[#34C8C6] py-3 font-semibold text-white transition hover:scale-105"
//             >
//               🎁 Claim Your Offer
//             </button>

//             <p className="mt-3 text-center text-xs text-gray-500">
//               Limited Time Offer
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }