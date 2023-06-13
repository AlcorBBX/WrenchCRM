import {
  type ChangeEvent,
  type InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';

import { classNames } from 'shared/lib';

import css from './Input.module.scss';

type HtmlInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

// export enum InputTheme {
//   CLEAR = 'clear',
//   OUTLINE = 'outline',
//   OUTLINED_DANGER = 'outlinedDanger',
//   CLEAR_INVERTED = 'clearInverted',
//   BACKGROUND = 'background',
//   BACKGROUND_INVERTED = 'backgroundInverted',
//   INVERTED = 'inverted',
// }

type Theme = 'outline';

interface Props extends HtmlInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  autoFocus?: boolean;
  label?: string;
  theme?: Theme;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    label,
    theme = 'outline',
    ...otherProps
  }: Props) => {
    const [isFocused, setIsFocused] = useState(false);
    // const [caretPositions, setCaretPosition] = useState(0);

    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (!value?.length) return;
      if (value?.length > e?.target?.value?.length) {
        onChange?.(e.target.value);
        // setCaretPosition(e?.target?.selectionStart || 0);
        return;
      }
      onChange?.(e.target.value);
      // setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onSelect = (e: any) => {
      // setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
      if (autoFocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autoFocus]);

    return (
      <div
        className={classNames(css.inputWrapper, {}, [className, css[theme]])}
      >
        {label && <label className={css.label}>{`${label}`}</label>}

        <div className={css.inputContainer}>
          {/* {placeholder && ( */}
          {/*   <div className={css.placeholder}>{`${placeholder}`}</div> */}
          {/* )} */}
          <div className={css.caretWrapper}>
            <input
              placeholder={placeholder}
              type={type}
              value={value}
              onChange={onChangeHandler}
              className={css.input}
              onFocus={onFocus}
              onBlur={onBlur}
              onSelect={onSelect}
              ref={ref}
              {...otherProps}
            />

            {/* {isFocused && ( */}
            {/*   <span */}
            {/*     className={css.caret} */}
            {/*     style={{ left: `${caretPositions * 9}px` }} */}
            {/*   /> */}
            {/* )} */}
          </div>
        </div>
      </div>
    );
  },
);
