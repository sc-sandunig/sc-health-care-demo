import {
  RichText as JssRichText,
  Text as JssText,
  NextImage as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { IGQLImageField, IGQLRichTextField, IGQLTextField } from 'src/types/igql';
import StrippedBlobAccent from './svg/StrippedBlobAccent';

interface Fields {
  data: {
    datasource: {
      children: {
        results: TestimonialsFields[];
      };
    };
  };
}

interface TestimonialsFields {
  id: string;
  customerImage: IGQLImageField;
  customerName: IGQLTextField;
  customerExperience: IGQLRichTextField;
}

type TestimonialsProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: TestimonialsProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;
  const testimonials = props?.fields?.data?.datasource?.children?.results;
  const ShowBlobAccentTop = props?.params?.HideBlobAccentTop !== '1';
  const ShowRoundAccentBottom = props?.params?.HideRoundAccentBottom !== '1';

  return (
    <section
      className={`component testimonials pt-50 pb-20 sm:pt-32 sm:pb-16 ${props?.params?.styles}`}
      id={id ? id : undefined}
    >
      <div className="container relative px-4 sm:px-6 lg:px-8">
        {/* Top Blob Accent */}
        {ShowBlobAccentTop && (
          <div className="absolute -left-10 -top-40 z-0 pointer-events-none w-100 h-100 max-w-3xl max-h-3xl">
            <StrippedBlobAccent />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 lg:gap-6 relative z-10">
          {testimonials?.map((testimonial) => (
            <div key={testimonial?.id} className="flex flex-col items-center text-center relative">
              <div className="z-10 mb-4">
                <JssImage
                  field={testimonial?.customerImage?.jsonValue}
                  className="w-60 h-60 xl:w-80 xl:h-90 rounded-xl object-cover shadow-md"
                  width={160}
                  height={160}
                />
              </div>

              <div className="-mt-14 bg-background-secondary dark:bg-background-secondary-dark px-6 pt-14 pb-10 rounded-xl shadow-xl w-full">
                <div className="mt-3">
                  <JssRichText
                    field={testimonial?.customerExperience?.jsonValue}
                    className="text-base leading-relaxed mb-6 font-body"
                  />
                  <div className="flex items-center gap-2 font-heading font-bold w-full justify-start">
                    <div className="w-6 h-1 bg-accent-muted" />
                    <JssText field={testimonial?.customerName?.jsonValue} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Round Accent */}
        {ShowRoundAccentBottom && (
          <div className="absolute -right-20 -bottom-20 sm:-right-30 sm:bottom-auto xl:-bottom-35 sm:top-96 pointer-events-none w-40 h-auto rotate-180 z-0 sm:z-10">
            <StrippedBlobAccent variant="circle" className="text-primary w-65 h-65" />
          </div>
        )}
      </div>
    </section>
  );
};
