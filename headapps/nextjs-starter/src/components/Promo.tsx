import React from 'react';
import {
  NextImage as JssImage,
  Link as JssLink,
  RichText as JssRichText,
  ImageField,
  Field,
  LinkField,
  Placeholder,
  ComponentRendering,
  ComponentParams,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import StrippedBlobAccent from './svg/StrippedBlobAccent';

interface Fields {
  PromoIcon: ImageField;
  PromoText: Field<string>;
  PromoLink: LinkField;
  PromoTitle: Field<string>;
}

type PromoProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const PromoDefaultComponent = (props: PromoProps): JSX.Element => (
  <div className={`component promo ${props?.params?.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Promo</span>
    </div>
  </div>
);

export const Default = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const ShowCurvedTop = props.params.ShowCurvedTop === '1';
  const ShowBlobAccent = props.params.HideBlobAccent !== '1';
  if (props.fields) {
    return (
      <div
        className={`component promo bg-background-secondary dark:bg-background-secondary-dark ${props?.params?.styles} relative overflow-hidden group`}
        id={id ? id : undefined}
      >
        {/* Curved Top SVG */}
        {ShowCurvedTop && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1600 197.47"
            className="absolute top-0 left-0 w-full h-auto z-1"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M0,0V2S1589.99-14.42,1599.94,197.47h.06V0H0Z"
              className="dark:fill-background-dark fill-background"
            />
          </svg>
        )}

        <div className="component-content container grid lg:grid-cols-2 gap-10 pt-15 md:pt-30 pb-10 relative z-2">
          {/* Blob Accent SVG */}
          {ShowBlobAccent && (
            <div className="absolute -left-30 top-0 z-0 pointer-events-none w-96 h-96 max-w-3xl max-h-3xl">
              <StrippedBlobAccent />
            </div>
          )}
          <div className="relative order-1 group-[.image-right]:order-1 lg:group-[.image-right]:order-2">
            <JssImage
              field={props.fields.PromoIcon}
              className="w-full h-full rounded-xl object-cover mb-2 lg:mb-0 relative z-10"
            />
          </div>

          <div className="self-center order-2 group-[.image-right]:order-2 lg:group-[.image-right]:order-1">
            <div className="text-4xl font-bold mb-5">
              <Text field={props.fields.PromoTitle} />
            </div>
            <JssRichText field={props.fields.PromoText} />
            <div className="font-heading ml-2 mt-10 mb-10 lg:mb-0">
              <JssLink field={props.fields.PromoLink} className="btn">
                <span>{props.fields?.PromoLink?.value?.text}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26.438"
                  height="11.749"
                  viewBox="0 0 26.438 11.749"
                  className="w-[26px] h-[12px] text-background-secondary dark:text-background-secondary-dark"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M26.285,142.53l-5.875-5.355a.491.491,0,0,0-.536-.076.444.444,0,0,0-.291.444v3.427H.49a.471.471,0,0,0-.49.489V144.4a.471.471,0,0,0,.49.489H19.584v3.427a.461.461,0,0,0,.291.444.477.477,0,0,0,.536-.092l5.875-5.417a.5.5,0,0,0,.153-.367A.483.483,0,0,0,26.285,142.53Z"
                    transform="translate(0 -137.052)"
                  />
                </svg>
              </JssLink>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

export const WithPlaceHolder = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const ShowCurvedTop = props.params.ShowCurvedTop === '1';
  const ShowBlobAccent = props.params.HideBlobAccent !== '1';
  if (props.fields) {
    return (
      <div
        className={`component promo bg-background-secondary dark:bg-background-secondary-dark ${props?.params?.styles} relative overflow-hidden`}
        id={id ? id : undefined}
      >
        {/* Curved Top SVG */}
        {ShowCurvedTop && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1600 197.47"
            className="absolute top-0 left-0 w-full h-auto z-1"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M0,0V2S1589.99-14.42,1599.94,197.47h.06V0H0Z"
              className="dark:fill-background-dark fill-background"
            />
          </svg>
        )}

        <div className="component-content container grid lg:grid-cols-2 gap-10 pt-15 md:pt-30 pb-10 relative z-2">
          {/* Blob Accent SVG*/}
          {ShowBlobAccent && (
            <div className="absolute -left-30 top-0 z-0 pointer-events-none w-96 h-96 max-w-3xl max-h-3xl">
              <StrippedBlobAccent />
            </div>
          )}
          <div className="relative">
            <JssImage
              field={props.fields.PromoIcon}
              className="w-full h-full rounded-xl object-cover mb-2 lg:mb-0 relative z-10"
            />
          </div>
          <div className="self-center">
            <div className="mb-5">
              <div className="text-4xl font-bold mb-5">
                <Text field={props.fields.PromoTitle} />
              </div>
            </div>
            <Placeholder
              name={`body-why-choose-us-${props?.params?.DynamicPlaceholderId}`}
              rendering={props.rendering}
            />
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};
