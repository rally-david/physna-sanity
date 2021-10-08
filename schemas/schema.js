// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Single Page Templates
import careers from "./documents/careers";
import contactUs from "./documents/contactUs";
import features from "./documents/features";
import home from "./documents/home";
import news from "./documents/news";
import resources from "./documents/resources";
import siteSettings from "./documents/siteSettings";
import useCases from "./documents/useCases";

// Detail Page Templates
import featuresDetail from "./documents/featuresDetail";
import newsDetail from "./documents/newsDetail";
import resourcesDetail from "./documents/resourcesDetail";

// Objects (molecules)
import accordion from "./objects/accordion";
import banner from "./objects/banner";
import callToAction from "./objects/call-to-action";
import columns from "./objects/columns";
import fiftyFifty from "./objects/fifty-fifty";
import embedGreenhouse from "./objects/embed-greenhouse";
import embedSalesforce from "./objects/embed-salesforce";
import newsItems from "./objects/news-items";
import title from "./objects/title";
import twoColumnRepeater from "./objects/two-column-repeater";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // single pages
    careers,
    contactUs,
    features,
    home,
    news,
    resources,
    siteSettings,
    useCases,

    // detail pages
    featuresDetail,
    newsDetail,
    resourcesDetail,

    // objects
    accordion,
    banner,
    callToAction,
    columns,
    fiftyFifty,
    embedGreenhouse,
    embedSalesforce,
    newsItems,
    title,
    twoColumnRepeater,
  ]),
});
