import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setUser } from '~/scripts/stores/user';
import { RootState, AppDispatch } from '~/scripts/stores';

const AppContainer: React.FC = ({ children }) => {
  const setUserStatus = useSelector((state: RootState) => state.user.setUserStatus);
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(setUser());
  }, [dispatch]);

  if (setUserStatus === '0') return null;
  // if (setUserStatus === '1') // エラー画面

  return <>{children}</>;
};

export default AppContainer;
