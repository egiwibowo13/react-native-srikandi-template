import React, {useState, useRef} from 'react';
import {ScrollableView} from './ScrollableView';

type GenericErrForm<T> = {
  [P in keyof T]?: string;
};

type GenericRef<T> = {
  [P in keyof T]?: any;
};

// validationSchema using yup
type ValidationSchema<T> = {
  isValidSync: () => boolean;
  validateSync: (values: T, option: any) => any;
  validateSyncAt: (fieldName: keyof T, values: T) => any;
};

type FormParams<T> = {
  initialValues: T;
  validationSchema?: any;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  autoscroll?: boolean;
};

export type SubmitParams<T> = {
  isValid: boolean;
  values: T;
  firstErrAt?: string | null;
  errors?: GenericErrForm<T>;
};

type Form<T> = {
  values: T;
  errors?: GenericErrForm<T>;
  controller: React.Ref<ScrollableView>;
  refs?: GenericRef<T>;
  handleChange: (name: keyof T) => (value: string) => void;
  handleBlur: (name: keyof T) => void;
  handleSubmit: (onSubmit: (params: SubmitParams<T>) => void) => void;
};

export function useForm<T>(params: FormParams<T>): Form<T> {
  const {
    initialValues,
    validationSchema,
    validateOnChange = false,
    validateOnBlur = true,
    autoscroll,
  } = params;
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<GenericErrForm<T>>();

  const refsResult = createFormRefs(initialValues);
  const refs = useRef(refsResult);
  const controller: React.Ref<ScrollableView> = React.createRef();

  function createFormRefs<T>(initialValue: T): any {
    let _refs: any = {};
    for (let key in initialValue) {
      const myKey: keyof T = key;
      _refs[myKey] = React.createRef();
    }
    return _refs;
  }

  const handleChange = (name: keyof T) => (value: string) => {
    setValues(prev => ({...prev, [name]: value}));
    if (validationSchema !== undefined && validateOnChange) {
      try {
        validationSchema?.validateSyncAt(name, {...values, [name]: value});
      } catch (err: any) {
        setErrors(prev => ({...prev, [name]: err?.message}));
      }
    } else {
      setErrors(prev => ({...prev, [name]: null}));
    }
  };

  const handleBlur = (name: keyof T) => {
    if (validationSchema !== undefined && validateOnBlur && !validateOnChange) {
      try {
        validationSchema?.validateSyncAt(name, values);
      } catch (err: any) {
        setErrors(prev => ({...prev, [name]: err?.message}));
      }
    }
  };

  function getFirstError(
    fieldList: string[] = [],
    errInner = [],
  ): string | null {
    let firstErrAt = null;
    for (let field of fieldList) {
      const isError = errInner.findIndex((e: any) => e.path === field) > -1;
      if (isError) {
        firstErrAt = field;
        break;
      }
    }
    return firstErrAt;
  }

  const scrollToErrorField = (firstErrAt: string) => {
    if (autoscroll) {
      controller.current?.scrollToView(refs.current[firstErrAt]);
    }
  };

  const handleSubmit = (onSubmit: (params: SubmitParams<T>) => void) => {
    if (validationSchema !== undefined) {
      try {
        validationSchema?.validateSync(values, {abortEarly: false});
        onSubmit({
          values,
          errors,
          isValid: true,
          firstErrAt: null,
        });
      } catch (err: any) {
        const fieldList = Object.keys(initialValues);
        const firstErrAt = getFirstError(fieldList, err?.inner ?? []);
        if (firstErrAt !== null) {
          scrollToErrorField(firstErrAt);
        }
        let nErrors = errors ?? ({} as GenericErrForm<T>);
        err.inner.forEach((e: any) => {
          if (e?.path !== undefined && e?.message !== undefined) {
            nErrors[e?.path as keyof T] = e?.message;
          }
        });
        setErrors(prev => ({...prev, ...nErrors}));
        onSubmit({isValid: false, values, firstErrAt, errors: nErrors});
      }
    } else {
      onSubmit({isValid: true, values, firstErrAt: null});
    }
  };

  return {
    values,
    errors,
    controller,
    refs: refs.current,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
