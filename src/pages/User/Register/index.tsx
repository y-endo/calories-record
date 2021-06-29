import * as React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import DefaultLayout from '~/shared/layouts/Default';
import { Section } from '~/shared/components/Section/style';
import { HeadingLv1 } from '~/shared/components/Heading/style';
import UserForm, { Values } from '../components/UserForm';

import { setUser } from '~/shared/stores/user';
import { RootState, AppDispatch } from '~/shared/stores';

type Props = RouteComponentProps;

const UserRegisterPage: React.FC<Props> = ({ history }) => {
  // ユーザー情報が登録済なら /user へリダイレクト
  const userData = useSelector((state: RootState) => state.user.data);
  if (userData) return <Redirect to={'/user'} />;

  const dispatch = useDispatch<AppDispatch>();

  const submit = React.useCallback(async (data: Values) => {
    await fetch('/api/register-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    alert('登録しました');
    dispatch(setUser());
    history.push('/user');
  }, []);

  return (
    <DefaultLayout>
      <Section>
        <HeadingLv1>ユーザー登録</HeadingLv1>
        <UserForm submit={submit} />
      </Section>
    </DefaultLayout>
  );
};

export default UserRegisterPage;
