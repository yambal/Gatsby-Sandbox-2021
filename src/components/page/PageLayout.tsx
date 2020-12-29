import * as React from 'react'
import styled, { th } from "@xstyled/styled-components"
import { Navbar } from '../atoms/Navbar/Navbar'
import { useSiteMetadata } from '../../app/SiteMetadataProvider'
import { Link, PageProps } from 'gatsby'

/**
 * スタイリング
 **/
const Wrapper = styled.divBox`
  ${/*sc-selector*/Navbar} {
    background-color: ${th.color('navbarBg')};
    color: ${th.color('navbarFg')};

    a {
      color: ${th.color('navbarFg')};

      &:hover {
        color: ${th.color('navbarHFg')};
        text-decoration: none;
      }
    }

    .page__navbar__brand {
      display: inline-block;
      padding-top: .3125rem;
      padding-bottom: .3125rem;
      margin-right: 1rem;
      font-size: 1.25rem;
      line-height: inherit;
      white-space: nowrap;
      color: ${th.color('navbarHFg')};
      
      &:hover {
        text-decoration: none;
      }
    }
  }
`

/**
 * メニュー
 **/
const NavMenuLink = styled(Link)``
const NabMenu = styled.divBox`
  margin-right: auto!important;

  ${/*sc-selector*/NavMenuLink} {
    &.active {
      color: ${th.color('navbarHFg')};
    }
  }
`

export type tMenu = {
  label: string
  url: string
}

type PageLayputProps = {
  children?: React.ReactNode | React.ReactNodeArray
  brand?: React.ReactElement
  menus?: tMenu[]
  location?: PageProps['location']
}

export function PageLayout({ children, brand, menus, location }: PageLayputProps) {
  const siteMetadata = useSiteMetadata()

  /** メニューノードを返す */
  const Menu = React.useMemo(
    () => {
      const defMenu: tMenu[] = [{label: 'ホーム', url: '/'}]
      const mMenu = menus ? defMenu.concat(menus) : defMenu
      return(
        <NabMenu>
          {mMenu.map((one, index) => {
            // 一応Activeをやってるが、もうちょい工夫がいる
            const isActive = location?.pathname === one.url
            console.log(isActive)
            return(
              <NavMenuLink to={one.url} key={`menu-${index}`} className={isActive ? 'active' : ''}>{one.label}</NavMenuLink>
            )
          })}
        </NabMenu>
      )
    },
    [menus, location?.pathname]
  )

  return(
    <Wrapper>
      <Navbar>
        {brand
          ? brand
          : siteMetadata && <Link to='/' className="page__navbar__brand">{siteMetadata.title}</Link>}
        {Menu}
      </Navbar>
      { children }
    </Wrapper>
  )
}