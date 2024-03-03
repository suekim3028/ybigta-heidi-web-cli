import { Form, FormInstance } from "antd";
import { useEffect, useState } from "react";

export const useFormSubmittable = (form: FormInstance) => {
  const [submittable, setSubmittable] = useState<boolean>(false);

  // Watch all values
  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then((val) => {
        setSubmittable(true);
      })
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return { submittable };
};
