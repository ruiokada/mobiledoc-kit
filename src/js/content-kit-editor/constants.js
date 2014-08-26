import Type from '../content-kit-compiler/types/type';

var Keycodes = {
  BKSP  : 8,
  ENTER : 13,
  ESC   : 27,
  DEL   : 46
};

var RegEx = {
  NEWLINE       : /[\r\n]/g,
  HTTP_PROTOCOL : /^https?:\/\//i,
  HEADING_TAG   : /^(h1|h2|h3|h4|h5|h6)$/i
};

var SelectionDirection = {
  LEFT_TO_RIGHT : 1,
  RIGHT_TO_LEFT : 2,
  SAME_NODE     : 3
};

var ToolbarDirection = {
  TOP   : 1,
  RIGHT : 2
};

// TODO: remove, get from Compiler DefaultBlockTypeSet
var RootTags = [
  Type.TEXT.tag,
  Type.HEADING.tag,
  Type.SUBHEADING.tag,
  Type.QUOTE.tag,
  Type.LIST.tag,
  Type.ORDERED_LIST.tag
];

export { Keycodes, RegEx, SelectionDirection, ToolbarDirection, RootTags };
