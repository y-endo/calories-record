import * as React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import DefaultLayout from '~/scripts/layouts/Default';
import { Section, SubSection } from '~/scripts/elements/Section';
import { HeadingLv1 } from '~/scripts/elements/Heading';
import { Button } from '~/scripts/elements/Button';
import { Legend } from '~/scripts/elements/Text';
import UMargin from '~/scripts/utils/UMargin';
import FormInput from '~/scripts/components/common/FormInput';
import FormSelect from '~/scripts/components/common/FormSelect';

import { setUser } from '~/scripts/stores/user';
import { RootState, AppDispatch } from '~/scripts/stores';

type Props = RouteComponentProps;

const AccountRegisterPage: React.FC<Props> = ({ history }) => {
  // ユーザー情報が登録済なら /user へリダイレクト
  const userData = useSelector((state: RootState) => state.user.data);
  if (userData) return <Redirect to={'/user'} />;

  const inputAge = React.useRef<HTMLInputElement>(null);
  const selectSex = React.useRef<HTMLSelectElement>(null);
  const inputHeight = React.useRef<HTMLInputElement>(null);
  const inputWeight = React.useRef<HTMLInputElement>(null);
  const selectActiveLevel = React.useRef<HTMLSelectElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      inputAge.current?.value &&
      selectSex.current?.value &&
      inputHeight.current?.value &&
      inputWeight.current?.value &&
      selectActiveLevel.current?.value
    ) {
      const data = {
        age: inputAge.current.value,
        sex: selectSex.current.value,
        height: inputHeight.current.value,
        weight: inputWeight.current.value,
        activeLevel: selectActiveLevel.current.value
      };

      await fetch('/api/register-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      inputAge.current.value = '';
      selectSex.current.value = '';
      inputHeight.current.value = '';
      inputWeight.current.value = '';
      selectActiveLevel.current.value = '';

      alert('登録しました');
      dispatch(setUser());
      history.push('/user');
    }
  };

  return (
    <DefaultLayout>
      <Section>
        <HeadingLv1>ユーザー登録</HeadingLv1>
        <SubSection as={'form'} onSubmit={handleSubmit}>
          <fieldset>
            <Legend>あなたの情報</Legend>
            <div>
              <FormInput label={'年齢'} type={'tel'} placeholder={'20'} ref={inputAge} />
            </div>
            <div>
              <FormSelect
                label={'性別'}
                option={[
                  { text: '選択', hidden: true },
                  { value: 'male', text: '男性' },
                  { value: 'female', text: '女性' }
                ]}
                ref={selectSex}
              />
            </div>
            <div>
              <FormInput label={'身長（cm）'} type={'tel'} placeholder={'170'} ref={inputHeight} />
            </div>
            <div>
              <FormInput label={'体重（kg）'} type={'tel'} placeholder={'60'} ref={inputWeight} />
            </div>
            <div>
              <FormSelect
                label={'身体活動レベル'}
                option={[
                  { text: '選択', hidden: true },
                  { value: '1.5', text: '低い' },
                  { value: '1.75', text: '普通' },
                  { value: '2', text: '高い' }
                ]}
                ref={selectActiveLevel}
              />
            </div>
          </fieldset>
          <UMargin mt={40}>
            <Button color="primary">登録する</Button>
          </UMargin>
        </SubSection>
      </Section>
    </DefaultLayout>
  );
};

export default AccountRegisterPage;
