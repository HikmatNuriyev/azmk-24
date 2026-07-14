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

        <div className={style.valueBox}>
          <input
            type="number"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={handleChange}
          />

          <span>{suffix}</span>
        </div>
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
        <span>{min} {suffix}</span>
        <span>{max} {suffix}</span>
      </div>
    </div>
  );
}