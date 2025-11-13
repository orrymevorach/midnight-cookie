import styles from './form.module.scss';
import Link from 'next/link';
import Loader from 'components/shared/loader';
import { useState } from 'react';
import useContactFormReducer from 'components/shared/submission-form/useContactForm';
import { sendContactFormSubmission } from 'lib/mailgun';
import SubmissionForm from 'components/shared/submission-form/submission-form';

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);

  const initialState = {
    name: '',
    email: '',
    message: '',
  };
  const { dispatch, stages, state, actions } = useContactFormReducer({
    initialState,
  });
  const { stage } = state;

  const handleSubmit = async () => {
    setIsLoading(true);
    const fields = {
      Name: state.name,
      Email: state.email,
      Message: state.message,
    };
    await sendContactFormSubmission({ fields });
    dispatch({ type: actions.SET_STAGE, stage: stages.CONFIRMATION });
    setIsLoading(false);
  };

  const formConfig = [
    {
      type: 'text',
      label: 'Name',
      id: 'name',
      value: state.name,
      handleChange: value =>
        dispatch({ type: actions.SET_FIELD, field: 'name', value }),
      required: true,
    },
    {
      type: 'text',
      label: 'Email',
      id: 'email',
      value: state.email,
      handleChange: value =>
        dispatch({ type: actions.SET_FIELD, field: 'email', value }),
      required: true,
    },
    {
      type: 'textarea',
      label: 'Message',
      id: 'message',
      value: state.message,
      minRows: 7,
      handleChange: value =>
        dispatch({ type: actions.SET_FIELD, field: 'message', value }),

      required: true,
      maxWordCount: 250,
    },
  ];
  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  }

  if (stage === stages.CONFIRMATION) {
    return (
      <div className={styles.successText}>
        <p>Thank you! We will get back to you shortly.</p>
      </div>
    );
  }
  return (
    <div className={styles.form}>
      <h1 className={styles.title}>
        Contact us if you have any questions or general inquiries
      </h1>
      <SubmissionForm
        formConfig={formConfig}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        inputClassNames={styles.input}
        labelClassNames={styles.label}
      />
    </div>
  );
}
