# craft-types
TypeScript declarations for Craft CMS’s GraphQL API.

## Installation
[//]: # "todo updated with npm package name"
1. Add "_" to your `package.json` or run `npm install _`

_NOTE: `craft-types` version numbers are set to match Craft CMS version numbers._

## Usage
### Using Craft CMS Generic Types
Import type definitions for Craft CMS elements from `craft-types` with an import statement, like this:

```typescript
import { CraftEntry } from "craft-types/craft";
```

Type definitions can be extended so custom fields can be added to generic elements. For example, a News entry type might look like this:

```typescript
import { CraftEntry } from "craft-types/craft";

interface NewsEntry extends CraftEntry {
  articleSummary: string | null;
}
```

In this example, a field with the handle `articleSummary` is considered defined and can be set to either a string or a null value.

Because GraphQL doesn’t require specific fields to be queried, all definitions in `craft-types` allow values to be `undefined` (for example, a element `title` field is typed as  `title?: string`). To indicate that `title` is a required field that will be queried and available on all entries, you can overwrite the typing of the `title` field by adding it to an extended declaration:

```typescript
import { CraftEntry } from "craft-types/craft";

interface NewsEntry extends CraftEntry {
  articleSummary: string | null;
  title: string;
}
```

In this case, we’re saying that all `NewsEntry` objects will include a `title` field, therefore there’s no need to check if the `title` field is defined before using it.

### Using Craft CMS Plugin Types

Plugins are organized in the `lib` directory by their plugin handle. Types for the most recent version of a plugin is available in the `latest.d.ts` file.

```typescript
import { CraftEntry } from "craft-types/craft";
import { LittleLayoutField } from "craft-types/little-layout/latest";

interface NewsEntry extends CraftEntry {
  layout: LittleLayoutField;
}
```

As a plugin’s GraphQL schema changes, older versions can be accessed using version-specific declaration files:

```typescript
import { CraftEntry } from "craft-types/craft";
import { LittleLayoutField } from "craft-types/little-layout/v1.0.0";

interface NewsEntry extends CraftEntry {
  layout: LittleLayoutField;
}
```

## Contributing
[//]: # "todo add Contributing"