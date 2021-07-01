import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button } from '~/shared/components/Button/style';

export const BackButton = Button.withComponent(Link);
