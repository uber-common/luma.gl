// This is the top-level "Layout" component that doesn't get unmounted between
// page loads. This component is wrapped around the react component returned by
// each page by 'gatsby-plugin-layout'

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import {graphql} from 'gatsby';

// import { StaticQuery, graphql } from 'gatsby'

import '../../../styles/main.scss'

import SEO from '../common/SEO'
import Header from './header'
// import Footer from './footer';
import TableOfContents from './table-of-contents'

import { ContextProviderComponent, ContextConsumerComponent } from "./persistent-layout-context"

export { ContextConsumerComponent } from './persistent-layout-context';

export const query = graphql`
  fragment SiteInformation on Site {
    siteMetadata {
      config {
        siteTitle,
        siteLogo,
        siteDescription,
        PROJECT_NAME,
        PROJECT_TYPE,
        HOME_HEADING,
        HOME_BULLETS {
          text
          desc
          img
        }
      }
    }
  }
`;

// const IndexHeadContainer = styled.div`
//   background: ${props => props.theme.brand};
//   padding: ${props => props.theme.sitePadding};
//   text-align: center;
// `

const BodyGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 75px 1fr;
  grid-template-columns: 300px 1fr;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: inherit;
  }
`

const HeaderContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  z-index: 2;
  @media screen and (max-width: 600px) {
    order: 1;
  }
`

const BodyContainerFull = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;

  .contributors {
    max-width: 400px;
    margin: 100px auto 0;
  }
`
const BodyContainerToC = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  overflow: scroll;
  justify-self: center;
  width: 100%;
  padding: ${props => props.theme.sitePadding};
  @media screen and (max-width: 600px) {
    order: 2;
  }

  & > div {
    max-width: ${props => props.theme.contentWidthLaptop};
    margin: auto;
  }

  & > h1 {
    color: ${props => props.theme.accentDark};
  }
`

const ToCContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background: ${props => props.theme.lightGrey};
  overflow: scroll;
  @media screen and (max-width: 600px) {
    order: 3;
    overflow: inherit;
  }
`

export default class Layout extends React.Component {
  renderBodyWithTOC(config, tableOfContents) {
    const {children} = this.props;

    return (
      <BodyGrid>
        <HeaderContainer>
          <Header config={config} />
        </HeaderContainer>

        { tableOfContents && (
          <ToCContainer>
            <TableOfContents chapters={tableOfContents.chapters} />
          </ToCContainer>
        )}

        <BodyContainerToC>
          { children }
        </BodyContainerToC>

        { /* <Footer /> */ }

      </BodyGrid>
    );
  }

  renderBodyFull(config) {
    const {children} = this.props;

    return (
      <div>
        <HeaderContainer>
          <Header config={config} />
        </HeaderContainer>

        <BodyContainerFull>
          { children }
        </BodyContainerFull>

        { /* <Footer /> */ }

      </div>
    );
  }

  render() {
    const {pageContext} = this.props;

    // TODO - use StaticQuery
    // const config = getSiteConfig();
    // const {DOCS: tableOfContents} = config;

    return (
      <ContextProviderComponent>
        <ContextConsumerComponent>
          {context => {
            // TODO - use StaticQuery to directly query for common data here in this file,
            // instead of using this crazy react context to forward data from children.
            const {config, tableOfContents, allSEOMarkdown} = context.data;
            debugger
            return (
              <div>
                <Helmet>
                  <title>{config.siteTitle}</title>
                </Helmet>
                { allSEOMarkdown && <SEO postEdges={allSEOMarkdown} /> }
                { pageContext.toc ?
                    this.renderBodyWithTOC(config, tableOfContents) :
                    this.renderBodyFull(config)
                }
              </div>
            )
          }}
        </ContextConsumerComponent>
      </ContextProviderComponent>
    )
  }
}

// TODO/ib - If we can get this to work, we can query for all common data here
// and leave path/slug-dependent queries to the pages
// Unfortunately, currently this static query just hangs...
/*
export default props => (
  <StaticQuery query={graphql`
query StaticQuery {
  site {
    siteMetadata {
      config {
        PROJECT_TYPE
      }
    }
  }
}
`}
    render={data => {
      return <Layout data={data} />;
    }}
  />
);
*/
