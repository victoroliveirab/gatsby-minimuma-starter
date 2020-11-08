import React from 'react';
import styled from 'styled-components';
import { ExternalLink, Layout, SEO } from '../components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

export default () => {
  const theme = React.useContext(ThemeManagerContext);
  return (
    <Layout>
      <SEO title="Home" />
      <Home>
        <Title>Minimuma Starter Project</Title>
        <SubTitle>Included Plugins and Libraries</SubTitle>
        <Button onClick={() => theme.toggleDark()}>{`Change to ${
          theme.isDark ? 'light' : 'dark'
        } mode`}</Button>
        <List>
          <ListItem>
            <ListItemTitle>
              <ExternalLink to="https://www.gatsbyjs.com/plugins/gatsby-image/">
                gatsby-image
              </ExternalLink>{' '}
              +{' '}
              <ExternalLink to="https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/">
                gatsby-plugin-sharp
              </ExternalLink>{' '}
              +{' '}
              <ExternalLink to="https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/">
                gatsby-transformer-sharp
              </ExternalLink>
            </ListItemTitle>
            <ListItemDescription>
              Bundle of helpers to handle images within a Gatsby application.
              Gatsby-image provides lazy-loading, gatsby-plugin-sharp exposes
              several image processing functions built on the Sharp image
              processing library, and gatsby-transformer-sharp creates an
              ImageSharp node that provides fields in their GraphQL types.
            </ListItemDescription>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <ExternalLink to="https://www.gatsbyjs.com/plugins/gatsby-plugin-prefetch-google-fonts/">
                gatsby-plugin-prefetch-google-fonts
              </ExternalLink>
            </ListItemTitle>
            <ListItemDescription>
              A Gatsby plugin to download and prefetch Google Fonts.
            </ListItemDescription>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <ExternalLink to="https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/">
                gatsby-plugin-react-helmet
              </ExternalLink>{' '}
              +{' '}
              <ExternalLink to="https://github.com/nfl/react-helmet">
                react-helmet
              </ExternalLink>
            </ListItemTitle>
            <ListItemDescription>
              React Helmet is a component which lets you control your document
              head using their React component. The gatsby plugin provides
              drop-in support for React Helmet within Gatsby.
            </ListItemDescription>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <ExternalLink to="https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/">
                gatsby-plugin-styled-components
              </ExternalLink>{' '}
              +{' '}
              <ExternalLink to="https://styled-components.com/">
                styled-components
              </ExternalLink>{' '}
              +{' '}
              <ExternalLink to="https://github.com/styled-components/babel-plugin-styled-components">
                babel-plugin-styled-components
              </ExternalLink>
            </ListItemTitle>
            <ListItemDescription>
              Bundle of styled-components packages to use with Gatsby.
              Gatsby-plugin-styled-components adds support to SSR with
              styled-components and the babel-plugin-styled-components minifies
              styles and provides a nicer debugging experience.
            </ListItemDescription>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <ExternalLink to="https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/">
                gatsby-source-filesystem
              </ExternalLink>
            </ListItemTitle>
            <ListItemDescription>
              A Gatsby source plugin for sourcing data into your Gatsby
              application from your local filesystem.
            </ListItemDescription>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <ExternalLink to="https://www.gatsbyjs.com/plugins/gatsby-styled-components-dark-mode/">
                gatsby-styled-components-dark-mode
              </ExternalLink>
            </ListItemTitle>
            <ListItemDescription>
              A Gatsby plugin that handles injecting a dark and light theme, as
              well as functionality for toggling between them. It also persists
              the state of your users’ dark options in their browsers.
            </ListItemDescription>
          </ListItem>
        </List>
      </Home>
    </Layout>
  );
};
const Home = styled.main`
  min-height: 100vh;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  word-break: break-word;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.main};
  margin-bottom: 25px;
  text-transform: uppercase;
  font-weight: 700;
`;

const List = styled.ul`
  margin: 0 auto;
  max-width: 720px;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ListItemTitle = styled.h6`
  font-weight: 500;
  margin-bottom: 5px;
`;

const ListItemDescription = styled.p`
  margin-left: 50px;
  position: relative;
  &::before {
    content: '👉';
    position: absolute;
    top: 0;
    left: -25px;
    transform: translateX(-50%);
  }
`;
