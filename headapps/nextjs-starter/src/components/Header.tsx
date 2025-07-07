import {
  NextImage as JssImage,
  Link as JssLink,
  ImageField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

interface Fields {
  LogoDark: ImageField;
  LogoLight: ImageField;
  MailLink: LinkField;
  PhoneLink: LinkField;
}

type HeaderProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: HeaderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <section
      className={`component header relative ${props?.params?.styles}`}
      id={id ? id : undefined}
    >
      <div className="container py-6 md:py-8 flex justify-between items-center">
        <div className="flex-shrink-0 mr-auto md:mr-10">
          <div className="block dark:hidden w-44 h-auto md:w-88">
            <JssImage field={props.fields.LogoLight} width={345} height={45} />
          </div>
          <div className="hidden dark:block w-44 h-auto md:w-88">
            <JssImage field={props.fields.LogoDark} width={345} height={45} />
          </div>
        </div>

        <div className="order-last lg:order-0 lg:mr-4 xl:mr-8 uppercase font-mulish">
          <Placeholder
            name={`header-nav-${props?.params?.DynamicPlaceholderId}`}
            rendering={props.rendering}
          />
        </div>

        <div className="flex items-center gap-3 md:gap-5 ml-auto md:ml-3">
          <Placeholder
            name={`header-theme-switcher-${props?.params?.DynamicPlaceholderId}`}
            rendering={props.rendering}
          />

          <JssLink field={props.fields.MailLink}>
            <FontAwesomeIcon icon={faEnvelope} width={18} height={15} />
          </JssLink>

          <JssLink field={props.fields.PhoneLink} className="">
            <FontAwesomeIcon icon={faPhone} width={18} height={13} />
          </JssLink>
        </div>
      </div>
    </section>
  );
};
