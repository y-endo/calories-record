import * as React from 'react';

import DefaultLayout from '~/scripts/layouts/Default';
import Margin from '~/scripts/utils/Margin';
import { Section, SubSection } from '~/scripts/elements/Section';
import { Button } from '~/scripts/elements/Button';
import { HeadingLv1 } from '~/scripts/elements/Heading';
import { Text } from '~/scripts/elements/Text';
import FormInput from '~/scripts/components/FormInput';
import FormTextarea from '~/scripts/components/FormTextarea';
import FormSelect from '~/scripts/components/FormSelect';

const RegisterPage: React.FC = () => {
  const inputDate = React.useRef<HTMLInputElement>(null);
  const selectTime = React.useRef<HTMLSelectElement>(null);
  const inputCalorie = React.useRef<HTMLInputElement>(null);
  const inputProtein = React.useRef<HTMLInputElement>(null);
  const inputCarbo = React.useRef<HTMLInputElement>(null);
  const inputLipid = React.useRef<HTMLInputElement>(null);
  const textareaFood = React.useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      inputDate.current?.value &&
      selectTime.current?.value &&
      inputCalorie.current?.value &&
      inputProtein.current?.value &&
      inputCarbo.current?.value &&
      inputLipid.current?.value
    ) {
      const data = {
        date: inputDate.current.value,
        time: selectTime.current.value,
        calorie: inputCalorie.current.value,
        protein: inputProtein.current.value,
        carbo: inputCarbo.current.value,
        lipid: inputLipid.current.value,
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
            <Text as="legend" fs={18} fw={'bold'}>
              日付・時間
            </Text>
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
            <Text as="legend" fs={18} fw={'bold'}>
              摂取カロリー
            </Text>
            <FormInput label={'カロリー（kcal）'} type={'tel'} placeholder={'100'} ref={inputCalorie} />
          </fieldset>
          <fieldset>
            <Text as="legend" fs={18} fw={'bold'}>
              摂取栄養素
            </Text>
            <FormInput label={'タンパク質（g）'} type={'tel'} placeholder={'100'} ref={inputProtein} />
            <FormInput label={'炭水化物（g）'} type={'tel'} placeholder={'100'} ref={inputCarbo} />
            <FormInput label={'脂質（g）'} type={'tel'} placeholder={'100'} ref={inputLipid} />
          </fieldset>
          <fieldset>
            <Text as="legend" fs={18} fw={'bold'}>
              食べたもの
            </Text>
            <FormTextarea placeholder={'白米'} ref={textareaFood} />
          </fieldset>
          <Margin mt={40}>
            <Button>登録する</Button>
          </Margin>
        </SubSection>
      </Section>
    </DefaultLayout>
  );
};

export default RegisterPage;
