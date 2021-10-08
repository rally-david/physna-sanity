import S from "@sanity/desk-tool/structure-builder";

import React from "react";

// icons
import {
  MdWeb,
  MdSettings,
  MdWhatshot,
  MdLooks,
  MdOutlineHome,
} from "react-icons/md";

// single page templates
import careers from "../../schemas/documents/careers";
import contactUs from "../../schemas/documents/contactUs";
import features from "../../schemas/documents/features";
import home from "../../schemas/documents/home";
import news from "../../schemas/documents/news";
import resources from "../../schemas/documents/resources";
import siteSettings from "../../schemas/documents/siteSettings";
import useCases from "../../schemas/documents/useCases";

const documents = [
  { schema: home, icon: MdOutlineHome },
  { schema: careers, icon: MdWeb },
  { schema: contactUs, icon: MdWeb },
  { schema: features, icon: MdWeb },
  { schema: news, icon: MdWeb },
  { schema: resources, icon: MdWeb },
  { schema: siteSettings, icon: MdSettings },
  { schema: useCases, icon: MdWeb },
];

// admin controls (not pages) go on top, followed by landing pages, then detail pages
const adminDocuments = [siteSettings];

// collect template ids to automate hiding singleton pages
const templateIds = documents.map((a) => a.schema.name);

// hide all singleton pages (documents array) from automatically generated document list
const hiddenDocTypes = (listItem) => !templateIds.includes(listItem.getId());

// generate list items based on schema
const listItems = [];
for (const document of documents) {
  const documentSchema = document.schema;
  listItems.push(
    S.listItem()
      .title(documentSchema.title)
      .icon(document?.icon)
      .child(
        S.document()
          .schemaType(documentSchema.name)
          .documentId(documentSchema.name)
      )
  );
}

// detect if document is part of the admin group
const isAdminItem = (listItem) => {
  for (const adminDocument of adminDocuments) {
    if (adminDocument.name === listItem.spec.id) {
      return true;
    }
  }
  return false;
};

const JsonPreview = ({ document }) => (
  <>
    {/* Pulling the currently displayed version's title */}
    <h1>JSON Data for "{document.displayed.title}"</h1>
    {/* Stringifying a JSON representation of the displayed data */}
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
  </>
);

export const getDefaultDocumentNode = ({ documentId, schemaType }) => {
  console.log(documentId, schemaType);
  if (schemaType === "post" || documentId === "siteSettings") {
    console.log({ documentId });
    return S.document().views([
      S.view.form(),
      S.view.component(JsonPreview).title("JSON"),
    ]);
  }
};

// build admin structure
export default () =>
  S.list()
    .title("Base")
    .items([
      ...listItems.filter((value) => !isAdminItem(value)),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.divider(),
      ...listItems.filter((value) => isAdminItem(value)),
    ]);
