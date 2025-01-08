import SvgIconIllustration from "./svgs/SvgIconIllustration.tsx";
import {useTranslation} from "react-i18next";
import AppButton from "./AppButton.tsx";

export default function AppBanner() {
  const {t} = useTranslation();
  return (
    <div className="flex items-center justify-between mt-16">
      <div className="flex-[0_0_50%]">
        <div>
          <p className="text-4xl mb-8">{t('title')}</p>
        </div>
        <div className="mb-8">
          <p>{t('description.part1')}</p>
        </div>
          <AppButton text="Book a consultation" backgroundColor="bg-black" textColor="text-white" />
      </div>
      <div className=""><SvgIconIllustration/></div>

    </div>


  )
}
