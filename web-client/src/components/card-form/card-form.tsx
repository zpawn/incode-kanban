import { useActionState } from 'react';
import { FormField, Textarea, Button } from '@/ui';
import { type CardDto } from '@/features/cards/types';

type CardFormProps = {
  card?: Partial<Pick<CardDto, 'title' | 'description' | 'status'>>;
  onSubmit: (data: Omit<CardDto, 'board'>) => void;
};

const CardForm = ({ card, onSubmit }: CardFormProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, formAction] = useActionState<unknown, FormData>((_, formData: FormData) => {
    return onSubmit({
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      status: 'todo',
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

      <Button type="submit">Save</Button>
    </form>
  );
};

export { CardForm };
