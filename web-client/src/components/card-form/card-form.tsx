import { useActionState } from 'react';
import { FormField, Textarea, Button, Select } from '@/ui';
import { type CardDto, type CardStatus } from '@/features/cards/types';

type CardFormProps = {
  card?: Partial<Pick<CardDto, 'title' | 'description' | 'status'>>;
  onSubmit: (data: Omit<CardDto, 'board'>) => void;
};

const STATUS_OPTIONS: { value: CardStatus; label: string }[] = [
  { value: 'todo', label: 'To Do' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
];

const CardForm = ({ card, onSubmit }: CardFormProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, formAction] = useActionState<unknown, FormData>((_, formData: FormData) => {
    return onSubmit({
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      status: formData.get('status') as CardStatus,
    });
  }, {});

  return (
    <form action={formAction}>
      <FormField
        id="title"
        name="title"
        label="Title"
        placeholder="Enter a title here"
        defaultValue={card?.title || ''}
        required
      />
      <FormField label="Description">
        <Textarea
          full
          name="description"
          placeholder="Enter a description here"
          defaultValue={card?.description || ''}
        />
      </FormField>

      <FormField label="Status">
        <Select
          name="status"
          options={STATUS_OPTIONS}
          defaultValue={card?.status || 'todo'}
        />
      </FormField>

      <Button type="submit">Save</Button>
    </form>
  );
};

export { CardForm };
