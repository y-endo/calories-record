import * as React from 'react';

import DefaultLayout from '~/shared/layouts/Default';
import { Margin } from '~/shared/utils/style';
import { Section, SubSection } from '~/shared/components/Section/style';
import { HeadingLv1 } from '~/shared/components/Heading/style';
import Legend from '~/shared/components/Legend';
import { Button } from '~/shared/components/Button/style';
import TextField from '~/shared/components/TextField';
import Select from '~/shared/components/Select';

const RegisterPage: React.FC = () => {
  const inputDate = React.useRef<HTMLInputElement>(null);
  const selectTime = React.useRef<HTMLSelectElement>(null);
  const inputCalorie = React.useRef<HTMLInputElement>(null);
  const inputCarbs = React.useRef<HTMLInputElement>(null);
  const inputProtein = React.useRef<HTMLInputElement>(null);
  const inputFat = React.useRef<HTMLInputElement>(null);
  const textareaFood = React.useRef<HTMLTextAreaElement>(null);
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = React.useCallback(() => {
    if (inputDate.current?.value && selectTime.current?.value && inputCalorie.current?.value) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputDate.current?.value && selectTime.current?.value && inputCalorie.current?.value) {
      const data = {
        date: inputDate.current.value,
        time: selectTime.current.value,
        calorie: inputCalorie.current.value,
        carbs: inputCarbs.current?.value,
        protein: inputProtein.current?.value,
        fat: inputFat.current?.value,
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
            <Legend required>日付・時間</Legend>
            <TextField id={'tf-date'} label={'日付'} type={'date'} handleChange={handleChange} ref={inputDate} />
            <Select
              id="sel-time"
              label={'時間'}
              option={[
                { text: '選択', hidden: true },
                { value: 'breakfast', text: '朝食' },
                { value: 'lunch', text: '昼食' },
                { value: 'dinner', text: '夕食' },
                { value: 'other', text: '間食' }
              ]}
              handleChange={handleChange}
              ref={selectTime}
            />
          </fieldset>
          <fieldset>
            <Legend required>摂取カロリー</Legend>
            <TextField
              id={'tf-calorie'}
              label={'カロリー（kcal）'}
              type={'tel'}
              placeholder={'100'}
              handleChange={handleChange}
              ref={inputCalorie}
            />
          </fieldset>
          <fieldset>
            <Legend>摂取栄養素</Legend>
            <TextField id={'tf-carbs'} label={'炭水化物（g）'} type={'tel'} placeholder={'100'} ref={inputCarbs} />
            <TextField
              id={'tf-protein'}
              label={'タンパク質（g）'}
              type={'tel'}
              placeholder={'100'}
              ref={inputProtein}
            />
            <TextField id={'tf-fat'} label={'脂質（g）'} type={'tel'} placeholder={'100'} ref={inputFat} />
          </fieldset>
          <fieldset>
            <Legend>食べたもの</Legend>
            <TextField id={'tf-food'} multiline={true} placeholder={'白米'} ref={textareaFood} />
          </fieldset>
          <Margin mt={40}>
            <Button color="primary" disabled={!isValid}>
              登録する
            </Button>
          </Margin>
        </SubSection>
      </Section>
    </DefaultLayout>
  );
};

export default RegisterPage;
