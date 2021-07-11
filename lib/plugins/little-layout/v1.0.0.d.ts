export interface LittleLayoutField {
  /*
   * Determine if field has a value.
   */
  empty?: boolean

  /*
   * Value for CSS Grid’s `grid-column-end` and `grid-column` properties.
   */
  gridColumnEnd?: number

  /*
   * Value for CSS Grid’s `grid-column` property.
   */
  gridColumnSpan?: number

  /*
   * Value for CSS Grid’s `grid-column-start` and `grid-column` properties.
   */
  gridColumnStart?: number

  /*
   * Value for CSS Grid’s `grid-row-end` and `grid-row` properties.
   */
  gridRowEnd?: number

  /*
   * Value for CSS Grid’s grid-row property.
   */
  gridRowSpan?: number

  /*
   * Value for CSS Grid’s grid-row-start and grid-row properties.
   */
  gridRowStart?: number

  /*
   * Array of columns selected in the layout field.
   */
  selectedColumns?: number[]

  /*
   * Array of coordinates selected in the layout field. Coordinates are formatted in `x|y` format.
   */
  selectedCoordinates?: string[]

  /*
   * Array of rows selected in the layout field.
   */
  selectedRows?: number[]
}