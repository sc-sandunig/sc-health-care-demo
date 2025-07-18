import React, { useEffect, useState } from 'react';
import { NextImage as JssImage, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import StrippedBlobAccent from './svg/StrippedBlobAccent';
import { useI18n } from 'next-localization';
import HeroBlob from './svg/HeroBlob';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Fields {
  HeroImage: ImageField;
}

type HeroBannerProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: HeroBannerProps): JSX.Element => {
  const { t } = useI18n();
  const id = props.params.RenderingIdentifier;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      className={`relative component hero-banner mb-115 md:mb-25 lg:mb-20 w-full ${props?.params?.styles}`}
      id={id ? id : undefined}
    >
      {/* Hero Image */}
      <div className="relative overflow-hidden max-h-screen rounded-bl-[45%_50%] rounded-br-[90%_70%]">
        <JssImage
          field={props.fields.HeroImage}
          className="w-full h-auto object-cover xl:200 2xl:h-250 z-0"
        />
      </div>
      {/* Small Round Accent */}
      <div className="absolute size-20 sm:size-30 top-40 right-0 sm:right-30 sm:top-6 xl:top-15 2xl:top-25 z-0 pointer-events-none">
        <StrippedBlobAccent variant="circle" className="text-primary" stripColor="fill-red" />
      </div>

      {/* Stripped accent bottom left */}
      {!isMobile && (
        <div className="absolute size-40 bottom-0 left-3 2xl:left-[3%] 2xl:bottom-[5%] 2xl:size-60">
          <StrippedBlobAccent />
        </div>
      )}

      <div className="relative mt-3 sm:mt-0 md:absolute md:top-0 md:left-0 md:w-full md:h-full xl:mt-10">
        <div className="absolute top-0 -right-0 sm:right-0">
          <div className="relative">
            <div className="size-100 lg:size-180 2xl:size-240 md:size-140 z-2">
              <HeroBlob isMobile={isMobile} />
            </div>
            <div className="absolute top-15 right-10 lg:top-40 lg:right-50 md:top-30 md:right-30 2xl:right-70 2xl:top-60">
              <form className="flex flex-col gap-2 lg:gap-4 py-[5%] px-[5%] text-foreground">
                <input
                  placeholder={t('your_name') || 'Your Name'}
                  type="text"
                  className="z-10 bg-white p-4 rounded-lg shadow w-70 h-15 xl:h-18 2xl:w-100"
                />
                <input
                  placeholder={t('your_email') || 'Your email'}
                  type="email"
                  className="z-4 bg-white p-4 rounded-lg shadow w-70 h-15 xl:h-18 2xl:w-100"
                />
                {/* Select Doctor */}
                <div className="relative z-4 w-70 h-15 xl:h-18 2xl:w-100">
                  <select
                    defaultValue=""
                    className="bg-white appearance-none p-4 pr-10 rounded-lg shadow w-full h-full text-gray-500"
                  >
                    <option value="" disabled hidden>
                      {t('select_doctor') || 'Select Dr'}
                    </option>
                  </select>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="absolute size-5 right-4 top-1/2 -translate-y-1/2 text-xs pointer-events-none"
                  />
                </div>

                {/* Select Date */}
                <div className="relative z-4 w-70 h-15 xl:h-18 2xl:w-100">
                  <select
                    defaultValue=""
                    className="bg-white appearance-none p-4 pr-10 rounded-lg shadow w-full h-full"
                  >
                    <option value="" disabled hidden>
                      {t('select_date') || 'Select Date'}
                    </option>
                  </select>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="absolute size-5 right-4 top-1/2 -translate-y-1/2 text-xs pointer-events-none"
                  />
                </div>
                <div className="font-heading z-4 w-auto h-10 position-center">
                  <button className="btn bg-foreground text-background-secondary">
                    {t('btn_label') || 'Make an Appointment'}
                  </button>
                </div>
              </form>
            </div>

            {/* Stripped overlay lines */}
            <div className="absolute size-60 top-5 right-20 md:top-10 md:right-60 lg:size-80 2xl:right-80 2xl:size-100">
              <StrippedBlobAccent />
            </div>

            {/* Small solid circle blob bottom right */}
            <div className="absolute size-20 sm:size-25 -bottom-20 sm:bottom-10 right-60 sm:right-80 bg-background-tertiary dark:bg-foreground rounded-full z-2" />
          </div>
        </div>
      </div>
    </section>
  );
};
