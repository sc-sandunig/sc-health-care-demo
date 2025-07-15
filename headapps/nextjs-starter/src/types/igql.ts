import {
  RichTextField,
  TextField,
  ImageField,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';

export interface IGQLTextField {
    jsonValue: TextField
}

export interface IGQLImageField {
    jsonValue: ImageField
}

export interface IGQLLinkField {
    jsonValue: LinkField
}

export interface IGQLRichTextField {
    jsonValue: RichTextField
}