import React, { useState } from 'react';
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
import { faBars, faEnvelope, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className={`component header ${props?.params?.styles}`} id={id ? id : undefined}>
      <div className="flex items-center justify-center gap-9 px-6 py-4 bg-background dark:bg-background-dark h-[100px]">
        <div className="flex-shrink-0">
          <div className="block dark:hidden w-[180px] h-auto md:w-[345px]">
            <JssImage field={props.fields.LogoLight} width={345} height={45} />
          </div>
          <div className="hidden dark:block w-[180px] h-auto md:w-[345px]">
            <JssImage field={props.fields.LogoDark} width={345} height={45} />
          </div>
        </div>

        <div className="hidden md:flex text-[18px] font-mulish uppercase ml-24">
          <Placeholder
            name={`header-nav-${props?.params?.DynamicPlaceholderId}`}
            rendering={props.rendering}
          />
        </div>

        <div className="flex items-center gap-4 ml-auto md:ml-8">

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

          <button
            className="block md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} width={20} height={20} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white dark:bg-background-dark text-[18px] 
        font-mulish uppercase transition-all duration-300 ease-in-out">
          <Placeholder
            name={`header-nav-${props?.params?.DynamicPlaceholderId}`}
            rendering={props.rendering}
          />
        </div>
      )}
    </section>
  );
};
