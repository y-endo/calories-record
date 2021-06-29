import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import DefaultLayout from '~/shared/layouts/Default';
import { Section, SubSection } from '~/shared/components/Section';
import { HeadingLv1 } from '~/shared/components/Heading';
import { Button } from '~/shared/components/Button';

import { clearData } from '~/shared/stores/user';
import { AppDispatch } from '~/shared/stores';

import { RootState } from '~/shared/stores';

const UserPage: React.FC = () => {
  const userData = useSelector((state: RootState) => state.user.data);
  const dispatch = useDispatch<AppDispatch>();

  const deleteUser = React.useCallback(async () => {
    await fetch('/api/delete-user');
    dispatch(clearData());
    alert('削除しました');
  }, [dispatch]);

  const activeLevelText: { [key: string]: string } = {
    '1.5': '低い',
    '1.75': '普通',
    '2': '高い'
  };

  let view;
  if (userData === null) {
    view = (
      <SubSection>
        <p>ユーザー情報が登録されていません</p>
        <StyledLink to={'/user/register'} color={'primary'}>
          登録
        </StyledLink>
      </SubSection>
    );
  } else {
    view = (
      <SubSection>
        <p>基礎代謝: {userData.bmr} kcal</p>
        <p>年齢: {userData.age}</p>
        <p>性別: {userData.sex === 'male' ? '男性' : '女性'}</p>
        <p>身長: {userData.height} cm</p>
        <p>体重: {userData.weight} kg</p>
        <p>
          身体活動レベル: {userData.activeLevel}（{activeLevelText[String(userData.activeLevel)]}）
        </p>
        <p>1日に必要な推定エネルギー: {userData.requiredEnergy} kcal</p>
        <StyledLink to={'/user/update'} color="primary">
          ユーザー情報を更新する
        </StyledLink>
        <div>
          <Button onClick={deleteUser}>ユーザー情報を削除する</Button>
        </div>
      </SubSection>
    );
  }

  return (
    <DefaultLayout>
      <Section>
        <HeadingLv1>ユーザー情報</HeadingLv1>
        {view}
      </Section>
    </DefaultLayout>
  );
};

const StyledLink = Button.withComponent(Link);

export default UserPage;
