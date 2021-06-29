import * as React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DefaultLayout from '~/shared/layouts/Default';

import { RootState } from '~/shared/stores';

type Props = RouteComponentProps;

const UserUpdatePage: React.FC<Props> = ({ history }) => {
  // ユーザー情報が未登録なら /user へリダイレクト
  const userData = useSelector((state: RootState) => state.user.data);
  if (userData === null) return <Redirect to={'/user'} />;

  return <DefaultLayout></DefaultLayout>;
};

export default UserUpdatePage;
