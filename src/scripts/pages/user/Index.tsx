import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DefaultLayout from '~/scripts/layouts/Default';
import IndexView from '~/scripts/components/user/IndexView';
import { Section } from '~/scripts/components/common/Section';
import { HeadingLv1 } from '~/scripts/components/common/Heading';

import { clearData } from '~/scripts/stores/user';
import { AppDispatch } from '~/scripts/stores';

import { RootState } from '~/scripts/stores';

const AccountPage: React.FC = () => {
  const userData = useSelector((state: RootState) => state.user.data);
  const dispatch = useDispatch<AppDispatch>();

  const deleteUser = React.useCallback(async () => {
    await fetch('/api/delete-user');
    dispatch(clearData());
    alert('削除しました');
  }, [dispatch]);

  return (
    <DefaultLayout>
      <Section>
        <HeadingLv1>ユーザー情報</HeadingLv1>
        <IndexView userData={userData} deleteUser={deleteUser} />
      </Section>
    </DefaultLayout>
  );
};

export default AccountPage;
