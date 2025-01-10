// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import Input from '@/ui/atoms/Input.tsx';

const FormField = (field: unknown) => (
  <div className="my-3">
    <label className="text-black capitalize" htmlFor={field.name}>{field.name}</label>
    <Input
      className="h-[30px]"
      value={field.state.value}
      name={field.name}
      onChange={(e) => field.handleChange(e.target.value)}
      onBlur={field.handleBlur}
    />
  </div>
);

export default FormField;