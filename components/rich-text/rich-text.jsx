import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

const options = {
  renderMarks: {
    // [MARKS.BOLD]: text => '',
    // [MARKS.ITALIC]: text => '',
    // [MARKS.UNDERLINE]: text => '',
    // [MARKS.CODE]: text => '',
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    // [BLOCKS.DOCUMENT]: (node, children) => '',
    // [BLOCKS.HEADING_1]: (node, children) => '',
    // [BLOCKS.HEADING_2]: (node, children) => '',
    // [BLOCKS.HEADING_3]: (node, children) => '',
    // [BLOCKS.HEADING_4]: (node, children) => '',
    // [BLOCKS.HEADING_5]: (node, children) => '',
    // [BLOCKS.HEADING_6]: (node, children) => '',
    // [BLOCKS.UL_LIST]: (node, children) => '',
    // [BLOCKS.OL_LIST]: (node, children) => '',
    // [BLOCKS.LIST_ITEM]: (node, children) => '',
    // [BLOCKS.QUOTE]: (node, children) => '',
    // [BLOCKS.HR]: (node, children) => '',
    // [BLOCKS.EMBEDDED_ENTRY]: (node, children) => '',
    // [BLOCKS.EMBEDDED_ASSET]: (node, children) => '',
    // [INLINES.EMBEDDED_ENTRY]: (node, children) => '',
    // [INLINES.HYPERLINK]: (node, children) => '',

    // [INLINES.ENTRY_HYPERLINK]: (node, children) => '',
    // [INLINES.ASSET_HYPERLINK]: (node, children) => '',
    // renderText: text => text.replace('!', '?'),
    // Add space between paragraphs
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  },
};

export default function RichText({ json, config }) {
  return documentToReactComponents(json, config || options);
}
