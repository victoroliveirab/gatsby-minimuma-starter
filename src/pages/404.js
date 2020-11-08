import React from 'react';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import { Emoji, Layout } from '../components';
import { Link } from 'gatsby';

export default () => {
  const { pathname } = useLocation();
  return (
    <Layout>
      <NotFound>
        <Title>
          This page does not exist <Emoji symbol="😢" description="Sad face" />
        </Title>
        <SubTitle>
          You tried to reach <Route>{pathname}</Route> but this route does not
          currently exist.
        </SubTitle>
        <div>
          <Emoji symbol="👈" description="Pointing left finger" />{' '}
          <Link to="/">Go back to home</Link>
        </div>
      </NotFound>
    </Layout>
  );
};

const NotFound = styled.main`
  min-height: 100vh;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 25px;
  & > * + * {
    margin-top: 25px;
  }
`;

const Title = styled.h1`
  text-align: center;
  @media only screen and (max-width: 720px) {
    font-size: 3.125rem;
  }
`;

const SubTitle = styled.h4`
  text-align: center;
`;

const Route = styled.span`
  background: ${({ theme }) => theme.bodyInverse};
  color: ${({ theme }) => theme.main};
  padding: 4px 6px;
  font-size: 1.6rem;
  font-weight: 400;
`;
