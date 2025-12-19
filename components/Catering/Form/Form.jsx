'use client';
import SubmissionForm from 'components/shared/SubmissionForm/SubmissionForm';
import styles from './Form.module.scss';
import useContactFormReducer from 'components/shared/SubmissionForm/useContactForm';
import { useState } from 'react';
import { sendContactFormSubmission } from 'lib/mailgun';
import Loader from 'components/shared/Loader/Loader';

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const initialState = {
    contactName: '',
    contactEmail: '',
    date: '',
    city: '',
    cookieService: '',
    message: '',
  };
  const { dispatch, stages, state, actions } = useContactFormReducer({
    initialState,
  });
  const { stage } = state;

  const handleSubmit = async () => {
    setIsLoading(true);
    const fields = {
      'Contact Name': state.contactName,
      'Contact Email': state.contactEmail,
      City: state.city,
      'Cookie Service': state.cookieService,
      Message: state.message,
    };
    await sendContactFormSubmission({
      fields,
      subject: 'Catering Inquiry',
      title: 'New Catering Inquiry for Midnight Cookie',
    });
    dispatch({ type: actions.SET_STAGE, stage: stages.CONFIRMATION });
    setIsLoading(false);
  };

  const formConfig = [
    {
      type: 'row',
      items: [
        {
          type: 'text',
          label: 'Contact Name',
          id: 'name',
          value: state.contactName,
          handleChange: value =>
            dispatch({ type: actions.SET_FIELD, field: 'contactName', value }),
          required: true,
        },
        {
          type: 'text',
          label: 'Contact Email',
          id: 'email',
          value: state.contactEmail,
          handleChange: value =>
            dispatch({ type: actions.SET_FIELD, field: 'contactEmail', value }),
          required: true,
        },
      ],
    },
    {
      type: 'row',
      items: [
        {
          type: 'date',
          label: 'Date of event',
          id: 'date',
          value: state.date,
          handleChange: value =>
            dispatch({ type: actions.SET_FIELD, field: 'date', value }),
          required: true,
        },
        {
          type: 'text',
          label: 'City',
          id: 'city',
          value: state.city,
          handleChange: value =>
            dispatch({ type: actions.SET_FIELD, field: 'city', value }),
          required: true,
        },
      ],
    },
    {
      type: 'dropdown',
      label: 'What is the occasion',
      dropdownItems: ['Food Truck', 'Wrapped Cookies', 'Bake On Site'],
      id: 'message',
      value: state.cookieService,
      minRows: 7,
      handleChange: value =>
        dispatch({ type: actions.SET_FIELD, field: 'cookieService', value }),

      required: true,
      maxWordCount: 250,
    },
    {
      type: 'textarea',
      label: 'What is the occasion',
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
  return (
    <div className={styles.container} id="form">
      <div className={styles.innerContainer}>
        {stage === stages.FILL_OUT_FORM && (
          <div className={styles.formContainer}>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>Interested in Catering?</h2>
              <p className={styles.description}>
                Tell us about your event! Reach out to our team at or by filling
                out the form below, and someone will get back to you within 1-3
                business days.
              </p>
            </div>
            <div className={styles.formContainer}>
              <SubmissionForm
                formConfig={formConfig}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                inputClassNames={styles.input}
              />
            </div>
          </div>
        )}
        {stage === stages.CONFIRMATION && (
          <div className={styles.confirmation}>
            <h2 className={styles.thankYou}>Thank you for your enquiry!</h2>
            <p>We will be in touch shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
}
