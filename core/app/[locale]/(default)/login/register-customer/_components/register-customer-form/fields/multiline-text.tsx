import { useTranslations } from 'next-intl';
import { ChangeEvent } from 'react';

import { Field, FieldControl, FieldLabel, FieldMessage, TextArea } from '~/components/ui/form';

import { CustomerFields } from '..';

type MultilineTextType = Extract<
  NonNullable<CustomerFields>[number],
  { __typename: 'MultilineTextFormField' }
>;

interface MultilineTextProps {
  field: MultilineTextType;
  name: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  isValid?: boolean;
  defaultValue?: string;
}

export const MultilineText = ({
  defaultValue,
  field,
  isValid,
  name,
  onChange,
}: MultilineTextProps) => {
  const t = useTranslations('Account.Register.validationMessages');

  return (
    <Field className="relative space-y-2" name={name}>
      <FieldLabel
        className="font-semibold"
        htmlFor={`field-${field.entityId}`}
        isRequired={field.isRequired}
      >
        {field.label}
      </FieldLabel>
      <FieldControl asChild>
        <TextArea
          className="h-auto min-h-12"
          defaultValue={defaultValue || field.defaultText || undefined}
          error={isValid === false}
          id={`field-${field.entityId}`}
          onChange={onChange}
          onInvalid={onChange}
          required={field.isRequired}
          rows={field.rows}
        />
      </FieldControl>
      <div className="relative h-7">
        {field.isRequired && (
          <FieldMessage
            className="inline-flex w-full text-xs font-normal text-error-secondary"
            match="valueMissing"
          >
            {t('empty')}
          </FieldMessage>
        )}
      </div>
    </Field>
  );
};