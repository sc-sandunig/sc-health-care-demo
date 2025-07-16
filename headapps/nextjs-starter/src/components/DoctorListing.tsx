import React, { useEffect, useState } from 'react';
import { NextImage as JssImage, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { Doctor } from './DoctorDetails';
import Link from 'next/link';
import ArrowButton from './svg/Arrow';

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
  const doctors = props.fields.items.filter((doctor) => {
    return doctor.fields && Object.keys(doctor.fields).length > 0;
  });

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
      className={`component doctor-listing relative pb-10 ${props?.params?.styles}`}
      id={id || undefined}
      tabIndex={0}
      role="region"
      aria-label="Doctor carousel"
    >
      <div className="container">
        <div className="flex justify-between items-start mb-6 flex-wrap">
          {/* Arrows */}
          <div className="flex items-center gap-3 mt-4 md:mt-0 ml-auto">
            <div>
              <ArrowButton direction="left" onClick={goPrev} disabled={currentIndex === 0} />
              <ArrowButton direction="right" onClick={goNext} disabled={currentIndex >= maxIndex} />
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