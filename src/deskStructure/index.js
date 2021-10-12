import S from "@sanity/desk-tool/structure-builder";

import React from "react";

// icons
import { MdTag, MdWeb, MdSettings, MdOutlineHome } from "react-icons/md";

import { documents, adminDocuments } from "../../schemas/schema";

// take imports from schema and add icons according to name
const documentsDashboardConfig = [];
for (const schema of documents) {
  let icon = MdWeb;
  switch (schema.name) {
    case "home":
      icon = MdOutlineHome;
      break;
    case "siteSettings":
      icon = MdSettings;
      break;
    default:
      icon = MdWeb;
      break;
  }
  documentsDashboardConfig.push({
    icon,
    schema,
  });
}

// manually add template ids that were not imported into schema (such as plugins)
const pluginsEtcDashboardConfig = [];
// pluginsEtcDashboardConfig.push(
//   S.listItem()
//     .title("Media Tags")
//     .icon(MdTag)
//     .child(
//       S.document()
//         .title("Media Tags")
//         .schemaType("media.tag")
//         .documentId("media.tag")
//     )
// );

// collect template ids to automate hiding singleton pages
const singletonTemplateIds = documents.map((a) => a.name);

// collect admin ids to automate sorting admin sections
const adminTemplateIds = adminDocuments
  .filter((adminDocument) => documents.indexOf(adminDocument) >= 0)
  .map((a) => a.name);

const manuallyHiddenTemplateIds = ["media.tag"];

// hide all singleton pages (documents array) from automatically generated document list
const dashboardHiddenTypes = (listItem) =>
  !singletonTemplateIds.includes(listItem.getId()) &&
  !manuallyHiddenTemplateIds.includes(listItem.getId());

// generate list items based on schema
const documentListItems = [];
for (const documentDashboardConfig of documentsDashboardConfig) {
  const documentSchema = documentDashboardConfig.schema;
  documentListItems.push(
    S.listItem()
      .title(documentSchema.title)
      .icon(documentDashboardConfig?.icon)
      .child(
        S.document()
          .title(documentSchema.title)
          .schemaType(documentSchema.name)
          .documentId(documentSchema.name)
      )
  );
}

const listItems = [...documentListItems, ...pluginsEtcDashboardConfig];

// detect if document is part of the admin group
const isAdminItem = (listItem) => {
  return adminTemplateIds.indexOf(listItem.spec.id) >= 0;
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
      ...S.documentTypeListItems().filter(dashboardHiddenTypes),
      S.divider(),
      ...listItems.filter((value) => isAdminItem(value)),
    ]);
