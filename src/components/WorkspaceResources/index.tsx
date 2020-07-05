import React from 'react'
import { Kubernetes } from '@styled-icons/simple-icons'
import { Server, Cubes, LayerGroup } from '@styled-icons/fa-solid'

import { Container, ListResources, Resource, Icon, Name } from './styles'

const WorkspaceResources: React.FC = () => {
  return (
    <Container>
      <ListResources>
        <Resource>
          <Icon>
            <Kubernetes />
          </Icon>
          <Name>Cluster</Name>
        </Resource>
        <Resource>
          <Icon>
            <Server />
          </Icon>
          <Name>Nodes</Name>
        </Resource>
        <Resource>
          <Icon>
            <Cubes />
          </Icon>
          <Name>Resources</Name>
        </Resource>
        <Resource>
          <Icon>
            <LayerGroup />
          </Icon>
          <Name>Namespaces</Name>
        </Resource>
      </ListResources>
    </Container>
  )
}

export default WorkspaceResources;
