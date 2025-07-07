import {
  NextImage as JssImage,
  ImageField,
  RichTextField,
  RichText as JssRichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  FeatureIconLight: ImageField;
  FeatureIconDark: ImageField;
  FeatureText: RichTextField;
}

interface FeatureItemProps {
  fields: Fields;
}

export const Default = (props: FeatureItemProps): JSX.Element => {
  return (
    <div className="flex items-start gap-4 mb-10">
      <div className="flex-shrink-0 w-20 h-20 flex self-top md:self-center  items-center justify-center border-3 border-foreground dark:border-background rounded-lg">
        <JssImage
          field={props.fields.FeatureIconLight}
          width={60}
          height={60}
          className="block dark:hidden"
        />
        <JssImage
          field={props.fields.FeatureIconDark}
          width={60}
          height={60}
          className="hidden dark:block"
        />
      </div>
      <div className="flex-1">
        <JssRichText field={props.fields.FeatureText} className="text-base" />
      </div>
    </div>
  );
};
