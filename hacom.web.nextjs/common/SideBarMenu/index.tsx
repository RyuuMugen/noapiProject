"use client";
import { Grid, Menu, MenuDivider } from "@mantine/core";
import { IconChevronRight, IconSettings } from "@tabler/icons-react";

const SideBarMenu = () => {
  return (
    <div>
      <div>SideBarMenu</div>
      <Grid>
        <Menu shadow="md" width={200} position="right" trigger="hover">
          <Menu.Target>
            <Menu.Item
              style={{ background: "#1F67D2", color: "#FFFFFF" }}
              leftSection={
                <IconSettings
                  style={{ width: 21, height: 21 }}
                  color="#FFFFFF"
                />
              }
              rightSection={
                <IconChevronRight
                  style={{ width: 15, height: 15 }}
                  color="#FFFFFF"
                />
              }
            >
              Settings
              <MenuDivider />
            </Menu.Item>
          </Menu.Target>

          <Menu.Dropdown>
            <Grid.Col span={{ base: 12, xs: 9.8 }}>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item
                leftSection={<IconSettings style={{ width: 21, height: 21 }} />}
              >
                Settings
              </Menu.Item>
            </Grid.Col>
          </Menu.Dropdown>
        </Menu>
      </Grid>
    </div>
  );
};

export default SideBarMenu;
