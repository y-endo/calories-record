import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import DefaultLayout from '~/shared/layouts/Default';
import { Section } from '~/shared/components/Section/style';
import { HeadingLv1 } from '~/shared/components/Heading/style';
import UserForm, { Values } from '../components/UserForm';

import { setUser } from '~/shared/stores/user';
import { RootState, AppDispatch } from '~/shared/stores';

const UserUpdatePage: React.FC = () => {
  // ユーザー情報が未登録なら /user へリダイレクト
  const userData = useSelector((state: RootState) => state.user.data);
  if (userData === null) return <Redirect to={'/user'} />;

  const dispatch = useDispatch<AppDispatch>();

  const values = {
    age: userData.age,
    sex: userData.sex,
    height: userData.height,
    weight: userData.weight,
    activeLevel: userData.activeLevel
  };

  const submit = React.useCallback(async (data: Values) => {
    await fetch('/api/update-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    alert('更新しました');
    dispatch(setUser());
  }, []);

  return (
    <DefaultLayout>
      <Section>
        <HeadingLv1>ユーザー更新</HeadingLv1>
        <UserForm values={values} submit={submit} />
      </Section>
    </DefaultLayout>
  );
};

export default UserUpdatePage;
