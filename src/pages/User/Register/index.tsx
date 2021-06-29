import * as React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import DefaultLayout from '~/shared/layouts/Default';
import { Section, SubSection } from '~/shared/components/Section/style';
import { HeadingLv1 } from '~/shared/components/Heading/style';
import { Button } from '~/shared/components/Button/style';
import { Legend } from '~/shared/components/Legend/style';
import { Margin } from '~/shared/utils/style';
import TextField from '~/shared/components/TextField';
import Select from '~/shared/components/Select';

import { setUser } from '~/shared/stores/user';
import { RootState, AppDispatch } from '~/shared/stores';

type Props = RouteComponentProps;

const UserRegisterPage: React.FC<Props> = ({ history }) => {
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
              <TextField label={'年齢'} type={'tel'} placeholder={'20'} ref={inputAge} />
            </div>
            <div>
              <Select
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
              <TextField label={'身長（cm）'} type={'tel'} placeholder={'170'} ref={inputHeight} />
            </div>
            <div>
              <TextField label={'体重（kg）'} type={'tel'} placeholder={'60'} ref={inputWeight} />
            </div>
            <div>
              <Select
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
          <Margin mt={40}>
            <Button color="primary">登録する</Button>
          </Margin>
        </SubSection>
      </Section>
    </DefaultLayout>
  );
};

export default UserRegisterPage;
