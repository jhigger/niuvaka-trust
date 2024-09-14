type FormFooterProps = React.HTMLAttributes<HTMLParagraphElement>;

const FormFooter = (props: FormFooterProps) => {
  return (
    <p {...props}>
      This site is protected by reCAPTCHA and the Google{" "}
      <a
        href="https://policies.google.com/privacy?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Privacy Policy
      </a>{" "}
      and{" "}
      <a
        href="https://policies.google.com/terms?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Terms of Service
      </a>{" "}
      apply.
    </p>
  );
};

export default FormFooter;
