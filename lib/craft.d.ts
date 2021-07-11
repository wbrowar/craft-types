import {SeomaticContainers} from "./plugins/seomatic/latest";

/*
 * Generic element type that is extended into Entries, Assets, Users, etc...
 */
export interface CraftElement {
  /*
   * Return a number of related elements for a field.
   */
  _count?: number;
  /*
   * Whether the element is archived or not.
   */
  archived?: boolean;
  /*
   * The date the element was created.
   */
  dateCreated?: string;
  /*
   * The date the element was last updated.
   */
  dateUpdated?: string;
  /*
   * Whether the element is enabled or not.
   */
  enabled?: boolean;
  /*
   * The id of the entity
   */
  id?: string;
  /*
   * The language of the site element is associated with.
   */
  language?: string;
  /*
   * The element’s search score, if the search parameter was used when querying for the element.
   */
  searchScore?: string;
  /*
   * The ID of the site the element is associated with.
   */
  siteId?: number;
  /*
   * The element’s slug.
   */
  slug?: string;
  /*
   * The element's status.
   */
  status?: string;
  /*
   * The element’s title.
   */
  title?: string;
  /*
   * Whether the element has been soft-deleted or not.
   */
  trashed?: boolean;
  /*
   * The uid of the entity
   */
  uid?: string;
  /*
   * The element’s URI.
   */
  uri?: string;
}

/*
 * A file uploaded and managed through Craft CMS’s asset volumes.
 */
export interface CraftAsset extends CraftElement {
  /*
   * The date the asset file was last modified.
   */
  dateModified?: string;
  /*
   * The file extension for the asset file.
   */
  extension?: string;
  /*
   * The filename of the asset file.
   */
  filename?: string;
  /*
   * The focal point represented as an array with x and y keys, or null if it's not an image.
   */
  focalPoint?: number[];
  /*
   * The ID of the folder that the asset belongs to.
   */
  folderId?: number;
  /*
   * Whether a user-defined focal point is set on the asset.
   */
  hasFocalPoint?: boolean;
  /*
   * The height in pixels or null if it's not an image.
   */
  height?: number;
  /*
   * An <img> tag based on this asset.
   */
  img?: string;
  /*
   * The file kind.
   */
  kind?: string;
  /*
   * The file’s MIME type, if it can be determined.
   */
  mimeType?: string;
  /*
   * Returns the next element relative to this one, from a given set of criteria.
   */
  next?: CraftAsset;
  /*
   * The asset's path in the volume.
   */
  path?: string;
  /*
   * Returns the previous element relative to this one, from a given set of criteria.
   */
  prev?: CraftAsset;
  /*
   * The file size in bytes.
   */
  size?: string;
  /*
   * Returns a srcset attribute value based on the given widths or x-descriptors.
   */
  srcset?: string;
  /*
   * The full URL of the asset. This field accepts the same fields as the transform directive.
   */
  url?: string;
  /*
   * The ID of the volume that the asset belongs to.
   */
  volumeId?: number;
  /*
   * The width in pixels or null if it's not an image.
   */
  width?: number;
}

/*
 * A array of CraftAsset objects.
 */
export interface CraftAssets extends Array<CraftAsset> {}

/*
 * Content used to establish relations between other content; organized by category groups.
 */
export interface CraftCategory extends CraftElement {
  /*
   * The category’s children.
   */
  children?: CraftCategory[];
  /*
   * The handle of the group that contains the category.
   */
  groupHandle?: string;
  /*
   * The ID of the group that contains the category.
   */
  groupId?: number;
  /*
   * The element’s level within its structure
   */
  level?: number;
  /*
   * The element’s left position within its structure.
   */
  lft?: number;
  /*
   * The same element in other locales.
   */
  localized?: CraftCategory[];
  /*
   * Returns the next element relative to this one, from a given set of criteria.
   */
  next?: CraftCategory;
  /*
   * The category’s parent.
   */
  parent?: CraftCategory;
  /*
   * Returns the previous element relative to this one, from a given set of criteria.
   */
  prev?: CraftCategory;
  /*
   * The element’s right position within its structure.
   */
  rgt?: number;
  /*
   * The element’s structure’s root ID
   */
  root?: number;
  /*
   * This query is used to query for SEOmatic meta data.
   */
  seomatic?: SeomaticContainers;
  /*
   * The element’s structure ID.
   */
  structureId?: number;
  /*
   * The element’s full URL
   */
  url?: string;
}

