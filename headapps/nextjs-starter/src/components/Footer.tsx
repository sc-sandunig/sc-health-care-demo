import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  NextImage as JssImage,
  ImageField,
  ComponentParams,
  ComponentRendering,
  RichTextField,
  RichText as JssRichText,
  Placeholder,
  LinkField,
  Link as JssLink,
  Field,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  LogoLight: ImageField;
  LogoDark: ImageField;
  Contact: RichTextField;
  OperatingHours: RichTextField;
  CopyRightText: RichTextField;
  TermsLink: LinkField;
  PolicyLink: LinkField;
  Facebook: LinkField;
  Twitter: LinkField;
  Instagram: LinkField;
  Col1Title: Field<string>;
  Col2Title: Field<string>;
  Col3Title: Field<string>;
  Col4Title: Field<string>;
}

type FooterProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: FooterProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const HideCopyRightFooter = props.params.HideCopyRightFooter !== '1';
  const socialMedia = [
    { key: 'facebook', icon: faFacebookF, field: props.fields.Facebook },
    { key: 'twitter', icon: faTwitter, field: props.fields.Twitter },
    { key: 'instagram', icon: faInstagram, field: props.fields.Instagram },
  ];

  return (
    <section className={`component footer ${props?.params?.styles}`} id={id ? id : undefined}>
      <div className="relative pt-20 pb-1">
        {/* Background SVG */}
        <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
          <svg
            className="w-full h-full text-background-secondary dark:text-background-secondary-dark"
            viewBox="0 0 1600.51 534.61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            preserveAspectRatio="xMinYMin slice"
          >
            <path
              d="M0,534.61v-80.86c0-9.28.12-17.33.22-24.39C12.27-404.42,1531.04,228.74,1598.33,252.38h1.67v.59l.4.14c.23,6.03.1,12.07-.4,18.09v263.41H0Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Logo */}
        <div className="container relative z-10">
          <div className="mb-8">
            <JssImage
              field={props.fields.LogoLight}
              width={345}
              height={45}
              className="block dark:hidden w-44 h-auto md:w-88"
            />
            <JssImage
              field={props.fields.LogoDark}
              width={345}
              height={45}
              className="hidden dark:block w-44 h-auto md:w-88"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-8">
            {/* Contact */}
            <div>
              <div className="text-base font-semibold mb-4">
                <Text field={props.fields.Col1Title} />
              </div>
              <JssRichText field={props.fields.Contact} className="leading-6" />
            </div>

            {/* About Us */}
            <div>
              <div className="text-base font-semibold mb-4">
                <Text field={props.fields.Col2Title} />
              </div>
              <Placeholder
                name={`footer-about-us-${props?.params?.DynamicPlaceholderId}`}
                rendering={props.rendering}
              />
            </div>

            {/* Our Service */}
            <div>
              <div className="text-base font-semibold mb-4">
                <Text field={props.fields.Col3Title} />
              </div>
              <Placeholder
                name={`footer-our-services-${props?.params?.DynamicPlaceholderId}`}
                rendering={props.rendering}
              />
            </div>

            {/* Hospital Time */}
            <div>
              <div className="text-base font-semibold mb-4">
                <Text field={props.fields.Col4Title} />
              </div>
              <JssRichText field={props.fields.OperatingHours} className="leading-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright footer */}
      {HideCopyRightFooter && (
        <div className="container flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between h-auto gap-4 md:gap-5 py-4 px-2 bg-background dark:bg-background-dark text-center md:text-left">
          <JssRichText field={props.fields.CopyRightText} />

          <div className="flex flex-col sm:flex-col md:flex-row items-center gap-4">
            <div className="flex gap-4">
              <JssLink field={props.fields.TermsLink} />
              <JssLink field={props.fields.PolicyLink} />
            </div>

            <div className="flex gap-4">
              {socialMedia.map((item) => (
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 dark:border-white text-sm hover:bg-blue-500 transition"
                  key={item.key}
                >
                  <JssLink field={item.field}>
                    <FontAwesomeIcon icon={item.icon} width={18} height={13} />
                  </JssLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
