import React from 'react';
import { Box, Diagram, Heading, Stack } from 'grommet';

import ContentBox from '../components/ContentBox';

const Node = ({ id, ...rest }) => (
  <Box
    id={id}
    basis="xxsmall"
    margin="small"
    pad="medium"
    round="small"
    background="accent-1"
    {...rest}
  />
);

const connection = (fromTarget, toTarget, { color, ...rest } = {}) => ({
  fromTarget,
  toTarget,
  anchor: "vertical",
  color: color || "accent-1",
  thickness: "xsmall",
  round: true,
  type: "rectilinear",
  ...rest
});

const Connections = ({ setRef }) => (
  <Box fill data-name="connections" ref={setRef}>
    <Heading level={2} style={{ marginTop: 0 }}>Connections</Heading>
    <ContentBox>
      <Stack>
        <Box>
          <Box direction="row">
            {[1, 2, 3].map(id => (
              <Node key={id} id={id} />
            ))}
          </Box>
          <Box direction="row">
            {[4, 5].map(id => (
              <Node key={id} id={id} background="accent-2" />
            ))}
          </Box>
          <Box direction="row">
            {[6, 7, 8, 9].map(id => (
              <Node key={id} id={id} background="accent-3" />
            ))}
          </Box>
        </Box>
        <Diagram
          connections={[
            connection("1", "5", { color: "white" }),
            connection("3", "5", { color: "white", anchor: "horizontal" }),
            connection("4", "7", { color: "white", anchor: "horizontal" }),
            connection("5", "9", { color: "white" }),
          ]}
        />
      </Stack>
    </ContentBox>
  </Box>
);

export default Connections;
