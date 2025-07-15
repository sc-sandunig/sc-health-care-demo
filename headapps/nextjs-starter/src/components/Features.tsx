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
        results: FeatureFields[];
      };
      heading: IGQLTextField;
      body: IGQLRichTextField;
    };
  };
}

interface FeatureFields {
  id: string;
  featureIconLight: IGQLImageField;
  featureIconDark: IGQLImageField;
  featureHeading: IGQLTextField;
  featureDescription: IGQLRichTextField;
}

type FeatureSectionProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: FeatureSectionProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;
  const features = props?.fields?.data?.datasource?.children?.results;
  const keepAccentBorder = props?.params?.KeepAccentBorder === '1';
  const ShowBlobAccent = props.params.HideBlobAccent !== '1';
  const showDarkIcon = props.params.ChangeIconDark === '1';

  return (
    <section
      className={`component features py-10 ${props?.params?.styles}`}
      id={id ? id : undefined}
    >
      <div className="container relative">
        {ShowBlobAccent && (
          <div className="absolute right-10 -top-9 lg:right-2 lg:top-0 w-32 h-32 lg:w-50 lg:h-50 pointer-events-none z-0">
            <StrippedBlobAccent />
          </div>
        )}
        <JssText tag="h3" field={props?.fields?.data?.datasource?.heading?.jsonValue} />
        <div className="mr-0 lg:mr-50 mb-6">
          <JssRichText field={props?.fields?.data?.datasource?.body?.jsonValue} />
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          {features?.map((feature) => (
            <div key={feature?.id}>
              <div
                className={`flex justify-center items-center w-26 h-26 p-3 border-3 rounded-lg ${
                  keepAccentBorder ? 'border-accent' : 'border-foreground dark:border-background'
                }`}
              >
                {showDarkIcon ? (
                  <>
                    <JssImage
                      field={feature?.featureIconLight?.jsonValue}
                      className="w-full h-full object-contain block dark:hidden"
                      width={60}
                      height={60}
                    />
                    <JssImage
                      field={feature?.featureIconDark?.jsonValue}
                      className="w-full h-full object-contain hidden dark:block"
                      width={60}
                      height={60}
                    />
                  </>
                ) : (
                  // Show the same icon in both light and dark mode
                  <JssImage
                    field={feature?.featureIconLight?.jsonValue}
                    className="w-full h-full object-contain"
                    width={60}
                    height={60}
                  />
                )}
              </div>
              <h5 className="mt-6">
                <JssText field={feature?.featureHeading?.jsonValue} />
              </h5>
              <JssRichText field={feature?.featureDescription?.jsonValue} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const VerticalCards = (props: FeatureSectionProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const features = props?.fields?.data?.datasource?.children?.results;
  const keepAccentBorder = props?.params?.KeepAccentBorder === '1';
  const ShowBlobAccent = props.params.HideBlobAccent !== '1';
  const showDarkIcon = props.params.ChangeIconDark === '1';

  return (
    <section
      className={`component features-vertical xl:py-6 ${props?.params?.styles}`}
      id={id || undefined}
    >
      <div className="container relative">
        {ShowBlobAccent && (
          <div className="absolute -right-5 -top-30 lg:right-0 lg:-top-40 w-32 h-32 md:w-50 md:h-50 pointer-events-none z-0">
            <StrippedBlobAccent />
          </div>
        )}
        <div className="flex flex-col gap-6">
          {features?.map((feature) => (
            <div key={feature?.id} className="flex items-start gap-4 mb-2 xl:mb-10">
              <div
                className={`flex justify-center items-center w-23 h-23 p-3 xl:w-26 xl:h-26 flex-shrink-0 border-3 rounded-lg ${
                  keepAccentBorder ? 'border-accent' : 'border-foreground dark:border-background'
                }`}
              >
                {showDarkIcon ? (
                  <>
                    <JssImage
                      field={feature?.featureIconLight?.jsonValue}
                      className="w-full h-full object-contain block dark:hidden"
                      width={60}
                      height={60}
                    />
                    <JssImage
                      field={feature?.featureIconDark?.jsonValue}
                      className="w-full h-full object-contain hidden dark:block"
                      width={60}
                      height={60}
                    />
                  </>
                ) : (
                  // Show the same icon in both light and dark mode
                  <JssImage
                    field={feature?.featureIconLight?.jsonValue}
                    className="w-full h-full object-contain"
                    width={60}
                    height={60}
                  />
                )}
              </div>

              <div className="flex-1">
                <h6 className="mb-2">
                  <JssText field={feature?.featureHeading?.jsonValue} />
                </h6>
                <div className="mt-3">
                  <JssRichText field={feature?.featureDescription?.jsonValue} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
