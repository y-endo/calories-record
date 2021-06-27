import * as React from 'react';
import { Link } from 'react-router-dom';

import { SubSection } from '~/scripts/elements/Section';
import { Button } from '~/scripts/elements/Button';

import IUser from '~/scripts/interfaces/IUser';

type Props = {
  userData: IUser | null;
  deleteUser: () => void;
};

const IndexView: React.FC<Props> = ({ userData, deleteUser }) => {
  const activeLevelText: { [key: string]: string } = {
    '1.5': '低い',
    '1.75': '普通',
    '2': '高い'
  };

  if (userData === null) {
    return (
      <SubSection>
        <p>ユーザー情報が登録されていません</p>
        <StyledLink to={'/user/register'} color={'primary'}>
          登録
        </StyledLink>
      </SubSection>
    );
  } else {
    return (
      <SubSection>
        <p>基礎代謝: {userData.bmr}kcal</p>
        <p>年齢: {userData.age}</p>
        <p>性別: {userData.sex === 'male' ? '男性' : '女性'}</p>
        <p>身長: {userData.height}cm</p>
        <p>体重: {userData.weight}kg</p>
        <p>
          身体活動レベル: {userData.activeLevel}（{activeLevelText[String(userData.activeLevel)]}）
        </p>
        <p>1日に必要な推定エネルギー: {userData.requiredEnergy} kcal</p>
        <StyledLink to={'/user/update'} color="secondary">
          ユーザー情報を更新する
        </StyledLink>
        <div>
          <Button onClick={deleteUser}>ユーザー情報を削除する</Button>
        </div>
      </SubSection>
    );
  }
};

const StyledLink = Button.withComponent(Link);

export default IndexView;