/*
 * A array of CraftCategory objects.
 */
export interface CraftCategory extends Array<CraftCategory> {}

/*
 * Content managed through Craft CMS as single, channel, and structure sections.
 */
export interface CraftEntry extends CraftElement {
  /*
   * The entry’s children, if the section is a structure. Accepts the same arguments as the entries query.
   */
  children?: CraftEntry[];
  /*
   * The ID of the draft to return (from the drafts table)
   */
  draftId?: number;
  /*
   * The name of the draft.
   */
  draftName?: string;
  /*
   * The notes for the draft.
   */
  draftNotes?: string;
  /*
   * The expiry date of the entry.
   */
  expiryDate?: string;
  /*
   * Returns whether this is a draft.
   */
  isDraft?: boolean;
  /*
   * Returns whether this is a revision.
   */
  isRevision?: boolean;
  /*
   * Returns whether this is an unpublished draft.
   */
  isUnpublishedDraft?: boolean;
  /*
   * Returns whether this is an unpublished draft. This field is deprecated. isUnpublishedDraft should be used instead.
   */
  isUnsavedDraft?: boolean;
  /*
   * The element’s level within its structure
   */
  level?: number;
  /*
   * The element’s left position within its structure.
   */
  lft?: number;
  /*
   * The same element in other locales.
   */
  localized?: CraftEntry[];
  /*
   * Returns the next element relative to this one, from a given set of criteria.
   */
  next?: CraftEntry;
  /*
   * The entry’s parent, if the section is a structure.
   */
  parent?: CraftEntry;
  /*
   * The entry's post date.
   */
  postDate?: string;
  /*
   * Returns the previous element relative to this one, from a given set of criteria.
   */
  prev?: CraftEntry;
  /*
   * The element’s right position within its structure.
   */
  rgt?: number;
  /*
   * The element’s structure’s root ID
   */
  root?: number;
  /*
   * The handle of the section that contains the entry.
   */
  sectionHandle?: string;
  /*
   * The ID of the section that contains the entry.
   */
  sectionId?: number;
  /*
   * This query is used to query for SEOmatic meta data.
   */
  seomatic?: SeomaticContainers;
  /*
   * Returns the element’s ID, or if it’s a draft/revision, its source element’s ID.
   */
  sourceId?: number;
  /*
   * Returns the element’s UUID, or if it’s a draft/revision, its source element’s UUID.
   */
  sourceUid?: string;
  /*
   * The element’s structure ID.
   */
  structureId?: number;
  /*
   * The handle of the entry type that contains the entry.
   */
  typeHandle?: string;
  /*
   * The ID of the entry type that contains the entry.
   */
  typeId?: number;
  /*
   * The element’s full URL
   */
  url?: string;
}

/*
 * A array of CraftEntry objects.
 */
export interface CraftEntries extends Array<CraftEntry> {}

/*
 * Global fields managed though Craft CMS.
 */
export interface CraftGlobalSet extends CraftElement {
  /*
   * The handle of the global set.
   */
  handle?: string;
  /*
   * The name of the global set.
   */
  name?: string;
}

/*
 * Content managed through Craft CMS.
 */
export interface CraftTag extends CraftElement {
  /*
   * The handle of the group that contains the tag.
   */
  groupHandle: string;
  /*
   * The ID of the group that contains the tag.
   */
  groupId: number;
}

/*
 * A array of CraftTag objects.
 */
export interface CraftTags extends Array<CraftTag> {}

/*
 * Content managed through Craft CMS.
 */
export interface CraftUser extends CraftElement {
  /*
   * The user's email.
   */
  email?: string;
  /*
   * The user's first name.
   */
  firstName?: string;
  /*
   * The user's first name or username.
   */
  friendlyName?: string;
  /*
   * The user's full name.
   */
  fullName?: string;
  /*
   * The user's last name.
   */
  lastName?: string;
  /*
   * The user's full name or username.
   */
  name?: string;
  /*
   * The user’s preferences.
   */
  preferences?: string;
  /*
   * The user’s preferred language.
   */
  preferredLanguage?: string;
  /*
   * The username.
   */
  username?: string;
}

/*
 * A array of CraftUser objects.
 */
export interface CraftUsers extends Array<CraftUser> {}