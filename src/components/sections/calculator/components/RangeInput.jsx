import style from "../calculator.module.scss";

export default function RangeInput({
  label,
  value,
  min,
  max,
  step = 1,
  suffix = "",
  onChange,
}) {
  const formatValue = (number) => {
    const [integer, fraction] = String(number).split(".");
    const groupedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return fraction ? `${groupedInteger},${fraction}` : groupedInteger;
  };

  const handleChange = (e) => {
    let nextValue = Number(e.target.value);

    if (Number.isNaN(nextValue)) return;

    if (nextValue < min) nextValue = min;
    if (nextValue > max) nextValue = max;

    onChange(nextValue);
  };

  return (
    <div className={style.rangeGroup}>
      <div className={style.rangeHeader}>
        <label>{label}</label>

        <strong className={style.rangeValue}>
          <span>{formatValue(value)}</span>
          {suffix && <span className={style.rangeSuffix}>{suffix}</span>}
        </strong>
      </div>

      <input
        className={style.range}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />

      <div className={style.rangeLimits}>
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
