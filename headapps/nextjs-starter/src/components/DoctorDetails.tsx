import React from 'react';
import {
  NextImage as JssImage,
  RichText as JssRichText,
  ImageField,
  Field,
  Text,
  RichTextField,
} from '@sitecore-jss/sitecore-jss-nextjs';

export interface Doctor {
  DoctorImage: ImageField;
  DoctorName: Field<string>;
  DoctorSpecialization: Field<string>;
  DoctorDescription: RichTextField;
}

type DoctorDetailsProps = {
  params: { [key: string]: string };
  fields: Doctor;
};

export const Default = (props: DoctorDetailsProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <section
      className={`component doctor-details relative py-10 ${props?.params?.styles}`}
      id={id ? id : undefined}
    >
      <div className="container grid gap-8 lg:grid-cols-3">
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-soft">
          <JssImage field={props.fields.DoctorImage} className="object-cover w-full h-full" />
        </div>
        <div className="lg:col-span-2 xl:p-8">
          <h2 className="mb-3">
            <Text field={props.fields.DoctorName} />
          </h2>
          <h5 className="mb-8 text-accent">
            <Text field={props.fields.DoctorSpecialization} />
          </h5>
          <div className="text-lg">
            <JssRichText field={props.fields.DoctorDescription} />
          </div>
        </div>
      </div>
    </section>
  );
};
