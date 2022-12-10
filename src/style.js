const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-roboto font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  heading3: "font-roboto font-semibold xs:text-[40px] text-[32px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-16",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex gap-8 md:gap-16 md:flex-row flex-col-reverse ${styles.paddingY}`,
  sectionReverse: `flex gap-8 md:gap-16 md:text-right md:flex-row-reverse flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex relative`,
  sectionImg: `flex relative`,

  sectionInfo: `flex-1 flex-col`,
};

export default styles;