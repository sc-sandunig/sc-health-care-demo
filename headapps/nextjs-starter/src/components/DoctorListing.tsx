import React, { useEffect, useState } from 'react';
import { NextImage as JssImage, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { Doctor } from './DoctorDetails';
import Link from 'next/link';

type DoctorListingProps = {
  params: { [key: string]: string };
  fields: {
    items: {
      id: string;
      url: string;
      fields: Doctor;
    }[];
  };
};

export const Default = (props: DoctorListingProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const doctors = props.fields.items;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Adjust cards per screen
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goPrev();
      } else if (e.key === 'ArrowRight') {
        goNext();
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, slidesToShow]);

  const maxIndex = Math.max(doctors.length - slidesToShow, 0);

  const goPrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const goNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <section
      className={`component doctor-listing relative py-3 pb-10 bg-background-secondary dark:bg-background-secondary-dark ${props?.params?.styles}`}
      id={id || undefined}
      tabIndex={0}
      role="region"
      aria-label="Doctor carousel"
    >
      <div className="relative">
        {/* Header & Arrows */}
        <div className="flex justify-between items-start mb-6 flex-wrap">
          {/* Arrows */}
          <div className="flex items-center gap-3 mt-4 md:mt-0 ml-auto">
            <div className="">
              {/* LEFT ARROW */}
              <button
                onClick={goPrev}
                aria-label="Previous"
                disabled={currentIndex === 0}
                className={`px-4 py-1 rounded-lg mr-2 ${
                  currentIndex > 0 ? 'bg-accent-muted/40' : ''
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="28"
                  viewBox="0 0 64.051 28.464"
                >
                  <g transform="translate(64.051 165.516) rotate(180)">
                    <path
                      d="M63.68,150.323,49.446,137.35a1.19,1.19,0,0,0-1.3-.185,1.076,1.076,0,0,0-.7,1.075v8.3H1.186A1.142,1.142,0,0,0,0,147.729v7.117a1.141,1.141,0,0,0,1.186,1.185H47.445v8.3a1.117,1.117,0,0,0,.7,1.075,1.156,1.156,0,0,0,1.3-.222L63.68,152.064a1.211,1.211,0,0,0,.37-.889A1.171,1.171,0,0,0,63.68,150.323Z"
                      fill={`var(${
                        currentIndex > 0 ? '--color-background-secondary-dark' : '--color-disabled'
                      })`}
                    />
                  </g>
                </svg>
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={goNext}
                aria-label="Next"
                disabled={currentIndex >= maxIndex}
                className={`px-4 py-1 rounded-lg ${
                  currentIndex < maxIndex ? 'bg-accent-muted/40' : ''
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="28"
                  viewBox="0 0 64.051 28.464"
                >
                  <g transform="translate(0 -137.052)">
                    <path
                      d="M63.68,150.323,49.446,137.35a1.19,1.19,0,0,0-1.3-.185,1.076,1.076,0,0,0-.7,1.075v8.3H1.186A1.142,1.142,0,0,0,0,147.729v7.117a1.141,1.141,0,0,0,1.186,1.185H47.445v8.3a1.117,1.117,0,0,0,.7,1.075,1.156,1.156,0,0,0,1.3-.222L63.68,152.064a1.211,1.211,0,0,0,.37-.889A1.171,1.171,0,0,0,63.68,150.323Z"
                      fill={`var(${
                        currentIndex < maxIndex
                          ? '--color-background-secondary-dark'
                          : '--color-disabled'
                      })`}
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${(100 / slidesToShow) * doctors.length}%`,
              transform: `translateX(-${(100 / doctors.length) * currentIndex}%)`,
            }}
          >
            {doctors.map((doctor) => {
              const { DoctorImage, DoctorName, DoctorSpecialization } = doctor.fields;
              return (
                <Link
                  href={doctor.url}
                  key={doctor.id}
                  className="px-2 flex-shrink-0 mb-8"
                  style={{ width: `${100 / doctors.length}%` }}
                >
                  <div className="bg-background-secondary rounded-lg overflow-hidden shadow-xl">
                    <div className="aspect-square">
                      <JssImage field={DoctorImage} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-7 text-foreground text-center">
                      <h5>
                        <Text field={DoctorName} />
                      </h5>
                      <p className="text-xl text-accent">
                        <Text field={DoctorSpecialization} />
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: doctors.length - slidesToShow + 1 }).map((_, i) => (
            <div
              key={i}
              className={`transition-all h-2 rounded-full bg-accent ${
                i === currentIndex ? 'w-6' : 'w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
