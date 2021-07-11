import {CraftEntry} from "../lib/craft";
import {SeomaticContainers} from "../lib/plugins/seomatic/latest";
import {LittleLayoutField} from "../lib/plugins/little-layout/latest";

interface CraftEntryWithPluginFields extends CraftEntry {
  layout: LittleLayoutField
  seomatic: SeomaticContainers;
}

const entry: CraftEntry = {
  title: `My title`,
};

const entryWithPluginFields: CraftEntryWithPluginFields = {
  ...entry,
  layout: {
    empty: false,
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridColumnSpan: 2,
    gridRowStart: 1,
    gridRowEnd: 3,
    gridRowSpan: 2,
    selectedColumns: [1, 2, 3],
    selectedRows: [1, 2, 3],
    selectedCoordinates: ['1|1', '2|1', '3|1'],
  },
  seomatic: {
    metaJsonLdContainer: '',
    metaLinkContainer: '',
    metaScriptContainer: '',
    metaSiteVarsContainer: '',
    metaTagContainer: '',
    metaTitleContainer: '',
  }
};