import { Card, Col, Row, Typography } from 'antd'
import { AppstoreAddOutlined, FileTextOutlined, ProfileOutlined, RocketOutlined } from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography

const cards = [
  {
    title: '需求分析',
    description: '梳理背景、目标、流程、功能拆解和待确认事项。',
    icon: <ProfileOutlined />,
  },
  {
    title: 'PRD 撰写',
    description: '基于模板输出需求背景、目标、流程图、功能清单和系统改造。',
    icon: <FileTextOutlined />,
  },
  {
    title: '页面生成',
    description: '按业务模块新增菜单、路由、页面结构和 mock 数据。',
    icon: <AppstoreAddOutlined />,
  },
  {
    title: 'Demo 验证',
    description: '通过 Vite 本地服务验证后台页面的布局和交互。',
    icon: <RocketOutlined />,
  },
]

export default function Home() {
  return (
    <div style={{ padding: 24, overflow: 'auto' }}>
      <Card style={{ marginBottom: 16 }}>
        <Title level={3} style={{ marginTop: 0 }}>
          PM Agent 工具包
        </Title>
        <Paragraph style={{ marginBottom: 0, color: '#666' }}>
          当前 PC Demo 已清理为通用管理后台模板。新增业务页面时，从需求分析和 PRD 结果出发，按模块创建菜单、路由、页面和 mock 数据。
        </Paragraph>
      </Card>

      <Row gutter={[16, 16]}>
        {cards.map(card => (
          <Col xs={24} sm={12} xl={6} key={card.title}>
            <Card style={{ height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span style={{ color: '#FF6B00', fontSize: 24 }}>{card.icon}</span>
                <Text strong>{card.title}</Text>
              </div>
              <Paragraph style={{ marginBottom: 0, color: '#666' }}>
                {card.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
