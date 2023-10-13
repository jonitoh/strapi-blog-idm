import type { Schema, Attribute } from "@strapi/strapi";

export interface LayoutLink extends Schema.Component {
  collectionName: "components_layout_links";
  info: {
    displayName: "Link";
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    target: Attribute.Enumeration<["_blank", "_self", "_parent", "_top"]> &
      Attribute.Required &
      Attribute.DefaultTo<"_self">;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: "components_shared_meta_socials";
  info: {
    displayName: "metaSocial";
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<["Facebook", "Twitter"]> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: "components_shared_seos";
  info: {
    displayName: "seo";
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media & Attribute.Required;
    metaSocial: Attribute.Component<"shared.meta-social", true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "layout.link": LayoutLink;
      "shared.meta-social": SharedMetaSocial;
      "shared.seo": SharedSeo;
    }
  }
}
