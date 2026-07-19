import { useId, useState } from "react";

import style from "../calculator.module.scss";

const formatValue = (number) => {
  const [integer, fraction] = String(number).split(".");
  const groupedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return fraction ? `${groupedInteger},${fraction}` : groupedInteger;
};

const formatDigits = (digits) =>
  digits.replace(/^0+(?=\d)/, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export default function RangeInput({
  label,
  value,
  min,
  max,
  step = 1,
  suffix = "",
  editable = false,
  onChange,
}) {
  const fieldId = useId();
  const labelId = `${fieldId}-label`;
  const inputId = `${fieldId}-input`;
  const rangeId = `${fieldId}-range`;
  const limitsId = `${fieldId}-limits`;

  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const displayedInputValue = isEditing ? inputValue : formatValue(value);

  const inputDigits = displayedInputValue.replace(/\D/g, "");
  const parsedInput = inputDigits ? Number(inputDigits) : null;
  const inputIsOutOfRange =
    parsedInput !== null &&
    (!Number.isFinite(parsedInput) || parsedInput < min || parsedInput > max);

  const handleRangeChange = (event) => {
    let nextValue = Number(event.target.value);

    if (Number.isNaN(nextValue)) return;

    if (nextValue < min) nextValue = min;
    if (nextValue > max) nextValue = max;

    onChange(nextValue);
  };

  const handleInputChange = (event) => {
    const digits = event.target.value.replace(/\D/g, "");

    if (!digits) {
      setInputValue("");
      return;
    }

    const nextValue = Number(digits);

    setInputValue(formatDigits(digits));

    if (
      Number.isSafeInteger(nextValue) &&
      nextValue >= min &&
      nextValue <= max
    ) {
      onChange(nextValue);
    }
  };

  const commitInput = (displayValue) => {
    const digits = displayValue.replace(/\D/g, "");

    if (!digits) return;

    const parsedValue = Number(digits);
    const finiteValue = Number.isFinite(parsedValue) ? parsedValue : max;
    const nextValue = Math.min(max, Math.max(min, finiteValue));

    onChange(nextValue);
  };

  const handleInputBlur = (event) => {
    commitInput(event.currentTarget.value);
    setIsEditing(false);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.blur();
    }
  };

  return (
    <div className={style.rangeGroup}>
      <div className={style.rangeHeader}>
        <label
          id={labelId}
          htmlFor={editable ? inputId : rangeId}
        >
          {label}
        </label>

        {editable ? (
          <div className={style.rangeEditor}>
            <input
              id={inputId}
              className={style.rangeValueInput}
              type="text"
              inputMode="numeric"
              autoComplete="off"
              value={displayedInputValue}
              onChange={handleInputChange}
              onFocus={(event) => {
                setInputValue(event.currentTarget.value);
                setIsEditing(true);
                event.currentTarget.select();
              }}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              aria-describedby={limitsId}
              aria-invalid={inputIsOutOfRange || undefined}
            />
            {suffix && (
              <span className={style.rangeSuffix} aria-hidden="true">
                {suffix}
              </span>
            )}
          </div>
        ) : (
          <strong className={style.rangeValue}>
            <span>{formatValue(value)}</span>
            {suffix && <span className={style.rangeSuffix}>{suffix}</span>}
          </strong>
        )}
      </div>

      <input
        id={rangeId}
        className={style.range}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleRangeChange}
        aria-labelledby={labelId}
        aria-describedby={limitsId}
        aria-valuetext={`${formatValue(value)} ${suffix}`.trim()}
      />

      <div id={limitsId} className={style.rangeLimits}>
        <span>
          {formatValue(min)} {suffix}
        </span>
        <span>
          {formatValue(max)} {suffix}
        </span>
      </div>
    </div>
  );
}
