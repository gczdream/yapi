import './Footer.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd';
import { Icon } from 'antd'
import packageJson from '../../../package.json';
class Footer extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    footList: PropTypes.array
  }
  render () {
    return (
      <div className="footer-wrapper">
        <Row className="footer-container">
          {this.props.footList.map(function(item,i){
            return <FootItem key={ i } linkList={ item.linkList } title={ item.title } iconType={ item.iconType } ></FootItem>
          })}
        </Row>
      </div>
    )
  }
}

class FootItem extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    linkList: PropTypes.array,
    title: PropTypes.string,
    iconType: PropTypes.string
  }
  render () {
    return (
      <Col span={6}>
        <h4 className="title">{this.props.iconType ? <Icon type={ this.props.iconType } className="icon" /> : ''}{this.props.title}</h4>
        { this.props.linkList.map(function(item,i){
          return (<p key={i}><a href={ item.itemLink } className="link">{ item.itemTitle }</a></p>);
        }) }
      </Col>
    );
  }
}

Footer.defaultProps = {
  footList: [
    {
      title: 'GitHub',
      iconType: 'github',
      linkList: [
        {
          itemTitle: 'YApi 源码仓库',
          itemLink: 'https://github.com/YMFE/yapi'
        }
      ]

    },
    {
      title: '相关站点',
      iconType: 'link',
      linkList: [
        {
          itemTitle: 'YApi',
          itemLink: 'https://github.com/YMFE/yapi'
        },
        {
          itemTitle: 'YMFE',
          itemLink: 'http://ued.qunar.com/ymfe/about'
        },
        {
          itemTitle: 'UED',
          itemLink: 'http://ued.qunar.com/'
        },{
          itemTitle: '去哪儿网',
          itemLink: 'http://www.qunar.com/'
        }
      ]

    },
    {
      title: '反馈',
      iconType: 'aliwangwang-o',
      linkList: [
        {
          itemTitle: 'qq群：644642474',
          itemLink: 'javascript:'
        }
      ]
    },
    {
      title: 'Copyright © 2017 YApi',
      linkList: [
        {
          itemTitle: '版本： '+packageJson.version,
          itemLink: 'javascript:'
        }
      ]
    }
  ]
}

export default Footer
