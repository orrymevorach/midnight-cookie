import styles from './Faq.module.scss';
import clsx from 'clsx';
import { BLOCKS } from '@contentful/rich-text-types';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import RichText from 'components/shared/rich-text';

const options = {
  renderMarks: {
    // [MARKS.BOLD]: text => '',
    // [MARKS.ITALIC]: text => '',
    // [MARKS.UNDERLINE]: text => '',
    // [MARKS.CODE]: text => '',
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className={clsx(styles.answer)}>{children}</p>
    ),
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

const FaqParagraph = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const Answer = () =>
    answer ? <RichText config={options} json={answer} /> : '';
  const icon = showAnswer ? faMinus : faPlus;
  return (
    <div className={styles.questionAnswerContainer} key={question}>
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className={styles.questionContainer}
      >
        <p className={clsx(styles.question, styles.bodyCopyBold)}>{question}</p>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </button>

      {showAnswer && <Answer />}
    </div>
  );
};

export default function FAQ({ faqData }) {
  return (
    <div className={clsx(styles.faqWrapper)} id="faq">
      <h1 className={styles.heading}>FAQ</h1>
      <div className={styles.faqContainer}>
        {faqData.map(faq => {
          if (faq?.question) {
            const { question, answer } = faq;
            return (
              <FaqParagraph
                key={question}
                question={question}
                answer={answer}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
