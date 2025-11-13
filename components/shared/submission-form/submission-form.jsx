import Button from 'components/shared/button/button';
import GetFormElement from './form-elements';
import styles from './submission-form.module.scss';
import clsx from 'clsx';

export default function SubmissionForm({
  formConfig,
  handleSubmit = () => {},
  isLoading = false,
  formContainerClassNames = '',
  inputClassNames = '',
  labelClassNames = '',
  inputContainerClassNames = '',
  buttonClassNames = '',
}) {
  const handleSubmitForm = e => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form
      action="#"
      className={clsx(styles.container, formContainerClassNames)}
      onSubmit={handleSubmitForm}
    >
      {formConfig.map((elementConfig, index) => {
        return (
          <GetFormElement
            key={`${index}-submission-form`}
            {...elementConfig}
            inputClassNames={inputClassNames}
            labelClassNames={labelClassNames}
            inputContainerClassNames={inputContainerClassNames}
          />
        );
      })}

      <Button
        classNames={clsx(styles.submitButton, buttonClassNames)}
        isLoading={isLoading}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
