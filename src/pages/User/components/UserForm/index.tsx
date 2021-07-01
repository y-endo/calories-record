import * as React from 'react';

import { SubSection } from '~/shared/components/Section/style';
import { Legend } from '~/shared/components/Legend/style';
import TextField from '~/shared/components/TextField';
import Select from '~/shared/components/Select';
import { Button } from '~/shared/components/Button/style';
import { Margin } from '~/shared/utils/style';
import { BackButton } from './style';

import IUser from '~/shared/interfaces/IUser';

export type Values = Omit<IUser, 'bmr' | 'requiredEnergy'>;

type Props = {
  values?: Values;
  submit: (values: Values) => void;
};

const UserForm: React.FC<Props> = ({ values, submit }) => {
  const inputAge = React.useRef<HTMLInputElement>(null);
  const selectSex = React.useRef<HTMLSelectElement>(null);
  const inputHeight = React.useRef<HTMLInputElement>(null);
  const inputWeight = React.useRef<HTMLInputElement>(null);
  const selectActiveLevel = React.useRef<HTMLSelectElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      inputAge.current?.value &&
      selectSex.current?.value &&
      inputHeight.current?.value &&
      inputWeight.current?.value &&
      selectActiveLevel.current?.value
    ) {
      const data: Values = {
        age: parseInt(inputAge.current.value, 10),
        sex: selectSex.current.value,
        height: parseFloat(inputHeight.current.value),
        weight: parseFloat(inputWeight.current.value),
        activeLevel: parseFloat(selectActiveLevel.current.value) as 1.5 | 1.75 | 2
      };

      submit(data);
    }
  };

  return (
    <SubSection as={'form'} onSubmit={handleSubmit}>
      <fieldset>
        <Legend>あなたの情報</Legend>
        <div>
          <TextField
            id={'tf-age'}
            label={'年齢'}
            type={'tel'}
            placeholder={'20'}
            defaultValue={values && values.age}
            ref={inputAge}
          />
        </div>
        <div>
          <Select
            id={'sel-sex'}
            label={'性別'}
            option={[
              { text: '選択', hidden: true },
              { value: 'male', text: '男性' },
              { value: 'female', text: '女性' }
            ]}
            defaultValue={values && values.sex}
            ref={selectSex}
          />
        </div>
        <div>
          <TextField
            id={'tf-height'}
            label={'身長（cm）'}
            type={'tel'}
            placeholder={'170'}
            defaultValue={values && values.height}
            ref={inputHeight}
          />
        </div>
        <div>
          <TextField
            id={'tf-weight'}
            label={'体重（kg）'}
            type={'tel'}
            placeholder={'60'}
            defaultValue={values && values.weight}
            ref={inputWeight}
          />
        </div>
        <div>
          <Select
            id={'sel-activeLevel'}
            label={'身体活動レベル'}
            option={[
              { text: '選択', hidden: true },
              { value: '1.5', text: '低い' },
              { value: '1.75', text: '普通' },
              { value: '2', text: '高い' }
            ]}
            defaultValue={values && String(values.activeLevel)}
            ref={selectActiveLevel}
          />
        </div>
      </fieldset>
      <Margin mt={40}>
        <Button color="primary">{values ? '更新する' : '登録する'}</Button>
      </Margin>
      <BackButton to={'/user'}>戻る</BackButton>
    </SubSection>
  );
};

export default UserForm;
