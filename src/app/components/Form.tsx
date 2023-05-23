"use client";

const Form = ({value, onChange}: {value: number; onChange: (amount: number) => void}) => {
  return (
    <div className="w-full">
        <label className="block space-y-3 text-lg">
            <span>Monto en ARS</span>
            <input
                className="block w-full p-2 text-3xl text-right bg-gray-200 rounded-full"
                type="number"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
            />
        </label>
    </div>
  )
}
export default Form