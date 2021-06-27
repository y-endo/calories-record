import * as React from 'react';

import DefaultLayout from '~/scripts/layouts/Default';
import Margin from '~/scripts/utils/UMargin';
import { Section, SubSection } from '~/scripts/elements/Section';
import { UButton } from '~/scripts/utils/UButton';
import { HeadingLv1 } from '~/scripts/elements/Heading';
import { Legend } from '~/scripts/elements/Text';
import FormInput from '~/scripts/components/common/FormInput';
import FormTextarea from '~/scripts/components/common/FormTextarea';
import FormSelect from '~/scripts/components/common/FormSelect';

const RegisterPage: React.FC = () => {
  const inputDate = React.useRef<HTMLInputElement>(null);
  const selectTime = React.useRef<HTMLSelectElement>(null);
  const inputCalorie = React.useRef<HTMLInputElement>(null);
  const inputProtein = React.useRef<HTMLInputElement>(null);
  const inputCarbs = React.useRef<HTMLInputElement>(null);
  const inputFat = React.useRef<HTMLInputElement>(null);
  const textareaFood = React.useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      inputDate.current?.value &&
      selectTime.current?.value &&
      inputCalorie.current?.value &&
      inputProtein.current?.value &&
      inputCarbs.current?.value &&
      inputFat.current?.value
    ) {
      const data = {
        date: inputDate.current.value,
        time: selectTime.current.value,
        calorie: inputCalorie.current.value,
        protein: inputProtein.current.value,
        carbs: inputCarbs.current.value,
        fat: inputFat.current.value,
        food: textareaFood.current?.value
      };
      console.log('登録データ:', data);

      const res = await fetch('/api/add-meal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      console.log('登録結果:', json);
    }
  };

  return (
    <DefaultLayout>
      <Section>
        <HeadingLv1>摂取カロリー入力画面</HeadingLv1>
        <SubSection as={'form'} onSubmit={handleSubmit}>
          <fieldset>
            <Legend>日付・時間</Legend>
            <FormInput label={'日付'} type={'date'} ref={inputDate} />
            <FormSelect
              label={'時間'}
              option={[
                { text: '選択', hidden: true },
                { value: 'breakfast', text: '朝食' },
                { value: 'lunch', text: '昼食' },
                { value: 'dinner', text: '夕食' },
                { value: 'other', text: '間食' }
              ]}
              ref={selectTime}
            />
          </fieldset>
          <fieldset>
            <Legend>摂取カロリー</Legend>
            <FormInput label={'カロリー（kcal）'} type={'tel'} placeholder={'100'} ref={inputCalorie} />
          </fieldset>
          <fieldset>
            <Legend>摂取栄養素</Legend>
            <FormInput label={'タンパク質（g）'} type={'tel'} placeholder={'100'} ref={inputProtein} />
            <FormInput label={'炭水化物（g）'} type={'tel'} placeholder={'100'} ref={inputCarbs} />
            <FormInput label={'脂質（g）'} type={'tel'} placeholder={'100'} ref={inputFat} />
          </fieldset>
          <fieldset>
            <Legend>食べたもの</Legend>
            <FormTextarea placeholder={'白米'} ref={textareaFood} />
          </fieldset>
          <Margin mt={40}>
            <UButton>登録する</UButton>
          </Margin>
        </SubSection>
      </Section>
    </DefaultLayout>
  );
};

export default RegisterPage;
