import React, { Component } from 'react'

import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
  grid-template-columns: [topsplash-start lowercontent-start] auto [avatar] auto auto [lowercontent-end topsplash-end];
  justify-content: space-between;
  grid-template-rows: [topsplash-start] ${props => props.theme.Code.avatarGridTop} [avatar] ${props => props.theme.Code.avatarGridBottom} [lowercontent-start] ;
  height: 1000px;
`

const Contents = styled.div`
  margin-top: ${props => props.theme.Blog.marginTop}
`

export default class Code extends Component {
  render() {
    return (
      <Layout>
        <Contents>
          Contact
        </Contents>
      </Layout>
    )
  }
}
