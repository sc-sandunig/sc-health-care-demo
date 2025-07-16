import {
  Field,
  Text,
  RichText as JssRichText,
  RichTextField,
  ComponentRendering,
  ComponentParams,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';
import CurvedClip from './svg/CurvedClip';
import StrippedBlobAccent from './svg/StrippedBlobAccent';

interface Fields {
  SectionHeading: Field<string>;
  SectionDescription: RichTextField;
}

interface SectionWrapperProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
}

export const Default = (props: SectionWrapperProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const ShowCurvedTop = props.params.HideCurvedTop !== '1';
  const ShowCurvedBottom = props.params.HideCurvedBottom !== '1';
  const ShowBlobAccent = props.params.HideBlobAccent !== '1';
  const addBgColor = props.params.AddBgColor === '1';

  return (
    <section
      className={`component section-wrapper relative ${
        addBgColor ? 'bg-background-secondary dark:bg-background-secondary-dark' : ''
      } ${props?.params?.styles}`}
      id={id || undefined}
    >
      {ShowCurvedTop && <CurvedClip pos="top" />}
      <div className="flex flex-col md:flex-row items-start gap-4 mb-10">
        {ShowBlobAccent && (
          <div className="absolute container right-0 top-2 w-32 h-32 md:w-50 md:h-50 z-0 pointer-events-none">
            <StrippedBlobAccent />
          </div>
        )}
        <div className="mt-2 flex-1 w-full">
          <div className="container">
            <h3 className="mb-6">
              <Text field={props.fields.SectionHeading} />
            </h3>
            <div className="mr-0 lg:mr-40">
              <JssRichText field={props.fields.SectionDescription} />
            </div>
          </div>
          <div>
            <Placeholder
              name={`wrapper-content-${props?.params?.DynamicPlaceholderId}`}
              rendering={props.rendering}
            />
          </div>
        </div>
      </div>
      {ShowCurvedBottom && <CurvedClip pos="bottom" />}
    </section>
  );
};
