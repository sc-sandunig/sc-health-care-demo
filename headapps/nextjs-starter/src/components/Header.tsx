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

  return (
    <section
      className={`component header relative ${props?.params?.styles}`}
      id={id ? id : undefined}
    >
      <div className="flex items-center justify-center gap-4 md:gap-5 py-8 px-2 bg-background dark:bg-background-dark">
        <div className="flex-shrink-0 mr-auto md:mr-10">
          <div className="block dark:hidden w-[180px] h-auto md:w-[345px]">
            <JssImage field={props.fields.LogoLight} width={345} height={45} />
          </div>
          <div className="hidden dark:block w-[180px] h-auto md:w-[345px]">
            <JssImage field={props.fields.LogoDark} width={345} height={45} />
          </div>
        </div>

        <div className="order-last lg:order-0 lg:mr-4 xl:mr-8 uppercase font-mulish">
          <Placeholder
            name={`header-nav-${props?.params?.DynamicPlaceholderId}`}
            rendering={props.rendering}
          />
        </div>

        <div className="flex items-center gap-5 ml-auto md:ml-3">
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
