//
// import {getEnumValues} from "../../core/utils/utils.ts";
// import SvgIconLogoApp from "./svgs/SvgIconLogoApp.tsx";
// import {useTranslation} from "react-i18next";
// import AppButton from "./AppButton.tsx";
//
// export default function AppHeader() {
//   const {t} = useTranslation();
//   return (
//     <div className="flex justify-between items-center">
//       <div className="flex items-center">
//         <SvgIconLogoApp/>
//         <h1 className="text-black text-xl ml-3 font-bold">{t('brand')}</h1>
//       </div>
//       <div className="flex items-center justify-end">
//         <div>
//           {getEnumValues(NavBarItem).map((item) => (
//             <a href="#" key={item}
//                className="mr-10 text-xl
//                   hover:before:scale-x-100
//                   hover:before:origin-left
//                   relative
//                   before:w-full
//                   before:h-0.5
//                   before:origin-right
//                   before:transition-transform
//                   before:duration-300
//                   before:scale-x-0
//                   before:bg-primary
//                   before:absolute
//                   before:left-0
//                   before:bottom-0
//                   pb-1
//                   ">
//               {item}
//             </a>
//           ))}
//         </div>
//        <AppButton text="Request a quote" />
//       </div>
//
//     </div>
//   )
// }
